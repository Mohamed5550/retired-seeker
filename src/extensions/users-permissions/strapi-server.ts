module.exports = (plugin) => {
    plugin.controllers.user.updateMe = async(ctx) => {
        if(!ctx.state.user || !ctx.state.user.id) {
            return ctx.response.status = 401;
        }

        await strapi.query("plugin::users-permissions.user").update({
            where: {
                id: ctx.state.user.id
            },
            data: ctx.request.body
        }).then((res) => {
            ctx.response.status = 200;
        })
    }

    plugin.controllers.user.getSavedJobs = async(ctx) => {
        if(!ctx.state.user || !ctx.state.user.id) {
            return ctx.response.status = 401;
        }

        const query = ctx.query.query;

        const filters = [];
        filters.push(
            {
                saved_jobs_users: {
                    id: ctx.state.user.id
                }
            }
        );

        if(query) {
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
        }

        const savedJobs = await strapi.query("api::job.job").findMany({
            filters: {
                $and: filters
            },
        });
        return savedJobs;
    }

    plugin.controllers.user.searchEmployees = async(ctx) => {
        const query = ctx.query.query;
        const education= ctx.query.education;
        const location = ctx.query.location;
        const filters = [];
        filters.push(
            {
                user_type: "employee"
            },
        );
        if(query) {
            filters.push({
                $or: [
                    {
                        first_name: {
                            $containsi: query
                        }
                    },
                    {
                        last_name: {
                            $containsi: query
                        }
                    },
                    {
                        job_title: {
                            $containsi: query
                        }
                    }
                ]
            });
        }
        if(education) {
            filters.push(
                {
                    education_degree: {
                        $eqi: education
                    } 
                }
            );
        }
        
        if(location) {
            filters.push(
                {
                    country: location
                }
            );
        }
        var start = 1;
        var limit = 10;

        if(ctx.query.pagination?.pageSize) {
            limit = ctx.query.pagination.pageSize;
        }
        
        if(ctx.query.pagination?.page) {
            start = ctx.query.pagination.page;
        }

        start --;
        start *= limit;

        const users = await strapi.documents("plugin::users-permissions.user").findMany({
            filters: {
                $and : filters
            },
            populate: {
                photo: true,
                experiences: true
            },
            limit: limit,
            start: start
        });
        return users;
    }

    plugin.routes["content-api"].routes.push({
        method: "PUT",
        path: "/user/me",
        handler: "user.updateMe",
        config: {
            prefix: "",
            policies: []
        }
    });

    plugin.routes["content-api"].routes.push({
        method: "GET",
        path: "/user/saved_jobs",
        handler: "user.getSavedJobs",
        config: {
            prefix: "",
            policies: []
        }
    });
    
    plugin.routes["content-api"].routes.push({
        method: "GET",
        path: "/user/search_employees",
        handler: "user.searchEmployees",
        config: {
            prefix: "",
            policies: []
        }
    });

    return plugin;
}