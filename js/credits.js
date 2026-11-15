/*
  LUMA CORE — credits
  -------------------
  Everything on the Credits page comes from this file.

  To thank a person, add a line to the "people" list:
      ["Their name", "What they did", "https://their-link (or leave as \"\")"],

  To credit a project, add a line to a group's items:
      ["Name", "Who made it", "What it is used for", "https://link"],
*/
window.LUMA_CREDITS = {
  intro:
    "Luma Core stands on a great deal of work by other people. This page is our thank-you to all of them. If you belong here and are missing, tell us and we will put it right.",

  /* People who helped directly: testers, contributors, artists, translators. */
  people: [
    // ["Name", "What they did", "https://link"],
  ],
  peopleNote:
    "Thank you to everyone who tests Luma Core, reports problems and suggests ideas. Your feedback shapes every pack, companion and feature.",

  groups: [
    {
      title: "The emulators Luma Core is built on",
      intro: "Luma Core plays your games using these open-source emulators.",
      items: [
        ["melonDS", "melonDS team", "The DS emulator at the heart of Luma Core", "https://github.com/melonDS-emu/melonDS"],
        ["Azahar", "Azahar team, building on Citra", "The 3DS core", "https://github.com/azahar-emu/azahar"],
        ["mGBA", "endrift", "The Game Boy, Game Boy Color and Game Boy Advance core", "https://github.com/mgba-emu/mgba"],
        ["Dolphin", "Dolphin team", "Code emitters used by the DS emulator", "https://github.com/dolphin-emu/dolphin"],
        ["dynarmic and mcl", "Azahar team and contributors", "The 3DS core's ARM recompiler", "https://github.com/azahar-emu/dynarmic"],
        ["Teakra", "Weiyi Wang", "DSi sound processor", "https://github.com/wwylele/teakra"],
        ["libadrenotools", "Billy Laws", "Custom GPU drivers for 3DS games", "https://github.com/bylaws/libadrenotools"],
        ["rcheevos", "RetroAchievements", "Achievement support for DS games", "https://github.com/RetroAchievements/rcheevos"]
      ]
    },
    {
      title: "The Home screen, Luma apps and extras",
      intro: "Projects and references behind the launcher and its features.",
      items: [
        ["SPICA", "gdkchan", "The 3DS banner model format behind the Home screen's animated banners", "https://github.com/gdkchan/SPICA"],
        ["3dbrew and GBATEK", "their contributors", "Documentation for the 3DS banner and DSi icon formats", ""],
        ["pret/pokecrystal", "the pret team", "Documentation used for the Pokémon Crystal companion", "https://github.com/pret/pokecrystal"],
        ["AzaharPlus ZipPass", "AzaharPlus", "The idea and pass file layout that Luma Pass follows, so passes trade both ways", ""],
        ["ThemePlaza", "ThemePlaza and every theme author", "The 3DS themes, badges and splash screens you can use in Luma Themes", "https://themeplaza.art"],
        ["SDL2", "the SDL team", "Golden Sun - Dual Screen Companion", "https://www.libsdl.org"]
      ]
    },
    {
      title: "Texture packs",
      intro: "Our packs are upscaled from each game's own textures. All original artwork remains the property of its creators.",
      items: [
        ["Real-ESRGAN", "Xintao Wang and contributors", "The upscaler used to make the texture packs", "https://github.com/xinntao/Real-ESRGAN"],
        ["stb_image", "Sean Barrett", "Loading texture pack pictures", "https://github.com/nothings/stb"]
      ]
    },
    {
      title: "Dragon Quest XI English patch",
      intro: "",
      items: [
        ["dqxi-format-tools", "Kenzie-1377", "File format tools the patch and its patcher build on", ""],
        ["Official English names", "Square Enix's localisation team", "English names follow the official localisation where one exists", ""],
        ["Apache Commons Compress", "The Apache Software Foundation", "Compression in the patcher", "https://commons.apache.org/proper/commons-compress/"]
      ]
    },
    {
      title: "Data and services",
      intro: "Luma Core only contacts these when you use the feature that needs them.",
      items: [
        ["RetroAchievements", "RetroAchievements.org", "Achievements and badges", "https://retroachievements.org"],
        ["libretro-thumbnails", "the libretro community", "Box art", "https://github.com/libretro-thumbnails"],
        ["GameTDB", "GameTDB.com", "Game information", "https://www.gametdb.com"],
        ["ScreenScraper", "ScreenScraper.fr", "Game information, box art, logos and screenshots", "https://www.screenscraper.fr"],
        ["SteamGridDB", "SteamGridDB and its artists", "Covers, backgrounds, logos and icons", "https://www.steamgriddb.com"]
      ]
    },
    {
      title: "The games",
      intro: "None of this exists without the games themselves. Every game, character, name and piece of original artwork belongs to its makers.",
      items: [
        ["The Legend of Legacy and The Alliance Alive", "FuRyu, published in the West by Atlus", "", ""],
        ["Final Fantasy Explorers and Dragon Quest XI", "Square Enix", "", ""],
        ["7th Dragon III Code: VFD", "Sega", "", ""],
        ["Code Name: S.T.E.A.M.", "Intelligent Systems and Nintendo", "", ""],
        ["Ever Oasis", "Grezzo and Nintendo", "", ""],
        ["Super Street Fighter IV: 3D Edition", "Capcom", "", ""],
        ["Pokémon HeartGold and SoulSilver", "Game Freak, Nintendo and The Pokémon Company", "", ""],
        ["Mario Kart DS", "Nintendo", "", ""]
      ]
    },
    {
      title: "This website",
      hidden: true, // not shown on the page; set to false to bring it back
      intro: "",
      items: [
        ["Esteban's Forge", "Esteban", "The site whose layout inspired this one", "https://estebanpdn.github.io"],
        ["Outfit", "Rodrigo Fuenzalida, via Google Fonts", "The typeface used across the site", "https://fonts.google.com/specimen/Outfit"]
      ]
    }
  ],

  /* Smaller libraries shipped inside Luma Core. */
  libraries: [
    "FatFs (ChaN)", "tiny-AES-c", "xxHash (Yann Collet)", "blip_buf", "SHA-1 (Steve Reid)", "Boost", "Crypto++ (Wei Dai)", "{fmt}",
    "cubeb (Mozilla)", "ENet", "inih", "lodepng", "microtar", "FAAD2", "SoundTouch", "Zstandard", "LibreSSL", "glad", "AndroidX", "Kotlin"
  ],

  licence:
    "Luma Core is free software under the GNU General Public License v3, the licence of melonDS, which it is built on. Each project above keeps its own licence. The full list, with licences, is also inside the app under Settings > About > Credits.",
  made:
    "Luma Core is a fan project. It is not affiliated with or endorsed by Nintendo or any game publisher, and it includes no games. Parts of the project are made with AI assistance, including the upscaling of texture packs."
};
