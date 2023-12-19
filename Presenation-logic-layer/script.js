function Login() {
    var Username = document.getElementById("Username").value;
    var Password = document.getElementById("Password").value;

    // Read the content of the text file
    fetch('Data.txt')
        .then(response => response.text())
        .then(data => {
            var users = data.split('\n');
            var isValid = false;

            // Check if the entered username and password match
            users.forEach(user => {
                var [LogedUsername, LogedPassword] = user.split(':');
                if (Username === LogedUsername && Password === LogedPassword) {
                    isValid = true;
                }
            });

            // Display a message based on the validation
            if (isValid) {
                alert("Valid login!");
            } else {
                alert("Invalid username or password. Please try again.");
            }
        })
        .catch(error => console.error('Error reading the file:', error));
}