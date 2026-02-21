# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog, and this project follows Semantic Versioning.

## 0.0.1 - 2026-02-21
### Added
- Baseline Whackamolé game (HTML/CSS/JS).
- 3x3 grid with randomized ingredient spawns.
- 30-second timer and score tracking.
- Bowl-fill visual states tied to score milestones.
- Image and cursor assets in `img/`.

### Changed
- Repository cleaned by removing outdated files (historical note from prior commit).

## 0.0.2 - 2026-02-21
### Fixed
- Stop game loops cleanly when time reaches 0 to avoid runaway intervals.
- Prevent errors from `hitPosition`/`randomPosition` when the timer ends.
- Ignore click scoring after time runs out.
- Correct invalid heading selector and CSS background reference.
