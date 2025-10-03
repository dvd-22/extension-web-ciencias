// Background script for Facultad de Ciencias Customizer
console.log("Background script loaded");

// Initialize extension on install
chrome.runtime.onInstalled.addListener(function (details) {
	console.log("Extension installed/updated:", details.reason);

	if (details.reason === "install") {
		// Set default settings
		chrome.storage.sync.set({
			extensionEnabled: true,
			customTheme: "dark", // You can add theme options later
			version: chrome.runtime.getManifest().version,
		});

		// Optionally open options page or welcome page
		// chrome.tabs.create({url: 'welcome.html'});
	}
});

// Handle extension icon click (backup, popup should handle this)
chrome.action.onClicked.addListener(function (tab) {
	console.log("Extension icon clicked on tab:", tab.url);

	// Check if we're on the target site
	if (tab.url && tab.url.includes("web.fciencias.unam.mx")) {
		// Send message to content script
		chrome.tabs.sendMessage(
			tab.id,
			{ action: "toggle" },
			function (response) {
				if (chrome.runtime.lastError) {
					console.error(
						"Error sending message:",
						chrome.runtime.lastError
					);
				} else {
					console.log("Toggle response:", response);
				}
			}
		);
	} else {
		// Open the target website
		chrome.tabs.create({ url: "https://web.fciencias.unam.mx/" });
	}
});

// Handle messages from content script or popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	console.log("Background received message:", request);

	switch (request.action) {
		case "getSettings":
			chrome.storage.sync.get(null, function (settings) {
				sendResponse(settings);
			});
			return true; // Keep channel open for async response

		case "saveSettings":
			chrome.storage.sync.set(request.settings, function () {
				sendResponse({ success: true });
			});
			return true;

		case "openOptionsPage":
			// If you create an options page later
			// chrome.runtime.openOptionsPage();
			sendResponse({ message: "Options page not implemented yet" });
			break;

		default:
			console.log("Unknown background action:", request.action);
			sendResponse({ error: "Unknown action" });
	}
});

// Optional: Badge text to show extension status
chrome.tabs.onActivated.addListener(function (activeInfo) {
	chrome.tabs.get(activeInfo.tabId, function (tab) {
		if (tab.url && tab.url.includes("web.fciencias.unam.mx")) {
			chrome.storage.sync.get(["extensionEnabled"], function (result) {
				const enabled = result.extensionEnabled !== false;
				chrome.action.setBadgeText({
					text: enabled ? "ON" : "OFF",
					tabId: tab.id,
				});
				chrome.action.setBadgeBackgroundColor({
					color: enabled ? "#4CAF50" : "#F44336",
					tabId: tab.id,
				});
			});
		} else {
			chrome.action.setBadgeText({ text: "", tabId: tab.id });
		}
	});
});
