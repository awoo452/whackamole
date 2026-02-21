# Docs

This folder is the home for project documentation. It starts small and will expand as features grow.

## Current Behavior (Baseline)
- Game lives entirely in `index.html`, `whackamole.js`, and CSS files.
- Clicking `START` begins a 30-second round.
- One ingredient appears at random in the 3x3 grid each second.
- Clicking the correct square increments the score.
- The bowl graphic fills as the score crosses thresholds.

## Key Files
- `index.html`: App structure and asset includes.
- `whackamole.js`: Game logic (timer, spawns, scoring).
- `css/style.css`: Layout styling (compiled from SCSS).
- `whackamole.css`: Sprite, cursor, and bowl state styles.
- `scss/`: SCSS source for layout styling.
- `img/`: All image and cursor assets.

## Planned Docs (Placeholders)
- Gameplay rules and scoring details.
- Architecture and state flow.
- Asset pipeline and styling conventions.
- Deployment notes (Amplify or other static hosting).
- Roadmap and feature backlog.
