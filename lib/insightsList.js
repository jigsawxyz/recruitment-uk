const rp = require('request-promise');

class InsightsList {
  constructor(){
    this.data = null
  }

  getData(){
    var transactions = {
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

  orderByCategory(data){
    var result = {}

    data.map((x)=>{

      var category = x['category']

      if(result[category]){
        result[category]["totalNumber"] +=1;
        result[category]["totalValue"] += x['amount'];
        result[category]['averageValue'] =  (result[category]['totalValue'] /  result[category]['totalNumber'] );
      } else{
  
       let obj = {
          "totalNumber" : 1,
          'totalValue' : x["amount"],
          'averageValue' : x["amount"]
        }
        result[category] = obj;
        console.log(JSON.stringify(result))
      }  
    })
    return JSON.stringify(result);
  }
}

module.exports = InsightsList
