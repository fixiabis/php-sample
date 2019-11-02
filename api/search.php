<?php

require_once "../connect_db.php";

$table = $_GET["table"];
$query = $_GET["query"];

$query = "SELECT * FROM {$table} WHERE {$query}";
$result = $db_connection->query($query);

$rows = [];

while ($row = $result->fetch_assoc()) {
    array_push($rows, $row);
}

echo json_encode([
    "result" => $result,
    "table" => $rows
]);

$db_connection->close();
