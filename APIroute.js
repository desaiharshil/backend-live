module.exports = (app) => {

    const apiroute = require('./APIcontroller.js');

   app.get('/dataget',apiroute.dataget);
   app.post('/insert',apiroute.insert);
}