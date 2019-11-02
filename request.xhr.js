const API_URL = "http://localhost/api/";

function searchRequest(table, query, callback) {
    query = encodeURI(query);

    var xhr = new XMLHttpRequest();

    xhr.open("GET", `${API_URL}search.php?table=${table}&query=${query}`);

    xhr.onload = function() {
        if (xhr.readyState != 4 || xhr.status != 200) return;
        var data = JSON.parse(xhr.responseText);
        callback(data);
    };

    xhr.send();

    return xhr;
}

function insertRequest(table, data, callback) {
    data = encodeURI(JSON.stringify(data));

    var xhr = new XMLHttpRequest();

    xhr.open("POST", `${API_URL}insert.php`);

    xhr.onload = function() {
        if (xhr.readyState != 4 || xhr.status != 200) return;
        var data = JSON.parse(xhr.responseText);
        callback(data);
    };

    xhr.send(`table=${table}&data=${data}`);

    return xhr;
}

function updateRequest(table, query, data, callback) {
    query = encodeURI(query);
    data = encodeURI(JSON.stringify(data));

    var xhr = new XMLHttpRequest();

    xhr.open("POST", `${API_URL}update.php`);

    xhr.onload = function() {
        if (xhr.readyState != 4 || xhr.status != 200) return;
        var data = JSON.parse(xhr.responseText);
        callback(data);
    };

    xhr.send(`table=${table}&query=${query}&data=${data}`);

    return xhr;
}

function deleteRequest(table, query, callback) {
    query = encodeURI(query);

    var xhr = new XMLHttpRequest();

    xhr.open("POST", `${API_URL}delete.php`);

    xhr.onload = function() {
        if (xhr.readyState != 4 || xhr.status != 200) return;
        var data = JSON.parse(xhr.responseText);
        callback(data);
    };

    xhr.send(`table=${table}&query=${query}`);

    return xhr;
}
