document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    const validCredentials = {
        username: 'admin', 
        password: '12345' 
    };

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === validCredentials.username && password === validCredentials.password) {
            alert('Login successful!');
            window.location.href = 'HomePage.html';
        } else {
            if (username !== validCredentials.username && password !== validCredentials.password) {
                alert('Invalid username and password. Please try again.');
            } else if (username !== validCredentials.username) {
                alert('Invalid username. Please try again.');
            } else if (password !== validCredentials.password) {
                alert('Invalid password. Please try again.');
            }
        }
    });

    forgotPasswordLink.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Forgot password flow triggered.');
    });
});
