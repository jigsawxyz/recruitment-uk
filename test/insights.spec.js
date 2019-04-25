const chai = require('chai');
const {expect} = require('chai');
const rp = require('request-promise');
const InsightsList = require('../lib/insightsList')
const dummyData = require('../lib/transactionsData')
chai.should();

async function request(path) {
  return rp({
    url: `https://transactions.spokedev.xyz/transactions'`,
    method: 'GET',
    json: true,
  });
}

describe('InsightsList', () => {
  describe('obtaining data from external API', () => {
    var insightsList;
    before(()=>{
      insightsList = new InsightsList();
    })

    it('should have a data property on construction', () => {
      expect(insightsList.data).to.be.null;
    });

    xit('should contain a method that sets data from get, and set as this.data',()=>{
       expect(insightsList.getData()).toBe(true)
       expect(insightsList.data).to.be(true)
    });

    xit('should return data from the api call', async ()=>{
      const result  = await insightsList.getData();
      result.statusCode.should.equal(200)
    })
  });

  describe('#orderByCategory',()=>{
    it('will take an list of objects then order them by category', ()=>{

    })
  })
});
