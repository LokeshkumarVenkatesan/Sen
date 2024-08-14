function signup() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        message.style.color = "red";
        return;
    }

    const user = {
        username,
        email,
        password
    };

    localStorage.setItem('user', JSON.stringify(user));
    message.textContent = "Signup successful!";
    message.style.color = "green";

    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000); // Redirect to login page after 2 seconds
}
