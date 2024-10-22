module.exports = ({ env }) => ({
    "users-permissions": {
      config: {
        register: {
          // put the name of your added fields here
          allowedFields: ["first_name", "last_name", "job_title", "company_name", "user_type"],
        },
      },
    }
});