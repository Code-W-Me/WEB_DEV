const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/user.js");
const user = require("../models/user.js");
router.get("/signup", userController.renderSignup);
// Route to handle user SIGNUP

// It creates a new user and logs them in immediately after registration
// If registration fails, it redirects to /signup with an error message
// If successful, it redirects to /listings with a success message
router.post("/signup", wrapAsync(userController.signup));

// Route to render the login page
router.get("/login",userController.renderlogin);


//Used To LOGIN the USER
// If authentication fails, it redirects to /login with a flash message
// If authentication succeeds, it redirects to the original URL or /listings
// The saveRedirectUrl middleware is used to store the original URL before redirecting to the login page
router.post("/login", saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), userController.login);
// Used to LOGOUT the user
// It clears the session and redirects to /listings with a success message
router.get("/logout", userController.logout);


module.exports = router;