const rp = require('request-promise');

class InsightsList {
  constructor(){
    this.data = null
  }

  getData(){
    var options = {
       uri: 'https://transactions.spokedev.xyz/transactions',
       json: true
      };
    rp(options)
     .then(function (transactions) {
       this.data = transactions;
     })
     .catch(function (err) {
       'API call failed'
    });
  }
}
module.exports = InsightsList
