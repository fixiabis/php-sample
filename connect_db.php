<?php

$db_connection = new mysqli(
    $hostname = "localhost",
    $username = "root",
    $password = "",
    $database = "sample"
);

if ($db_connection->connect_error) {
    die(json_encode([
        "result" => FALSE,
        "error" => $db_connection->connect_error
    ]));
}
