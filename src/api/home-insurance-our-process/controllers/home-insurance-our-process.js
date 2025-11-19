'use strict';

/**
 * home-insurance-our-process controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::home-insurance-our-process.home-insurance-our-process', ({strapi}) => ({
    
  async find(ctx) {

        const data = await strapi.entityService.findMany('api::home-insurance-our-process.home-insurance-our-process', {
            sort: 'createdAt:desc',
            limit: 1, 
            populate: { 
                claim_services: {
                    populate: ['icon']
                },
                our_process: {
                    populate: ['icon']
                },
                image: true
            } 
        })

        // Return the first item directly, or null if no data exists
        return data && data.length > 0 ? {data: data[0]} : null; 
    }

}));