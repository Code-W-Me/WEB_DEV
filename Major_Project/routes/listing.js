const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing");
const Review = require("../models/reviews.js");
const {isLogedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listing.js");




//Index Route
router.get("/", wrapAsync(listingController.index));


//new Route
router.get("/new",isLogedIn, listingController.renderNewForm);


//show routes
router.get("/:id", wrapAsync(listingController.showListing));


//create routes
router.post("/", wrapAsync(listingController.createListing));


//edit route
router.get("/:id/edit",isLogedIn, isOwner, wrapAsync(listingController.updateListing));


// update route
router.put("/:id", isLogedIn,isOwner, wrapAsync(listingController.editListing));


//delete route
router.delete("/:id", isLogedIn, isOwner, wrapAsync(listingController.deleteListing));
module.exports = router;