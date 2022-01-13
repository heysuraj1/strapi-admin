'use strict';

/**
 * front-data service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::front-data.front-data');
