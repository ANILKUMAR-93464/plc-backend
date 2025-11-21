'use strict';

/**
 * water-damage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::water-damage.water-damage');
