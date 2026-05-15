# Reopen Closed Tab

A minimal Chrome extension that reopens the most recently closed tab or window with a single toolbar click.

## Features

- Reopen the last closed tab from the browser toolbar
- Restore the last closed window when that is the most recent session
- Lightweight Manifest V3 implementation
- No tracking, analytics, or external network requests

## How It Works

The extension listens for clicks on the toolbar icon, reads the most recent entry from Chrome's `sessions` API, and restores it.

## Installation

1. Clone or download this repository.
2. Open `chrome://extensions`.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select this project folder.

## Usage

1. Close a tab or browser window.
2. Click the extension icon in the Chrome toolbar.
3. The most recently closed tab or window is restored.

## Project Structure

```text
.
|-- manifest.json
|-- service-worker.js
|-- icon16.png
|-- icon48.png
|-- icon128.png
|-- icon512.png
|-- LICENSE
|-- PRIVACY.md
`-- README.md
```

## Permissions

- `sessions`: Required to read recently closed sessions and restore them

## Privacy

This extension does not collect, store, transmit, or sell user data. See [PRIVACY.md](./PRIVACY.md) for details.

## Development

This project intentionally keeps the codebase small and dependency-free.

To test changes locally:

1. Edit the source files.
2. Open `chrome://extensions`.
3. Click **Reload** on the extension card.
4. Test by closing a tab and clicking the toolbar icon.

## Publishing Checklist

1. Verify the extension works after reload.
2. Update `version` in `manifest.json`.
3. Confirm icons and screenshots are ready.
4. Review `PRIVACY.md` and `LICENSE`.
5. Create a ZIP package of the repository contents for release builds if needed.

## Contributing

Issues and pull requests are welcome. For significant changes, open an issue first to discuss the proposed change. See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

Released under the MIT License. See [LICENSE](./LICENSE).
