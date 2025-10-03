// Content script for Facultad de Ciencias Customizer
console.log("Facultad de Ciencias Customizer loaded");

// Extension state
let extensionEnabled = true;
let originalStyles = null;

// Initialize extension
function initializeExtension() {
	// Check if extension should be enabled (from storage)
	chrome.storage.sync.get(["extensionEnabled"], function (result) {
		extensionEnabled = result.extensionEnabled !== false; // Default to true

		if (extensionEnabled) {
			console.log("Extension is enabled, applying custom styles");
			applyCustomStyles();
		} else {
			console.log("Extension is disabled");
		}
	});
}

// Apply your custom styles
function applyCustomStyles() {
	// Save original styles if not already saved
	if (!originalStyles) {
		saveOriginalStyles();
	}

	// Add a class to body to indicate extension is active
	document.body.classList.add("fciencias-customizer-active");

	// You can add additional JavaScript modifications here
	// For example:
	// - Modify DOM elements
	// - Add new functionality
	// - Change layouts beyond what CSS can do

	console.log("Custom styles applied");
}

// Remove custom styles
function removeCustomStyles() {
	document.body.classList.remove("fciencias-customizer-active");

	// Restore any DOM modifications you made
	// restoreOriginalStyles();

	console.log("Custom styles removed");
}

// Save original styles before modification
function saveOriginalStyles() {
	// Here you can save original element styles
	// This is useful if you're modifying inline styles with JavaScript
	originalStyles = {
		// Example: save original body background
		bodyBackground: document.body.style.background || "",
		// Add more as needed
	};
}

// Restore original styles
function restoreOriginalStyles() {
	if (originalStyles) {
		// Restore saved styles
		document.body.style.background = originalStyles.bodyBackground;
		// Restore other styles as needed
	}
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	console.log("Message received:", request);

	switch (request.action) {
		case "toggle":
			extensionEnabled = !extensionEnabled;

			// Save state to storage
			chrome.storage.sync.set({ extensionEnabled: extensionEnabled });

			if (extensionEnabled) {
				applyCustomStyles();
			} else {
				removeCustomStyles();
			}

			sendResponse({ enabled: extensionEnabled });
			break;

		case "reset":
			// Reset to original styles
			removeCustomStyles();
			// Clear any stored custom settings
			chrome.storage.sync.clear();
			extensionEnabled = true;
			applyCustomStyles();
			sendResponse({ reset: true });
			break;

		case "getStatus":
			sendResponse({ enabled: extensionEnabled });
			break;

		default:
			console.log("Unknown action:", request.action);
			sendResponse({ error: "Unknown action" });
	}

	return true; // Keep message channel open for async response
});

// Initialize when DOM is ready
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", initializeExtension);
} else {
	initializeExtension();
}

// Re-apply styles when navigating (for SPAs)
let lastUrl = location.href;
new MutationObserver(() => {
	const url = location.href;
	if (url !== lastUrl) {
		lastUrl = url;
		if (extensionEnabled) {
			// Small delay to let the page settle
			setTimeout(applyCustomStyles, 100);
		}
	}
}).observe(document, { subtree: true, childList: true });
