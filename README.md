# Whackamolé

A small, static web game that riffs on Whack-a-Mole by letting you smash guacamole ingredients as they pop up.

**Status**
- Works as-is (no build step required).
- Versioning starts at `0.0.1` for the existing state of the app.

**Quick Start**
1. Open `index.html` in a browser.
1. Click `START`.

**How To Play**
- Ingredients (mole/onion/tomato) appear in a 3x3 grid.
- Click ingredients to score points.
- The timer counts down from 30 seconds.
- The bowl graphic fills as your score increases.

**Project Layout**
- `index.html`: Page structure and script/style includes.
- `whackamole.js`: Game logic (spawning, scoring, timer).
- `css/style.css`: Main layout styles (compiled from SCSS).
- `whackamole.css`: Additional styles (sprites, cursor, bowl states).
- `scss/`: SCSS source files.
- `img/`: Game assets (ingredients, bowl states, cursor, board).

**Notes**
- This is a static app and can be hosted anywhere (Amplify, GitHub Pages, S3, etc.).
- External assets are loaded via CDNs (Bootstrap 4.3.1, jQuery 3.3.1 slim, Popper 1.14.7, Google Fonts Oswald). Offline use will require local copies.

**Docs**
- Documentation lives in `docs/`.

**Changelog**
- See `CHANGELOG.md`.
