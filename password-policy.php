<?php
// Güçlü Şifre Kontrolü
function checkPasswordStrength($password) {
    $errors = [];
    
    // En az 8 karakter
    if (strlen($password) < 8) {
        $errors[] = "Şifre en az 8 karakter olmalıdır";
    }
    
    // Büyük harf kontrolü
    if (!preg_match('/[A-Z]/', $password)) {
        $errors[] = "Şifre en az bir büyük harf içermelidir";
    }
    
    // Küçük harf kontrolü
    if (!preg_match('/[a-z]/', $password)) {
        $errors[] = "Şifre en az bir küçük harf içermelidir";
    }
    
    // Rakam kontrolü
    if (!preg_match('/[0-9]/', $password)) {
        $errors[] = "Şifre en az bir rakam içermelidir";
    }
    
    // Özel karakter kontrolü
    if (!preg_match('/[!@#$%^&*()_+\-=\[\]{};\':"\\|,.<>\/?]/', $password)) {
        $errors[] = "Şifre en az bir özel karakter içermelidir";
    }
    
    return $errors;
}

// Şifre hash'leme (MD5 yerine daha güvenli)
function hashPassword($password) {
    return password_hash($password, PASSWORD_DEFAULT);
}

// Şifre doğrulama
function verifyPassword($password, $hash) {
    return password_verify($password, $hash);
}
?> 