const Listing = require("../models/listing");
const ExpressError = require("../utils/ExpressError.js");   


module.exports.index = async (req,res)=>{
    const allListings = await Listing.find();
    res.render("./listings/index.ejs",{allListings});
};

module.exports.renderNewForm = (req,res)=>{
    res.render("listings/new.ejs");

};

module.exports.showListing = async (req,res)=>{
    let {id} = req.params;
    id = id.trim();
    const listing = await Listing.findById(id).populate({path :"reviews", populate : {path : "author"}}).populate("owner");
    if(!listing){
        req.flash("error", "Listing not found!");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs",{listing});

}

module.exports.createListing = async (req,res,next)=>{
    if(!req.body.listing){
        throw new ExpressError(400,"Send valid data for listing")
    }
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id; // Set the owner to the currently logged-in user
    if(!newListing.title){
        throw new ExpressError(400,"Title is missing");
    }
    if(!newListing.description){
        throw new ExpressError(400,"description is missing");
        if(!newListing.location){
            throw new ExpressError(400,"location is missing");
        }
    }
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");

    }

module.exports.updateListing = async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing not found!");
         res.redirect("/listings");
    }
    res.render("listings/edit.ejs", {listing});

}

module.exports.editListing = async (req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing})
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
}

module.exports.deleteListing = async(req, res) => {
    let {id} = req.params;

    // Find the listing to get the review IDs.
    // We don't need to populate the reviews here, as the array of ObjectIds is sufficient.
    let listing = await Listing.findById(id);

    // If the listing exists and has reviews, delete them.
    if(listing && listing.reviews.length > 0){
        // Mongoose correctly handles the array of ObjectIds.
        await Review.deleteMany({_id: {$in: listing.reviews}});
    }

    // Now, delete the listing itself.
    await Listing.findByIdAndDelete(id);

    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
}