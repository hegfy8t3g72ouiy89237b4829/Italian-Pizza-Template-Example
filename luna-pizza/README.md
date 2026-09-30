# Luna Pizza

A simple, polished website for a fictional wood-fired pizzeria in Portland, OR.
Built with plain HTML, CSS and vanilla JavaScript — no frameworks, no build step.

## Features

- Sticky navbar with a mobile hamburger menu
- Hero with a subtle masked text reveal and parallax image
- Featured pizzas with "Add to order" buttons and an order counter
- Filterable menu (Pizza / Starters / Desserts / Drinks)
- Contact form with front-end validation (no backend)
- Smooth scrolling, responsive layout, restrained scroll reveals
- Respects `prefers-reduced-motion`

## Project structure

```
luna-pizza/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── (photos + favicon)
└── README.md
```

## Run it

Open `index.html` in a browser, or serve the folder:

```
npx serve .
```

There is nothing to install and nothing to build.

## Customization

- Colors live in CSS variables at the top of `css/style.css`
- Menu items are plain HTML in `index.html`; the `data-category` attribute drives the filtering
- Photos are local files in `images/` — swap them out freely

## Credits

Photos from Unsplash. Fonts: Fraunces and Karla via Google Fonts.
Luna Pizza is a fictional business — this site is for demo and portfolio use.
