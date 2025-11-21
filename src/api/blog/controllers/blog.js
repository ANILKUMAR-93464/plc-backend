'use strict';

/**
 * blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog.blog', ({strapi}) => ({
     
    async find(ctx) {

        const data = await strapi.entityService.findMany('api::blog.blog', {
            sort: 'createdAt:desc',
            populate: { 
                image: true,
            } 
        })

       const formattedRelatedBlogs = data.map((blog) => ({
        ...blog,
        date: blog.date
          ? new Date(blog.date).toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })
          : null,
      }));
        // Return the first item directly, or null if no data exists
        return {data :formattedRelatedBlogs} ; 
    },
  

}));
