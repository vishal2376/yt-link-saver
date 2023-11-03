
# YT Link Saver Extension

The YT Link Saver Browser Extension is a handy tool for finding youtube videos links from open tabs and save it into text file.

## Installation

To use this extension, follow these steps:

1. Clone or download this repository to your local machine.

2. Open your Chromium-based browser (e.g., Brave).

3. Navigate to `chrome://extensions/`.

4. Enable "Developer mode" in the top right corner of the extensions page.

5. Click the "Load unpacked" button.

6. Select the directory where you cloned or downloaded the extension files.

The YT Link Saver extension will be added to your browser's toolbar.

## Usage

1. Click on the YT Link Saver extension icon in your browser's toolbar to open the extension popup.

2. Click the "Save Links" button.

3. The extension will collect the selected links from your open tabs and save them to a text file named `youtube_links.txt`. Your browser will prompt you to download the file.

## Advance Usage
1. Download youtube videos using `yt-dlp`

```bash
    while IFS= read -r line; do yt-dlp $line; done < "~/Downloads/youtube_links.txt"
```
