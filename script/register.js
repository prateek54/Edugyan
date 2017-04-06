$(document).ready(function () {
	href = "http://192.168.1.102/android_login_api/register.php";
	fname = document.getElementById("namef");
	email = document.getElementById("email");
	password = document.getElementById("pass");


	$("#btn_signup").click(function () {
		$.ajax({
			header: {
				'Access-Control-Allow-Origin': '*'
			},
			type: 'POST',
			url: href,
			crossDomain: true,
			data: {
				'fname': fname,
				'email': email,
				'password': password
			},
			dataType: 'json',
			success: function (data) {
				alert(data.error_msg);


			}
		});
	});
});
