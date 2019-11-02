<?php

require_once "../connect_db.php"; // $db_connection 從這裡來的

// 請求需要的內容(沒有會直接爆炸)
$table = $_POST["table"];
$query = $_POST["query"];

// 整理後的查詢式(query)
$query = "DELETE FROM {$table} WHERE {$query}";
$query_result = $db_connection->query($query);

// 回應內容格式採用JSON
echo json_encode([
    "result" => $query_result
]);

$db_connection->close();
