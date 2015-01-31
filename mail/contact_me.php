<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "Preencha todos os campos!";
	return false;
   }

$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Create the email and send the message
$to = 'will.lindemann@gmail.com';
$email_subject = "Contato pelo site:  $name";
$email_body = "Mensagem enviada do site.\n\n"."Detalhes:\n\nNome: $name\n\nE-mail: $email_address\n\nTelefone: $phone\n\nMensagem:\n$message";
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= "From: will.lindemann@gmail.com" . "\r\n";
$headers .= "Reply-To: $email_address" . "\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion();

mail($to,$email_subject,$email_body,$headers);
return true;
?>
