export default ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: env('DATABASE_FILENAME', './data/strapi.sqlite'),
    },
    useNullAsDefault: true,
  },
});