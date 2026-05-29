# Tafels Brawl ⚡👻

Een speelse tafel-oefen website voor een 8-jarige, met twee thema's en unlockable rewards.

![preview](https://img.shields.io/badge/single--file-HTML-orange)
![offline](https://img.shields.io/badge/offline-ready-brightgreen)

## Wat is het?

Een statische website (één `index.html` bestand met alles inline — base64 afbeeldingen, CSS, JS) waarbij je oefent met de tafels van 2 t/m 10. Bij goede antwoorden verdien je personages.

## Functies

- **Tafels kiezen** — 2 t/m 10 zelf selecteren
- **Drie speelmodi**:
  - 🏆 **Toets** — 30-seconden ronde, brawlers/monsters verdienen
  - 🎯 **Missie** — geen timer, wel rewards
  - 🎮 **Vrij** — pure oefenmodus zonder beloning of druk
- **Twee thema's** met verschillende look & feel:
  - **Brawl Stars** — oranje/goud, 25 brawlers (Shelly, Colt, Spike, Leon...)
  - **Monsters** — paars/slijmgroen + Creepster horror-font, 25 originele cartoon-monsters (Pootje, Vleerbas, Bonk, Hokus-Pokus...)
- **Adaptief leren** — fout beantwoorde sommen komen verderop terug, dezelfde som komt nooit 2x op rij
- **Persoonlijke records** in localStorage (top score, langste streak, meeste verzameld per thema)
- **Geluidseffecten** via Web Audio (mute-toggle, voorkeur opgeslagen)
- **Eind-van-ronde samenvatting** met beste/slechtste tafel
- **Volledig responsive** — past op desktop en mobiel zonder scrollen
- **Werkt offline** — alle afbeeldingen inline base64

## Gebruik

Dubbelklik `index.html` of open in een browser. Geen build, geen server nodig.

## Tech

- Single file HTML/CSS/JS, ~1.15MB
- Vanilla JS (geen frameworks)
- Google Fonts: Lilita One, Creepster
- 25 originele monster-illustraties gegenereerd met Python + PIL
- Brawler portraits van community Brawl Stars CDN

## Credits

- Brawl Stars personages zijn eigendom van Supercell — gebruikt voor educatief, niet-commercieel doel
- Monster-illustraties: origineel werk, vrij te gebruiken
- Fonts: [Lilita One](https://fonts.google.com/specimen/Lilita+One), [Creepster](https://fonts.google.com/specimen/Creepster)

Gemaakt met [Claude Code](https://claude.com/claude-code).
