const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema} = require("../schema.js");
const Listing = require("../models/listing");





<<<<<<< HEAD
=======

>>>>>>> 4cb6e13493d12959ac1639b560468b3ac3a4703c
const validateListing = (req,res,next)=>{
    let {error} = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map(el => el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else {
        next();
    }
};






//Index Route
router.get("/", wrapAsync(async (req,res)=>{
    const allListings = await Listing.find();
    res.render("./listings/index.ejs",{allListings});
}));
//new Route
router.get("/new",(req,res)=>{
    res.render("listings/new.ejs");
});
//show routes
router.get("/:id", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    id = id.trim();
    const listing = await Listing.findById(id).populate("reviews");
<<<<<<< HEAD
    if(!listing) {
        req.flash("error","Requested listing does not exist! ");
        res.redirect("/listings");
    }
=======
>>>>>>> 4cb6e13493d12959ac1639b560468b3ac3a4703c
    res.render("listings/show.ejs",{listing});

}));

//create routes

router.post("/", wrapAsync(async (req,res,next)=>{
    if(!req.body.listing){
        throw new ExpressError(400,"Send valid data for listing")
    }
    const newListing = new Listing(req.body.listing);
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
<<<<<<< HEAD
    req.flash("success", "New Listing Created!");
=======
>>>>>>> 4cb6e13493d12959ac1639b560468b3ac3a4703c
    res.redirect("/listings");
    })
        
);
//edit route
router.get("/:id/edit", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
<<<<<<< HEAD
    if(!listing) {
        req.flash("error","Requested listing does not exist! ");
        res.redirect("/listings");
    } 
=======
>>>>>>> 4cb6e13493d12959ac1639b560468b3ac3a4703c
    res.render("listings/edit.ejs", {listing});

}));
// update route
router.put("/:id", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing})
<<<<<<< HEAD
    req.flash("success", "Listing Updated!");
=======
>>>>>>> 4cb6e13493d12959ac1639b560468b3ac3a4703c
    res.redirect(`/listings/${id}`);
}));
//delete route
router.delete("/:id", wrapAsync(async(req,res)=>{
    let {id} = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);
<<<<<<< HEAD
    req.flash("success", "Listing Deleted!");
=======
>>>>>>> 4cb6e13493d12959ac1639b560468b3ac3a4703c
    res.redirect("/listings");
}));
module.exports = router;