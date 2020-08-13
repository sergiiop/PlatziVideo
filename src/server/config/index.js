require('dotenv').config();

const config = {
  env: process.env.ENV !== 'production',
  port: process.env.PORT,
};

module.exports = { config };
