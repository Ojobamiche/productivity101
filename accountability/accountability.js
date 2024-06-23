// accountability/accountability.js
document.getElementById('share-goal-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const goalId = document.getElementById('goal-select').value;
    const partnerEmail = document.getElementById('partner-email').value;

    db.collection('goals').doc(goalId).get()
        .then(doc => {
            if (doc.exists) {
                const goal = doc.data();
                db.collection('sharedGoals').add({
                    goalId: goalId,
                    goalName: goal.name,
                    goalDescription: goal.description,
                    ownerId: auth.currentUser.uid,
                    partnerEmail: partnerEmail
                })
                .then(() => {
                    console.log('Goal shared');
                    loadSharedGoals();
                })
                .catch(error => {
                    console.error('Error sharing goal:', error);
                });
            } else {
                console.error('No such goal');
            }
        })
        .catch(error => {
            console.error('Error getting goal:', error);
        });
});

function loadGoals() {
    db.collection('goals').where('userId', '==', auth.currentUser.uid)
    .get()
    .then(snapshot => {
        const goalSelect = document.getElementById('goal-select');
        goalSelect.innerHTML = '';
        snapshot.forEach(doc => {
            const goal = doc.data();
            const option = document.createElement('option');
            option.value = doc.id;
            option.textContent = goal.name;
            goalSelect.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error loading goals:', error);
    });
    }

    function loadSharedGoals() {
    db.collection('sharedGoals').where('ownerId', '==', auth.currentUser.uid)
    .get()
    .then(snapshot => {
        const sharedGoalList = document.getElementById('shared-goal-list');
        sharedGoalList.innerHTML = '';
        snapshot.forEach(doc => {
            const sharedGoal = doc.data();
            const sharedGoalElement = document.createElement('div');
            sharedGoalElement.textContent = `${sharedGoal.goalName} shared with ${sharedGoal.partnerEmail}`;
            sharedGoalList.appendChild(sharedGoalElement);
        });
    })
    .catch(error => {
        console.error('Error loading shared goals:', error);
    });
    }

    auth.onAuthStateChanged(user => {
    if (user) {
    loadGoals();
    loadSharedGoals();
    } else {
    window.location.href = '../auth/login.html';
    }
});
