const Listing = require("../models/listing");
const { GeocodingApi, Configuration } = require("@stadiamaps/api");
const config = new Configuration({ apiKey: process.env.STADIA_API_KEY });
const geocodingClient = new GeocodingApi(config);


//  Index: Show all listings
module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
};

//  Render to Show the form to create a new listing
module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

//  Show_Listing: Show details of a specific listing
module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    

    id = id.trim(); 

    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            },
        })
        .populate("owner");
    
    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }
    
    res.render("listings/show.ejs", { listing });
};
//  Create Listing: Handle the creation of a new listing
module.exports.createListing = async (req, res, next) => {
    const location = req.body.listing.location;
    console.log("Location:", req.body.listing.location); // Debugging line to check the location value

    const response = await geocodingClient.searchV2({ text: req.body.listing.location });
    // console.log("Geocoding Response:", response.features[0]);


    const newListing = new Listing(req.body.listing);

    newListing.geometry = response.features[0].geometry;
    
    let url = req.file.path;
    let filename = req.file.filename;
    
    
    newListing.owner = req.user._id;
    newListing.image = { url, filename };

    let savedListing = await newListing.save();
    // console.log(savedListing);
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

// Render Edit Form: Show the form to edit an existing listing
module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
};

//  Update Listing: Handle the update of an existing listing
module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    // This block handles the image update
    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }
    
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

// Delete Listing: Handle the deletion of a listing
module.exports.deleteListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id); // The Mongoose middleware will handle deleting reviews
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};