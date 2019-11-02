<?php

require_once "../connect_db.php"; // $db_connection 從這裡來的

// 請求需要的內容(沒有會直接爆炸)
$table = $_GET["table"];
$query = $_GET["query"];

// 整理後的查詢式(query)
$query = "SELECT * FROM {$table} WHERE {$query}";
$query_result = $db_connection->query($query);

$rows = [];

// 逐筆取出，沒有會是NULL，然後離開迴圈
while ($row = $query_result->fetch_assoc()) {
    array_push($rows, $row); // 置入rows
}

// 回應內容格式採用JSON
echo json_encode([
    "result" => $query_result,
    "table" => $rows
]);

$db_connection->close();
