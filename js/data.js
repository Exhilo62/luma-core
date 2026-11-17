/*
  LUMA CORE — site content
  ------------------------
  Everything the site shows comes from this file. To add a project, copy one
  of the entries below and change it. No other file needs editing.

  Fields
    id          unique slug, used in the URL: project.html?id=<id>
    category    "texture" (4K texture packs), "ds" (optimized DS games) or "app"
    title       display name
    platform    small line above the title
    tagline     two short lines
    status      "released" | "beta" | "complete" | "dev" | "planned"
    version     e.g. "v1" (optional)
    progress    0-100, or null to show no progress bar
    note        one line shown under the progress bar
    notice      optional call-out shown at the top of the project page
    description paragraph for the project page
    features    bullet list for the project page
    wall        optional grid of small pictures: { title, text, images: [...] }
    videos      optional YouTube videos: [["videoId", "Title"], ...]
    sections    optional extra sections: { h: heading, p: text, list: [..], chips: [..] }
    guide       optional links into the guide: [["Label", "section-anchor"], ...]
    stats       optional facts for the side panel: [["Files", "5,937"], ...]
    colors      two colours used for the glow and for placeholder art
    images      paths to images. Leave a value as "" to use a placeholder.
                  icon    square thumbnail
                  art     background for the big block on the home page
                  artPos  which part of the art to keep in view, e.g. "70% 35%"
                  logo    title logo for the block's top-right corner
                  feature large image on the right of the block (app tile)
                  featureWide true when the feature is a wide logo, not a square tile
                  artBlur true to blur the art into a soft colour backdrop
                  artFilter optional CSS filter to recolour the art, e.g. "hue-rotate(55deg)"
                  after   main screenshot (for texture packs: the 4x shot)
                  before  texture packs only: the original shot, same framing
                          as "after". Leave "" to show "after" with no slider.
                  labels  the two slider labels, e.g. ["4:3", "Widescreen"]
                  aspect  shape of the main image, e.g. "5 / 3" or "1 / 1"
                  gallery extra screenshots
    pack        the pack's download: { file, size, system, code, sha256, addon }
    github      optional "owner/repo": the version and downloads then follow the latest GitHub release
    links       download / source URLs. Leave "" to show "Coming soon".
*/
window.LUMA = {
  site: {
    name: "Luma Core",
    tagline: "A dual-screen home for your handheld library.",
    logo: "img/logo-banner.png",
    heroStart: "final-fantasy-explorers", // id of the pack the home showcase opens on
    about:
      "Luma Core turns a dual-screen handheld into a game console with a 3DS-style Home. Game Boy, Game Boy Color, Game Boy Advance, DS and 3DS games share one shelf, and both screens are used everywhere. It is written for the AYN Thor. Alongside it we build 4K texture packs for 3DS games, delivered through the Luma Shop.",
    facts: [
      ["13", "4K texture packs"],
      ["241,912", "files across all packs"],
      ["79 GB", "of upscaled textures"],
      ["43", "Luma achievements to earn"]
    ],
    /* THE SWITCH FOR PACK DOWNLOADS.
       false: every pack says "Download coming soon" and no download link is on the site.
       true:  every pack page and the install guide show their download buttons.
       Turn it to true when Luma Core opens for beta testing. Nothing else needs changing.
       A single pack can stay downloadable while this is false: give its "pack" entry  open: true
       (the Dragon Quest XI pack has it). */
    downloadsOpen: false,
    downloadsNote: "Pack downloads open when Luma Core comes out for beta testing.",
    /* Where the texture pack downloads live. Change this one line if the storage moves to its own domain. */
    packHost: "https://pub-8df91139c462411da2e445572576158e.r2.dev",
    /* "Two screens, one Home": a capture of both screens with numbered points.
       Each point: [left %, top %, title, text]. Positions are measured on the picture. */
    anatomy: {
      img: "guide/img/games-systems.jpg",
      points: [
        [50, 17, "What you have highlighted", "The top screen shows the highlighted game's banner, artwork or logo, or the system you are browsing."],
        [84, 3.5, "Time, battery and Wi-Fi", "Always in view at the top, so you never leave Home to check them."],
        [50, 55.5, "The Home bar", "A row of icon tabs: Home, Games, Forged, Notifications, Friends and Apps. L and R switch between them."],
        [40, 80, "Tiles", "Games, folders, badges and Luma apps. A opens one, X opens its menu, and touch works here too."],
        [50, 96.5, "The Open bar", "Opens whatever is highlighted. When a game is waiting behind Home, it offers Resume."]
      ]
    },
    /* "What each system gets": one card per system. [code, name, colour, link, link text, points].
       {gbc}, {gba}, {ds} and {packs} are filled in with live counts by app.js. */
    systems: [
      ["GB", "Game Boy", "#9bbc0f", "guide.html#games-and-system-folders", "In the guide",
        ["Its own folder on the shelf", "Save states and fast forward", "RetroAchievements"]],
      ["GBC", "Game Boy Color", "#b06bff", "#companions", "See the companion",
        ["{gbc} with a bottom-screen companion", "Save states and fast forward", "RetroAchievements"]],
      ["GBA", "Game Boy Advance", "#5b6dff", "#companions", "See the companions",
        ["{gba} with a bottom-screen companion", "Save states and fast forward", "RetroAchievements"]],
      ["DS", "Nintendo DS", "#39c8ff", "#ds", "See the DS games",
        ["{ds} tuned for the Thor", "HD textures and widescreen", "RetroAchievements"]],
      ["3DS", "Nintendo 3DS", "#ff5a5f", "#packs", "See the 3DS packs",
        ["{packs} at 4K", "Luma Core's own achievement sets", "Luma Pass: StreetPass by file"]]
    ],
    /* The showcase's second mode: Luma Core Home as it looks on the Thor.
       Each picture is a capture of both screens, top screen above bottom screen.
       [picture, title, tagline line 1, tagline line 2, guide section, colour 1, colour 2] */
    screens: [
      ["guide/img/games-systems.jpg", "Every system on one shelf", "Game Boy to 3DS,", "each in its own folder.", "games-and-system-folders", "#6ee7ff", "#2a4fa8"],
      ["guide/img/forged-tab.jpg", "The Forged tab", "The games we made something for,", "with their banner up top.", "forged-games", "#ffb347", "#8f3d1a"],
      ["guide/img/quick-resume.jpg", "Quick Resume", "Your last three games,", "ready where you left off.", "quick-resume", "#4fd38a", "#1c6a7a"],
      ["guide/img/suspend-window.jpg", "Pause behind Home", "Press Home and the game waits", "in a small window.", "playing-games", "#b58cff", "#3d2f73"],
      ["guide/img/my-home-folder.jpg", "Folders on My Home", "Rest one tile on another", "to make a folder.", "my-home", "#ff8fc7", "#6a3fd1"],
      ["guide/img/notifications.jpg", "Notifications", "Downloads, achievements and what's new,", "in one list.", "notifications", "#ffd766", "#a8611e"]
    ],
    /* The beta call-out on the home page. */
    beta: {
      title: "Beta testing is on the way",
      text: "Luma Core will open for beta testing. When it does, every texture pack becomes downloadable here, alongside the Luma Shop inside the app.",
      points: ["Luma Core app for the AYN Thor", "All texture pack downloads", "Manual install guide ready"]
    },
    /* "Latest updates" on the home page, newest first: [date, title, text, link]
       An entry whose link is a project with a "github" repo follows that repo's latest release. */
    news: [
      ["Nov 16, 2026", "Texture pack updates", "Every Pokémon pack is rebuilt with cleaner grass, edges and menu icons, and Dragon Quest XI, Ever Oasis, Final Fantasy Explorers, 7th Dragon III, Street Fighter IV, HeartGold, SoulSilver and Mario Kart DS get fixes too. Installed packs offer an Update in the Luma Shop.", "#packs"],
      ["Nov 16, 2026", "DQXI English Patch v0.1.45", "More official names and a round of layout fixes, after a tester played the whole game to 99.9%. Still a beta.", "project.html?id=dqxi-english-patch"],
      ["Nov 15, 2026", "Pokémon X and Y packs", "Two more 4K texture packs, one for each game, bring the count to thirteen. They are new and tested through the intro so far.", "project.html?id=pokemon-x"],
      ["Nov 15, 2026", "Pokémon Omega Ruby and Alpha Sapphire packs", "Two more 4K texture packs, one for each game, bring the count to eleven. They are new and still being checked.", "project.html?id=pokemon-omega-ruby"],
      ["Nov 15, 2026", "Pokémon SoulSilver gets its own HD pack", "SoulSilver now has the full treatment: an HD texture pack, widescreen and tuning for the Thor, like HeartGold.", "project.html?id=pokemon-soulsilver"],
      ["Nov 15, 2026", "DQXI English Patch v0.1.44", "The patch now runs through all three acts, with more official names, text fixes and a new two-minute video. Still a beta.", "project.html?id=dqxi-english-patch"],
      ["Nov 15, 2026", "Pokémon Ultra Sun and Ultra Moon packs", "Two new 4K texture packs, one for each game, bring the count to nine. Like the others, their downloads open with the beta.", "project.html?id=pokemon-ultra-sun"],
      ["Nov 15, 2026", "Luma Dex grows: more editing, the Bank and Luma Park", "Editing and Bank moves now reach from Red and Blue to X, Y, Omega Ruby and Alpha Sapphire, and Luma Park moves Pokémon on a generation.", "project.html?id=luma-dex"],
      ["Nov 15, 2026", "Import from Azahar and melonDS", "Bring your texture packs, mods and saves over from another emulator, from Settings or during setup.", "project.html?id=luma-core"],
      ["Nov 15, 2026", "Manual install guide is ready", "Direct pack downloads will open here when Luma Core comes out for beta testing. The step-by-step install guide is already up.", "install.html"],
      ["Nov 15, 2026", "The user guide is online", "The full Luma Core guide, with screenshots of every feature, can now be read on this site.", "guide.html"],
      ["Nov 14, 2026", "Dragon Quest XI English Patch v0.1.43", "The latest beta of the English translation, with patchers for PC and Android.", "project.html?id=dqxi-english-patch"],
      ["Nov 2026", "Seven 4K texture packs reach v1", "The first complete versions of all seven 3DS texture packs are in the Luma Shop.", "#packs"]
    ],
    /* "What's next" on the home page: [symbol, title, text, where the card links] */
    wip: "Every feature of Luma Core is a continuous work in progress.",
    roadmap: [
      ["✦", "More 4K texture packs", "The packs here are a start. More 3DS games are planned, and the existing packs keep being improved.", "#packs"],
      ["◐", "More companions", "More Game Boy and Game Boy Advance games are planned to get a bottom-screen companion of their own.", "#companions"],
      ["★", "Achievements for more 3DS games", "Luma Core's own achievement sets started with one 3DS game. Sets for more 3DS games are planned.", "project.html?id=achievements"]
    ],
    /* Small print shown under each home section and on the matching project pages. */
    /* Support: plain links, no third-party script. Each place is [name, address]; remove a line to drop it,
       or empty the list to hide the Support section, the heart and the footer links everywhere. */
    support: {
      places: [
        ["Ko-fi", "https://ko-fi.com/exhilo"],
        ["Buy Me a Coffee", "https://buymeacoffee.com/exhilo"]
      ],
      title: "Support the project",
      text: "Luma Core, its texture packs and its game tweaks are free. If you would like to help, you can leave a tip on Ko-fi or Buy Me a Coffee.",
      points: [
        "Donations are never required.",
        "Any donation is appreciated.",
        "All funds go into the ongoing work: more texture packs and game tweaks for Luma Core, and Luma Core's own development."
      ],
      note: "A donation is a gift. It does not buy a download, early access or anything else, and it never includes any game."
    },
    /* Shown in the footer of every page and in the About section. */
    ai: "AI disclosure: all Luma Core projects use AI. That includes the Luma Core app, the texture packs, the DS game tweaks, the companions and this website.",
    disclaimers: {
      texture: "Every texture pack is subject to change with user feedback, and will keep being updated as Luma Core advances and continues through development.",
      ds: "Every optimization is subject to change with user feedback, and will keep being updated as Luma Core advances and continues through development.",
      companions: "Every companion is subject to change with user feedback, and will keep being updated as Luma Core advances and continues through development.",
      app: "Every Luma app and feature is subject to change with user feedback, and will keep being updated as Luma Core advances and continues through development."
    },
    /* Home page app tour: [picture, title, text, guide section] */
    highlights: [
      ["guide/img/my-home.jpg", "Your own Home", "Lay out games, folders, badges and Luma apps like a 3DS HOME Menu. Move tiles with Y, rest one game on another to make a folder, and your layout survives a reinstall.", "my-home"],
      ["guide/img/games-systems.jpg", "Five systems, one shelf", "Game Boy, Game Boy Color, Game Boy Advance, DS and 3DS games together, each system in its own folder with a collage of its games.", "games-and-system-folders"],
      ["guide/img/forged-tab.jpg", "Forged games", "The games we made something for: our 4K texture packs, DS games tuned for the Thor, and Game Boy games with a companion on the bottom screen.", "forged-games"],
      ["guide/img/quick-resume.jpg", "Quick Resume", "Quit a game and pick it up right where you left off. It lists your last three games and never touches a game's own save file.", "quick-resume"],
      ["guide/img/companion-golden-sun.jpg", "Companions", "While a Game Boy game plays on top, the bottom screen shows your party, items or map, read live from the game.", "companions"],
      ["guide/img/shop.jpg", "Luma Shop", "Luma Core's own apps, extras and texture packs in one list, with downloads that carry on in the background.", "luma-shop"],
      ["guide/img/achievements-luma.jpg", "Achievements", "43 of Luma Core's own achievements, sets for 3DS games, and RetroAchievements for the older systems, all in one tab.", "achievements-and-retroachievements"],
      ["guide/img/friends-luma-card.jpg", "Luma Friends", "Friend codes and signed cards between Luma Core players, with no account and no server. Steam, RetroAchievements and Discord sit in the same list.", "luma-friends-and-the-friends-tab"]
    ],
    guideTopics: [
      ["First-time setup", "Six short steps to get going", "first-time-setup"],
      ["Home and the Home bar", "Tabs, buttons and Home's menu", "home-and-the-home-bar"],
      ["My Home", "Tiles, folders and badges", "my-home"],
      ["Playing games", "In-game menu, save states, suspend", "playing-games"],
      ["Forged games", "Games Luma Core made something for", "forged-games"],
      ["Luma Shop", "Apps, extras and texture packs", "luma-shop"],
      ["Luma Saves", "Back up, restore and edit saves", "luma-saves"],
      ["Luma Themes", "3DS themes and the system look", "luma-themes"],
      ["Achievements", "Luma, 3DS and RetroAchievements", "achievements-and-retroachievements"],
      ["Troubleshooting", "Common questions answered", "troubleshooting-and-faq"]
    ],
    /* Shown on every texture pack page. */
    packSections: [
      {
        h: "Getting it in Luma Core",
        list: [
          "Open the Luma Shop and go to Texture packs. You need your own copy of the game, or the shop shows Game not found.",
          "Downloads run in the background, so you can leave the shop while one carries on. Each download is checked before it installs.",
          "Keep about twice the pack's size free while it installs.",
          "Packs install to `LumaCore/textures`, one folder per game. Uninstalling removes only the pack; your game and saves are not touched."
        ]
      },
      {
        h: "Installing by hand",
        p: "Direct downloads will open on this page when Luma Core comes out for beta testing. You will then be able to install the pack yourself, in the Azahar emulator on a PC or Android device, or into Luma Core's own folder. The manual install guide is ready and walks through each."
      },
      {
        h: "A Forged game",
        p: "With the pack installed from the Luma Shop, the game appears on Luma Core's Forged tab with a gold Forged badge. To play without the pack, highlight the game, press X, choose Forged and set it to Off; your files stay where they are."
      }
    ],
    /* Home page: Game Boy / GBA companions. [title, system, tabs, what it shows] */
    companionShots: [
      ["guide/img/companion-golden-sun.jpg", "Golden Sun: the party"],
      ["guide/img/companion-crystal.jpg", "Pokémon Crystal: the trainer"],
      ["guide/img/companion-aria.jpg", "Castlevania: Aria of Sorrow"],
      ["img/comp-crystal-party.jpg", "Pokémon Crystal: the party"],
      ["img/comp-crystal-map.jpg", "Pokémon Crystal: the town map"],
      ["img/comp-harvest-moon.jpg", "Harvest Moon: the villagers"]
    ],
    companions: [
      ["Pokémon Crystal", "GBC", ["Party", "Trainer", "Map"], "Your party with levels, held items, HP and moves; your trainer card with all 16 badges; and the town map with your spot."],
      ["Pokémon FireRed", "GBA", ["Party", "Trainer", "Map"], "Party, trainer card and the game's own map, drawn from your ROM."],
      ["Pokémon LeafGreen", "GBA", ["Party", "Trainer", "Map"], "Party, trainer card and the game's own map, drawn from your ROM."],
      ["Pokémon Emerald", "GBA", ["Party", "Trainer", "Map"], "Party, trainer card and the game's own map, drawn from your ROM."],
      ["Golden Sun", "GBA", ["Party", "Djinn", "Items", "Map"], "Levels, classes, HP and PP for the party, every Djinni and who holds it, your items, and a map with your place and coins."],
      ["Golden Sun: The Lost Age", "GBA", ["Party", "Djinn", "Items", "Map"], "Levels, classes, HP and PP for the party, every Djinni and who holds it, your items, and a map with your place and coins."],
      ["Dragon Ball Z: The Legacy of Goku", "GBA", ["Goku", "Bag"], "Goku's level, HP and Ki, and what is in his bag."],
      ["Dragon Ball Z: The Legacy of Goku II", "GBA", ["Party", "Dragon Balls", "Items"], "Your party, the Dragon Balls found so far, your items and where you are."],
      ["Castlevania: Aria of Sorrow", "GBA", ["Soma", "Souls", "Map"], "Soma's stats, gold and status, the souls collected, and the castle map with the game's own percentage."],
      ["Metroid Fusion", "GBA", ["Samus", "Map"], "Energy, missiles and power bombs, upgrades found and still missing, and the area map with each area's completion."],
      ["Metroid: Zero Mission", "GBA", ["Samus", "Map"], "Energy, missiles and power bombs, upgrades found and still missing, and the area map with each area's completion."],
      ["The Legend of Zelda: A Link to the Past", "GBA", ["Link", "Items", "Map"], "Hearts, rupees, bombs and arrows, crystals and pendants, your gear, and the Light or Dark World map."],
      ["Harvest Moon: Friends of Mineral Town", "GBA", ["Today", "Field", "Hearts", "Villagers"], "Today's date, weather and forecast, crop days in the field, and every villager's friendship and birthday."],
      ["Harvest Moon: More Friends of Mineral Town", "GBA", ["Today", "Field", "Hearts", "Villagers"], "Today's date, weather and forecast, crop days in the field, and every villager's friendship and birthday."],
      ["Fire Emblem (The Blazing Blade)", "GBA", ["Cursor", "Army", "Enemies"], "The unit under the cursor, your army and the enemies, with the turn, phase and gold on top."],
      ["Fire Emblem: The Sacred Stones", "GBA", ["Cursor", "Army", "Enemies"], "The unit under the cursor, your army and the enemies, with the turn, phase and gold on top."]
    ],
    companionNote:
      "Names and pictures come from your own ROM, and only the exact retail release of each game gets a companion, not ROM hacks. Every companion also has a Saves button for quick save and load. Golden Sun - Dual Screen Companion is a separate extra in the Luma Shop.",
    /* Shown on every optimized DS game page. */
    dsSections: [
      {
        h: "Three Forged settings",
        list: [
          "AYN Thor optimized: the texture pack, widescreen everywhere and the bottom screen extended. Made for the Thor, and marked experimental on other devices.",
          "Basics: the texture pack and widescreen 3D worlds only. Fine on any device.",
          "Off: the game as it is. This is the default."
        ]
      },
      {
        h: "Turning it on",
        p: "Highlight the game, press X and choose Forged. It applies from the game's next start, and every region of the game counts. The game's HD pack can also be switched off on its own in its Game settings."
      }
    ],
    dsGuide: [["Forged games", "forged-games"], ["Playing games", "playing-games"], ["Luma Shop", "luma-shop"]],
    packGuide: [["Luma Shop", "luma-shop"], ["Forged games", "forged-games"], ["First-time setup", "first-time-setup"]],
    links: {
      github: "",
      discord: ""
    }
  },

  projects: [
    /* ---------- 4K texture packs ---------- */
    {
      id: "legend-of-legacy",
      category: "texture",
      title: "The Legend of Legacy",
      platform: "Nintendo 3DS · 4K texture pack",
      tagline: ["A storybook world,", "redrawn in sharp detail."],
      status: "complete",
      version: "v1",
      progress: 100,
      note: "Installs from the Luma Shop inside Luma Core.",
      description:
        "A 4x texture pack for The Legend of Legacy. Characters, environments and interface art are upscaled, and the system font is replaced with HD glyphs so text stays crisp on a large screen.",
      features: ["4,403 unique textures upscaled 4x", "HD system-font sheets for sharp text", "For Azahar / Citra-based emulators"],
      stats: [["Files", "5,937"], ["Size", "7.20 GB"], ["Upscale", "4x"]],
      pack: { file: "legendoflegacy-000400000016DB00-v1.zip", size: "7.20 GB", system: "3DS", code: "000400000016DB00", sha256: "dbb4f0a2d0f37d8d07a89a33644d1c1ddb04991a849141852ed8b1d3bf133f0b" },
      colors: ["#3fa87a", "#1d4f6b"],
      images: { icon: "img/icon-legacy.png", art: "img/art/legacy-art.jpg", artPos: "70% 35%", logo: "img/art/legacy-logo.png", after: "img/art/legacy-art.jpg", before: "", aspect: "1280 / 768", gallery: ["img/art/legacy-art2.jpg"] },
      links: { download: "", source: "" }
    },
    {
      id: "alliance-alive",
      category: "texture",
      title: "The Alliance Alive",
      platform: "Nintendo 3DS · 4K texture pack",
      tagline: ["Four realms, one alliance.", "Every brushstroke restored."],
      status: "complete",
      version: "v1",
      progress: 100,
      note: "Installs from the Luma Shop inside Luma Core.",
      description:
        "A 4x texture pack for The Alliance Alive. The painterly look of the original is kept intact while towns, menus and map screens are raised well beyond the handheld's native resolution.",
      features: ["7,858 textures upscaled 4x", "Map textures taken from 1024 to 4096", "For Azahar / Citra-based emulators"],
      stats: [["Files", "10,453"], ["Size", "8.81 GB"], ["Upscale", "4x"]],
      pack: { file: "alliancealive-00040000001CCD00-v1.zip", size: "8.81 GB", system: "3DS", code: "00040000001CCD00", sha256: "71985cb44e84deaab5745a83be887fbd40f907c6e98baf55482112f6bd61bccb" },
      colors: ["#5b7bd6", "#2a2f6e"],
      images: { icon: "img/icon-alliance.png", art: "img/art/alliance-art.jpg", artPos: "30% 25%", logo: "img/art/alliance-logo.png", after: "img/alliance-after.jpg", before: "img/alliance-before.jpg", aspect: "718 / 444", gallery: ["img/pack-alliance.jpg", "img/art/alliance-art.jpg", "img/art/alliance-art2.jpg"] },
      links: { download: "", source: "" }
    },
    {
      id: "final-fantasy-explorers",
      category: "texture",
      title: "Final Fantasy Explorers",
      platform: "Nintendo 3DS · 4K texture pack",
      tagline: ["Hunt the eidolons.", "See every crystal shine."],
      status: "complete",
      version: "v2",
      progress: 100,
      note: "Installs from the Luma Shop inside Luma Core.",
      description:
        "A 4x texture pack for Final Fantasy Explorers. Every texture stored in the game is upscaled: monsters, gear, the HUD, menus and the dialogue font.",
      features: ["Every in-game texture upscaled 4x", "Sharper HUD, menus and dialogue font", "For Azahar / Citra-based emulators"],
      stats: [["Files", "7,501"], ["Size", "1.97 GB"], ["Upscale", "4x"]],
      sections: [
        { h: "Version 2 (November 16, 2026)", p: "Cleaner edges on cut-out art, where the upscale had left dark fringes." }
      ],
      pack: { file: "ffexplorers-000400000016ED00-v2.zip", size: "1.97 GB", system: "3DS", code: "000400000016ED00", sha256: "f0deeaaa50ad46c61efbe3bcd342addd6c3762c4501b51a121ce257ec138a191" },
      colors: ["#4fc3e8", "#1b3f7a"],
      images: { icon: "img/icon-ffe.png", art: "img/art/ffe-art.jpg", artPos: "center 20%", logo: "img/art/ffe-logo.png", after: "img/ffe-after.jpg", before: "img/ffe-before.jpg", aspect: "524 / 468", gallery: ["img/pack-ffe.jpg", "img/art/ffe-art.jpg", "img/art/ffe-art2.jpg"] },
      links: { download: "", source: "" }
    },
    {
      id: "7th-dragon-iii",
      category: "texture",
      title: "7th Dragon III Code: VFD",
      platform: "Nintendo 3DS · 4K texture pack",
      tagline: ["Three eras. Seven dragons.", "One much sharper Tokyo."],
      status: "complete",
      version: "v2",
      progress: 100,
      note: "Installs from the Luma Shop inside Luma Core.",
      description:
        "An HD texture pack for 7th Dragon III Code: VFD. Game textures are upscaled 4x, and the system font is replaced with HD glyphs so dialogue boxes read cleanly.",
      features: ["Game textures upscaled 4x", "HD system-font sheets for sharp text", "For Azahar / Citra-based emulators"],
      stats: [["Files", "13,381"], ["Size", "4.28 GB"], ["Upscale", "4x"]],
      sections: [
        { h: "Version 2 (November 16, 2026)", p: "Cleaner edges on glows and other see-through effects, where the upscale had left dark fringes." }
      ],
      pack: { file: "7thdragon3-000400000018F800-v2.zip", size: "4.28 GB", system: "3DS", code: "000400000018F800", sha256: "8666f7a22ab7fc2529a2ec9cbca29cb08e6715c1142fcc13205e7e49b6086d08" },
      colors: ["#3fc9b8", "#1d4a5e"],
      images: { icon: "img/icon-7d3.png", art: "img/art/7d3-art.jpg", artPos: "70% center", logo: "img/art/7d3-logo.png", after: "img/art/7d3-art.jpg", before: "", aspect: "1800 / 900", gallery: ["img/art/7d3-art2.jpg"] },
      links: { download: "", source: "" }
    },
    {
      id: "code-name-steam",
      category: "texture",
      title: "Code Name: S.T.E.A.M.",
      platform: "Nintendo 3DS · 4K texture pack",
      tagline: ["Comic-book ink,", "now with crisp lines."],
      status: "complete",
      version: "v1",
      progress: 100,
      note: "Installs from the Luma Shop inside Luma Core.",
      description:
        "A 4x texture pack for Code Name: S.T.E.A.M. The comic-book art style gains a lot from higher resolution, with textures taken from 1024 up to 4096.",
      features: ["Textures upscaled 4x, up to 4096", "For Azahar / Citra-based emulators"],
      stats: [["Files", "4,372"], ["Size", "3.38 GB"], ["Upscale", "4x"]],
      pack: { file: "codenamesteam-0004000000132500-v1.zip", size: "3.38 GB", system: "3DS", code: "0004000000132500", sha256: "0864ae837511d672030c1c6d30c64e0171e4f75ac1568a3ad2c7e660ad8a5ec3" },
      colors: ["#e8963f", "#7a2f1b"],
      images: { icon: "img/icon-steam.png", art: "img/art/steam-art.jpg", artPos: "65% 20%", logo: "img/art/steam-logo.png", after: "img/art/steam-art.jpg", before: "", aspect: "1537 / 897", gallery: ["img/art/steam-art2.jpg"] },
      links: { download: "", source: "" }
    },
    {
      id: "ever-oasis",
      category: "texture",
      title: "Ever Oasis",
      platform: "Nintendo 3DS · 4K texture pack",
      tagline: ["Grow your oasis.", "Watch the desert bloom in 4K."],
      status: "complete",
      version: "v2",
      progress: 100,
      note: "Installs from the Luma Shop inside Luma Core.",
      description:
        "A 4x texture pack for Ever Oasis. Characters, effects and the oasis itself are upscaled so the game looks at home on a modern screen.",
      features: ["Textures upscaled 4x; the game's 245 lookup maps stay at their original size", "For Azahar / Citra-based emulators"],
      stats: [["Files", "13,261"], ["Size", "2.98 GB"], ["Upscale", "4x"]],
      sections: [
        { h: "Version 2 (November 16, 2026)", p: "The game's 245 lookup maps are no longer replaced. They are data the game reads, not pictures, and upscaling them changed how some surfaces looked." }
      ],
      pack: { file: "everoasis-00040000001A4800-v2.zip", size: "2.98 GB", system: "3DS", code: "00040000001A4800", sha256: "24c4864d3c7064a9847973a0fc449efb5f670fbf2dcf390a8a21379a405770e0" },
      colors: ["#f2c14e", "#c2552d"],
      images: { icon: "img/icon-everoasis.png", art: "img/art/everoasis-art.jpg", artPos: "center 40%", logo: "img/art/everoasis-logo.png", after: "img/everoasis-after.jpg", before: "img/everoasis-before.jpg", aspect: "1 / 1", gallery: ["img/art/everoasis-art.jpg", "img/art/everoasis-art2.jpg"] },
      links: { download: "", source: "" }
    },
    {
      id: "street-fighter-iv-3d",
      category: "texture",
      title: "Super Street Fighter IV 3D",
      platform: "Nintendo 3DS · 4K texture pack",
      tagline: ["Every fighter. Every stage.", "Ready for a bigger screen."],
      status: "complete",
      version: "v2",
      progress: 100,
      note: "Installs from the Luma Shop inside Luma Core. Menu text is not covered yet.",
      description:
        "A 4x texture pack for Super Street Fighter IV 3D Edition. Fighter models, character portraits and stage textures are all upscaled.",
      features: ["5,444 unique textures upscaled 4x", "Fighters, portraits and stages", "For Azahar / Citra-based emulators"],
      stats: [["Files", "6,936"], ["Size", "6.36 GB"], ["Upscale", "4x"]],
      sections: [
        { h: "Version 2 (November 16, 2026)", p: "Cleaner edges on the flames and trees, where the upscale had left dark fringes." }
      ],
      pack: { file: "ssf4-0004000000032D00-v2.zip", size: "6.36 GB", system: "3DS", code: "0004000000032D00", sha256: "e5245a3fc11a07e76227fa828c29caa8c1e388373c72d4564774afdd34e64d00" },
      colors: ["#d94a3a", "#2b2f4f"],
      images: { icon: "img/icon-ssf4.png", art: "img/art/ssf4-art.jpg", artPos: "85% 30%", logo: "img/art/ssf4-logo.png", after: "img/ssf4-after.jpg", before: "img/ssf4-before.jpg", aspect: "1 / 1", gallery: ["img/pack-ssf4.jpg", "img/art/ssf4-art.jpg", "img/art/ssf4-art2.jpg"] },
      links: { download: "", source: "" }
    },
    {
      id: "pokemon-ultra-sun",
      category: "texture",
      title: "Pokémon Ultra Sun",
      platform: "Nintendo 3DS · 4K texture pack",
      tagline: ["All of Alola,", "four times sharper."],
      status: "complete",
      version: "v3",
      progress: 100,
      note: "Installs from the Luma Shop inside Luma Core.",
      description:
        "A 4x texture pack for Pokémon Ultra Sun. Every texture stored in the game is upscaled: Pokémon models, trainers and other characters, field maps and buildings, battle backgrounds and effects, menus and the game's own font sheets. The player character's own textures are not covered, because the game builds them while it runs.",
      features: ["26,076 files upscaled 4x, with a method picked for each kind of picture", "Pokémon models, trainers, maps, battle effects, menus and the games' own font sheets", "No HD system-font sheets: these games draw text from their own fonts", "For Azahar / Citra-based emulators"],
      stats: [["Files", "26,076"], ["Size", "8.92 GB"], ["Upscale", "4x"]],
      sections: [
        { h: "Version 3 (November 16, 2026)", p: "Rebuilt with a method picked for each kind of picture: a model that keeps detail for Pokémon and trainers, smooth clean edges for cut-out art like grass, flowers and fences, painted grounds that keep their brushwork, and masks, particles and lighting left at the original size so the game handles them as before. That is why it has fewer files than version 1. Menu and battle icons fixed: no more thin line under the Poké Balls and other small icons, and small icons drawn crisply instead of with invented outlines." }
      ],
      pack: { file: "ultrasun-00040000001B5000-v3.zip", size: "8.92 GB", system: "3DS", code: "00040000001B5000", sha256: "3036450ed45147a4329065eee84242d099f3306dd513590a172a9b6ded7f0a04" },
      colors: ["#f08a2c", "#7a2a12"],
      images: { icon: "img/icon-ultrasun.png", art: "img/art/usum-art.jpg", artPos: "40% 30%", after: "img/ultrasun-logo-after.jpg", before: "img/ultrasun-logo-before.jpg", aspect: "1620 / 880", gallery: ["img/art/usum-art.jpg", "img/usum-after.jpg"] },
      links: { download: "", source: "" }
    },
    {
      id: "pokemon-ultra-moon",
      category: "texture",
      title: "Pokémon Ultra Moon",
      platform: "Nintendo 3DS · 4K texture pack",
      tagline: ["The same sharper Alola,", "under the moon."],
      status: "complete",
      version: "v3",
      progress: 100,
      note: "Installs from the Luma Shop inside Luma Core.",
      description:
        "A 4x texture pack for Pokémon Ultra Moon. It holds the same images as the Ultra Sun pack, under Ultra Moon's own title ID, so each game has a pack of its own. The player character's own textures are not covered, because the game builds them while it runs.",
      features: ["26,076 files upscaled 4x, with a method picked for each kind of picture", "Pokémon models, trainers, maps, battle effects, menus and the games' own font sheets", "No HD system-font sheets: these games draw text from their own fonts", "For Azahar / Citra-based emulators"],
      stats: [["Files", "26,076"], ["Size", "8.92 GB"], ["Upscale", "4x"]],
      sections: [
        { h: "Version 3 (November 16, 2026)", p: "Rebuilt with a method picked for each kind of picture: a model that keeps detail for Pokémon and trainers, smooth clean edges for cut-out art like grass, flowers and fences, painted grounds that keep their brushwork, and masks, particles and lighting left at the original size so the game handles them as before. That is why it has fewer files than version 1. Menu and battle icons fixed: no more thin line under the Poké Balls and other small icons, and small icons drawn crisply instead of with invented outlines." },
        { h: "Tested on the AYN Thor", p: "On November 15, 2026 the pack was downloaded and installed from the Luma Shop on an AYN Thor. The download resumed after a pause, the file check passed, all 36,622 files installed, and the game starts with the HD pack." }
      ],
      pack: { file: "ultramoon-00040000001B5100-v3.zip", size: "8.92 GB", system: "3DS", code: "00040000001B5100", sha256: "f053d2863dfbeaf6315f67124a22a46a0159bebfaf532d591a4832eb3be89e8d" },
      colors: ["#6a5cff", "#1d1650"],
      images: { icon: "img/icon-ultramoon.png", art: "img/art/usum-art.jpg", artPos: "40% 30%", after: "img/ultramoon-logo-after.jpg", before: "img/ultramoon-logo-before.jpg", aspect: "1620 / 880", gallery: ["img/art/usum-art.jpg", "img/usum-after.jpg"] },
      links: { download: "", source: "" }
    },
    {
      id: "pokemon-omega-ruby",
      category: "texture",
      title: "Pokémon Omega Ruby",
      platform: "Nintendo 3DS · 4K texture pack",
      tagline: ["Hoenn, redrawn", "four times sharper."],
      status: "complete",
      version: "v2",
      progress: 100,
      note: "Installs from the Luma Shop inside Luma Core. Tested through Omega Ruby's intro so far.",
      description:
        "A 4x texture pack for Pokémon Omega Ruby. Every texture stored in the game is upscaled: Pokémon models, trainers and other characters, field maps and buildings, battle backgrounds and effects, menus and the game's own font sheets.",
      features: ["25,199 files upscaled 4x, with a method picked for each kind of picture", "Pokémon models, trainers, maps, battle effects, menus and the games' own font sheets", "No HD system-font sheets: these games draw text from their own fonts", "For Azahar / Citra-based emulators"],
      stats: [["Files", "25,199"], ["Size", "8.58 GB"], ["Upscale", "4x"]],
      sections: [
        { h: "Version 2 (November 16, 2026)", p: "Rebuilt with a method picked for each kind of picture: a model that keeps detail for Pokémon and trainers, smooth clean edges for cut-out art like grass, flowers and fences, painted grounds that keep their brushwork, and masks, particles and lighting left at the original size so the game handles them as before. That is why it has fewer files than version 1. Menu and battle icons fixed: no more thin line under the Poké Balls and other small icons, and small icons drawn crisply instead of with invented outlines." },
        { h: "Checked so far", p: "This pack is new. It has been tested through Omega Ruby's intro so far, and more of the game will be checked before downloads open." }
      ],
      pack: { file: "omegaruby-000400000011C400-v2.zip", size: "8.58 GB", system: "3DS", code: "000400000011C400", sha256: "b79861a8024436bc0e3d2de7e22973942d361526dc6c3ab11f39dc95901175c9" },
      colors: ["#d8433a", "#5a1418"],
      images: { icon: "img/icon-omegaruby.png", art: "img/art/oras-art.jpg", artPos: "center 45%", after: "img/omegaruby-logo-after.jpg", before: "img/omegaruby-logo-before.jpg", aspect: "1620 / 880", gallery: ["img/art/oras-art.jpg"] },
      links: { download: "", source: "" }
    },
    {
      id: "pokemon-alpha-sapphire",
      category: "texture",
      title: "Pokémon Alpha Sapphire",
      platform: "Nintendo 3DS · 4K texture pack",
      tagline: ["The same sharper Hoenn,", "in sapphire."],
      status: "complete",
      version: "v2",
      progress: 100,
      note: "Installs from the Luma Shop inside Luma Core. Tested through Omega Ruby's intro so far.",
      description:
        "A 4x texture pack for Pokémon Alpha Sapphire. It holds the same images as the Omega Ruby pack, under Alpha Sapphire's own title ID, so each game has a pack of its own.",
      features: ["25,199 files upscaled 4x, with a method picked for each kind of picture", "Pokémon models, trainers, maps, battle effects, menus and the games' own font sheets", "No HD system-font sheets: these games draw text from their own fonts", "For Azahar / Citra-based emulators"],
      stats: [["Files", "25,199"], ["Size", "8.58 GB"], ["Upscale", "4x"]],
      sections: [
        { h: "Version 2 (November 16, 2026)", p: "Rebuilt with a method picked for each kind of picture: a model that keeps detail for Pokémon and trainers, smooth clean edges for cut-out art like grass, flowers and fences, painted grounds that keep their brushwork, and masks, particles and lighting left at the original size so the game handles them as before. That is why it has fewer files than version 1. Menu and battle icons fixed: no more thin line under the Poké Balls and other small icons, and small icons drawn crisply instead of with invented outlines." },
        { h: "Checked so far", p: "This pack is new. It has been tested through Omega Ruby's intro so far, and more of the game will be checked before downloads open." }
      ],
      pack: { file: "alphasapphire-000400000011C500-v2.zip", size: "8.58 GB", system: "3DS", code: "000400000011C500", sha256: "5299d223a3023d8e0dde025da68bd50645372eaeb36e96e624b6ef3f1e7ba4b6" },
      colors: ["#2f7fe0", "#12265e"],
      images: { icon: "img/icon-alphasapphire.png", art: "img/art/oras-art.jpg", artPos: "center 45%", after: "img/alphasapphire-logo-after.jpg", before: "img/alphasapphire-logo-before.jpg", aspect: "1620 / 880", gallery: ["img/art/oras-art.jpg"] },
      links: { download: "", source: "" }
    },
    {
      id: "pokemon-x",
      category: "texture",
      title: "Pokémon X",
      platform: "Nintendo 3DS · 4K texture pack",
      tagline: ["Kalos, redrawn", "four times sharper."],
      status: "complete",
      version: "v3",
      progress: 100,
      note: "Installs from the Luma Shop inside Luma Core. Tested through the intro so far.",
      description:
        "A 4x texture pack for Pokémon X. The textures stored in the game are upscaled: Pokémon models, trainers and other characters, field maps and buildings, battle backgrounds and effects, and menus.",
      features: ["20,904 files upscaled 4x, with a method picked for each kind of picture", "Pokémon models, trainers, maps, battle effects and menus", "No HD system-font sheets, like the other Pokémon packs", "For Azahar / Citra-based emulators"],
      stats: [["Files", "20,904"], ["Size", "7.86 GB"], ["Upscale", "4x"]],
      sections: [
        { h: "Version 3 (November 16, 2026)", p: "Rebuilt with a method picked for each kind of picture: a model that keeps detail for Pokémon and trainers, smooth clean edges for cut-out art like grass, flowers and fences, painted grounds that keep their brushwork, and masks, particles and lighting left at the original size so the game handles them as before. That is why it has fewer files than version 1. The grass is redrawn without the dark outlines and dashes of version 1. Menu and battle icons fixed: no more thin line under the Poké Balls and other small icons, and small icons drawn crisply instead of with invented outlines." },
        { h: "Checked so far", p: "This pack is new. It has been tested from the start of the game through the intro to the player's bedroom. The overworld beyond that, battles and menus have not been checked yet, and will be before downloads open." }
      ],
      pack: { file: "pokemonx-0004000000055D00-v3.zip", size: "7.86 GB", system: "3DS", code: "0004000000055D00", sha256: "790e1bb98049ca09af58641ada50bad63a08fe30f9456a1fd09568ee172099e3" },
      colors: ["#2f6fd8", "#101f52"],
      images: { icon: "img/icon-pokemonx.png", art: "img/pokemonx-logo-after.jpg", artPos: "center", after: "img/pokemonx-logo-after.jpg", before: "img/pokemonx-logo-before.jpg", aspect: "1620 / 880", gallery: [] },
      links: { download: "", source: "" }
    },
    {
      id: "pokemon-y",
      category: "texture",
      title: "Pokémon Y",
      platform: "Nintendo 3DS · 4K texture pack",
      tagline: ["The same sharper Kalos,", "in red."],
      status: "complete",
      version: "v3",
      progress: 100,
      note: "Installs from the Luma Shop inside Luma Core. Tested through the intro so far.",
      description:
        "A 4x texture pack for Pokémon Y. It holds the same images as the Pokémon X pack, under Pokémon Y's own title ID, so each game has a pack of its own.",
      features: ["20,904 files upscaled 4x, with a method picked for each kind of picture", "Pokémon models, trainers, maps, battle effects and menus", "No HD system-font sheets, like the other Pokémon packs", "For Azahar / Citra-based emulators"],
      stats: [["Files", "20,904"], ["Size", "7.86 GB"], ["Upscale", "4x"]],
      sections: [
        { h: "Version 3 (November 16, 2026)", p: "Rebuilt with a method picked for each kind of picture: a model that keeps detail for Pokémon and trainers, smooth clean edges for cut-out art like grass, flowers and fences, painted grounds that keep their brushwork, and masks, particles and lighting left at the original size so the game handles them as before. That is why it has fewer files than version 1. The grass is redrawn without the dark outlines and dashes of version 1. Menu and battle icons fixed: no more thin line under the Poké Balls and other small icons, and small icons drawn crisply instead of with invented outlines." },
        { h: "Checked so far", p: "This pack is new. It has been tested from the start of the game through the intro to the player's bedroom. The overworld beyond that, battles and menus have not been checked yet, and will be before downloads open." }
      ],
      pack: { file: "pokemony-0004000000055E00-v3.zip", size: "7.86 GB", system: "3DS", code: "0004000000055E00", sha256: "e7f919cc3be0d9b0615fca3adc448f3480e26cf52547aea589c3d1383786099d" },
      colors: ["#d83a4a", "#5a1220"],
      images: { icon: "img/icon-pokemony.png", art: "img/pokemony-logo-after.jpg", artPos: "center", after: "img/pokemony-logo-after.jpg", before: "img/pokemony-logo-before.jpg", aspect: "1620 / 880", gallery: [] },
      links: { download: "", source: "" }
    },

    /* ---------- Optimized DS games ---------- */
    {
      id: "pokemon-heartgold",
      category: "ds",
      title: "Pokémon HeartGold",
      platform: "Nintendo DS · optimized for Luma Core",
      tagline: ["Johto in widescreen,", "with HD textures."],
      status: "complete",
      version: "v3",
      progress: 100,
      note: "The HD pack installs from the Luma Shop inside Luma Core.",
      description:
        "Pokémon HeartGold, tuned for the AYN Thor. Luma Core adds an HD texture pack and widescreen that fills the screen in both the 3D world and the 2D screens, instead of the DS's 4:3 picture with bars at the sides.",
      features: ["HD texture pack with 45,741 files", "One set of images shared with SoulSilver", "Widescreen in the 3D world and on 2D screens", "Tuned for the AYN Thor's two screens"],
      stats: [["Pack files", "45,741"], ["Pack size", "79 MB"], ["Widescreen", "3D and 2D"]],
      sections: [
        { h: "Version 3 (November 16, 2026)", p: "365 small sprites redrawn pixel-sharp, the see-through effects (like the opening's flames) soft again, and the party screen's \"HP\" label back to the original pixels. Tested on the AYN Thor." },
        { h: "Version 2: one pack for both games", p: "HeartGold and SoulSilver now share one merged HD pack, with every image from both games' packs. HeartGold's pack grew from 14,612 files to 45,743. If you have version 1 installed, the Luma Shop offers an Update." },
        { h: "Tested on the AYN Thor", p: "On November 15, 2026 the Luma Shop offered the update to version 2 over an installed version 1 on an AYN Thor, and it installed all 45,743 files. The game starts to its title screen with the pack. Updating keeps the old pack working until the new one is in place. The last step, clearing out the old files, took several minutes on the Thor (about 30 minutes for SoulSilver's 45,000 files), and the game stays playable while it runs." }
      ],
      pack: { file: "heartgold-IPKE-v3.zip", size: "79 MB", system: "DS", code: "IPKE", sha256: "d3bfe940928507e8d6672fc14becbe1683eb10d4dbd43e43aaeffe0cbedb069d" },
      colors: ["#e0a832", "#7a4a12"],
      images: { icon: "img/icon-heartgold.png", art: "img/ds-hg-wide.jpg", artPos: "center", after: "img/ds-hg-wide.jpg", before: "img/ds-hg-43.jpg", labels: ["4:3", "Widescreen"], aspect: "16 / 9", gallery: ["img/ds-hg-battle.jpg"] },
      links: { download: "", source: "" }
    },
    {
      id: "pokemon-soulsilver",
      category: "ds",
      title: "Pokémon SoulSilver",
      platform: "Nintendo DS · optimized for Luma Core",
      tagline: ["Johto in widescreen,", "with HD textures."],
      status: "complete",
      version: "v3",
      progress: 100,
      note: "The HD pack installs from the Luma Shop inside Luma Core.",
      description:
        "Pokémon SoulSilver, tuned for the AYN Thor the same way as HeartGold: an HD texture pack, and widescreen that fills the screen in both the 3D world and the 2D screens. HeartGold and SoulSilver share one merged pack: every image from both games' packs, including SoulSilver's own 1,868.",
      features: ["HD texture pack with 45,741 files", "One set of images shared with HeartGold, including SoulSilver's own 1,868", "Widescreen in the 3D world and on 2D screens", "Tuned for the AYN Thor's two screens"],
      stats: [["Pack files", "45,741"], ["Pack size", "79 MB"], ["Widescreen", "3D and 2D"]],
      sections: [
        { h: "Version 3 (November 16, 2026)", p: "The same fixes as HeartGold's version 3, since the two games share one pack: 365 small sprites redrawn pixel-sharp, the see-through effects soft again, and the party screen's \"HP\" label back to the original pixels." },
        { h: "Version 2: one pack for both games", p: "Version 2 is the same set of images as HeartGold's pack. Eleven leftover slivers of text were dropped from version 1, taking it from 45,754 files to 45,743. If you have version 1 installed, the Luma Shop offers an Update." },
        { h: "Tested on the AYN Thor", p: "On November 15, 2026 version 1 was downloaded and installed from the Luma Shop on an AYN Thor, and the opening, New Bark Town in widescreen, a battle and the party screen all looked right, with the game's text staying as pixel art. Later the same day the Shop offered the update to version 2, which installed all 45,743 files; New Bark Town in widescreen with the HD pack and a battle looked right. Updating keeps the old pack working until the new one is in place. The last step, clearing out the old files, took several minutes on the Thor (about 30 minutes for SoulSilver's 45,000 files), and the game stays playable while it runs." }
      ],
      pack: { file: "soulsilver-IPGE-v3.zip", size: "79 MB", system: "DS", code: "IPGE", sha256: "0f50a2dedec8ff608bce0444d428c6c6052e7a12e1abc7cb68affda0c836f57c" },
      colors: ["#aab4c8", "#48506a"],
      images: { icon: "img/icon-soulsilver.png", art: "img/ds-ss-wide.jpg", artPos: "center", after: "img/ds-ss-wide.jpg", before: "img/ds-ss-43.jpg", labels: ["4:3", "Widescreen"], aspect: "16 / 9", gallery: [] },
      links: { download: "", source: "" }
    },
    {
      id: "mario-kart-ds",
      category: "ds",
      title: "Mario Kart DS",
      platform: "Nintendo DS · optimized for Luma Core",
      tagline: ["A wider view", "of every track."],
      status: "complete",
      version: "v2",
      progress: 100,
      note: "The HD pack installs from the Luma Shop inside Luma Core.",
      description:
        "Mario Kart DS, tuned for the AYN Thor. Luma Core adds an HD texture pack and widescreen, so races fill the top screen instead of sitting in a 4:3 box.",
      features: ["HD texture pack with 15,028 files", "Widescreen racing", "Tuned for the AYN Thor's two screens"],
      stats: [["Pack files", "15,028"], ["Pack size", "65 MB"]],
      sections: [
        { h: "Version 2 (November 16, 2026)", p: "Eight more courses in HD (Mario Circuit, Delfino Square, Cheep Cheep Beach, Peach Gardens and four retro courses), plus Figure-8 Circuit's missing art. Small sprites and the course maps are redrawn pixel-sharp, so a flower bed keeps one style. Tested on the AYN Thor." }
      ],
      pack: { file: "mariokartds-AMCE-v2.zip", size: "65 MB", system: "DS", code: "AMCE", sha256: "47a46a4e19a20e9871872b1dadc83be7fe5a2a1a232f1beaf95ba2af621c564e" },
      colors: ["#e04a3a", "#1f4fa8"],
      images: { icon: "img/icon-mariokartds.png", art: "img/ds-mk-wide.jpg", artPos: "center 40%", after: "img/ds-mk-wide.jpg", before: "img/ds-mk-43.jpg", labels: ["4:3", "Widescreen"], aspect: "16 / 9", gallery: ["img/ds-mk-select.jpg"] },
      links: { download: "", source: "" }
    },

    /* ---------- Apps, features and patches ---------- */
    {
      id: "luma-core",
      category: "app",
      title: "Luma Core",
      platform: "Android app · AYN Thor",
      tagline: ["Two screens.", "One home for everything."],
      status: "dev",
      version: "v0.1.0",
      progress: null,
      note: "Not publicly released yet.",
      description:
        "Luma Core turns a dual-screen handheld into a game console with a 3DS-style Home. Game Boy, Game Boy Color, Game Boy Advance, DS and 3DS games share one shelf, and both screens are used everywhere. It builds on the open-source melonDS, Azahar and mGBA emulators.",
      features: [
        "My Home: a 3DS-style grid for games and Luma apps",
        "Animated 3DS banners and e-manuals on the Home screen",
        "Luma Shop for texture packs and more",
        "Luma Pass, Luma Dex and Luma Friends",
        "Quick Resume between games",
        "HD texture packs and widescreen for DS games"
      ],
      sections: [
        { h: "Home on two screens", p: "The bottom screen has the Home bar, a grid of tiles and an Open bar. The top screen shows the highlighted game's banner, artwork or logo, with the time, battery and Wi-Fi. L and R switch tabs: Home, Games, Forged, Notifications, Friends and Apps, plus optional Quick Resume, Recent, Favorites and Achievements." },
        { h: "My Home", p: "Your own Home tab, laid out like a 3DS HOME Menu. Each space holds a game, a folder, a badge or one of Luma Core's apps. Pick a tile up with Y to move it; rest one game on another to make a folder. Your layout survives a reinstall." },
        { h: "Playing games", list: [
          "DS, 3DS and Game Boy games each run in Luma Core's own player, using both screens.",
          "Save states come with a picture and date: a quick slot, numbered slots and Where you quit.",
          "Press Home during a game and it pauses behind Home in a small window; press Home again to go straight back in.",
          "Quick Resume lists your last 3 games and starts each right where you quit."
        ] },
        { h: "Forged games and companions", p: "Forged games are the ones Luma Core made something for: DS games it optimized, 3DS games with its own 4K texture packs, and Game Boy and Game Boy Advance games with a companion that fills the bottom screen with your party, items or map while you play on top." },
        { h: "More Luma apps", list: [
          "Luma Shop: Luma Core's apps, extras and texture packs in one list.",
          "Luma Dex: a Pokémon save viewer and editor with a Bank.",
          "Luma Pass: StreetPass by file for your 3DS games.",
          "Luma Friends: friend codes and cards between Luma Core players, with no account and no server."
        ] },
        { h: "Import from another emulator", list: [
          "From Azahar: texture packs, mods, cheats, 3DS saves and a few settings, on Settings > 3DS.",
          "From melonDS: saves, on Settings > DS.",
          "First-time setup offers both in one step, and each import shows what it found and what it left alone."
        ] },
        { h: "Careful with your saves", p: "A safety review on November 15, 2026 led to fixes for restoring save backups, Bank moves in Luma Dex, the Luma Shop's installer and recovery after a crash." },
        { h: "Devices", p: "Written for the AYN Thor. It also runs on other dual-screen handhelds such as the Retroid Pocket Duo, and on phones, where both screens share one display." },
        { h: "Privacy", p: "Luma Core has no servers of its own: no analytics, ads, tracking or accounts. Everything stays on the device, and it goes online only for features you use." }
      ],
      guide: [["First-time setup", "first-time-setup"], ["Home and the Home bar", "home-and-the-home-bar"], ["My Home", "my-home"], ["Playing games", "playing-games"], ["Quick Resume", "quick-resume"], ["Importing from Azahar and melonDS", "importing-from-azahar-and-melonds"], ["Forged games", "forged-games"], ["Companions", "companions"], ["Settings", "settings"]],
      colors: ["#8f7bff", "#2ad4c4"],
      images: {
        icon: "img/logo-icon.png", art: "img/art/vista-moon.jpg", artPos: "center 35%", logo: "img/logo-banner.png",
        after: "img/app-my-home.jpg",
        before: "",
        aspect: "1240 / 1080",
        gallery: ["guide/img/games-systems.jpg", "guide/img/quick-resume.jpg", "guide/img/forged-tab.jpg", "guide/img/suspend-window.jpg", "guide/img/companion-golden-sun.jpg", "guide/img/achievements-popup.jpg", "guide/img/luma-dex.jpg", "guide/img/friends-luma-card.jpg"]
      },
      links: { download: "", source: "" }
    },
    {
      id: "luma-shop",
      category: "app",
      title: "Luma Shop",
      platform: "Luma Core Home app",
      tagline: ["Apps, extras and texture packs,", "in one list."],
      status: "dev",
      version: "",
      progress: null,
      note: "Part of Luma Core.",
      description:
        "The Luma Shop is where Luma Core's own apps, extras and texture packs live. The top screen shows the highlighted item with its status; the bottom screen is the list.",
      features: [
        "Apps: Luma Themes, Luma Saves, Luma Dex, Luma Friends, Luma Achievements and Luma Pass",
        "Extras: Golden Sun - Dual Screen Companion and the Dragon Quest XI English Patch (beta)",
        "Texture packs for thirteen 3DS games, Pokémon HeartGold, Pokémon SoulSilver and Mario Kart DS",
        "Downloads that carry on in the background"
      ],
      sections: [
        { h: "Apps", p: "Installing a Luma app needs no download. If you took a tile off My Home, Put back returns it to the first empty space. Luma Dex starts uninstalled; the others start on My Home." },
        { h: "Texture packs", list: [
          "You need your own copy of the game, or the shop shows Game not found.",
          "Leave the shop and downloads carry on, with a notification you can pause from.",
          "Each download is checked before it installs, and needs about twice the pack's size free.",
          "Replace with ours moves someone else's pack to `LumaCore/textures-backup` and never deletes it."
        ] },
        { h: "Uninstalling", p: "Uninstalling asks first, and asks again before deleting anything you made. Every question starts on Cancel or keep, and your saves always stay." }
      ],
      guide: [["Luma Shop", "luma-shop"], ["Forged games", "forged-games"], ["Notifications", "notifications"]],
      colors: ["#c95bd6", "#5a2a8f"],
      images: { icon: "img/tile-shop.webp", art: "img/art/vista-moon.jpg", artPos: "center 35%", feature: "img/tile-shop.webp", after: "guide/img/shop.jpg", before: "", aspect: "1240 / 1080", gallery: [] },
      links: { download: "", source: "" }
    },
    {
      id: "luma-saves",
      category: "app",
      title: "Luma Saves",
      platform: "Luma Core Home app",
      tagline: ["Every save and save state,", "all in one place."],
      status: "dev",
      version: "",
      progress: null,
      note: "Part of Luma Core.",
      description:
        "Luma Saves keeps every DS, Game Boy, Game Boy Advance and 3DS save and save state in one place. Back up, rename, export and import saves, or send them to the trash and restore them later.",
      features: [
        "Tabs for All, GB / GBA, DS, 3DS and Trash",
        "Backups, rename, export and import",
        "Read-only viewers for supported games (trainer, party, badges)",
        "Money and item editors for supported games, with a backup made first"
      ],
      sections: [
        { h: "How it works", list: [
          "In the games list, A opens a game, X backs it up and Y refreshes.",
          "Inside a game, A opens Options: View save, Edit, Back up, Restore a backup, Export, Import and Delete.",
          "Deleted saves go to the Trash, where you can put them back. Deleting for good asks twice."
        ] },
        { h: "Money and item editors", chips: ["Pokémon FireRed", "Pokémon LeafGreen", "Pokémon Emerald", "Pokémon Crystal", "Golden Sun", "Golden Sun: The Lost Age"] },
        { h: "Viewing and editing", p: "View save is read only: for Pokémon it shows the trainer, party and badges; for Golden Sun the party, Djinn and coins. Money and items can be edited in Pokémon FireRed, LeafGreen, Emerald and Crystal, and coins and items in Golden Sun and The Lost Age." },
        { h: "Built to be safe", list: [
          "Restore, import and every edit back up the current save first.",
          "A game paused behind Home is left alone until you close it.",
          "Backups live in `LumaCore/luma-saves/backups` until you delete them.",
          "Luma Core also backs up a DS or 3DS save automatically before the game starts, if it changed."
        ] }
      ],
      guide: [["Luma Saves", "luma-saves"], ["Luma Dex", "luma-dex"], ["Where are my files?", "troubleshooting-and-faq"]],
      colors: ["#4f7be8", "#1c3a7a"],
      images: { icon: "img/tile-saves.webp", art: "img/art/vista-purple.jpg", artPos: "center 35%", feature: "img/tile-saves.webp", after: "img/app-luma-saves.jpg", before: "", aspect: "1280 / 435", gallery: ["img/app-luma-saves-viewer.jpg"] },
      links: { download: "", source: "" }
    },
    {
      id: "luma-themes",
      category: "app",
      title: "Luma Themes",
      platform: "Luma Core Home app",
      tagline: ["Make the home screen", "your own."],
      status: "dev",
      version: "",
      progress: null,
      note: "Part of Luma Core.",
      description:
        "Luma Themes is the one place for how Luma Core looks. Use real 3DS HOME Menu themes with previews on both screens, or change Luma Core's own system theme and Home bar style.",
      features: [
        "3DS themes with previews on both screens",
        "Browse themes, or build your own",
        "Theme sounds",
        "System theme and Home bar style"
      ],
      sections: [
        { h: "3DS themes", p: "Real 3DS HOME Menu themes. Installed themes previews yours on both screens, Get themes on ThemePlaza opens the site inside Luma Core so you can download themes, and Build a theme makes your own from parts. A theme's own sounds and music can be on or off, Theme shuffle picks another of your themes each time Home comes back, and you can choose a boot screen and badges." },
        { h: "System theme", p: "Luma Core's own look: Light or Dark Home colors, your favorite color, the Home bar style, your own pictures as top and bottom wallpapers, grid size, the bar's icon style and color, the button style used in hints, and the 3DS banner jingle." },
        { h: "Reimagined", p: "Luma Core's own white Home bar, with every icon in its own color. It is the default. Your theme's colors gives the bar the colors of the applied 3DS theme instead." },
        { h: "Readable on any theme", p: "Loose text gets a backdrop box behind it on every theme, so it stays readable over a busy wallpaper." },
        { h: "Credit where it's due", p: "Every theme is made by its author. Press Y on a theme to open its ThemePlaza page, which credits them." }
      ],
      guide: [["Luma Themes", "luma-themes"], ["Home and the Home bar", "home-and-the-home-bar"], ["Settings", "settings"]],
      colors: ["#a06bff", "#4a2fb0"],
      images: { icon: "img/tile-themes.webp", art: "img/art/vista-rainbow.jpg", artPos: "center 35%", feature: "img/tile-themes.webp", after: "img/app-themes-3ds.jpg", before: "", aspect: "1280 / 435", gallery: ["img/app-themes-system.jpg", "img/art/vista-moon.jpg", "img/art/vista-purple.jpg", "img/art/vista-rainbow.jpg"] },
      links: { download: "", source: "" }
    },
    {
      id: "luma-dex",
      category: "app",
      title: "Luma Dex",
      platform: "Luma Core Home app",
      tagline: ["Every Pokémon you've caught,", "across your saves."],
      status: "dev",
      version: "",
      progress: null,
      note: "Part of Luma Core. Install it from the Luma Shop.",
      description:
        "Luma Dex is a Pokémon save viewer, editor and Bank, from Red and Blue through Ultra Sun and Ultra Moon. It reads the saves Luma Core makes, with names and pictures from your own ROMs, and shows each Pokémon in detail on the top screen.",
      features: [
        "Tabs for Saves, Boxes, Pokédex, Living Dex, Bank and History",
        "Read and edit from Red and Blue through X, Y, Omega Ruby and Alpha Sapphire",
        "A Bank for moving Pokémon between saves, and Luma Park for moving them on a generation",
        "Sun, Moon, Ultra Sun and Ultra Moon: view, and copy into the Bank",
        "A check on every Pokémon: Looks fine, Unusual or Can't happen"
      ],
      sections: [
        { h: "Read and edit", chips: ["Red", "Blue", "Yellow", "Gold", "Silver", "Crystal", "Ruby", "Sapphire", "FireRed", "LeafGreen", "Emerald", "Diamond", "Pearl", "Platinum", "HeartGold", "SoulSilver", "Black", "White", "Black 2", "White 2", "X", "Y", "Omega Ruby", "Alpha Sapphire"] },
        { h: "View and copy into the Bank", chips: ["Sun", "Moon", "Ultra Sun", "Ultra Moon"] },
        { h: "Editing", p: "Change a Pokémon's nickname, held item, the moves it can learn, IVs and EVs, and level, with its stats worked out again. That now covers the party and boxes of the Game Boy, Game Boy Advance and DS games and of X, Y, Omega Ruby and Alpha Sapphire. Eggs aren't edited, and edits that can't happen are refused." },
        { h: "The Bank", p: "Luma Dex's own boxes, kept outside every game. Copy into the Bank works from any game and leaves the save unchanged. Moving into the Bank and putting a Pokémon into a save work from Red and Blue through X, Y, Omega Ruby and Alpha Sapphire. The Living Dex counts what is in the Bank too." },
        { h: "Luma Park", list: [
          "Move Pokémon forward a generation: 3 to 4, 4 to 5 and 5 to 6.",
          "Open it from the Bank tab, pick up to six, and catch them in Luma Core's own park scene.",
          "It only goes one way, and Luma Dex warns you before it starts.",
          "Every catch is listed in History."
        ] },
        { h: "From your own games", list: [
          "Every save shows its lead Pokémon's sprite.",
          "For the 3DS games, level-up moves, the TM and HM list and move PP are read from your own ROM, and the check on each Pokémon covers 3DS moves."
        ] },
        { h: "Built to be safe", list: [
          "Only real releases with good checksums are written.",
          "A Luma Saves backup is made first, and the new save is checked before and after it's written.",
          "A move copies before it removes, so an interruption leaves a copy, never a loss.",
          "Every change is in History, and Put back undoes it."
        ] }
      ],
      guide: [["Luma Dex", "luma-dex"], ["Luma Park", "luma-park"], ["Luma Saves", "luma-saves"], ["Luma Shop", "luma-shop"]],
      colors: ["#e8584f", "#7a2330"],
      images: { icon: "img/tile-dex.webp", art: "img/art/vista-rainbow.jpg", artPos: "center 35%", feature: "img/tile-dex.webp", after: "guide/img/luma-dex.jpg", before: "", aspect: "1280 / 435", gallery: ["guide/img/luma-dex-editor.jpg", "img/dex-park.jpg", "img/dex-park-caught.jpg"] },
      links: { download: "", source: "" }
    },
    {
      id: "luma-pass",
      category: "app",
      title: "Luma Pass",
      platform: "Luma Core Home app",
      tagline: ["StreetPass by file,", "for your 3DS games."],
      status: "dev",
      version: "",
      progress: null,
      note: "Part of Luma Core.",
      description:
        "Luma Pass is StreetPass by file. Your Mii, greetings, ghosts and town go into a pass file for friends, and friends' passes become visitors in your games. Nothing is uploaded.",
      features: [
        "Export a pass for the games you pick, then share it",
        "Import friends' passes one at a time or all at once",
        "Works both ways with AzaharPlus's ZipPass",
        "Undo the last change"
      ],
      sections: [
        { h: "How it works", list: [
          "Export my pass: pick games, make the pass, then share it. Your pass is kept in `LumaCore/zippass/mine`.",
          "Import passes: finds passes in `LumaCore/zippass` and Downloads, or choose a file yourself.",
          "Only games with StreetPass turned on in the game take visitors."
        ] },
        { h: "Built to be safe", p: "StreetPass is backed up before every import, with the last 5 kept, and Undo puts the newest back. Close any 3DS game before importing." },
        { h: "With Luma Friends", p: "Luma Friends' Nearby can swap passes too: trade cards with someone on the same Wi-Fi and your last exported pass can go along with it." }
      ],
      guide: [["Luma Pass", "luma-pass"], ["Luma Friends", "luma-friends-and-the-friends-tab"], ["3DS system files", "3ds-system-files"]],
      colors: ["#f08a3c", "#8f3d1a"],
      images: { icon: "img/tile-pass.webp", art: "img/art/vista-moon.jpg", artPos: "center 35%", artFilter: "hue-rotate(150deg) saturate(1.15)", feature: "img/tile-pass.webp", after: "guide/img/luma-pass.jpg", before: "", aspect: "1280 / 720", gallery: [] },
      links: { download: "", source: "" }
    },
    {
      id: "luma-friends",
      category: "app",
      title: "Luma Friends",
      platform: "Luma Core Home app",
      tagline: ["All your friends", "in one place."],
      status: "dev",
      version: "",
      progress: null,
      note: "Part of Luma Core.",
      description:
        "Luma Friends puts everyone you play with in one place: Luma Core friends, your Steam friends, who you follow on RetroAchievements, and Discord. Luma friends trade cards with no account and no server. Steam Chat and Discord open on the top screen with a Luma Core dock below, and their messages show up in Luma Core's Notifications.",
      features: [
        "One list for Luma, Steam, RetroAchievements and Discord friends",
        "Steam Chat and Discord open on the top screen, with a Luma Core dock on the bottom",
        "Steam and Discord messages appear in Luma Core's Notifications",
        "A friend code made from a key that never leaves the device",
        "Signed cards, so nobody can change yours",
        "Add friends by card file or QR code",
        "Nearby: swap cards with Luma Core devices on the same Wi-Fi"
      ],
      sections: [
        { h: "Every friend in one list", p: "Home's Friends tab and the Luma Friends tile show the same list. Your own Luma Friends row sits at the top with your friend code, then Discord's row, then friends who are playing, online or away, your Luma friends, and friends who are offline." },
        { h: "Steam", list: [
          "Your Steam friends list comes from Steam with your own Steam Web API key, which is kept encrypted. Your Steam friends list needs to be public.",
          "With Valve's Steam Chat app installed, Open Steam Chat puts it on the top screen, with Luma Core's dock on the bottom screen. The main Steam app is used if that is the one you have.",
          "Steam Chat opens on its chat list; it cannot jump straight to one friend's chat.",
          "Without the app, Chat (web) opens the chat in Luma Core's own browser, with a line pointing you to the app.",
          "A Steam friend's menu also has their Profile, Open in your browser, and Ask again to refresh who is online."
        ] },
        { h: "Discord", list: [
          "With the Discord app installed, opening Discord's row puts the real Discord app on the top screen.",
          "Luma Core's dock sits on the bottom screen: Back to Luma, Discord on top, and your latest Discord messages.",
          "Without the app, Discord's web app opens in Luma Core's own browser, with a Get the Discord app option.",
          "You sign in to Discord yourself. Luma Core never sees your password."
        ] },
        { h: "The dock", p: "While Steam Chat or Discord is on the top screen, the bottom screen becomes a small Luma Core dock. Back to Luma returns you to Home, the second button brings the app back to the front, and the latest messages are listed underneath. The dock closes by itself when you go back to Home." },
        { h: "Messages in Notifications", list: [
          "Discord and Steam messages are listed in Home's Notifications tab, alongside downloads and achievements, and count toward the dot on the bar.",
          "A Discord entry shows who or where it came from, a one-line preview, the time and the sender's small picture. Unread messages from one conversation fold into a single entry.",
          "Luma Core keeps the last 20 Discord conversations.",
          "It is linked both ways: read a message in the app or clear it from Android's list and it leaves Notifications too; clear it in Luma Core and it leaves Android's list.",
          "Swipe a notification to the right to clear just that one.",
          "Each kind has its own switch in Settings, under General and then Notifications."
        ] },
        { h: "You stay in control", list: [
          "Reading messages needs Android's Notification access for Luma Core. It is off until you turn it on yourself, and Luma Core explains why before sending you to Android's page.",
          "Luma Core passes over every other app's notifications. It never posts, answers or dismisses anything for you.",
          "Forget them deletes the messages Luma Core has kept, even after you turn access off."
        ] },
        { h: "RetroAchievements", p: "The people you follow on RetroAchievements appear in the same list, using your own RetroAchievements web key rather than your password. Their pages open in Luma Core's own browser." },
        { h: "Your card", p: "You choose what your card shares, each part on or off: favorite games, recently played, achievements, your RetroAchievements name and total playtime. Share it as a QR code or as a file through any app." },
        { h: "Nearby", p: "The Nearby tab finds other Luma Core devices on the same Wi-Fi while it is open. Ask to swap, check that both screens show the same 4-digit number, and the cards trade, encrypted." },
        { h: "Private by design", p: "Nothing is uploaded: a card goes only where you send it. You can remove or block anyone at any time, and Reset my Luma identity gives you a new code." },
        { h: "Planned", p: "Live status for Luma friends and one-step Discord friend requests are planned for a later version. Until then, Luma friends show without a live status." }
      ],
      guide: [["Luma Friends and the Friends tab", "luma-friends-and-the-friends-tab"], ["Notifications", "notifications"], ["Luma Pass", "luma-pass"], ["Privacy", "privacy"]],
      colors: ["#f06aa0", "#7a2a5e"],
      images: { icon: "img/tile-friends.webp", art: "img/art/vista-purple.jpg", artPos: "center 35%", artFilter: "hue-rotate(55deg) saturate(1.25)", feature: "img/tile-friends.webp", after: "guide/img/friends-luma-card.jpg", before: "", aspect: "1280 / 720", gallery: ["guide/img/friends-luma-tools.jpg", "img/friends-steam-dock.jpg", "img/friends-steam-menu.jpg"] },
      links: { download: "", source: "" }
    },
    {
      id: "achievements",
      category: "app",
      title: "Luma Achievements",
      platform: "Luma Core feature",
      tagline: ["New goals", "for old favourites."],
      status: "dev",
      version: "",
      progress: null,
      note: "Part of Luma Core.",
      description:
        "Luma Core has its own set of 43 achievements worth 450 points, in Bronze, Silver, Gold and Platinum tiers, earned for play time, your library and trying features. They sit next to per-game 3DS achievement sets and RetroAchievements in one Achievements tab.",
      features: [
        "43 Luma achievements, 450 points",
        "Bronze, Silver, Gold and Platinum tiers",
        "Achievement sets for 3DS games",
        "RetroAchievements sign-in",
        "Stored offline on your device"
      ],
      stats: [["Achievements", "43"], ["Points", "450"]],
      sections: [
        { h: "Three sources, one tab", p: "The Achievements tab and the Luma Achievements tile show your games with achievements. L and R switch the source: All, RetroAchievements or 3DS. The list opens offline from the last answer." },
        { h: "Luma Core's own", p: "43 achievements for playing, your library, My Home, themes and more. They stay on the device, are never sent anywhere, and survive a reinstall. Pop-ups wait for a menu, never during a game." },
        { h: "3DS games", p: "Luma Core's own sets, starting with Super Mario 3D Land (USA): a pop-up at start shows how many you have, then unlock pop-ups appear during the game." },
        { h: "More on the way", p: "Achievement support for more 3DS games is planned, and the existing sets will keep growing. Like everything in Luma Core, this is a continuous work in progress." },
        { h: "RetroAchievements", p: "For DS, Game Boy, Game Boy Color and Game Boy Advance games. Sign in with your own account; only a token is kept. Hardcore mode is on by default, which blocks loading save states. Unlocks earned offline are sent when you are back online." }
      ],
      guide: [["Achievements and RetroAchievements", "achievements-and-retroachievements"], ["Quick Resume", "quick-resume"], ["Notifications", "notifications"]],
      /* Every Luma Core achievement, as listed in the app: [badge file, name, how to earn it, tier, group] */
      wall: {
        title: "All 43 achievements",
        text: "Every Luma Core achievement has its own badge. The rim shows its tier: Bronze is worth 5 points, Silver 10, Gold 25 and Platinum 50, for 450 in all.",
        items: [
          ["first_ds", "Pocket Classic", "Play your first DS game.", "bronze", "Getting started"],
          ["first_3ds", "Depth Perception", "Play your first 3DS game.", "bronze", "Getting started"],
          ["first_gb", "Cartridge Days", "Play your first Game Boy, Game Boy Color or Game Boy Advance game.", "bronze", "Getting started"],
          ["trifecta", "Three of a Kind", "Play a DS game, a 3DS game and a Game Boy family game.", "silver", "Getting started"],
          ["extra", "Something Extra", "Play one of Luma Core's Extras.", "bronze", "Getting started"],
          ["forged", "Forged in Light", "Play a Forged game.", "silver", "Getting started"],
          ["time_1h", "Warming Up", "Play for 1 hour in total.", "bronze", "Play time"],
          ["time_10h", "Settling In", "Play for 10 hours in total.", "silver", "Play time"],
          ["time_50h", "Devoted", "Play for 50 hours in total.", "gold", "Play time"],
          ["time_100h", "Luma Legend", "Play for 100 hours in total.", "platinum", "Play time"],
          ["one_5h", "Favorite Spot", "Play one game for 5 hours.", "silver", "Play time"],
          ["one_25h", "True Fan", "Play one game for 25 hours.", "gold", "Play time"],
          ["session_2h", "Marathon", "Play for 2 hours in one go.", "silver", "Play time"],
          ["night_owl", "Night Owl", "Still playing between midnight and 4 a.m.", "bronze", "Play time"],
          ["games_5", "Sampler", "Play 5 different games.", "bronze", "Variety"],
          ["games_25", "Explorer", "Play 25 different games.", "silver", "Variety"],
          ["games_50", "Connoisseur", "Play 50 different games.", "gold", "Variety"],
          ["ds_10", "Dual Screen Devotee", "Play 10 different DS games.", "silver", "Variety"],
          ["n3ds_10", "3D Visionary", "Play 10 different 3DS games.", "silver", "Variety"],
          ["gb_10", "Link Cable", "Play 10 different Game Boy family games.", "silver", "Variety"],
          ["library_100", "Well Stocked", "Have 100 games in your library.", "bronze", "Library"],
          ["library_500", "Archivist", "Have 500 games in your library.", "silver", "Library"],
          ["favorites_5", "Top Picks", "Mark 5 games as favorites.", "bronze", "Library"],
          ["game_info", "Curator", "Edit a game's info or cover.", "bronze", "Library"],
          ["artwork", "Picture Perfect", "Get artwork for a game from ScreenScraper or SteamGridDB.", "bronze", "Library"],
          ["home_10", "Home Sweet Home", "Have 10 games and apps on My Home.", "bronze", "My Home"],
          ["home_folder", "Filing System", "Make a folder on My Home.", "bronze", "My Home"],
          ["home_badge", "Badge Collector", "Place a badge on My Home.", "bronze", "My Home"],
          ["theme_install", "New Coat of Paint", "Install a 3DS HOME theme.", "bronze", "Themes"],
          ["theme_build", "Theme Architect", "Build a theme of your own.", "silver", "Themes"],
          ["theme_5", "Theme Collector", "Have 5 themes installed.", "silver", "Themes"],
          ["look", "Personal Touch", "Make Luma Core your own: a theme, dark colors, a palette or your own wallpaper.", "bronze", "Themes"],
          ["system_files", "Console Link", "Set up your 3DS system files.", "silver", "3DS"],
          ["mii", "Mii, Myself", "Make a Mii in Mii Maker.", "silver", "3DS"],
          ["zippass_out", "Pass It On", "Export a Luma Pass for your friends.", "bronze", "3DS"],
          ["zippass_in", "Hello, Stranger", "Import a friend's Luma Pass.", "bronze", "3DS"],
          ["texture_pack", "High Definition", "Play a game with an HD texture pack.", "silver", "3DS"],
          ["save_state", "Save Anywhere", "Make a save state yourself.", "bronze", "Emulation"],
          ["ra_signin", "Retro Roots", "Sign in to RetroAchievements.", "bronze", "Achievements"],
          ["ra_unlock", "Achievement Hunter", "Earn a RetroAchievements achievement in Luma Core.", "silver", "Achievements"],
          ["game_achievement", "Luma Laurels", "Earn one of Luma Core's in-game 3DS achievements.", "silver", "Achievements"],
          ["completionist", "Shining Star", "Unlock 30 other Luma Core achievements.", "platinum", "Achievements"],
          ["manual", "Read the Manual", "Open a 3DS game's electronic manual.", "bronze", "3DS"]
        ]
      },
      colors: ["#ffc94d", "#d1632f"],
      images: { icon: "img/tile-achievements.webp", art: "img/art/vista-rainbow.jpg", artPos: "center 35%", artFilter: "sepia(0.65) saturate(1.7) hue-rotate(-12deg)", feature: "img/tile-achievements.webp", after: "img/app-achievements.jpg", before: "", aspect: "1280 / 1421", gallery: ["img/app-achievements-popup.jpg"] },
      links: { download: "", source: "" }
    },
    {
      id: "dqxi-english-patch",
      category: "app",
      title: "Dragon Quest XI English Patch",
      platform: "Nintendo 3DS · translation patch",
      tagline: ["The 3DS version, in English.", "Beta: translation in progress."],
      status: "beta",
      version: "v0.1.45",
      progress: null,
      note: "Beta: the English translation is still being worked on. Patchers for Windows, Linux, Steam Deck, macOS and Android; also built into Luma Core.",
      notice: "This is a beta. We are still working on the English translation, so some text is unfinished and will change between versions.",
      description:
        "A beta English translation patch for the Nintendo 3DS version of Dragon Quest XI, which was only released in Japan. The translation is still in progress. Patch your own copy on a PC, on an Android device with the patcher app, or straight from the Luma Shop inside Luma Core.",
      features: [
        "English text for the Japan-only 3DS release (beta, still in progress)",
        "Android patcher app: patch on the handheld, no PC needed",
        "Built into Luma Core through the Luma Shop",
        "Optional HD texture pack, downloadable from the Luma Shop",
        "Patchers for Windows, Linux, Steam Deck and macOS"
      ],
      stats: [["Patch", "v0.1.45"], ["HD pack files", "15,460"], ["HD pack size", "6.03 GB"]],
      /* Our own video files, played on the page: [file, poster picture, title, line underneath] */
      clips: [
        ["video/dqxi-english-patch-v0.1.44.mp4", "video/dqxi-english-patch-v0.1.44-poster.jpg", "The journey so far: v0.1.44", "Two minutes through all three acts in English. The music is an original piece made for the video."]
      ],
      videos: [
        ["JagQnseBXvo", "The English patch in action"],
        ["I9z172vRZDI", "Patching on an Android device"]
      ],
      sections: [
        { h: "New in v0.1.45 (November 16, 2026)", list: [
          "A tester, Sola, played the whole game to 99.9% and every menu of that save was gone through.",
          "More official names: Mortamammoth, End of Time, Friend of Time, Deepest Recesses of the Past and Holy Dragon Protection.",
          "Forge Record: long names fit, and so does the line for items without a recipe.",
          "Monster List: the habitat names fit their box.",
          "Layout fixes on the Link tab, in battle skill lists and on item perk lines.",
          "Includes everything from v0.1.44. Make a new game, or patch again with this version.",
          "The title-screen file for v0.1.45 is included with the release."
        ] },
        { h: "New in v0.1.44 (November 15, 2026)", list: [
          "The English patch now runs through all three acts of the game.",
          "Official names from Sola's testing: Torban, Tenda, Stickle, Tickle, Galapagod, Rom Baro, the Altar of an Elusive Age, the Hall of Remembrance and more.",
          "Fixed the garbled header after Sylvando's Ladies First.",
          "Fixed the altar statue and monument text printing over its box.",
          "Stats screen: the equipment list no longer wraps the +3 of long item names.",
          "Forge Record lists use a smaller font, so long item names are not cut off.",
          "Includes everything from v0.1.43. Make a new game, or patch again with this version.",
          "The HD texture pack still works, and the title-screen file for v0.1.44 is included with the release."
        ] },
        { h: "Fan translation", p: "This is an unofficial fan translation. It is not affiliated with Square Enix, and you need your own copy of the game." },
        { h: "Built into Luma Core", p: "Luma Core has the patcher built in. Open the Luma Shop, go to Extras and choose Dragon Quest XI English Patch. It shows Needs your ROM until you point it at your own copy, then Set up builds the English game. The result is a 3DS game in your library and counts as a Forged game, with the gold Forged badge." },
        { h: "Android patcher app", list: [
          "Install the patcher app, choose your decrypted Japanese `.3ds` or `.cia`, and press Patch.",
          "Choose the output: `.3ds` for emulators such as Azahar, or `.cia` for a 3DS.",
          "It keeps running in the background with a progress notification, and takes about 6 minutes on a Retroid Pocket Duo Lite.",
          "For arm64 devices. It is not from the Play Store, so Android asks you to allow the install.",
          "Repair an old save fixes saves started on early versions of the patch, after backing up the originals."
        ] },
        { h: "HD texture pack", list: [
          "More than 15,000 of the game's textures upscaled 4x, made from the English-patched game so the English menus and banners are sharp too.",
          "Download and install it from the Luma Shop inside Luma Core, like the other texture packs.",
          "Optional, and for emulators only: it is not needed for the English patch and does nothing on a real 3DS.",
          "Version 2 (November 16, 2026): the 961 small character sprites are redrawn pixel-sharp instead of smoothed by the AI.",
          "For the game's 3D mode, and still a work in progress."
        ] },
        { h: "What you need", p: "Your own decrypted Japanese copy of the game. The patch contains no game data. Keep about twice the game's size free while patching." }
      ],
      guide: [["Luma Shop", "luma-shop"], ["Forged games", "forged-games"]],
      pack: { open: true, file: "dqxi-0004000000199200-v2.zip", size: "6.03 GB", system: "3DS", code: "0004000000199200", sha256: "462ed9cd010efde556397926abb7d729d02985fab40bd5e2010fa950e1b2b259",
        addon: { file: "dqxi-title-0004000000199200-v0.1.45.zip", size: "26 MB", sha256: "1b058b3e2f9dad2c096862ad3fdc37b0fbad1b4032f1010609ea5d9ca51eca7a" } },
      github: "Exhilo62/DQXI-3DS-English-Patch", // the page reads the latest release from here
      colors: ["#4a8fe8", "#243a8f"],
      images: { icon: "img/icon-dqxi.png", art: "img/art/vista-moon.jpg", artPos: "center 35%", artFilter: "hue-rotate(-45deg) saturate(1.1)", feature: "img/art/dqxi-logo.png", featureWide: true, after: "img/art/dqxi-hero.jpg", before: "", aspect: "16 / 9", gallery: [] },
      links: { download: "https://github.com/Exhilo62/DQXI-3DS-English-Patch/releases", source: "https://github.com/Exhilo62/DQXI-3DS-English-Patch", discord: "https://discord.gg/w2DSajEUx" }
    }
  ]
};
