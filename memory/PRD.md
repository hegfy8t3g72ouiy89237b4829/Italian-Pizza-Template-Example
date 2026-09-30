# PRD — Luna Pizza

## Original problem statement
Build a simple, polished pizza restaurant website for a fictional restaurant called "Luna Pizza" — a portfolio project to be published publicly on GitHub. It should look like a real small/local Italian pizzeria website, built with HTML5, CSS3 and vanilla JavaScript only (no React, no libraries), with a warm, natural Italian aesthetic: cream background, dark charcoal text, muted dark red accent, small amounts of muted green, no gradients, no dark mode, no excessive animations.

## Architecture / tasks done
- Static site (no backend, no build step) in `/app/luna-pizza/`:
  - `index.html` — semantic HTML, single page: navbar, hero, marquee, featured pizzas, menu, about, quality, gallery, contact, footer
  - `css/style.css` — CSS variables for colors, organized sections, responsive breakpoints (1060 / 960 / 820 / 560px), prefers-reduced-motion support
  - `js/script.js` — vanilla JS: sticky-header state, mobile hamburger, menu category filtering, add-to-order counter, contact form validation, scroll reveals, hero parallax, footer year
  - `images/` — 12 locally stored, size-optimized photos (Unsplash) + SVG favicon
  - `README.md` — structure, run instructions, customization notes
- Preview serving: the static site is copied into `/app/frontend/public/` (served by the pod's dev server on :3000). Source of truth is `/app/luna-pizza/`.

## User personas
- Local customer: wants hours, menu, address, phone, and to grab a quick order
- Owner/portfolio viewer: reviews clean code and design on GitHub

## Core requirements (static)
- Navbar: logo, Home/Menu/About/Contact, Order Now button, sticky on desktop, hamburger on mobile — done
- Hero: "Pizza made the Italian way." + description + View Menu / Order Now + large pizza image — done
- Featured pizzas: 4 cards (Margherita, Diavola, Prosciutto e Funghi, Quattro Formaggi) with image, description, price, Add to order — done
- Menu: Pizza / Starters / Desserts / Drinks with horizontal dotted-leader items — done
- About: two-column image + short story — done
- Quality: fresh dough / Italian ingredients / wood-fired oven with simple icons — done
- Gallery: 6-image responsive grid — done
- Contact: address, hours, phone, email, Get Directions, validated form (name/email/message) — done
- Footer: brand, description, nav links, hours, social placeholders, copyright — done
- Functionality: smooth scrolling, mobile nav, menu filtering, order counter, form validation, hover states — done (verified)

## Implemented (dates)
- 2026-09-30: full site built, verified (curl asset checks + desktop/mobile screenshots + scripted interaction tests: filtering, order counter, empty/valid form submit)

## Backlog (P0/P1/P2)
- P1: online order / cart page (real totals, mock checkout)
- P1: dedicated menu page per category if the site grows
- P2: Google Maps embed in contact section
- P2: photo lightbox on gallery click

## Next tasks
1. Add an order/cart drawer that lists added pizzas with running total
2. Embed a Google Map under contact info
3. Publish the `/app/luna-pizza` folder to GitHub (no build step needed)
