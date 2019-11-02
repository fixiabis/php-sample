const API_URL = "http://localhost/api/";

function searchRequest(table, query) {
    query = encodeURI(query);

    return fetch(`${API_URL}search.php?table=${table}&query=${query}`).then(
        response => response.json() // 轉換回傳內容為json
    );
}

function insertRequest(table, data) {
    data = encodeURI(JSON.stringify(data));

    return fetch(`${API_URL}insert.php`, {
        method: "POST",
        body: `table=${table}&data=${data}`
    }).then(
        response => response.json() // 轉換回傳內容為json
    );
}

function updateRequest(table, query, data) {
    query = encodeURI(query);
    data = encodeURI(JSON.stringify(data));

    return fetch(`${API_URL}update.php`, {
        method: "POST",
        body: `table=${table}&query=${query}&data=${data}`
    }).then(
        response => response.json() // 轉換回傳內容為json
    );
}

function deleteRequest(table, query) {
    query = encodeURI(query);

    return fetch(`${API_URL}delete.php`, {
        method: "POST",
        body: `table=${table}&query=${query}`
    }).then(
        response => response.json() // 轉換回傳內容為json
    );
}
