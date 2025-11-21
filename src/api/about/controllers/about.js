'use strict';

/**
 * about controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::about.about', ({strapi}) => ({
    async find(ctx) {

        const data = await strapi.entityService.findMany('api::about.about', {
            sort: 'createdAt:desc',
            limit: 1,
            populate: {
                main_image: true,
                built_on_integrity:true,
                most_adjusters: true,
                drives_us: true,
                core_values: true,
                profiles: {
                populate: ['image']
            },
            image: true,
            frequently_asked:true
            
        }
        })

        // Return the first item directly, or null if no data exists 
        return data && data.length > 0 ?  {data:data[0] } : null;
    }
}));


