'use strict';

/**
 * home-bottom-section controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::home-bottom-section.home-bottom-section', ({strapi}) => ({



  async find(ctx) {

        const data = await strapi.entityService.findMany('api::home-bottom-section.home-bottom-section', {
            sort: 'createdAt:desc',
            limit: 1, 
            populate: { 
                
                work_details: {
                    populate: ['image']
                },
                testimonials: {
                    populate: ['image']
                },
                image: true,
                who_we_are: true,
                our_mission: true,
                our_work: true,
                clients_section: true,
                blogs_section: true
            } 
        })

        // Return the first item directly, or null if no data exists
        return data && data.length > 0 ? {data: data[0]} : null; 
    }


}));
