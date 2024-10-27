module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: "http://localhost:3000",  // Explicitly allow localhost for development
      headers: "*",
      methods: "*",
    },
  },
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: false,
      cors: false
    }
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
