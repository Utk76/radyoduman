<?php
// Admin Panel Session Kontrolü
session_start();

// Session timeout (30 dakika)
$timeout = 1800; // 30 dakika
if (isset($_SESSION['last_activity']) && (time() - $_SESSION['last_activity'] > $timeout)) {
    session_unset();
    session_destroy();
    header('Location: login.php?status=timeout');
    exit;
}

// Kullanıcı giriş yapmamışsa login'e yönlendir
if (!isset($_SESSION['kullanici_ad'])) {
    header('Location: login.php?status=no');
    exit;
}

// Session'ı yenile
$_SESSION['last_activity'] = time();

// Güvenlik için IP kontrolü (isteğe bağlı)
if (!isset($_SESSION['user_ip'])) {
    $_SESSION['user_ip'] = $_SERVER['REMOTE_ADDR'];
} elseif ($_SESSION['user_ip'] !== $_SERVER['REMOTE_ADDR']) {
    session_unset();
    session_destroy();
    header('Location: login.php?status=security');
    exit;
}
?> 