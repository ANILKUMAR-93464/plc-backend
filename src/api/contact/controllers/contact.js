'use strict';

/**
 * contact controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact.contact', ({ strapi }) => ({

    async create(ctx) {

        let { name, email, subject, message } = ctx.request.body;

        const contact = await strapi.entityService.create('api::contact.contact', {
            data: {
                name: name,
                email: email,
                subject: subject,
                message: message
            }
        });

        return { data: contact };
    
    },

    async find(ctx) {

        const { page = 1, pageSize = 10 } = ctx.query;

        const pageNum = Number(page);
        const pageSizeNum = Number(pageSize);

        const data = await strapi.entityService.findMany('api::contact.contact', {
            sort: 'createdAt:desc',
            limit: pageSizeNum,
            start: (pageNum - 1) * pageSizeNum,
        })

        const total = await strapi.entityService.count('api::contact.contact', { filters: {} });

        return {
            data,
            meta: {
                pagination: {
                    page: pageNum,
                    pageSize: pageSizeNum,
                    pageCount: Math.ceil(total / pageSizeNum),
                    total,
                },
            },
        }
    }
}));