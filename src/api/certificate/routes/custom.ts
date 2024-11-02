export default {
    routes: [
        {
            method: "GET",
            path: "/certificates/my",
            handler: 'certificate.my',
            config: {
                prefix: "",
                policies: []
            }
        }
    ]
}