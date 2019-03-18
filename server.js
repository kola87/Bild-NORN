let express = require('express');
let App = express(); 

App.use(express.static('public'));
App.listen(3333, function(){
    console.log('Listening on 3333...');
});