document.getElementById("login-form").addEventListener("submit", function(event) {
	event.preventDefault(); // prevent default form submission behavior
  
	// get username and password inputs
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
  
	// check if username and password are valid (replace with your own validation logic)
	if (username === "user1" && password === "password1") {
	  window.location.href = "user1.html"; // redirect to user1.html
	} else if (username === "user2" && password === "password2") {
	  window.location.href = "user2.html"; // redirect to user2.html
	} else {
	  alert("Invalid username or password!"); // show error message if username or password are invalid
	}
  });
  