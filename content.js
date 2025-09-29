// Web Ciencias Appearance Modifier - Content Script
console.log('Web Ciencias Extension loaded');

// Extension state
let extensionEnabled = true;

// Wait for the page to load completely
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeExtension);
} else {
  initializeExtension();
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'toggle') {
    extensionEnabled = !extensionEnabled;
    toggleExtension();
    sendResponse({enabled: extensionEnabled});
  } else if (request.action === 'reset') {
    resetStyles();
    sendResponse({success: true});
  }
  return true;
});

function initializeExtension() {
  console.log('Initializing Web Ciencias appearance modifications');
  
  // Add a class to the body to enable our custom styles
  document.body.classList.add('web-ciencias-extension-active');
  
  // Add a subtle indicator that the extension is active
  addExtensionIndicator();
  
  // Apply enhanced styling improvements
  enhancePageAppearance();
}

function addExtensionIndicator() {
  // Create a small indicator to show the extension is active
  const indicator = document.createElement('div');
  indicator.id = 'web-ciencias-extension-indicator';
  indicator.innerHTML = '🎨 Extension Active';
  indicator.style.cssText = `
    position: fixed;
    top: 10px;
    right: 10px;
    background: #2196F3;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    z-index: 10000;
    font-family: Arial, sans-serif;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  `;
  
  document.body.appendChild(indicator);
  
  // Hide the indicator after 3 seconds
  setTimeout(() => {
    indicator.style.opacity = '0';
    indicator.style.transition = 'opacity 0.5s';
    setTimeout(() => indicator.remove(), 500);
  }, 3000);
}

function enhancePageAppearance() {
  // Add smooth animations to interactive elements
  const interactiveElements = document.querySelectorAll('a, button, input[type="submit"], input[type="button"]');
  interactiveElements.forEach(element => {
    element.style.transition = 'all 0.3s ease';
  });
  
  // Improve form styling
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.style.transition = 'all 0.3s ease';
  });
  
  // Add hover effects for better UX
  document.addEventListener('mouseover', function(e) {
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
      e.target.style.transform = 'translateY(-1px)';
      e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
    }
  });
  
  document.addEventListener('mouseout', function(e) {
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = 'none';
    }
  });
}

function toggleExtension() {
  if (extensionEnabled) {
    document.body.classList.add('web-ciencias-extension-active');
    addExtensionIndicator();
    enhancePageAppearance();
  } else {
    document.body.classList.remove('web-ciencias-extension-active');
    removeExtensionIndicator();
  }
}

function removeExtensionIndicator() {
  const indicator = document.getElementById('web-ciencias-extension-indicator');
  if (indicator) {
    indicator.remove();
  }
}

function resetStyles() {
  // Remove all custom styling and re-apply
  document.body.classList.remove('web-ciencias-extension-active');
  removeExtensionIndicator();
  
  // Re-enable if extension is active
  if (extensionEnabled) {
    setTimeout(() => {
      initializeExtension();
    }, 100);
  }
}