export default {
    routes: [
        {
            method: "GET",
            path: "/schools/my",
            handler: 'school.my',
            config: {
                prefix: "",
                policies: []
            }
        }
    ]
}