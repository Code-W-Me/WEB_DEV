const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing");
const Review = require("../models/reviews.js");
const {isLogedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


//Index Route and //create routes combines
router.route("/")
.get( wrapAsync(listingController.index))
.post( isLogedIn, upload.single('listing[image]'), wrapAsync(listingController.createListing));



//new Route
router.get("/new",isLogedIn, listingController.renderNewForm);

// for /:id routes  //show routes  edit route and delete route are combined
router.route("/:id")
.get( wrapAsync(listingController.showListing))
.put( isLogedIn,isOwner, wrapAsync(listingController.editListing))
.delete( isLogedIn, isOwner, wrapAsync(listingController.deleteListing));





router.get("/:id/edit",isLogedIn, isOwner, wrapAsync(listingController.updateListing));






module.exports = router;