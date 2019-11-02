<?php

require_once "../connect_db.php"; 
$table = $_POST["table"];
$query = $_POST["query"];

$query = "DELETE FROM {$table} WHERE {$query}";
$result = $db_connection->query($query);

echo json_encode([
    "result" => $result
]);

$db_connection->close();
