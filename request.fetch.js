const API_URL = "http://localhost/api/";

// encodeURI是為了避免傳送有特殊字元
// query直接撰寫SQL WHERE中的條件式，例如：`name = 'test' AND id = 8` 之類

/**
 * 查詢請求
 * @param {string} table 表名
 * @param {string} query SQL條件式
 * @example
 * searchRequest("sample", "id = 8").then(data => {
 *     if (data.result == true) {
 *         data.table;
 *     }
 * });
 */
function searchRequest(table, query) {
    query = encodeURI(query);

    return fetch(`${API_URL}search.php?table=${table}&query=${query}`).then(
        response => response.json() // 轉換回傳內容為json
    );
}

/**
 * 新增請求
 * @param {string} table 表名
 * @param {object} data 有鍵值的物件，需要對應資料庫欄位
 * @example
 * insertRequest("sample", { "id": 8 }).then(data => {
 *     if (data.result == true) {
 *         data.id;
 *     }
 * });
 */
function insertRequest(table, data) {
    data = encodeURI(JSON.stringify(data));

    return fetch(`${API_URL}insert.php`, {
        method: "POST",
        body: `table=${table}&data=${data}`
    }).then(
        response => response.json() // 轉換回傳內容為json
    );
}

/**
 * 更新請求
 * @param {string} table 表名
 * @param {string} query SQL條件式
 * @param {object} data 有鍵值的物件，需要對應資料庫欄位(將需要更新的傳入即可)
 * @example
 * updateRequest("sample", "id = 8", { "name": "test" }).then(data => {
 *     if (data.result == true) {
 *     }
 * });
 */
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

/**
 * 更新請求
 * @param {string} table 表名
 * @param {string} query SQL條件式
 * @example
 * deleteRequest("sample", "id = 8").then(data => {
 *     if (data.result == true) {
 *     }
 * });
 */
function deleteRequest(table, query) {
    query = encodeURI(query);

    return fetch(`${API_URL}delete.php`, {
        method: "POST",
        body: `table=${table}&query=${query}`
    }).then(
        response => response.json() // 轉換回傳內容為json
    );
}
