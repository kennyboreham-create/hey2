<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST["email"]);
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $file = fopen("emails.csv", "a");
        fputcsv($file, [$email], ',', '"', '\\');
        fclose($file);
        header("Location: thanks\index.html");
        exit();
    } else {
        echo "Invalid email address.";
    }
}
?>