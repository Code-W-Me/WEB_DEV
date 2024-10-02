const mongoose = require("mongoose");
const reviews = require("./reviews");
const Schema = mongoose.Schema;
const Review = require("./reviews.js")

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://server.ekostay.com/public/property_images/66a4c20928427_AnyConv.webp",
        set: (v) => {
            
            if (typeof v === "object" && v !== null && v.url) {
                return v.url; 
            }
            return v === "" ? "https://server.ekostay.com/public/property_images/66a4c20928427_AnyConv.webp" : v;
        },
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ]
});

listingSchema.post("findOneAndDelete", async (listing)=>{
    if (listing){
        await Review.deleteMany({_id: { $in: listingSchema}})
    }
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
