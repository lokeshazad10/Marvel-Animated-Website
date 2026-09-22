# Marvel Animated Website

A cinematic Marvel-inspired landing page featuring interactive character transitions, animated typography, and liquid image distortion powered by Shery.js.

## Features

- Full-screen character image slider with Spider-Man, Iron Man, Black Panther, Hulk, and Loki
- Animated character names and actor names triggered by clicking the page
- Shery.js image distortion and gooey transition effects
- GSAP-powered typography and image animations
- Responsive layout with custom Gilroy and Kajiro fonts
- Static frontend with no backend or build step

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- [Shery.js](https://github.com/aayushchouhan24/sheryjs)
- [GSAP](https://gsap.com/)
- [Three.js](https://threejs.org/)
- ControlKit

## Getting Started

### Prerequisites

- Node.js and npm, if you want to install the declared npm dependency
- A local static server or a browser that can open the project files

### Installation

1. Clone or download the repository.
2. Open the project directory:

	```bash
	cd "Animated Website"
	```

3. Install the npm dependency:

	```bash
	npm install
	```

### Run Locally

This project does not include a development server or build command. Serve the project directory with any static server, then open the provided local URL.

For example, with VS Code, install the **Live Server** extension and open `index.html` with **Open with Live Server**.

You can also use any static server available in your environment:

```bash
npx serve .
```

The external libraries are loaded through CDN links in `index.html`, so an internet connection is required when the page loads.

## Project Structure

```text
.
├── assets/
│   ├── fonts/       # Custom font files
│   ├── images/      # Character and portrait images
│   └── logo/        # Marvel logo assets
├── index.html       # Page markup and CDN dependencies
├── main.js          # Shery.js setup and GSAP interactions
├── style.css        # Layout, typography, and visual styling
├── package.json     # Project metadata and npm dependencies
└── .gitignore       # Local files excluded from Git
```

## Usage

Click anywhere on the main page to advance through the character and actor animations. The image background transitions are initialized in `main.js` with `Shery.imageEffect`.

## Customization

- Update the image and character entries in `index.html`.
- Adjust layout and typography in `style.css`.
- Tune the distortion settings and transition timing in `main.js`.
- Keep the external dependency order in `index.html`: GSAP, Three.js, ControlKit, Shery.js, then `main.js`.

## License and Attribution

This project is intended for educational and portfolio use. Marvel characters, names, logos, and related imagery are the property of their respective owners. Replace the provided assets or obtain appropriate permissions before using the project commercially.

Shery.js is distributed under the MIT License. See the library's repository for its complete license details.
