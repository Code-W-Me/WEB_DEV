const Joi = require('joi');

const listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        // FIX: Changed to number and set a minimum value
        price: Joi.number().required().min(0),
        // Added image validation to allow for optional updates
        image: Joi.object({
            url: Joi.string().allow("", null),
            filename: Joi.string().allow("", null)
        }).optional()
    }).required()
});

const reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        // Changed to 'comment' for consistency
        comment: Joi.string().required(),
    }).required()
});

// FIX: Export both schemas
module.exports = { listingSchema, reviewSchema };