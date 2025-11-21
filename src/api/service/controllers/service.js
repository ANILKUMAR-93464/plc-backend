'use strict';

/**
 * service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::service.service', ({strapi}) => ({
    async find(ctx) {

        const data = await strapi.entityService.findMany('api::service.service', {
            sort: 'createdAt:desc',
            limit: 1,
            populate: {
                main_image: true,  
                services: {
                populate:{
                    highlights: true,
                    image: true
                }
            }, 
        }
        })

        // Return the first item directly, or null if no data exists 
        return data && data.length > 0 ?  {data:data[0] } : null;
    }   
}));
