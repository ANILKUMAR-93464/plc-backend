module.exports = ({ env }) => ({
  host: env('HOST', '1192.168.0.17'),
  port: env.int('PORT', 1337),
  url: env('URL', 'http://192.168.0.17:1337'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
