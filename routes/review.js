const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/reviews.js");
const Listing = require("../models/listing");
const {isLogedIn, validateReview, isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/review.js");





// post review routes
router.post("/",isLogedIn , validateReview, wrapAsync(reviewController.createReview));

// Delete Review Route
router.delete("/:reviewId", isLogedIn,isReviewAuthor,
    wrapAsync(reviewController.deleteReview)
);

module.exports = router;