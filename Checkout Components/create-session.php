<?php
// Load environment variables from .env file
if (file_exists(__DIR__ . '/.env')) {
    $lines = file(__DIR__ . '/.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0)
            continue;
        list($name, $value) = explode('=', $line, 2);
        $_ENV[$name] = trim($value);
    }
}

// FastSpring API Credentials, read from .env file
$username = $_ENV['FS_API_USER'] ?? '';
$password = $_ENV['FS_API_PASS'] ?? '';

// API Endpoint
$url = "https://api.fastspring.com/v2/checkouts/aharvey/components-aharvey/sessions";

// Receive input from the page that calls this script
$jsonInput = file_get_contents('php://input');
$requestData = json_decode($jsonInput, true);

$email = $requestData['email'];
$firstName = $requestData['firstName'];
$lastName = $requestData['lastName'];

// Order Session Payload
$payload = [
    "locale" => "en",
    "country" => "US",
    "live" => false,
    "customer" => [
        "billToContact" => [
            "email" => $email,
            "firstName" => $firstName,
            "lastName" => $lastName
        ],
        "billToAddress" => [
            "region" => "CA",
            "postalCode" => "93101"
        ]
    ],
    "cart" => [
        "lineItems" => [
            [
                "productPath" => "demo-product-1",
                "quantity" => 1,
                "customPrice" => ["unitPrice" => ["USD" => 500]]
            ]
        ]
    ]
];

// Send API call and receive response
$ch = curl_init($url);

curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode($payload),
    CURLOPT_USERPWD => "$username:$password",
    CURLOPT_HTTPHEADER => ['Content-Type: application/json']
]);

$response = curl_exec($ch);

header('Content-Type: application/json');
echo $response;