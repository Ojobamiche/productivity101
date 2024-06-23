// auth/signup.js
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            // Signed in
            const user = userCredential.user;    
            console.log('User signed up:', user);
            window.location.href = '../dashboard/dashboard.html';
        })
        .catch(error => {
            console.error('Error signing up:', error);
        });
});
