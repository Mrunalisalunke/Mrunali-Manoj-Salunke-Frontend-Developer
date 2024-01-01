<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$username = "mrunali";
$password = "mrunu@911";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $inputUsername = isset($_POST['username']) ? $_POST['username'] : null;
    $inputPassword = isset($_POST['password']) ? $_POST['password'] : null;

    if ($inputUsername === $username && $inputPassword === $password) {
        echo json_encode(["success" => true, "message" => "correct"]);
        exit;
    } else {
        echo json_encode(["success" => false, "message" => "Invalid credentials"]);
        exit;
    }
} else {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method Not Allowed"]);
    exit;
}
?>
