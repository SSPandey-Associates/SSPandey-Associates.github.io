// Function to show the modal
function showPopup() {
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container', 'popup-modal');
    modalContainer.id = 'popupModal';
  
    const modal = document.createElement('div');
    modal.classList.add('modal');
  
    const modalContent = `
      <p>
        By continuing to enter this website, you agree that the law firm is adhering to the Bar Council rules
        and you are in no way whatsoever attracted to the website through any kind of advertisements.
      </p>
      <div class="modal-actions">
        <button class="decline" onclick="redirectToPreviousPage()">Decline</button>
        <button class="accept" onclick="acceptAndClose()">Accept</button>
      </div>
    `;
  
    modal.innerHTML = modalContent;
    modalContainer.appendChild(modal);
  
    document.body.appendChild(modalContainer);
  }
  
  // Function to hide the modal and redirect to the previous page
  function redirectToPreviousPage() {
    const modalContainer = document.getElementById('popupModal');
    modalContainer.style.opacity = '0';
    modalContainer.style.pointerEvents = 'none';
    window.history.back();
  }
  
  // Function to hide the modal when accept is clicked
  function acceptAndClose() {
    const modalContainer = document.getElementById('popupModal');
    modalContainer.style.opacity = '0';
    modalContainer.style.pointerEvents = 'none';
  }
  
  // Show the modal when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    showPopup();
  });