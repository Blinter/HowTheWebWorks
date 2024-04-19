document.addEventListener("DOMContentLoaded", function () {
    if (window.location.search !== '') {
        updateParameters(window.location.search, "GET");
    }
    document.querySelector(".sendPost").addEventListener("click", function (e) {
        e.preventDefault();
        window.history.pushState({}, document.title, window.location.pathname);
        updateParameters(' sampleTextSample=' + document.querySelector(".postText").value +
            (document.querySelector(".postCheckBox").checked ? '&checkBoxSample=on' : ''), "POST");
    });
    document.querySelector(".clear").addEventListener("click", function (e) {
        e.preventDefault();
        window.history.pushState({}, document.title, window.location.pathname);
        document.querySelector('div.parametersList').innerHTML = 'Waiting for input...';
        document.querySelector("h1#type").innerText = "NONE";
    });
});

function updateParameters(str, action) {
    const getRequest = str.slice(1, undefined).split('&');
    const requestObject = {};
    const getRequestParameters = document.querySelector('div.parametersList');
    for (let i = 0; i !== getRequest.length; i++) {
        const result = getRequest[i].split('=');
        requestObject[result[0]] = result[1];
    }
    if (getRequest.length > 0) {
        getRequestParameters.innerHTML = '';
        const appendedTable = document.createElement("table");
        appendedTable.border = 5;
        appendedTable.style = "margin:auto;font-size:24px;border-collapse: collapse;align-items:center;border: 2px solid black; color: white;"
        const newRow = document.createElement("tr");
        newRow.style = "align-items:center;margin-bottom: 10px;"
        appendedTable.append(newRow);
        const keyLegend = document.createElement("th");
        const valueLegend = document.createElement("th");
        keyLegend.innerText = "Parameter";
        valueLegend.innerText = "Value";
        appendedTable.append(keyLegend);
        appendedTable.append(valueLegend);
        const newRow2 = document.createElement("tr");
        newRow2.style = "align-items:center;margin-bottom: 10px;border-bottom: 2px solid black;"
        appendedTable.append(newRow2);
        //newValue.style = "align-items:center;margin-bottom: 10px;"
        for (key in requestObject) {
            const newKey = document.createElement("td");
            const newValue = document.createElement("td");
            newKey.innerText = key;
            newKey.style = "align-items:center;margin-bottom: 10px; border-right: 1px solid black;"
            newValue.style = "align-items:center;margin-bottom: 10px;"
            newValue.innerText = requestObject[key];
            appendedTable.append(newKey);
            appendedTable.append(newValue);
            appendedTable.append(document.createElement("tr"));
        }
        getRequestParameters.append(appendedTable);
    }
    document.querySelector("h1#type").innerText = action;
}