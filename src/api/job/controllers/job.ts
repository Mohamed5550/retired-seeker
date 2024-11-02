/**
 * job controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::job.job', ({ strapi }) =>  ({

    async create(ctx) {
        const {id} = ctx.state.user;
    
        const response = await super.create(ctx);
        const updatedResponse = await strapi.entityService.update('api::job.job', response.data.id, {
            data: {
                user: id,
                created_by_user: id
            }
        })
        return updatedResponse;
    },
    
    async my(ctx) {
        const { id } = ctx.state.user;
        const response = await strapi.documents('api::job.job').findMany({
            filters: {
                user: {
                    id: id
                }
            },
            limit: 10,
            start: 0
        })
    
        return response;
    },

    async save(ctx) {
        const {id} = ctx.state.user;

        const job_id = ctx.query.job_id as string;
    
        const updatedResponse = await strapi.documents('api::job.job').update({
            documentId: job_id,
            data: {
                saved_jobs_users: {
                    connect: [id]
                }
            }
        })
        return updatedResponse;
    },

    async unsave(ctx) {
        const {id} = ctx.state.user;

        const job_id = ctx.query.job_id as string;
    
        const updatedResponse = await strapi.documents('api::job.job').update({
            documentId: job_id,
            data: {
                saved_jobs_users: {
                    disconnect: [id]
                }
            }
        })
        return updatedResponse;
    },

    async search(ctx) {
        const query = ctx.query.query as string;
        const response = await strapi.documents('api::job.job').findMany({
            filters: {
                $or: [
                    {
                        job_title: {
                            $contains: query
                        }
                    },
                    {
                        job_description: {
                            $contains: query
                        }
                    },
                    {
                        job_requirements: {
                            $contains: query
                        }
                    },
                    {
                        skills: {
                            $contains: query
                        }
                    },
                    {
                        keywords: {
                            $contains: query
                        },
                    }
                ]
            },
            limit: 10,
            start: 0
        })
    
        return response;
    },
    
  })

);