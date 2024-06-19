// quotes/quotes.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            const quoteContainer = document.getElementById('quote-container');
            quoteContainer.textContent = `"${data.content}" - ${data.author}`;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
        });
});
