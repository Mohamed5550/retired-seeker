module.exports = ({ env }) => ({
    "users-permissions": {
      config: {
        register: {
          // put the name of your added fields here
          allowedFields: [
            "first_name",
            "last_name",
            "job_title",
            "company_name",
            "user_type",
            "phone_number",
            "alternative_phone_number",
            "cover_image",
            "photo",
            "country",
            "city",
            "industry",
            "about_company",
            "website_url",
            "faceook_url",
            "twitter_url",
            "instagram_url",
            "linkedin_url"
          ],
        },
      },
    },
    security: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'http://localhost:3000'],  // Allow connections from localhost:3000
          'img-src': ["'self'", 'data:', 'blob:'],
          'media-src': ["'self'", 'data:', 'blob:'],
          'default-src': ["'self'"],
        },
      },
    },
});