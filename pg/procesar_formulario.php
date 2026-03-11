<?php
// Configura tu correo destino
$destinatario = "luis_uan@hotmail.com";
$asunto = "Nuevo mensaje desde el formulario de contacto";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitizar y obtener los valores
    $nombre   = htmlspecialchars(trim($_POST['fname']));
    $apellido = htmlspecialchars(trim($_POST['lname']));
    $email    = htmlspecialchars(trim($_POST['email']));
    $telefono = htmlspecialchars(trim($_POST['phone']));
    $mensaje  = htmlspecialchars(trim($_POST['message']));

    // Validar campos obligatorios
    if (empty($nombre) || empty($apellido) || empty($email) || empty($telefono)) {
        // Si faltan datos, redirigir con error opcional
        header("Location: error.html");
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: error.html");
        exit;
    }

    // Cuerpo del correo
    $contenido = "
    Nuevo mensaje del formulario de contacto:

    Nombre: $nombre $apellido
    Email: $email
    Teléfono: $telefono

    Mensaje:
    $mensaje
    ";

    // Cabeceras
    $headers = "From: LANIIA <no-reply@tudominio.com>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";


    // Intentar enviar correo
    if (mail($destinatario, $asunto, $contenido, $headers)) {
        // Redirigir a página de agradecimiento
        header("Location: gracias.html");
        exit;
    } else {
        // Redirigir a página de error si falla
        header("Location: error.html");
        exit;
    }
} else {
    // Si se accede directamente sin POST
    header("Location: index.html");
    exit;
}
?>
