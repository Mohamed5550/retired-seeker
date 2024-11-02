export default {
    routes: [
        {
            method: "GET",
            path: "/skills/my",
            handler: 'skill.my',
            config: {
                prefix: "",
                policies: []
            }
        }
    ]
}