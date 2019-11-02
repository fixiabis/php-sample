<?php

require_once "../connect_db.php"; // $db_connection 從這裡來的

// 請求需要的內容(沒有會直接爆炸)
$table = $_POST["table"];
$data = json_decode($_POST["data"]);

// 整理資料，因SQL在執行insert時，欄位和內容是分離的
$fields = [];
$values = [];

foreach ($data as $field => $value) {
    array_push($fields, "`{$field}`");
    array_push($values, "`{$value}`");
}

$fields = implode(", ", $fields);
$values = implode(", ", $values);

// 整理後的查詢式(query)
$query = "INSERT INTO {$table} ({$fields}) VALUES ({$values})";
$query_result = $db_connection->query($query);

// 回應內容格式採用JSON
echo json_encode([
    "result" => $query_result,
    "id" => $db_connection->insert_id // INSERT 執行後會有這個值
]);

$db_connection->close();
