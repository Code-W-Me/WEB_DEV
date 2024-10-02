const Joi = require('joi');
const reviews = require('./models/reviews');
const listingSchema = Joi.object({
    listing :Joi.object({
        title : Joi.string().required(),
        description: Joi.string().required(),
        location :Joi.string().required(),
        country: Joi.string().required(),
        price :Joi.string().required(),

    
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().min(1).max(5).required(),
        comments : Joi.string().required(),
    }).required()
})