module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4de7355a078cf67474ea70f035b980f1'),
  },
});
