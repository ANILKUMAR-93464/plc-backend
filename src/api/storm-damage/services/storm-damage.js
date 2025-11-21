'use strict';

/**
 * storm-damage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::storm-damage.storm-damage');
