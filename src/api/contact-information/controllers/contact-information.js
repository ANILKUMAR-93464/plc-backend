'use strict';

/**
 * contact-information controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact-information.contact-information',({ strapi }) => ({

    async find(ctx) {

        const data = await strapi.entityService.findMany('api::contact-information.contact-information', {
            sort: 'createdAt:desc',
            limit: 1,
        })

        // Return the first item directly, or null if no data exists
        return data && data.length > 0 ?  {data:data[0] } : null;
    } 
}));