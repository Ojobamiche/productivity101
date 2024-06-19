// goals/goals.js
document.getElementById('goal-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const goalName = document.getElementById('goal-name').value;
    const goalDescription = document.getElementById('goal-description').value;

    db.collection('goals').add({
        name: goalName,
        description: goalDescription,
        userId: auth.currentUser.uid,
        progress: 0
    })
    .then(() => {
        console.log('Goal added');
        loadGoals();
    })
    .catch(error => {
        console.error('Error adding goal:', error);
    });
});

function loadGoals() {
    db.collection('goals').where('userId', '==', auth.currentUser.uid)
        .get()
        .then(snapshot => {
            const goalList = document.getElementById('goal-list');
            goalList.innerHTML = '';
            snapshot.forEach(doc => {
                const goal = doc.data();
                const goalElement = document.createElement('div');
                goalElement.textContent = `${goal.name} - ${goal.description}`;
                goalList.appendChild(goalElement);
            });
        })
        .catch(error => {
            console.error('Error loading goals:', error);
        });
}

auth.onAuthStateChanged(user => {
    if (user) {
        loadGoals();
    } else {
        window.location.href = '../auth/login.html';
    }
});
