const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path  = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");
<<<<<<< HEAD
const session  =  require("express-session");
const cookie = require("express-session/session/cookie.js");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
=======



>>>>>>> 4cb6e13493d12959ac1639b560468b3ac3a4703c



const MONGO_URL = "mongodb://127.0.0.1:27017/House_W_Home";

main().then(()=>{
    console.log("connected to DB");
}).catch(err=>{
    console.log(err);
});
 async function  main() {
    await mongoose.connect(MONGO_URL);
 }


 app.set("view engine","ejs");
 app.set("views",path.join(__dirname,"views"));
 app.use(express.urlencoded({extended:true}));
 app.use(methodOverride("_method"));
 app.engine("ejs",ejsMate);
 app.use(express.static(path.join(__dirname, "/public")));

<<<<<<< HEAD
 const sessionOptions = {
    secret : "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true, 
    },
 };

 app.get("/",(req,res) =>{
=======

app.get("/",(req,res) =>{
>>>>>>> 4cb6e13493d12959ac1639b560468b3ac3a4703c
    res.send("Hi! I am root");
});


<<<<<<< HEAD
app.use(session(sessionOptions)); 
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

app.get("/demouser", async (req,res) =>{
    let fakeUser = new User({
        email: "customer123@gmail.com",
        username: "allen-wake"
    });
    
    let registerdUser =  await User.register(fakeUser,"welcome");
    res.send(registerdUser);
})



=======
>>>>>>> 4cb6e13493d12959ac1639b560468b3ac3a4703c
// from this line of we are handling all listings from routes directory
app.use("/listings",listings);

// from this line of we are handling all listings reviews from routes directory
app.use("/listings/:id/reviews",reviews);




app.all("*",(req,res,next) => {
    next(new ExpressError(404, "Page Not Found"));
});
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    
    res.status(statusCode).render("error.ejs",{message});
    
    // res.status(statusCode).send(message);
});

app.listen(8080,()=>{
    console.log("Server is listening on port 8080");
});

