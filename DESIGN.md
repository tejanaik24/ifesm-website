# IFESM Design Tokens & Styling Guide

## 1. Typography
- **Headings**: Outfit (Google Fonts) — strong, mechanical, geometric sans.
- **Body**: Inter (Google Fonts) — clean, highly readable, structured.
- **Monospace**: Geist Mono / Technical data — for stats, dates, and labels.

## 2. Palette
- `--background-light`: `#f8f9fa` (concrete/daylight tone)
- `--background-dark`: `#0f0f0f` (charcoal/steel tone)
- `--accent-red`: `#E31E24` (safety red)
- `--accent-red-dark`: `#b3151a` (emergency red)
- `--blueprint-blue`: `#0c2461` / `#1e3799` (blueprint cyan background)
- `--border-color`: `rgba(255, 255, 255, 0.1)`

## 3. UI Materials & Grid
- **Blueprint Grid**:
  ```css
  background-size: 40px 40px;
  background-image: 
    linear-gradient(to right, rgba(227, 30, 36, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(227, 30, 36, 0.05) 1px, transparent 1px);
  ```
- **Metallic Sheen (Steel Panel)**:
  - Linear gradient with highlight sweep: `linear-gradient(105deg, #1e1e1e 30%, #333333 45%, #1e1e1e 60%)`
  - Hover transition to trigger light reflection.
- **Locker Mechanical Animation**:
  - CSS transforms with a mechanical/spring-like bezier: `cubic-bezier(0.175, 0.885, 0.32, 1.275)`

## 4. Section Themes (Lighting Metaphors)
1. **Hero**: Natural daylight / Dark Industrial (Charcoal, steel grey, orange flame particles)
2. **Blueprint**: Drafting room (Deep blueprint blue or technical light gray grid)
3. **Services**: Mechanical Charcoal (Raw steel, dark panel overlays)
4. **Training**: Documentary (Minimal overlay, clear photographs)
5. **Clients**: Steel (Engraved panels, silver/charcoal)
6. **Statistics**: Dashboard gauges (Technical stats, dark grey, red accent indicators)
7. **Mission**: Pure daylight white (High-contrast, high brightness)
8. **Contact**: Emergency red (Vibrant warning red, dark red contrast)
