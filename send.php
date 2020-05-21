<html>
<head>
<title>Форма заявки с сайта</title>
</head>
<body>
<?php
//проверяем, существуют ли переменные в массиве POST
if(!isset($_POST['fio']) and !isset($_POST['email'])){
 ?> <form class="writeme-form" action="send.php" method="post">
		<input class="writeme-form_fio" type="text" name="fio" placeholder="Укажите ФИО" required>
		<input class="writeme-form_email" type="text" name="email" placeholder="Укажите e-mail" required>

		<textarea class="writeme-form_textarea" placeholder="Ваши предложения" name="sss" id="sss" cols="30" rows="10" required></textarea>
		<input class="writeme-form_btn" id="writeme-form_btnJS" type="submit" value="Отправить">
	</form> <?php
} else {
 //показываем форму
 $fio = $_POST['fio'];
 $email = $_POST['email'];
 $fio = htmlspecialchars($fio);
 $email = htmlspecialchars($email);
 $fio = urldecode($fio);
 $email = urldecode($email);
 $fio = trim($fio);
 $email = trim($email);
 if (mail("yan.steys1997@gmail.com", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: yan.steys1997@gmail.com \r\n")){
 echo "Сообщение успешно отправлено";
 } else {
 echo "При отправке сообщения возникли ошибки";
 }
}
?>
</body>
</html>