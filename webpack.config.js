const config = {
 entry: `${__dirname}/client/src/app.js`,
 output: {
   path: `${__dirname}/client/public/js`,
   filename: 'bundle.js'
 },
 mode: 'development'
};

module.exports = config;
