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
    sections    optional extra sections: { h: heading, p: text, list: [..] }
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
      ["7", "4K texture packs"],
      ["62,086", "files across all packs"],
      ["35 GB", "of upscaled textures"],
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
      ["Nov 15, 2026", "Manual install guide is ready", "Direct pack downloads will open here when Luma Core comes out for beta testing. The step-by-step install guide is already up.", "install.html"],
      ["Nov 15, 2026", "The user guide is online", "The full Luma Core guide, with screenshots of every feature, can now be read on this site.", "guide.html"],
      ["Nov 14, 2026", "Dragon Quest XI English Patch v0.1.43", "The latest beta of the English translation, with patchers for PC and Android.", "project.html?id=dqxi-english-patch"],
      ["Nov 2026", "Seven 4K texture packs reach v1", "The first complete versions of all seven 3DS texture packs are in the Luma Shop.", "#packs"]
    ],
    /* "What's next" on the home page: [symbol, title, text, where the card links] */
    wip: "Every feature of Luma Core is a continuous work in progress.",
    roadmap: [
      ["✦", "More 4K texture packs", "The seven packs here are a start. More 3DS games are planned, and the existing packs keep being improved.", "#packs"],
      ["◐", "More companions", "More Game Boy and Game Boy Advance games are planned to get a bottom-screen companion of their own.", "#companions"],
      ["★", "Achievements for more 3DS games", "Luma Core's own achievement sets started with one 3DS game. Sets for more 3DS games are planned.", "project.html?id=achievements"]
    ],
    /* Small print shown under each home section and on the matching project pages. */
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
    /* Home page: Game Boy / GBA companions. [title, system, tabs] */
    companionShots: [
      ["guide/img/companion-golden-sun.jpg", "Golden Sun: the party"],
      ["guide/img/companion-crystal.jpg", "Pokémon Crystal: the trainer"],
      ["guide/img/companion-aria.jpg", "Castlevania: Aria of Sorrow"],
      ["img/comp-crystal-party.jpg", "Pokémon Crystal: the party"],
      ["img/comp-crystal-map.jpg", "Pokémon Crystal: the town map"],
      ["img/comp-harvest-moon.jpg", "Harvest Moon: the villagers"]
    ],
    companions: [
      ["Pokémon Crystal", "GBC", ["Party", "Trainer", "Map"]],
      ["Pokémon FireRed", "GBA", ["Party", "Trainer", "Map"]],
      ["Pokémon LeafGreen", "GBA", ["Party", "Trainer", "Map"]],
      ["Pokémon Emerald", "GBA", ["Party", "Trainer", "Map"]],
      ["Golden Sun", "GBA", ["Party", "Djinn", "Items", "Map"]],
      ["Golden Sun: The Lost Age", "GBA", ["Party", "Djinn", "Items", "Map"]],
      ["Dragon Ball Z: The Legacy of Goku", "GBA", ["Goku", "Bag"]],
      ["Dragon Ball Z: The Legacy of Goku II", "GBA", ["Party", "Dragon Balls", "Items"]],
      ["Castlevania: Aria of Sorrow", "GBA", ["Soma", "Souls", "Map"]],
      ["Metroid Fusion", "GBA", ["Samus", "Map"]],
      ["Metroid: Zero Mission", "GBA", ["Samus", "Map"]],
      ["The Legend of Zelda: A Link to the Past", "GBA", ["Link", "Items", "Map"]],
      ["Harvest Moon: Friends of Mineral Town", "GBA", ["Today", "Field", "Hearts", "Villagers"]],
      ["Harvest Moon: More Friends of Mineral Town", "GBA", ["Today", "Field", "Hearts", "Villagers"]],
      ["Fire Emblem (The Blazing Blade)", "GBA", ["Cursor", "Army", "Enemies"]],
      ["Fire Emblem: The Sacred Stones", "GBA", ["Cursor", "Army", "Enemies"]]
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
      version: "v1",
      progress: 100,
      note: "Installs from the Luma Shop inside Luma Core.",
      description:
        "A 4x texture pack for Final Fantasy Explorers. Every texture stored in the game is upscaled: monsters, gear, the HUD, menus and the dialogue font.",
      features: ["Every in-game texture upscaled 4x", "Sharper HUD, menus and dialogue font", "For Azahar / Citra-based emulators"],
      stats: [["Files", "7,501"], ["Size", "2.03 GB"], ["Upscale", "4x"]],
      pack: { file: "ffexplorers-000400000016ED00-v1.zip", size: "2.03 GB", system: "3DS", code: "000400000016ED00", sha256: "3cab838941a8b4731c9a1d61bcf7c9e900480ecd1bd2acccd6f93a4a672541cb" },
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
      version: "v1",
      progress: 100,
      note: "Installs from the Luma Shop inside Luma Core.",
      description:
        "An HD texture pack for 7th Dragon III Code: VFD. Game textures are upscaled 4x, and the system font is replaced with HD glyphs so dialogue boxes read cleanly.",
      features: ["Game textures upscaled 4x", "HD system-font sheets for sharp text", "For Azahar / Citra-based emulators"],
      stats: [["Files", "13,381"], ["Size", "4.28 GB"], ["Upscale", "4x"]],
      pack: { file: "7thdragon3-000400000018F800-v1.zip", size: "4.28 GB", system: "3DS", code: "000400000018F800", sha256: "5628a0dc533e0aa378dfb9d39cb5d89e3e2260eb8b01de030ec87c777bd2a594" },
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
      version: "v1",
      progress: 100,
      note: "Installs from the Luma Shop inside Luma Core.",
      description:
        "A 4x texture pack for Ever Oasis. Characters, effects and the oasis itself are upscaled so the game looks at home on a modern screen.",
      features: ["12,014 unique textures upscaled 4x", "For Azahar / Citra-based emulators"],
      stats: [["Files", "13,506"], ["Size", "3.03 GB"], ["Upscale", "4x"]],
      pack: { file: "everoasis-00040000001A4800-v1.zip", size: "3.03 GB", system: "3DS", code: "00040000001A4800", sha256: "636812b1d4574ead62063b30059ede0785820a4495182207c0490eb7f0019ab3" },
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
      version: "v1",
      progress: 100,
      note: "Installs from the Luma Shop inside Luma Core. Menu text is not covered yet.",
      description:
        "A 4x texture pack for Super Street Fighter IV 3D Edition. Fighter models, character portraits and stage textures are all upscaled.",
      features: ["5,444 unique textures upscaled 4x", "Fighters, portraits and stages", "For Azahar / Citra-based emulators"],
      stats: [["Files", "6,936"], ["Size", "6.36 GB"], ["Upscale", "4x"]],
      pack: { file: "ssf4-0004000000032D00-v1.zip", size: "6.36 GB", system: "3DS", code: "0004000000032D00", sha256: "19b4efbee17694d905c1a1d33c5f98ac7333bdc34c6d72e66e0ca362f834fbc2" },
      colors: ["#d94a3a", "#2b2f4f"],
      images: { icon: "img/icon-ssf4.png", art: "img/art/ssf4-art.jpg", artPos: "85% 30%", logo: "img/art/ssf4-logo.png", after: "img/ssf4-after.jpg", before: "img/ssf4-before.jpg", aspect: "1 / 1", gallery: ["img/pack-ssf4.jpg", "img/art/ssf4-art.jpg", "img/art/ssf4-art2.jpg"] },
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
      version: "v1",
      progress: 100,
      note: "The HD pack installs from the Luma Shop inside Luma Core.",
      description:
        "Pokémon HeartGold, tuned for the AYN Thor. Luma Core adds an HD texture pack and widescreen that fills the screen in both the 3D world and the 2D screens, instead of the DS's 4:3 picture with bars at the sides.",
      features: ["HD texture pack with 14,612 files", "Widescreen in the 3D world and on 2D screens", "Tuned for the AYN Thor's two screens"],
      stats: [["Pack files", "14,612"], ["Pack size", "25 MB"], ["Widescreen", "3D and 2D"]],
      pack: { file: "heartgold-IPKE-v1.zip", size: "25 MB", system: "DS", code: "IPKE", sha256: "e9fc63e5d1368573af0f082861a47d8710562892637a440640dc7a4ebe6af68b" },
      colors: ["#e0a832", "#7a4a12"],
      images: { icon: "img/icon-heartgold.png", art: "img/ds-hg-wide.jpg", artPos: "center", after: "img/ds-hg-wide.jpg", before: "img/ds-hg-43.jpg", labels: ["4:3", "Widescreen"], aspect: "16 / 9", gallery: ["img/ds-hg-battle.jpg"] },
      links: { download: "", source: "" }
    },
    {
      id: "pokemon-soulsilver",
      category: "ds",
      title: "Pokémon SoulSilver",
      platform: "Nintendo DS · optimized for Luma Core",
      tagline: ["The same treatment", "as HeartGold."],
      status: "dev",
      version: "",
      progress: null,
      note: "Not yet checked on its own. There is no SoulSilver texture pack.",
      description:
        "Pokémon SoulSilver shares HeartGold's engine, so it gets the same widescreen and settings treatment in Luma Core. It has no HD texture pack of its own, and it has not been checked separately from HeartGold yet.",
      features: ["Widescreen and tuned settings, as in HeartGold", "No texture pack yet"],
      colors: ["#aab4c8", "#48506a"],
      images: { icon: "", art: "img/art/vista-purple.jpg", artPos: "center 35%", after: "", before: "", aspect: "16 / 9", gallery: [] },
      links: { download: "", source: "" }
    },
    {
      id: "mario-kart-ds",
      category: "ds",
      title: "Mario Kart DS",
      platform: "Nintendo DS · optimized for Luma Core",
      tagline: ["A wider view", "of every track."],
      status: "complete",
      version: "v1",
      progress: 100,
      note: "The HD pack installs from the Luma Shop inside Luma Core.",
      description:
        "Mario Kart DS, tuned for the AYN Thor. Luma Core adds an HD texture pack and widescreen, so races fill the top screen instead of sitting in a 4:3 box.",
      features: ["HD texture pack with 7,430 files", "Widescreen racing", "Tuned for the AYN Thor's two screens"],
      stats: [["Pack files", "7,430"], ["Pack size", "33 MB"]],
      pack: { file: "mariokartds-AMCE-v1.zip", size: "33 MB", system: "DS", code: "AMCE", sha256: "9dd491842295c566a543f0139cb338007812e8def344de4b9662e192f3f57eb2" },
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
        { h: "Devices", p: "Written for the AYN Thor. It also runs on other dual-screen handhelds such as the Retroid Pocket Duo, and on phones, where both screens share one display." },
        { h: "Privacy", p: "Luma Core has no servers of its own: no analytics, ads, tracking or accounts. Everything stays on the device, and it goes online only for features you use." }
      ],
      guide: [["First-time setup", "first-time-setup"], ["Home and the Home bar", "home-and-the-home-bar"], ["My Home", "my-home"], ["Playing games", "playing-games"], ["Quick Resume", "quick-resume"], ["Forged games", "forged-games"], ["Companions", "companions"], ["Settings", "settings"]],
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
        "Texture packs for seven 3DS games, Pokémon HeartGold and Mario Kart DS",
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
        "Luma Dex is a Pokémon save viewer and editor. It reads the saves Luma Core makes, with names and pictures from your own ROMs, and shows each Pokémon in detail on the top screen.",
      features: [
        "Tabs for Saves, Boxes, Pokédex, Living Dex, Bank and History",
        "Read and edit: Red, Blue, Yellow, Crystal, Ruby, Sapphire, FireRed, LeafGreen and Emerald",
        "View only for now: the DS games and the 3DS games from X and Y to Ultra Sun and Ultra Moon",
        "A check on every Pokémon: Looks fine, Unusual or Can't happen"
      ],
      sections: [
        { h: "Editing", p: "For the Game Boy and Game Boy Advance games you can change a Pokémon's nickname, held item, the moves it can learn, IVs and EVs, and level, with its stats worked out again. Eggs aren't edited, and edits that can't happen are refused." },
        { h: "The Bank", p: "Copy into the Bank works from any game and leaves the save unchanged. Moving into the Bank and putting a Pokémon into a save work for Game Boy and Game Boy Advance box Pokémon, into a save of the same generation." },
        { h: "Built to be safe", list: [
          "Only real releases with good checksums are written.",
          "A Luma Saves backup is made first, and the new save is checked before and after it's written.",
          "A move copies before it removes, so an interruption leaves a copy, never a loss.",
          "Every change is in History, and Put back undoes it."
        ] }
      ],
      guide: [["Luma Dex", "luma-dex"], ["Luma Saves", "luma-saves"], ["Luma Shop", "luma-shop"]],
      colors: ["#e8584f", "#7a2330"],
      images: { icon: "img/tile-dex.webp", art: "img/art/vista-rainbow.jpg", artPos: "center 35%", feature: "img/tile-dex.webp", after: "guide/img/luma-dex.jpg", before: "", aspect: "1280 / 435", gallery: ["guide/img/luma-dex-editor.jpg"] },
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
        "Luma Friends connects Luma Core players with no account and no server. Each player gets a friend code and trades cards: your name, color, picture and greeting, plus anything else you choose to share. The same list also shows your Steam friends, who you follow on RetroAchievements, and Discord.",
      features: [
        "A friend code made from a key that never leaves the device",
        "Signed cards, so nobody can change yours",
        "Add friends by card file or QR code",
        "Nearby: swap cards with Luma Core devices on the same Wi-Fi",
        "Steam, RetroAchievements and Discord in the same list"
      ],
      sections: [
        { h: "Your card", p: "You choose what your card shares, each part on or off: favorite games, recently played, achievements, your RetroAchievements name and total playtime. Share it as a QR code or as a file through any app." },
        { h: "Nearby", p: "The Nearby tab finds other Luma Core devices on the same Wi-Fi while it is open. Ask to swap, check that both screens show the same 4-digit number, and the cards trade, encrypted." },
        { h: "Other services", p: "Steam and RetroAchievements need your own keys, which are kept encrypted. With the Discord app installed, Discord opens on the top screen with Luma Core's dock on the bottom." },
        { h: "Private by design", p: "Nothing is uploaded: a card goes only where you send it. You can remove or block anyone at any time, and Reset my Luma identity gives you a new code." }
      ],
      guide: [["Luma Friends and the Friends tab", "luma-friends-and-the-friends-tab"], ["Luma Pass", "luma-pass"], ["Privacy", "privacy"]],
      colors: ["#f06aa0", "#7a2a5e"],
      images: { icon: "img/tile-friends.webp", art: "img/art/vista-purple.jpg", artPos: "center 35%", artFilter: "hue-rotate(55deg) saturate(1.25)", feature: "img/tile-friends.webp", after: "guide/img/friends-luma-card.jpg", before: "", aspect: "1280 / 720", gallery: ["guide/img/friends-luma-tools.jpg"] },
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
      version: "v0.1.43",
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
      stats: [["Patch", "v0.1.43"], ["HD pack files", "15,460"], ["HD pack size", "6.16 GB"]],
      videos: [
        ["JagQnseBXvo", "The English patch in action"],
        ["I9z172vRZDI", "Patching on an Android device"]
      ],
      sections: [
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
          "For the game's 3D mode, and still a work in progress."
        ] },
        { h: "What you need", p: "Your own decrypted Japanese copy of the game. The patch contains no game data. Keep about twice the game's size free while patching." }
      ],
      guide: [["Luma Shop", "luma-shop"], ["Forged games", "forged-games"]],
      pack: { open: true, file: "dqxi-0004000000199200-v1.zip", size: "6.16 GB", system: "3DS", code: "0004000000199200", sha256: "0a2ef1885dcfdcbc8b3eebfee3a3697614065457cbd9e30af771acbf1f99ad7d",
        addon: { file: "dqxi-title-0004000000199200-v0.1.43.zip", size: "21 MB", sha256: "0bd99f20167e0dcbeb56b231aafc9b81a61df71d2da596c684418662cb094451" } },
      github: "Exhilo62/DQXI-3DS-English-Patch", // the page reads the latest release from here
      colors: ["#4a8fe8", "#243a8f"],
      images: { icon: "img/icon-dqxi.png", art: "img/art/vista-moon.jpg", artPos: "center 35%", artFilter: "hue-rotate(-45deg) saturate(1.1)", feature: "img/art/dqxi-logo.png", featureWide: true, after: "img/art/dqxi-hero.jpg", before: "", aspect: "16 / 9", gallery: [] },
      links: { download: "https://github.com/Exhilo62/DQXI-3DS-English-Patch/releases", source: "https://github.com/Exhilo62/DQXI-3DS-English-Patch" }
    }
  ]
};
