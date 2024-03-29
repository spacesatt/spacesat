const outputDiv = document.getElementById("output");
const apiURL = "http://172.104.179.219:4000/getmatches/4";

fetch(apiURL)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    let outputHTML = "";

    for (const item of data.data) {
      const eventName = item.eventName;
      const eventID = item.eventId;
      const marketID = item.marketId;

      if (eventName && eventID && marketID) {
        outputHTML += `<p>Event Name: ${eventName}, Event ID: ${eventID}, Market ID: ${marketID}</p>`;
      }
    }

    outputDiv.innerHTML = outputHTML;
  })
  .catch(error => {
    console.error("Error:", error);
  });
