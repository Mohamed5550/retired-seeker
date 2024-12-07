/**
 * job controller
 */

import { factories } from '@strapi/strapi'
import { isNumber } from 'util';

export default factories.createCoreController('api::job.job', ({ strapi }) =>  ({

    async create(ctx) {
        const id = ctx.state.user.id.toString();
    
        const response = await super.create(ctx);
        const updatedResponse = await strapi.db.query('api::job.job').update({
            where: { id: response.data.id },
            data: {
                user: id,
                created_by_user: id
            },
        });
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
        const jobType = ctx.query.job_type;
        const workPlace = ctx.query.work_place;
        const industryId = ctx.query.industry_id;
        const experienceFrom = ctx.query.experience_from as number;
        const experienceTo = ctx.query.experience_to as number;

        let filters = [];

        if(jobType) {
            filters.push({
                job_type: jobType
            });
        }
        if(workPlace) {
            filters.push({
                work_place: workPlace
            })
        }

        if(industryId) {
            filters.push({
                industry: {
                    id: industryId
                }
            })
        }

        if(experienceFrom && !isNaN(experienceFrom)) {
            filters.push({
                max_experience_years: {
                    $gte: experienceFrom
                }
            })
        }

        if(experienceTo && !isNaN(experienceTo)) {
            filters.push({
                min_experience_years: {
                    $lte: experienceTo
                }
            })
        }
        
        filters.push(
            {
                $or: [
                    {
                        job_title: {
                            $containsi: query
                        }
                    },
                    {
                        job_description: {
                            $containsi: query
                        }
                    },
                    {
                        job_requirements: {
                            $containsi: query
                        }
                    },
                    {
                        skills: {
                            $containsi: query
                        }
                    },
                    {
                        keywords: {
                            $containsi: query
                        },
                    }
                ]
            }
        );
        var start = 1;
        var limit = 10;

        const pagination = ctx.query.pagination as { pageSize?: number; page?: number };

        if(pagination?.pageSize) {
            limit = pagination.pageSize;
        }
        
        if(pagination?.page) {
            start = pagination.page;
        }

        start --;
        start *= limit;

        const response = await strapi.documents('api::job.job').findMany({
            filters: {
                $and: filters
            },
            limit: limit,
            start: start
        })
    
        return response;
    },
    
  })

);
