# O'Reilly Timeout Popup Auto Clicker

A browser extension that automatically clicks the OK button on timeout popups for O'Reilly learning platform sessions, preventing your session from ending due to inactivity.

## Problem Solved

When watching O'Reilly video courses, a timeout popup appears after periods of inactivity. If you've paused the video or you're working in another tab (like your IDE or searching on Google), you might miss this popup and your session will end, forcing you to reload the page. This extension automatically clicks the OK button so you can keep learning without interruptions.

## Features

- Automatically detects and clicks timeout popups
- Works in the background while you focus on learning
- Lightweight with minimal permissions
- Compatible with Chrome, Firefox, and Edge browsers

## Installation

### Chrome Web Store
1. Visit the [Chrome Web Store page](https://chromewebstore.google.com/detail/oreilly-timeout-popup-aut/afcifhphdkmkpeefiajjjhlfbmfgagao)
2. Click "Add to Chrome"

### Manual Installation

#### Chrome
1. Download or clone this repository to your computer
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top-right corner
4. Click "Load unpacked" and select the folder containing these extension files
5. The extension should now appear in your extensions list and be active

#### Firefox
1. Open Firefox and go to `about:debugging#/runtime/this-firefox`
2. Click "Load Temporary Add-on..."
3. Navigate to the folder containing the extension and select the `manifest-firefox.json` file
4. The extension will be installed temporarily (until Firefox is restarted)

#### Edge
1. Open Edge and go to `edge://extensions/`
2. Enable "Developer mode" using the toggle at the bottom-left
3. Click "Load unpacked" and select the folder containing the extension files
4. The extension should now appear in your extensions list and be active

## Privacy

This extension:
- Only runs on the O'Reilly learning platform domain (event.on24.com)
- Does not collect any user data
- Does not communicate with any external servers
- Only has the minimum permissions required to function

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## License

MIT License - See LICENSE file for details 