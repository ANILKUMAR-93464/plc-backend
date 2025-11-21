'use strict';

/**
 * storm-damage controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::storm-damage.storm-damage', ({strapi}) => ({
    

    async find(ctx) {

        const data = await strapi.entityService.findMany('api::storm-damage.storm-damage', {
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
