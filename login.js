function login() {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;
    const loginMessage = document.getElementById('loginMessage');

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === loginUsername && storedUser.password === loginPassword) {
        loginMessage.textContent = ''; // Clear any previous error messages
        alert("Login successful!");
        window.location.href = "love.html"; // Redirect to the love page
    } else {
        loginMessage.textContent = "Invalid username or password!";
        loginMessage.style.color = "red";
    }
}
