const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended: false});
const fs = require('fs');
const jsonParser = bodyParser.json();
const fileName = 'BMI.json';
let bmi = 0;
var comment;

// Load data from file
let rawData = fs.readFileSync(fileName);
let data = JSON.parse(rawData);

app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/contacts', function (request, response){
    response.render('contact_us');
});

app.get('/', function (request, response){
    response.render('BMI');
});

app.get('/reports', function (request, response) {
    response.send(data);
});

app.post('/process-contacts', urlEncodedParser, function (request, response) {
    response.end('Thank you ' + request.body.first_name + ' ' + request.body.last_name);
});

app.post('/process-bmi', urlEncodedParser, function (request, response) {
    var weight = request.body.weight;
    var height = request.body.height;
    bmi = weight / (height * height);
    data.push([{bmi: bmi}]);
    if (bmi < 18.5 ){
        comment = "Underweight";
    }else if(bmi >= 18.5) {
        comment = "Normal weight";
    }else if (bmi >= 25) {
        comment = "Overweight";
    }else if (bmi >= 30) {
        comment = "Obesity";
    }
    response.render('bmi_report', {bmi, comment});
    fs.writeFileSync(fileName, JSON.stringify(data));
});

app.listen(port);
console.log('Server is listening on port 3000');