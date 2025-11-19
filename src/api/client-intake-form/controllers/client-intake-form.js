'use strict';

/**
 * client-intake-form controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::client-intake-form.client-intake-form',({ strapi }) => ({

    async create(ctx) {

        let { full_name, email, phone, property_address, type_of_damage, insurance_comapany, policy_number, details_of_damage } = ctx.request.body;

        const client_intake = await strapi.entityService.create('api::client-intake-form.client-intake-form', {
            data: {
                full_name: full_name,
                email: email,
                phone: phone,
                property_address: property_address,
                type_of_damage: type_of_damage,
                insurance_comapany: insurance_comapany,
                policy_number: policy_number,
                details_of_damage: details_of_damage
            }
        });

        return { data: client_intake };
    
    },

    async find(ctx) {

        const { page = 1, pageSize = 10 } = ctx.query;

        const pageNum = Number(page);
        const pageSizeNum = Number(pageSize);

        const data = await strapi.entityService.findMany('api::client-intake-form.client-intake-form', {
            sort: 'createdAt:desc',
            limit: pageSizeNum,
            start: (pageNum - 1) * pageSizeNum,
        })

        const total = await strapi.entityService.count('api::client-intake-form.client-intake-form', { filters: {} });

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