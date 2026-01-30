# Brand fonts

**Modern Love** (heading font) is currently loaded from **onlinewebfonts.com** via `@font-face` in the template CSS – no local files required.

To self-host instead, place `ModernLove-Regular.woff2` (and optionally `.woff`) here and update the `@font-face` `src` URLs in `templates/final-frontpage-template.html` to point to `../assets/fonts/...`.
