 /**
  * Handles the sign in button press.
  */
 function toggleSignIn() {
 	var red_error = 101;

 	if (firebase.auth().currentUser) {
 		// [START signout]
 		firebase.auth().signOut();
 		// [END signout]
 	} else {
 		var email = document.getElementById('email_signin').value;
 		var password = document.getElementById('password_signin').value;
 		if (email.length < 4) {
 			alert('Please enter an email address.');
 			return;
 		}
 		if (password.length < 4) {
 			alert('Please enter a password.');
 			return;
 		}
 		// Sign in with email and pass.
 		// [START authwithemail]
 		firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
 			// Handle Errors here.
 			var errorCode = error.code;
 			var errorMessage = error.message;
 			// [START_EXCLUDE]
 			if (errorCode === 'auth/wrong-password') {
 				red_error = 202;
 			} else {
 				red_error = 404;
 			}
 			console.log(error);
 			// [END_EXCLUDE]
 		});
 		if (red_error == 202) {
 			alert("WRONG PASSWORD");
 		} else if (red_error == 404) {
 			alert("NETWORK ERROR:" + errorMessage);
 		} else if (red_error == 101) {
 			firebase.auth().onAuthStateChanged(user => {
 				if (user) {
 					if (user.emailVerified == "false") {
 						alert("Verification Pending for " + user.email);


 					} else {
 						alert("Successful Logged In");

 						window.location = 'fire.html';
 						//After successful login, user will be redirected to home.html
 					}
 				}
 			});
 			// document.location.href = "fire.html"            
 		}
 		// [END authwithemail]  
 	}
 }

 function signout() {

 	if (firebase.auth().currentUser) {
 		// [START signout]
 		firebase.auth().signOut();
 		alert('successful logout');
 		document.location.href = "index.htm"


 		// [END signout]
 	} else {

 		alert('Already Logged Out/Internet Connectivity Error');

 	}

 }


 /**
  * Handles the sign up button press.
  */

 function handleSignUp() {

 	var email = document.getElementById('email_signup').value;
 	var password = document.getElementById('password_signup').value;
 	var red_error_signup = 500;
 	if (email.length < 4) {
 		alert('Please enter an email address.');
 		return;
 	}
 	if (password.length < 4) {
 		alert('Please enter a password.');
 		return;
 	}

 	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
 		// Handle Errors here.
 		var errorCode = error.code;
 		var errorMessage = error.message;
 		// [START_EXCLUDE]
 		if (errorCode == 'auth/weak-password') {
 			red_error_signup = 600;
 		} else {
 			red_error_signup = 700;
 		}
 		console.log(error);
 		// [END_EXCLUDE]
 	});

 	if (red_error_signup == 600) {
 		alert("WEAK PASSWORD");
 	} else if (red_error_signup == 700) {
 		alert("NETWORK ERROR:" + errorMessage);
 	} else if (red_error_signup == 500) {
 		firebase.auth().onAuthStateChanged(user => {
 			if (user) {
 				if (user.emailVerified == false) {
 					var users = firebase.auth().currentUser;

 					users.sendEmailVerification().then(function () {
 						alert("Successful Registration & Verification link sent to :" + user.email);
 						window.location = 'fire.html';
 						// Email sent.
 					}, function (error) {
 						alert("Verification Error")
 						// An error happened.
 					});


 				} else {
 					alert("Successful Registration User Already Verified");
 					window.location = 'fire.html';
 				}
 			}
 		});
 	}



 	// [END createwithemail]

 }







 /**
  * Sends an email verification to the user.
  */
 function sendEmailverification() {
 	// [START sendemailverification]
 	firebase.auth().currentUser.sendEmailVerification().then(function () {
 		// Email Verification sent!
 		// [START_EXCLUDE]
 		alert('Email Verification Sent!');
 		// [END_EXCLUDE]
 	});
 	// [END sendemailverification]
 }



 //PASSWORD RESET MAIL
 function sendPasswordReset() {
 	var email = document.getElementById('email_signin').value;
 	// [START sendpasswordemail]
 	firebase.auth().sendPasswordResetEmail(email).then(function () {
 		// Password Reset Email Sent!
 		// [START_EXCLUDE]
 		alert('Password Reset Email Sent!');
 		// [END_EXCLUDE]
 	}).catch(function (error) {
 		// Handle Errors here.
 		var errorCode = error.code;
 		var errorMessage = error.message;
 		// [START_EXCLUDE]
 		if (errorCode == 'auth/invalid-email') {
 			alert(errorMessage);
 		} else if (errorCode == 'auth/user-not-found') {
 			alert(errorMessage);
 		}
 		console.log(error);
 		// [END_EXCLUDE]
 	});

 	// [END sendpasswordemail];
 }


 function setuserdata() {


 	//var user = firebase.auth().currentUser;
 	firebase.auth().onAuthStateChanged(user => {
 		if (user.emailVerified == 'false') {
 			document.getElementById("useremail").innerHtml = "!!!EMAIL ID NOT VERIFIED !!!";

 		} else {
 			//var users = firebase.auth().currentUser;
 			document.getElementById("useremail").innerHtml = user.email;
 		}
 	});


 }
