export default {
    routes: [
        {
            method: "GET",
            path: "/certificate/my",
            handler: 'certificate.my',
            config: {
                prefix: "",
                policies: []
            }
        }
    ]
}