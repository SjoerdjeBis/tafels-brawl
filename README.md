# Tafels Brawl ⚡👻⛏️

Een speelse tafel-oefen website voor een 8-jarige, met vijf werelden, een verzamelalbum en baasgevechten. Gemaakt voor de telefoon.

![preview](https://img.shields.io/badge/single--file-HTML-orange)
![offline](https://img.shields.io/badge/offline-ready-brightgreen)

## Wat is het?

Een statische website (één `index.html` met alles inline — base64 afbeeldingen, CSS, JS) waarbij je oefent met de tafels van 2 t/m 12, 15 en 20. Bij goede antwoorden verdien je personages.

## Functies

- **Profielen** — Ben, Jonas en Gast (voor vriendjes, begint steeds opnieuw); elk kind heeft een eigen album, oefengeheugen, records en bazen, en kiest zelf een plaatje
- **Startscherm in 3 stappen** — 1) kies je wereld en bekijk je verzamelalbum, 2) kies je spel, 3) kies je tafels (2 t/m 12, 15 en 20, met ★★★ per tafel)
- **Verzamelalbum** — per wereld een tabblad, alle personages gegroepeerd op zeldzaamheid; tik voor details
- **Vijf werelden**:
  - ⚡ **Brawl Stars** — 75 brawlers
  - 👻 **Monsters** — 40 cartoon-monsters
  - ⛏️ **Minecraft** (Tafelcraft) — 41 mobs als pixel-art
  - 🦖 **Dino's** (Tafelsaurus) — 33 dino's als pixel-art
  - ⚽ **Voetbal** (Tafelvoetbal) — 63 voetbalplaatjes: wereldsterren, Oranje, PSV, Feyenoord, AZ, Ajax en Vitesse, met club, land, positie en sterkte; brons, zilver, goud en ✨ glimmers
- **Vier spelvormen**:
  - ⏱️ **Toets** — op tijd; eerst 3, daarna 5 goed voor een personage; de tijd past zich aan
  - 🎯 **Missie** — zonder klok; 5 goed voor de eerste 5 personages, daarna 7
  - ⚔️ **Baas** — versla de baas met goede antwoorden (3 op rij = dubbele schade); te laat of fout kost een hartje; elke baas maakt de volgende sterker en geeft een zeldzamer personage
  - 🎮 **Vrij** — pure oefenmodus zonder beloning of druk
- **Eigen cijfertoetsenbord** — grote knoppen, geen telefoontoetsenbord (op de computer werkt het gewone toetsenbord ook)
- **Slim oefenen** — elke som heeft een niveau (0–3) dat bewaard blijft; moeilijke sommen komen vaker, bekende soms andersom (`? × 6 = 42`)
- **Leren van fouten** — bij een fout zie je de hele som en typ je het goede antwoord over
- **📊 Overzicht** — per kind: per som wat goed en fout gaat, welke tafels nog lastig zijn, de lastigste sommen, verzameld per wereld, en wissen
- **Alles wordt bewaard** in `localStorage` (per profiel): albums, records, bazen, oefengeheugen
- **☁️ Op al je apparaten** — met een gezinscode (📊 → ☁️) worden Ben en Jonas gesynchroniseerd via Firebase (Firestore, locatie Nederland); samenvoegen in plaats van overschrijven, de gast wordt nooit opgeslagen. Een ander apparaat koppel je met de gekopieerde link (`?gezin=…`)
- **Mobiel eerst** — past zonder scrollen, ook op kleine telefoons; timers pauzeren als de app naar de achtergrond gaat
- **Installeerbaar + offline** — zet de site op je beginscherm (PWA)

## Gebruik

Open https://sjoerdjebis.github.io/tafels-brawl/ op de telefoon en kies *Zet op beginscherm*. Lokaal: dubbelklik `index.html` (offline/installeren werkt alleen via https of localhost).

## Bestanden

- `index.html` — de hele app
- `manifest.webmanifest`, `sw.js`, `icon-*.png` — installeren als app en offline werken
- `brawlers/`, `monsters/` — bronafbeeldingen (staan ook inline in `index.html`)

## Tech

- Single file HTML/CSS/JS, ~1.7MB
- Vanilla JS (geen frameworks)
- Firebase (project `tafels-brawl`): anonieme inlog + Firestore; de SDK wordt alleen geladen als er een gezinscode is. Beveiliging via Firestore-regels: alleen met de geheime gezinscode (≥ 20 tekens) kun je lezen/schrijven
- Google Fonts: Lilita One, Baloo 2, Pixelify Sans, Press Start 2P
- 25 originele monster-illustraties gegenereerd met Python + PIL
- Minecraft-mobs, dino's en voetballers: pixel-art, in de browser getekend op een canvas
- 15 extra monsters: in de browser getekend
- Voetbalgegevens (clubs, scores) zijn een inschatting van oktober 2026; de scores zijn eigen schattingen
- Brawler portraits van community Brawl Stars CDN

## Credits

- Brawl Stars personages zijn eigendom van Supercell, Minecraft van Mojang/Microsoft — gebruikt voor educatief, niet-commercieel doel
- Voetballers zijn echte personen; de pixel-poppetjes zijn eigen, gestileerde tekeningen (geen foto's)
- Monster-illustraties: origineel werk, vrij te gebruiken
- Fonts: [Lilita One](https://fonts.google.com/specimen/Lilita+One), [Baloo 2](https://fonts.google.com/specimen/Baloo+2), [Pixelify Sans](https://fonts.google.com/specimen/Pixelify+Sans), [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)

Gemaakt met [Claude Code](https://claude.com/claude-code).
