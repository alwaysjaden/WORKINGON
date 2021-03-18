const buildMe = require('../service/constructor.js');
const request = require("request");


module.export ={

  index: function (req, res) {
    res.render('search/search', {
      layout: 'main-searchContacts',
      investor: []
    })
  },
  
  search: function (req, res) {
  
    const apiParam = JSON.stringify(req.query.queryText);  
    const showMe = buildMe("peter");
    
    request(showMe, function(error, response, body) {
      console.error('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      const investor = [];
      
      for (var i = 0; i<body.results.length; i++) {
        investor.push(body.results[i].properties)  
      }
  
      // need to make investor an array of objects
      res.render('search/search', {
        layout: 'main-searchContacts', 
        investor: investor
      }) 
      
    })
    
  
  }



}
