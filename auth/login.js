// auth/login.js
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            // Signed in
            const user = userCredential.user;
            console.log('User logged in:', user);
            window.location.href = '../dashboard/dashboard.html';
        })
        .catch(error => {
            console.error('Error logging in:', error);
        });
});
