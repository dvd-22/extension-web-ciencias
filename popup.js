// Web Ciencias Extension - Popup Script

document.addEventListener('DOMContentLoaded', function() {
  console.log('Popup loaded');
  
  // Get references to UI elements
  const statusText = document.getElementById('status-text');
  const toggleButton = document.getElementById('toggle-extension');
  const resetButton = document.getElementById('reset-styles');
  const optionsButton = document.getElementById('open-options');
  
  // Check if we're on the target site
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const currentTab = tabs[0];
    const isTargetSite = currentTab.url.includes('web.fciencias.unam.mx');
    
    if (isTargetSite) {
      statusText.textContent = 'Extensión activa en este sitio';
      toggleButton.textContent = 'Desactivar Extensión';
    } else {
      statusText.textContent = 'Visita web.fciencias.unam.mx';
      toggleButton.textContent = 'Ir al sitio';
      toggleButton.style.background = 'rgba(255,193,7,0.8)';
    }
    
    // Add event listeners
    setupEventListeners(isTargetSite);
  });
});

function setupEventListeners(isTargetSite) {
  const toggleButton = document.getElementById('toggle-extension');
  const resetButton = document.getElementById('reset-styles');
  const optionsButton = document.getElementById('open-options');
  
  toggleButton.addEventListener('click', function() {
    if (isTargetSite) {
      // Toggle extension on the current tab
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: 'toggle'}, function(response) {
          if (response) {
            updateStatus(response.enabled);
          }
        });
      });
    } else {
      // Open the target website
      chrome.tabs.create({url: 'https://web.fciencias.unam.mx/'});
      window.close();
    }
  });
  
  resetButton.addEventListener('click', function() {
    if (isTargetSite) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: 'reset'}, function(response) {
          showMessage('Estilos restablecidos');
        });
      });
    } else {
      showMessage('Visita primero el sitio web');
    }
  });
  
  optionsButton.addEventListener('click', function() {
    // For now, just show a message
    showMessage('Opciones disponibles próximamente');
  });
}

function updateStatus(enabled) {
  const statusText = document.getElementById('status-text');
  const toggleButton = document.getElementById('toggle-extension');
  
  if (enabled) {
    statusText.textContent = 'Extensión activa';
    toggleButton.textContent = 'Desactivar Extensión';
    toggleButton.style.background = 'rgba(244,67,54,0.8)';
  } else {
    statusText.textContent = 'Extensión desactivada';
    toggleButton.textContent = 'Activar Extensión';
    toggleButton.style.background = 'rgba(76,175,80,0.8)';
  }
}

function showMessage(message) {
  // Create a temporary message element
  const messageDiv = document.createElement('div');
  messageDiv.textContent = message;
  messageDiv.style.cssText = `
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(76,175,80,0.9);
    color: white;
    padding: 8px 15px;
    border-radius: 4px;
    font-size: 12px;
    z-index: 1000;
  `;
  
  document.body.appendChild(messageDiv);
  
  // Remove the message after 2 seconds
  setTimeout(() => {
    messageDiv.style.opacity = '0';
    messageDiv.style.transition = 'opacity 0.3s';
    setTimeout(() => messageDiv.remove(), 300);
  }, 2000);
}