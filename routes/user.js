const express = require('express');
const router = express.Router();
const {getAdmin, getCertificate, getSelectTemplate, getCreateTemplate} = require('../controller/user');
const {getTest, postTest} = require('../controller/user');


router.get('/test', getTest);
router.post('/test', postTest);

router.get('/', getAdmin);

router.get('/web', getCertificate);


// Select Your Template Get Here

router.get('/select-your-portfolio-template',getSelectTemplate);

// First template get
router.get('/create-portfolio-website-temp1',getCreateTemplate);


module.exports = router;