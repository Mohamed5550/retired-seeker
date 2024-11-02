export default {
    routes: [
        {
            method: "GET",
            path: "/experiences/my",
            handler: 'experience.my',
            config: {
                prefix: "",
                policies: []
            }
        }
    ]
}