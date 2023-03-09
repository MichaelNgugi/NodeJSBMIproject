const server = 'http://localhost:3000';
var bmi;

async function fetchBmi() {
    const url = server + '/reports';
    const options = {
        method: 'GET',
        headers: {
            'Accept' : 'application/json'
        }
    }
    const response = await fetch(url, options);
    const reports = await response.json();
    populateContent(reports);
}

function populateContent (reports) {
    var div = document.getElementById('content');
    reports.forEach(report => {
        var row = document.createElement('h5');
        var text = document.createTextNode(report);
        row.appendChild(text);
        div.appendChild(row);
    });
}