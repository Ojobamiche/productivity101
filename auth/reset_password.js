// auth/reset_password.js
document.getElementById('reset-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('reset-email').value;

    auth.sendPasswordResetEmail(email)
        .then(() => {
            console.log('Password reset email sent');
            alert('Password reset email sent');
        })
        .catch(error => {
            console.error('Error sending password reset email:', error);
        });
});
