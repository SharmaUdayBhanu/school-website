<?php
// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);

    if (strlen($name) > 20) {
        header("Location: contact.html?status=error&message=name_length");
        exit;
    }

    if (!preg_match("/^\d{10}$/", $phone)) {
        header("Location: contact.html?status=error&message=invalid_phone");
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: contact.html?status=error&message=invalid_email");
        exit;
    }

    $mail = new PHPMailer(true);
    try {
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = '13bhanusharma@gmail.com'; // Your Gmail address
        $mail->Password   = '16112004B@s';       // Your Gmail password or app password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        $mail->setFrom('13bhanusharma@gmail.com', 'Mailer');
        $mail->addAddress('13bhanusharma@gmail.com');

        $mail->isHTML(false);
        $mail->Subject = 'New Registration Form Submission';
        $mail->Body    = "Name: $name\nEmail: $email\nPhone: $phone";

        $mail->send();
        header("Location: contact.html?status=success");
    } catch (Exception $e) {
        header("Location: contact.html?status=error&message=email_failed");
    }
} else {
    header("Location: contact.html?status=error&message=invalid_request");
}
?>
