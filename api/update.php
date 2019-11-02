<?php

require_once "../connect_db.php";

$table = $_POST["table"];
$query = $_POST["query"];
$data = json_decode($_POST["data"]);

$values = [];

foreach ($data as $field => $value) {
    array_push($values, "`{$field}`='{$value}'");
}

$values = implode(", ", $values);

$query = "UPDATE {$table} SET {$values} WHERE {$query}";
$result = $db_connection->query($query);

echo json_encode([
    "result" => $result
]);

$db_connection->close();
