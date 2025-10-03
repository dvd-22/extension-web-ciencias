// Web Ciencias Customizer - Simple Popup Script

document.addEventListener("DOMContentLoaded", function () {
	console.log("Web Ciencias Customizer popup loaded");

	// Initialize UI elements
	initializeUI();
});

function initializeUI() {
	// Get references to UI elements
	const elements = {
		statusText: document.getElementById("status-text"),
		statusDot: document.getElementById("status-dot"),
		toggleButton: document.getElementById("toggle-btn"),
		toggleText: document.getElementById("toggle-text"),
		resetButton: document.getElementById("reset-btn"),
		warningSection: document.getElementById("warning-section"),
		githubLink: document.getElementById("github-link"),
	};

	// Check current tab and setup
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		const currentTab = tabs[0];
		const isTargetSite =
			currentTab.url && currentTab.url.includes("web.fciencias.unam.mx");

		setupInterface(elements, isTargetSite, currentTab);
		setupEventListeners(elements, isTargetSite);
	});
}

function setupInterface(elements, isTargetSite, currentTab) {
	if (isTargetSite) {
		// Site is compatible - hide warning
		elements.warningSection.classList.remove("show");

		// Check extension status
		chrome.tabs.sendMessage(
			currentTab.id,
			{ action: "getStatus" },
			function (response) {
				if (chrome.runtime.lastError) {
					console.log("Content script not ready, assuming enabled");
					updateExtensionStatus(elements, true);
				} else if (response) {
					updateExtensionStatus(elements, response.enabled);
				} else {
					updateExtensionStatus(elements, true);
				}
			}
		);
	} else {
		// Site is not compatible - show warning
		elements.warningSection.classList.add("show");
		updateExtensionStatus(elements, false);
		elements.toggleText.textContent = "Ir al Sitio";
		elements.toggleButton.className = "btn btn-primary";
	}
}

function updateExtensionStatus(elements, enabled) {
	if (enabled) {
		elements.statusText.textContent = "Extensión activa";
		elements.statusDot.classList.remove("disabled");
		elements.toggleText.textContent = "Desactivar";
		elements.toggleButton.className = "btn btn-secondary";
	} else {
		elements.statusText.textContent = "Extensión desactivada";
		elements.statusDot.classList.add("disabled");
		elements.toggleText.textContent = "Activar";
		elements.toggleButton.className = "btn btn-primary";
	}
}

function setupEventListeners(elements, isTargetSite) {
	// Toggle button
	elements.toggleButton.addEventListener("click", function () {
		handleToggleClick(elements, isTargetSite);
	});

	// Reset button
	elements.resetButton.addEventListener("click", function () {
		handleResetClick(elements, isTargetSite);
	});

	// GitHub link
	elements.githubLink.addEventListener("click", function (e) {
		e.preventDefault();
		chrome.tabs.create({
			url: "https://github.com/dvd-22/extension-web-ciencias/",
		});
	});
}

function handleToggleClick(elements, isTargetSite) {
	if (!isTargetSite) {
		// Open target website
		chrome.tabs.create({ url: "https://web.fciencias.unam.mx/" });
		window.close();
		return;
	}

	// Toggle extension on current tab
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(
			tabs[0].id,
			{ action: "toggle" },
			function (response) {
				if (chrome.runtime.lastError) {
					console.error(
						"Error communicating with content script:",
						chrome.runtime.lastError
					);
				} else if (response) {
					updateExtensionStatus(elements, response.enabled);
				}
			}
		);
	});
}

function handleResetClick(elements, isTargetSite) {
	if (!isTargetSite) {
		return;
	}

	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(
			tabs[0].id,
			{ action: "reset" },
			function (response) {
				if (!chrome.runtime.lastError) {
					updateExtensionStatus(elements, true);
				}
			}
		);
	});
}
