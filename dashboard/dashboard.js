// dashboard/dashboard.js
document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskName = document.getElementById('task-name').value;
    const taskPriority = document.getElementById('task-priority').value;
    const taskDueDate = document.getElementById('task-due-date').value;

    db.collection('tasks').add({
        name: taskName,
        priority: taskPriority,
        dueDate: taskDueDate,
        userId: auth.currentUser.uid
    })
    .then(() => {
        console.log('Task added');
        loadTasks();
    })
    .catch(error => {
        console.error('Error adding task:', error);
    });
});

function loadTasks() {
    db.collection('tasks').where('userId', '==', auth.currentUser.uid).orderBy('dueDate')
        .get()
        .then(snapshot => {
            const taskList = document.getElementById('task-list');
            taskList.innerHTML = '';
            snapshot.forEach(doc => {
                const task = doc.data();
                const taskElement = document.createElement('div');
                taskElement.textContent = `${task.name} - ${task.priority} - Due: ${task.dueDate}`;
                taskList.appendChild(taskElement);
            });
        })
        .catch(error => {
            console.error('Error loading tasks:', error);
        });
}

auth.onAuthStateChanged(user => {
    if (user) {
        loadTasks();
    } else {
        window.location.href = '../auth/login.html';
    }
});

document.getElementById('logout').addEventListener('click', function() {
    auth.signOut().then(() => {
        console.log('User signed out');
        window.location.href = '../auth/login.html';
    });
});
