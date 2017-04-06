//Function to check email verification
function toggleuser() {
	var user = firebase.auth().currentUser;
	if (user) {
		if (user.emailVerified == false) {
			alert("Verification Pending for " + user.email);
			document.getElementById("demo").innerHTML = "EMAIL NOT VERIFIED";


		} else {
			document.getElementById("demo").innerHTML = user.email + "";

			alert("Email : " + user.email + " Has been authenticated now");

			//After successful login, user will be redirected to home.html
		}

	}
}

