/**
 * certificate controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::certificate.certificate', ({ strapi }) =>  ({
    async create(ctx) {
        const {id} = ctx.state.user;
    
        const response = await super.create(ctx);
        const updatedResponse = await strapi.entityService.update('api::certificate.certificate', response.data.id, {
            data: {
                user: id
            }
        })
        return updatedResponse;
    },
    
    async my(ctx) {
        const { id } = ctx.state.user;
        const response = await strapi.documents('api::certificate.certificate').findMany({
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
