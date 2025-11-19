'use strict';

/**
 * home-hero-section controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::home-hero-section.home-hero-section', ({strapi}) => ({
    
  async find(ctx) {

        const data = await strapi.entityService.findMany('api::home-hero-section.home-hero-section', {
            sort: 'createdAt:desc',
            limit: 1, 
            populate: ['image']
        })

        // Return the first item directly, or null if no data exists
        return data && data.length > 0 ?  {data:data[0] } : null;
    }

}));
