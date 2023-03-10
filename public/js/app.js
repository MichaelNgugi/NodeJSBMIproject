const server = 'http://localhost:3000';
var BMI;
var weight;
var height;

async function fetchBmi() {
    $(document).ready(function(){
        $.ajax({
            url: "BMI.json",
            method: "GET",
            success: function(data) {
                var value = [];
                for(var i in data) {
                    value.push(data[i].bmi);
                }
                populateContent(data);
            }
        });
    });
}


function populateContent() {
    var table = document.getElementById('content');
    reports.forEach(report => {
        var row = document.createElement('tr');
        var dataId = document.createElement('td');
        var textId = document.createTextNode(report.bmi);
        dataId.appendChild(textId);
        row.appendChild(dataId);
        table.appendChild(row);
    });
}
