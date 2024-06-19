// profile/profile.js
document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const profileName = document.getElementById('profile-name').value;
    const profileEmail = document.getElementById('profile-email').value;
    const profileBio = document.getElementById('profile-bio').value;

    db.collection('users').doc(auth.currentUser.uid).set({
        name: profileName,
        email: profileEmail,
        bio: profileBio
    })
    .then(() => {
        console.log('Profile updated');
        alert('Profile updated successfully');
    })
    .catch(error => {
        console.error('Error updating profile:', error);
    });
});

auth.onAuthStateChanged(user => {
    if (user) {
        db.collection('users').doc(user.uid).get()
            .then(doc => {
                if (doc.exists) {
                    const userData = doc.data();
                    document.getElementById('profile-name').value = userData.name;
                    document.getElementById('profile-email').value = userData.email;
                    document.getElementById('profile-bio').value = userData.bio;
                }
            })
            .catch(error => {
                console.error('Error getting user data:', error);
            });
    } else {
        window.location.href = '../auth/login.html';
    }
});
