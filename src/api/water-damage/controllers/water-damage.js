'use strict';

/**
 * water-damage controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::water-damage.water-damage', ({strapi}) => ({
    async find(ctx) {

        const data = await strapi.entityService.findMany('api::water-damage.water-damage', {
            sort: 'createdAt:desc',
            limit: 1,
            populate: {
                main_image: true,  
                instructions: {
                populate:{
                    icon: true,
                    
                },
            },
            card_image: true,
            suggetions: true 
        }
        })

        // Return the first item directly, or null if no data exists 
        return data && data.length > 0 ?  {data:data[0] } : null;
    }
}));
