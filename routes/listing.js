const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLogedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer  = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage: storage });


router.route("/")
    // GET Index
    .get(wrapAsync(listingController.index))
    // POST Create
    .post(
        isLogedIn,
        upload.single('listing[image]'),
        validateListing,
        wrapAsync(listingController.createListing)
    );


router.get("/new", isLogedIn, listingController.renderNewForm);

router.route("/:id")
    // GET Show
    .get(wrapAsync(listingController.showListing))
    // PUT Update
    .put(
        isLogedIn,
        isOwner,
        upload.single('listing[image]'),
        validateListing,
        wrapAsync(listingController.updateListing)
    )
    // DELETE Destroy
    .delete(isLogedIn, isOwner, wrapAsync(listingController.deleteListing));

// Render the Edit Form
router.get("/:id/edit",
    isLogedIn,
    isOwner,
    wrapAsync(listingController.renderEditForm)
);

module.exports = router;