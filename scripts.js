function scrollLeft() {
    const container = document.getElementById('celebrityStyle');
    container.scrollBy({
        left: -200, // Adjust scroll amount as needed
        behavior: 'smooth'
    });
}

function scrollRight() {
    const container = document.getElementById('celebrityStyle');
    container.scrollBy({
        left: 200, // Adjust scroll amount as needed
        behavior: 'smooth'
    });
}

// scripts.js


function scrollLeft() {
    let celebrityStyle = document.getElementById('celebrityStyle');
    celebrityStyle.scrollLeft -= 150;
}

function scrollRight() {
    let celebrityStyle = document.getElementById('celebrityStyle');
    celebrityStyle.scrollLeft += 150;
}
function openStylePage(celebrityName) {
    // Construct the URL based on the celebrity's name
    let url = celebrityName + ".html";
    
    // Open the new page
    window.location.href = url;
}