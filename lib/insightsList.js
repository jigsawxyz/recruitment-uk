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
    return rp(transactions)
     .then(function (transactions) {
       return transactions;
     })
     .catch(function (err) {
       'API call failed'
    });
  }

  makeObject(x){
    let obj = {
      "totalNumber" : 1,
      'totalValue' : x["amount"],
      'averageValue' : x["amount"]
    }
    return obj;
  }

 checkAgainstResult(result, category, x){
  if(result[category]){
    result[category]["totalNumber"] +=1;
    result[category]["totalValue"] += x['amount'];
    result[category]['averageValue'] =  (result[category]['totalValue'] /  result[category]['totalNumber'] );
  } else{
    result[category] = this.makeObject(x);
  }
 }

 orderByDate(data){
   var result = {}
   data.map((x)=> {
     var date = new Date(x['paymentDate'])
     date = date.toLocaleDateString();
     this.checkAgainstResult(result, date, x)
   })
   return JSON.stringify(result);
 }

  orderByCategory(data){
    var result = {}
    data.map((x)=>{
      var category = x['category']
      this.checkAgainstResult(result, category, x)

    })
    return JSON.stringify(result);
  }
}

module.exports = InsightsList
