# GHunt Companion (Manifest V3) — Chrome / Edge

Unofficial Manifest V3 port of the [GHunt Companion](https://github.com/mxrch/ghunt_companion) extension, for Chrome and Edge. The original extension is Manifest V2, which Chromium-based browsers no longer load.

Load all needed cookies to use [GHunt](https://github.com/mxrch/GHunt) peacefully, fast.

## Usage

You can choose between these 2 methods to configure GHunt through the Companion extension:
- Method 1 (fastest) => It gets the needed cookies, and sends it to GHunt (which must be listening on port 60067).
- Method 2 => It gets the needed cookies, encodes them in base64 and puts them into your clipboard.

## Installation (Chrome / Edge)

Not published on any store — load it unpacked:

1. Clone or download this repository.
2. Open `chrome://extensions` (Chrome) or `edge://extensions` (Edge).
3. Enable **Developer mode**.
4. Click **Load unpacked** and select this folder.

Keep the folder in place: the extension is loaded from disk.

## What changed from upstream

- `manifest_version` 2 → 3
- Background page → service worker (ES module)
- `browser.*` → `chrome.*`, webextension-polyfill dropped
- Removed the login-page rewrite (`webRequest.filterResponseData` is a Firefox-only API; it only replaced the Google logo with the GHunt dinosaur on the sign-in page)
- Added a `http://127.0.0.1/*` host permission so the service worker can reach the GHunt listener
- Fixed relative URL resolution when redirecting to the local "connected" page

## Credits

All original code by [mxrch](https://github.com/mxrch). Original repository: https://github.com/mxrch/ghunt_companion

Thanks Justin Middendorp for the background picture: https://dribbble.com/shots/5813412-Dark-Web
