<?php

require_once "../connect_db.php"; // $db_connection 從這裡來的

// 請求需要的內容(沒有會直接爆炸)
$table = $_POST["table"];
$query = $_POST["query"];
$data = json_decode($_POST["data"]);

// 整理資料
$values = [];

foreach ($data as $field => $value) {
    array_push($values, "`{$field}`='{$value}'");
}

$values = implode(", ", $values);

// 整理後的查詢式(query)
$query = "UPDATE {$table} SET {$values} WHERE {$query}";
$query_result = $db_connection->query($query);

// 回應內容格式採用JSON
echo json_encode([
    "result" => $query_result
]);

$db_connection->close();
