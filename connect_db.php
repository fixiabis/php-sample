<?php

$db_connection = new mysqli( // 建立連線
    $hostname = "localhost", // 連線主機
    $username = "root", // 連線的使用者名稱
    $password = "", // 連線的使用者密碼
    $database = "sample" // 預設資料庫名稱
);

if ($db_connection->connect_error) { // 連線有錯誤的時候中斷
    die("連線爆炸了: {$db_connection->connect_error}");
}
