
const user = process.env.MONGO_DBUSER;
const pass = process.env.MONGO_DB_PASS;

module.exports = {
  db: `mongodb://${user}:${pass}@ds117469.mlab.com:17469/ivorpad-sendgrid-redux`,
};
