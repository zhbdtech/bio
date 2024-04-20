// Function to extract URL parameter
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Get the confirm button element
const confirmButton = document.getElementById('confirmButton');

// Add click event listener to the confirm button
confirmButton.addEventListener('click', function() {
    // Extract the URL parameter
    const redirectUrl = getParameterByName('url');

    // Redirect to the specified URL
    if (redirectUrl) {
        window.location.href = redirectUrl;
    } else {
        console.error('Redirect URL not found.');
    }
});
