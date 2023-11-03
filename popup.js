
document.addEventListener("DOMContentLoaded", function () {
  const saveTabsButton = document.getElementById("saveTabs");

  saveTabsButton.addEventListener("click", function () {
    chrome.tabs.query({}, function (tabs) {

      const filteredLinks = tabs
        .filter(tab => {
          const url = tab.url;
          return (url.startsWith("https://www.youtube.com/watch"));
        })
        .map(tab => tab.url)
        .join('\n');

      if (filteredLinks) {
        const blob = new Blob([filteredLinks], { type: "text/plain" });
        const filename = "youtube_links.txt";
        const url = URL.createObjectURL(blob);

        // Create a link to trigger the download
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", filename);

        // Simulate a click to trigger the download
        link.click();
      } else {
        alert("No matching tabs found.");
      }
    });
  });
});
