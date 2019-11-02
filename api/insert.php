<?php

require_once "../connect_db.php";

$table = $_POST["table"];
$data = json_decode($_POST["data"]);

$fields = [];
$values = [];

foreach ($data as $field => $value) {
    array_push($fields, "`{$field}`");
    array_push($values, "`{$value}`");
}

$fields = implode(", ", $fields);
$values = implode(", ", $values);

$query = "INSERT INTO {$table} ({$fields}) VALUES ({$values})";
$result = $db_connection->query($query);

echo json_encode([
    "result" => $result,
    "id" => $db_connection->insert_id
]);

$db_connection->close();
