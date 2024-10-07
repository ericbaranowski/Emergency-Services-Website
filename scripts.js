document.addEventListener('DOMContentLoaded', function() {
	const liveUpdatesContainer = document.getElementById('live-updates');

	// Simulate a live update feed from officials
	const updates = [
		{ time: "10:00 AM", message: "Main Street closed due to flooding." },
		{ time: "10:30 AM", message: "Heavy rain expected in the next hour." },
		{ time: "11:00 AM", message: "Emergency shelters open at City Hall." }
	];

	function displayLiveUpdates() {
		liveUpdatesContainer.innerHTML = ''; // Clear previous updates

		updates.forEach(update => {
			const updateElement = document.createElement('p');
			updateElement.textContent = `${update.time} - ${update.message}`;
			liveUpdatesContainer.appendChild(updateElement);
		});
	}

	// Simulate updates every 30 seconds
	setInterval(displayLiveUpdates, 30000);
	displayLiveUpdates(); // Show initial updates
});