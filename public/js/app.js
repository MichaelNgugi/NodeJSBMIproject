const server = process.env.PORT || 3000;

async function fetchBmi() {
    const url = '/all';
    const options = {
        method: 'GET',
        headers: { 
            'Accept' : 'application/json'
        }
    }
    const response = await fetch(url, options);
    const rows = await response.json();
    populateContent(rows);
    console.log(rows);
}

/*
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile('all', function(data){
    var rows = JSON.parse(data);
    console.log(rows);
    populateContent(rows);
});
*/

function populateContent(rows) {
    var table = document.getElementById('content');
    var numID = 1;
    rows.forEach(row => {
        var tuple = document.createElement('tr');
        var id = document.createElement('td');
        var idText = document.createTextNode(numID);
        var dataId = document.createElement('td');
        var textId = document.createTextNode(row.bmi);
        dataId.appendChild(textId);
        id.appendChild(idText);
        tuple.appendChild(id);
        tuple.appendChild(dataId);
        table.appendChild(tuple);
        numID++;
    });
}
