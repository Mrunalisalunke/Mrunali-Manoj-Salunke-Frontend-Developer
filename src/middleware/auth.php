<?php
// Allow requests from any origin
header("Access-Control-Allow-Origin: *");

// Allow the following methods
header("Access-Control-Allow-Methods: POST, OPTIONS");

// Allow the following headers
header("Access-Control-Allow-Headers: Content-Type");

// Check if it's an OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$username = "manu";
$password = "sonu";

// Check if REQUEST_METHOD is set
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $inputUsername = isset($_POST['username']) ? $_POST['username'] : null;
    $inputPassword = isset($_POST['password']) ? $_POST['password'] : null;

    if ($inputUsername === $username && $inputPassword === $password) {
        // Authentication successful
        echo json_encode(["success" => true, "message" => "correct"]);
        exit;
    } else {
        // Authentication failed
        echo json_encode(["success" => false, "message" => "Invalid credentials"]);
        exit;
    }
} else {
    // Method not allowed
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method Not Allowed"]);
    exit;
}
?>
