/**
 * skill controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::skill.skill', ({ strapi }) =>  ({
    async create(ctx) {
        const {id} = ctx.state.user;
    
        const response = await super.create(ctx);
        const updatedResponse = await strapi.db.query('api::skill.skill').update({
            where: { id: response.data.id },
            data: {
                user: id
            }
        })
        return updatedResponse;
    },
    
    async my(ctx) {
        const { id } = ctx.state.user;
        const response = await strapi.documents('api::skill.skill').findMany({
            filters: {
                user: {
                    id: id
                }
            },
            limit: 10,
            start: 0
        })
    
        return response;
    }
}));
