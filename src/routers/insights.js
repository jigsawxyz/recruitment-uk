const express = require('express');
const router = express.Router();
const insightsList = require('../../lib/insightsList')
const dummyData = require('../../lib/transactionsData')

router.get('/categories', async (req, res, next) => {
  try {
    let list = new insightsList();

    res.send(list.orderByCategory(dummyData))

  } catch (err) {
    return next(err);
  }
});

router.get('/cashflow', async (req, res, next) => {
  try {
    let list = new insightsList();
    res.send(list.orderByDate(dummyData))
  } catch (err) {
    return next(err);
  }
});

router.get('/merchants', async (req, res, next) => {
  try {
    res.status(501).json({ message: 'Not Implemented' });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
