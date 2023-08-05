// Get the modal container
const modalContainer = document.getElementById('popupModal');

// Function to show the modal
function showPopup() {
    modalContainer.style.opacity = '1';
    modalContainer.style.pointerEvents = 'auto';
}

// Function to hide the modal and redirect to the previous page
function redirectToPreviousPage() {
    modalContainer.style.opacity = '0';
    modalContainer.style.pointerEvents = 'none';
    window.history.back();
}

// Function to hide the modal when accept is clicked
function acceptAndClose() {
    modalContainer.style.opacity = '0';
    modalContainer.style.pointerEvents = 'none';
}

// Show the modal when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showPopup();
});
