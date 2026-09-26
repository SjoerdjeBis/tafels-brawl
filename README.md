# Tafels Brawl ⚡👻⛏️

Een speelse tafel-oefen website voor een 8-jarige, met drie thema's en unlockable rewards. Gemaakt voor de telefoon.

![preview](https://img.shields.io/badge/single--file-HTML-orange)
![offline](https://img.shields.io/badge/offline-ready-brightgreen)

## Wat is het?

Een statische website (één `index.html` met alles inline — base64 afbeeldingen, CSS, JS) waarbij je oefent met de tafels van 2 t/m 11. Bij goede antwoorden verdien je personages.

## Functies

- **Tafels kiezen** — 2 t/m 11, met ★★★ per tafel die laten zien hoe goed je hem al kent
- **Eigen cijfertoetsenbord** — grote knoppen, geen telefoontoetsenbord dat steeds open/dicht klapt (op de computer werkt het gewone toetsenbord ook)
- **Drie speelmodi**:
  - 🏆 **Toets** — ronde op tijd; de tijd past zich aan (lukt het, dan iets sneller; tijd op, dan meer tijd)
  - 🎯 **Missie** — geen timer, wel rewards
  - 🎮 **Vrij** — pure oefenmodus zonder beloning of druk
- **Drie thema's**:
  - **Brawl Stars** — oranje/goud, 45 brawlers
  - **Monsters** — paars/slijmgroen, 25 originele cartoon-monsters
  - **Minecraft** (Tafelcraft) — blokkig, pixel-font, 26 mobs als pixel-art
- **Verzameling blijft bewaard** — per thema in `localStorage`; eerst gewone, later zeldzame personages
- **Slim oefenen** — elke som heeft een niveau (0–3) dat over sessies bewaard blijft; moeilijke sommen komen vaker, bekende sommen soms andersom (`? × 6 = 42`)
- **Leren van fouten** — bij een fout zie je de hele som en typ je het goede antwoord over (timer pauzeert even)
- **Persoonlijke records** (top score, langste streak)
- **Geluidseffecten** via Web Audio (mute-toggle, voorkeur opgeslagen)
- **Eind-van-ronde samenvatting** met beste/slechtste tafel
- **Mobiel eerst** — past zonder scrollen, ook op kleine telefoons; timer pauzeert als de app naar de achtergrond gaat
- **Installeerbaar + offline** — zet de site op je beginscherm (PWA); lettertypes worden ook gecachet

## Gebruik

Open https://sjoerdjebis.github.io/tafels-brawl/ op de telefoon en kies *Zet op beginscherm*. Lokaal: dubbelklik `index.html` (offline/installeren werkt alleen via https of localhost).

## Bestanden

- `index.html` — de hele app
- `manifest.webmanifest`, `sw.js`, `icon-*.png` — installeren als app en offline werken
- `brawlers/`, `monsters/` — bronafbeeldingen (staan ook inline in `index.html`)

## Tech

- Single file HTML/CSS/JS, ~1.3MB
- Vanilla JS (geen frameworks)
- Google Fonts: Lilita One, Baloo 2, Pixelify Sans, Press Start 2P
- 25 originele monster-illustraties gegenereerd met Python + PIL
- Minecraft-mobs: 8×8 pixel-art, in de browser getekend op een canvas
- Brawler portraits van community Brawl Stars CDN

## Credits

- Brawl Stars personages zijn eigendom van Supercell, Minecraft van Mojang/Microsoft — gebruikt voor educatief, niet-commercieel doel
- Monster-illustraties: origineel werk, vrij te gebruiken
- Fonts: [Lilita One](https://fonts.google.com/specimen/Lilita+One), [Baloo 2](https://fonts.google.com/specimen/Baloo+2), [Pixelify Sans](https://fonts.google.com/specimen/Pixelify+Sans), [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)

Gemaakt met [Claude Code](https://claude.com/claude-code).
