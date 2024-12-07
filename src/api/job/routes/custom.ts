export default {
    routes: [
        {
            method: "GET",
            path: "/jobs/my",
            handler: 'job.my',
            config: {
                prefix: "",
                policies: []
            }
        },
        {
            method: "POST",
            path: "/jobs/save",
            handler: 'job.save',
            config: {
                prefix: "",
                policies: []
            }
        },
        {
            method: "POST",
            path: "/jobs/unsave",
            handler: 'job.unsave',
            config: {
                prefix: "",
                policies: []
            }
        },
        {
            method: "GET",
            path: "/jobs/search",
            handler: 'job.search',
            config: {
                auth: false,
                prefix: "",
                policies: []
            }
        }
    ]
}