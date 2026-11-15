# Slide Fill Buttons Animation — Complete Runnable Project

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/slide-fill-buttons-animation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Recreated from the uploaded 24.9-second screen recording (720 × 1280, 30 fps).

## Five button animations in the video

1. **Left Fill** — green fill travels from the left edge to the right.
2. **Center Fill** — blue fill expands from the center toward both sides.
3. **Diagonal** — orange fill enters as a skewed diagonal panel.
4. **Dual Fill** — pink fill expands from both left and right edges.
5. **Liquid Fill** — cyan fill rises from the bottom with a curved top edge, then settles into the button.

## CSS code patterns visible in the recording

The video shows these selector names and rules (line breaks normalized). The complete styles in `style.css` add the positioning, dimensions, colors and transitions required to run them:

### Left Fill
```css
.btn1::before {
  width: 0%;
  transition: .4s;
}
.btn1:hover::before {
  width: 100%;
}
```

### Center Fill
```css
.btn2::before {
  left: 50%;
  transform: translateX(-50%);
}
.btn2:hover::before {
  width: 120%;
}
```

### Diagonal
```css
.btn3::before {
  transform: skewX(-30deg);
}
.btn3:hover::before {
  left: 100%;
}
```

### Dual Fill
```css
.btn4::before,
.btn4::after {
  width: 0%;
}
.btn4:hover::before,
.btn4:hover::after {
  width: 50%;
}
```

### Liquid Fill
```css
.btn5::before {
  bottom: -100%;
}
.btn5:hover::before {
  bottom: 0;
}
```

## Project structure

- `index.html` — five demo panels, button markup and code snippets.
- `style.css` — complete button styling, pseudo-elements and transitions.
- `script.js` — small click feedback helper; the fill animations are CSS-driven.
- `README.md` — this guide and the visible source patterns.

## Run locally

1. Extract the ZIP.
2. Open the folder in VS Code.
3. Open `index.html` with Live Server, or directly in a modern browser.
4. Hover over each button to replay its effect.

No npm packages or build tools are required.

## Source fidelity

The five button names and the visible CSS selector/property patterns are taken from the screen recording. The video does not expose the entire source file at readable resolution, so the remaining markup and supporting CSS have been reconstructed to reproduce the visible effects as a working project.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
