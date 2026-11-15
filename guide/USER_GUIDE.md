# Luma Core user guide

> **Status:** every section is written, with Thor screenshots.

Luma Core turns a dual-screen handheld into a game console with a 3DS-style Home: your Game Boy, Game Boy Color, Game
Boy Advance, DS and 3DS games on one shelf, with both screens used everywhere. This guide walks through every feature,
one section each: what it is, how to use it with the controller, and tips.

It's written for the **AYN Thor** (two screens: the big top screen and the smaller bottom one). Where other devices,
such as the Retroid, work differently, it says so. For a five-minute start, see the [Quick start](SETUP_GUIDE.md).

**Buttons in this guide:** A chooses, B goes back, X opens a menu for the highlighted item, Y does that screen's extra
action, L / R switch tabs, L2 / R2 page through long lists, Start opens Home's menu. Touch works on the bottom screen
too.

## Contents

1. [First-time setup](#first-time-setup)
2. [Home and the Home bar](#home-and-the-home-bar)
3. [My Home](#my-home)
4. [Games and system folders](#games-and-system-folders)
5. [Playing games](#playing-games)
6. [Quick Resume](#quick-resume)
7. [Forged games](#forged-games)
8. [Companions](#companions)
9. [Luma Shop](#luma-shop)
10. [Luma Dex](#luma-dex)
11. [Luma Saves](#luma-saves)
12. [Luma Themes](#luma-themes)
13. [Luma Pass](#luma-pass)
14. [Luma Friends and the Friends tab](#luma-friends-and-the-friends-tab)
15. [Notifications](#notifications)
16. [Achievements and RetroAchievements](#achievements-and-retroachievements)
17. [Scraping artwork](#scraping-artwork)
18. [3DS system files](#3ds-system-files)
19. [Settings](#settings)
20. [Troubleshooting and FAQ](#troubleshooting-and-faq)
21. [Privacy](#privacy)

## First-time setup

![Setup, step 1](guide/img/setup-welcome.jpg)

**What it is:** six short steps the first time Luma Core starts. The top screen shows each step's picture or a live
preview; the bottom screen has the choices and *Next* / *Back* / *Skip setup*. Touch works on both screens.

**Buttons:** Up / Down select, Left / Right change a choice (or move between Next, Back and Skip), A chooses, B goes back
a step. In a pop-up list, Left / Right jump five items.

1. **Welcome to Luma Core:** *Allow file access* (Android's all-files access), so Luma Core can read your game folders
   and keep saves, states and texture packs in its own folder (`LumaCore`).
2. **About you:** your name (up to 10 letters, as on a DS), birthday, favorite color and language. Games use these.
3. **Your games:** add your Game Boy / Game Boy Color / Game Boy Advance folder, your DS folder and your 3DS folder
   (subfolders count; one folder can hold every system), the optional [3DS system files](#3ds-system-files), and
   *Download game information* (about 3 MB, once).
4. **Texture packs:** *Load HD texture packs*. Packs go in `LumaCore/textures`, one folder per game.
5. **Pick a look:** Home colors (Light or Dark) and the Home bar: *Reimagined* or *Your theme's colors*.
6. **Choose what's on your Home:** which tabs are on the bar, and which of Luma Core's own apps start on My Home.

![Setup, steps 3 to 6](guide/img/setup-steps.jpg)

The last button is *Done: start playing*. *Skip setup* goes straight to Home.

**Tips:** run it again any time from Settings > General > Library > *Run the setup again*; your profile alone is in
Settings > General > Profile.

## Home and the Home bar

![Every tab of the Home bar](guide/img/home-bar-tabs.jpg)

**What it is:** Luma Core's 3DS-style Home. The bottom screen has the **Home bar** (a row of icon tabs) at the top, a
grid of tiles, and an *Open* bar. The top screen shows the highlighted game's banner, artwork or logo, with the time,
battery and Wi-Fi.

**The tabs** (L / R switch them):

- **Home:** your own Home, with games, folders and badges where you put them ([My Home](#my-home)).
- **Games:** every game, by system ([Games and system folders](#games-and-system-folders)).
- **Forged:** Luma Core's own versions of games ([Forged games](#forged-games)).
- **Notifications:** what's new ([Notifications](#notifications)).
- **Friends:** everyone you know ([Luma Friends and the Friends tab](#luma-friends-and-the-friends-tab)).
- **Apps:** your Android apps.
- Optional, off at first: **Quick Resume** (your last games, to carry on where you left off), **Recent** (by last
  played), **Favorites** (games you starred) and **Achievements**.

Home, Games, Forged and Apps are always there; turn the others on or off and change the order in Settings > General >
Home.

**Buttons on Home:**

- **A** opens or plays. **B** backs out of a folder or a search.
- **X** opens the menu for the highlighted tile (a long press on a tile does too).
- **Y** stars a game as a favorite (on My Home it picks a tile up; on a system folder it opens its menu).
- **L2 / R2** page through the games. The right stick jumps by letter.
- **Select** starts the selected game's newest save state (it asks first).
- **Start** opens Home's menu: *Settings*, *Luma Themes*, *Luma Shop*, *Search*, *Friends*, *Add a ROM folder*, *Open
  one file*, *Controls* and *Android settings* (plus *Resume* / *Close* while a game waits behind Home).

![Home's menu](guide/img/home-menu.jpg)

**Tips:**

- **Search** (Home's menu) finds a game by name, code, genre, developer or year. B clears it.
- **Grid size:** 1 to 6 rows, kept for each tab and folder. Change it with the small button at the top right of the
  bottom screen; the sort button is beside it (A - Z, Playtime, Last played, Recently added, Release date, Genre).

## My Home

![My Home](guide/img/my-home.jpg)

**What it is:** your own Home tab, laid out like a 3DS HOME Menu. Each space holds a game, a folder, a badge from
ThemePlaza, or one of Luma Core's apps (Luma Themes, Luma Shop, Luma Saves, Luma Pass, Luma Friends, 3DS system files,
3DS system apps). Your layout survives a reinstall.

**Moving tiles:** press **Y** (or X > *Move*), move with the D-pad, then A or Y to drop it (B cancels).

- On an empty space, it moves there. On a game, they swap; rest it there for 3 seconds and the two become a folder.
- On a folder, it goes inside. A badge dropped on a folder becomes the folder's picture.

**Folders:** X on an empty space > *Create a folder here* (A does it too); it asks for a name. A new folder is called
*New Folder* and shows a number until you name it, then the name's first letter. X on a folder: *Open*, *Rename*, *Put a
badge on it…*, *Move*, *Unpack the folder*. B closes an open folder.

![A new folder](guide/img/my-home-folder.jpg)

**Other X menus:** on an empty space, *Put a badge here…* or *Put a game here…*; on a badge, *Make it a shortcut…*
(A on it then starts that game); on a game, *Move*, *Take out of the folder* or *Take off My Home*. On the other tabs, X
on a game offers *Add to My Home*.

**Touch:** tap a space to pick it. Hold an empty space for 3 seconds (a ring fills) for a new folder. Hold a tile to drag
it; rest it on another tile for 3 seconds ("Let go: a new folder") to make a folder.

**Tip:** a Luma app you took off comes back from the Luma Shop (*Put back*) or Settings > General > Home.

## Games and system folders

![The Games tab: GB, GBC, GBA, DS, 3DS](guide/img/games-systems.jpg)

**What it is:** every game, in one folder per system, in release order: **Game Boy, Game Boy Color, Game Boy Advance,
DS, 3DS** (only systems you have games for). Each folder shows its game count and a collage of its games. A opens a
folder; B goes back.

**X (or Y) on a system folder:** *Scrape artwork* (for its games), *Folder icon…* (console icons, one of its games, or
your own picture), *Rename folder*, and *Reset folder* once you've changed it.

![X on a system folder](guide/img/games-folder-menu.jpg)

**X on a game:**

- *Open* (or *Resume* / *Close the game* if it's waiting behind Home) and *Save states*.
- *Forged* or *Bottom screen* (see [Forged games](#forged-games)).
- *Game settings*, *Texture pack*, *Game info* and *Manual* (3DS games that have one).
- *Hide game* (Settings > General > Library > Hidden games brings it back), *Get artwork…*, *Add to favorites*, and
  *Add to* / *Take off My Home*.

![X on a game](guide/img/game-menu.jpg)

**Y on a game** stars it as a favorite.

## Playing games

**Starting:** A on a game. DS games, 3DS games and Game Boy games each run in Luma Core's own player, using both
screens.

**The in-game menu:** press the device's **Back** button (or the controller's Mode button).

- **DS:** Resume, Save state, Load state, Screen filter (*Luma Core shaders* / *Other shaders*, L / R switch), Swap
  screens, Game settings, Settings, Reload texture packs, Restart the game, Quit to library (and Achievements when
  RetroAchievements is on).
- **3DS:** Resume, Save state, Load state, Swap screens, Achievements, 3DS settings for this game, Quit to Luma Core.
- **Game Boy:** Resume, Save state, Load state, Achievements, Fast forward, Restart the game, settings for this game,
  Quit to Luma Core.

![The 3DS in-game menu](guide/img/ingame-menu.jpg)

**Save states:** *Quick slot*, numbered slots, and *Where you quit* (made when you quit; load only). Each shows a picture
and the date. Hardcore mode (RetroAchievements) blocks loading states.

**Shortcuts (DS, by default):** L2 fast forward, R2 swap screens, L3 quick save, R3 quick load. Set your own combos in
Settings > General > Controls > *Shortcut buttons*.

![Screen filters](guide/img/screen-filter.jpg)

### Suspend: the Home button

Press the device's **Home** button during a game and the game **pauses** (it isn't closed); Luma Core's Home comes up
with a small window of the game on the top screen and *Resume* on the Open bar.

![A game waiting behind Home](guide/img/suspend-window.jpg)

- Press **Home** again (after a second) to go straight back in, or A on *Resume*.
- Start or X offers *Resume* / *Close*. Closing saves *Where you quit*, so the [Quick Resume](#quick-resume) tab puts you
  back where you were.
- Only one game waits at a time: starting another closes the first, saving its place.

![X on the waiting game](guide/img/suspend-menu.jpg)

## Quick Resume

![The Quick Resume tab](guide/img/quick-resume.jpg)

**What it is:** quitting a game (or closing the one waiting behind Home) saves a state called *Where you quit*. The
**Quick Resume** tab (turn it on in Settings > General > Home) lists your last 3 games, one per row, each with an info
box: achievement progress and the latest unlock, time played, last played, and whether *where you quit* is saved.

**How to use it:** A on a row starts that game right where you quit. Starting the same game from any other tab begins
normally, from its own save.

**Tips:** it never touches the game's own save file. X > *Remove from Recent* takes a game off Recent and Quick Resume;
its saves and play time stay. In RetroAchievements Hardcore mode, Quick Resume's state can't be loaded.

## Forged games

![Forged choice for a DS game](guide/img/forged-choice.jpg)

**What it is:** the games Luma Core made something for, on the **Forged** tab (always on the bar): "Games we optimized,
3DS games with our texture packs, and the Extras you set up". A Forged game wears a gold Forged badge, and its tile has
a Forged emblem in the corner (gray while its Forged is off).

What counts as Forged:

- **DS games Luma Core optimized:** Pokémon HeartGold, Pokémon SoulSilver and Mario Kart DS (every region).
- **3DS games with Luma Core's own 4K texture pack** installed from the Luma Shop: The Legend of Legacy, The Alliance
  Alive, Final Fantasy Explorers, 7th Dragon III Code: VFD, Code Name: S.T.E.A.M., Ever Oasis and Super Street Fighter
  IV: 3D Edition. Someone else's pack doesn't count.
- **The English Dragon Quest XI** made by the Luma Shop's patcher.
- **Game Boy and Game Boy Advance games with a companion** on the bottom screen (see [Companions](#companions)): only
  the exact retail release, not ROM hacks.
- **Golden Sun - Dual Screen Companion** (a Luma Shop extra) gets the badge once set up; it lives on My Home.

![The Forged tab](guide/img/forged-tab.jpg)

**Turning it on or off:** highlight the game, press **X**, choose **Forged**. It applies from the game's next start.

- **DS:** *AYN Thor optimized* (texture pack, widescreen everywhere and the bottom screen extended, made for the Thor;
  "experimental" on other devices), *Basics* (texture pack and widescreen 3D worlds only: fine on any device) or *Off*
  (the game as it is; the default).
- **3DS:** *On* (its texture pack and mods, as installed; the default) or *Off* (no pack, mods or plugins; your files
  stay where they are).
- **GB / GBA with a companion:** *On* (the companion on the bottom screen; the default) or *Off* (the bottom screen
  stays black; the menu button still opens the menu). Games without a companion show *Bottom screen* instead: *Panel*
  (save states, fast forward and the menu) or *Off*.

**Tips:** settings you changed by hand stay as you set them. A DS game's HD pack can also be switched off in its Game
settings. Forged switches are listed in [Notifications](#notifications).

## Companions

A companion fills the bottom screen while a Game Boy, Game Boy Color or Game Boy Advance game plays on top. It only
reads from the game and never changes it. Names and pictures come from your own ROM. Every companion ends with a
**Saves** button (the save-state panel, with *Back to companion*). On GB / GBC games, **L / R** step through its tabs;
on GBA games L and R stay the game's buttons, so switch tabs by touch.

![Golden Sun's companion: the party](guide/img/companion-golden-sun.jpg)

- **Pokémon Crystal:** Party (sprites, level, held item, HP, status, moves), Trainer (ID, money, play time, Pokédex,
  the 16 badges) and Map (the town map with your spot).
![Pokémon Crystal's companion: the trainer](guide/img/companion-crystal.jpg)

- **Pokémon FireRed, LeafGreen and Emerald:** Party, Trainer and Map, with the game's own map drawn from the ROM.
- **Golden Sun and The Lost Age:** Party (levels, classes, HP / PP, stats), Djinn (every Djinni and who holds it), Items
  and Map, with your place and coins on top.
- **Dragon Ball Z: The Legacy of Goku:** Goku's level, HP and Ki, and his bag. **The Legacy of Goku II:** party, the
  Dragon Balls found, items and the place.
- **Castlevania: Aria of Sorrow:** Soma (stats, gold, status), Souls, and the castle map with the game's own percentage.
![Aria of Sorrow's companion](guide/img/companion-aria.jpg)

- **Metroid Fusion and Zero Mission:** Samus (energy, missiles, power bombs, upgrades found and missing) and the area
  map with each area's completion.
- **The Legend of Zelda: A Link to the Past (GBA):** Link (hearts, rupees, bombs, arrows, crystals, pendants, gear),
  Items and the Light or Dark World map.
- **Harvest Moon: Friends of Mineral Town / More Friends of Mineral Town:** Today (date, weather, forecast, money,
  stamina), Field (crop days), Hearts and Villagers (friendship, talked or gifted today, birthdays).
- **Fire Emblem (Blazing Blade) and The Sacred Stones:** the unit under the cursor, your army (dimmed once they've
  acted) and the enemies, with the turn, phase and gold on top.

**Golden Sun - Dual Screen Companion** is a separate Luma Shop extra: party, Psynergy, items, Djinn, battle info and a
live map. ZL swaps the screens; Back opens Resume / Swap screens / Quit. Its ROMs and saves live in
`LumaCore/extras/goldensun`.

## Luma Shop

![The Luma Shop](guide/img/shop.jpg)

**What it is:** Luma Core's own apps, extras and texture packs, in one list. The top screen shows the highlighted item
with its status; the bottom screen is the list. **A** does the main action, **X** opens *More*, **B** goes back.

- **Apps:** Luma Themes, Luma Saves, Luma Dex, Luma Friends, Luma Achievements, Luma Pass, the Luma Shop itself and 3DS
  Files. Installing needs no download. *Not on My Home* means the tile was taken off: **A** (*Put back*) puts it in My
  Home's first empty space. Built-in apps can't be uninstalled. Luma Dex starts uninstalled; the others start on My
  Home.
- **Extras:** Golden Sun - Dual Screen Companion (*Installed · needs ROMs* → *Pick ROMs* → *Ready*) and the Dragon Quest
  XI English Patch (*Needs your ROM* → *Set up*).
- **Texture packs:** Luma Core's HD packs for seven 3DS games, Pokémon HeartGold and Mario Kart DS. You need your own
  copy of the game (*Game not found* otherwise).

![Texture packs and their states](guide/img/shop-packs.jpg)

**Uninstalling** asks first, and asks again before deleting anything you made (the Bank for Luma Dex, your friends and
card for Luma Friends, a game extra's ROMs and settings). Every question starts on *Cancel* or *keep*. Your saves always
stay.

**Downloads run in the background:** leave the shop and they carry on, with an Android notification (*Texture pack
downloads*, with Pause; Android 13 and later ask once for notification permission). *Stop* keeps what's downloaded, and
*Install* then carries on from there. X > *Cancel* stops and deletes it; X > *Delete the partial download* clears a
stopped one. Each download is checked before it installs, and needs about twice the pack's size free (The Alliance
Alive: about 18 GB). Packs install to `LumaCore/textures/`.

![A pack downloading](guide/img/shop-download.jpg)

**Tips:** *Replace with ours* moves someone else's pack to `LumaCore/textures-backup` and never deletes it.
Uninstalling a pack removes only our files; your game and saves aren't touched. A pack kept in the Azahar app's own
folder shows *Not managed by Luma* and is never changed.

## Luma Dex

![Luma Dex: a Pokémon in detail, and the party](guide/img/luma-dex.jpg)

**What it is:** a Pokémon save viewer and editor (install it from Luma Shop > Apps). It reads the saves Luma Core makes,
with names and pictures from your own ROMs.

- **Read and edit:** Red, Blue, Yellow, Crystal, Ruby, Sapphire, FireRed, LeafGreen and Emerald.
- **View only for now:** Diamond, Pearl, Platinum, HeartGold, SoulSilver, Black, White, Black 2, White 2, and the 3DS
  games X, Y, Omega Ruby, Alpha Sapphire, Sun, Moon, Ultra Sun and Ultra Moon.

**Tabs (L / R):** Saves, Boxes, Pokédex, Living Dex, Bank and History. The bottom screen has the lists and box grids;
the top screen shows the highlighted Pokémon in detail (sprite, level, nature, ability, item, moves, stats, original
trainer) with a check: *Looks fine*, *Unusual* or *Can't happen*.

- **Saves:** A opens its boxes; Y looks again. **Boxes:** A for *Options*, X next box, Y previous box. **Pokédex:**
  Left / Right jump by 10. **Living Dex:** Y switches between *Missing* and *Show all*. **History:** A *Put back*.

**Editing (Gen 1-3):** A > *Edit it*: nickname, held item, moves it can learn, IVs and EVs, and level (stats worked out
again). Left / Right change, A chooses, Y undoes, X saves (it asks first). Eggs aren't edited, and edits that *can't
happen* are refused. Money and the bag are in [Luma Saves](#luma-saves).

**The Bank** (`LumaCore/luma-dex/bank`): *Copy into the Bank* works from any game and leaves the save unchanged.
*Move into the Bank* and *Put into a save* work for Gen 1-3 box Pokémon, into a save of the same generation.

**Safety:** only real releases with good checksums are written. The save must be unchanged since Luma Dex read it. A
Luma Saves backup is made first, the new save is checked before and after it's written, and a move copies before it
removes, so an interruption leaves a copy, never a loss. Every change is in History, and *Put back* undoes it.

![Editing a Pokémon](guide/img/luma-dex-editor.jpg)

![The Bank](guide/img/luma-dex-bank.jpg)

## Luma Saves

![Luma Saves: every game's saves](guide/img/luma-saves.jpg)

**What it is:** every DS, GB / GBA and 3DS save and save state in one place. Tabs: All, GB / GBA, DS, 3DS and Trash.

- **Games list:** A opens a game, X backs it up, Y refreshes. **Inside a game:** A for *Options*, X backs up.
- **Options:** *View save* (read only: for Pokémon the trainer, party and badges; for Golden Sun the party, Djinn and
  coins), *Edit money and items* (Pokémon FireRed, LeafGreen, Emerald and Crystal) or *Edit coins and items* (Golden
  Sun, The Lost Age), *Back up*, *Restore a backup*, *Export*, *Import* and *Delete* (to the Trash).
- **Trash:** *Put back*, *Delete for good* (asks twice) and *Empty the trash* (asks twice).

![Viewing a Pokémon Crystal save](guide/img/luma-saves-viewer.jpg)

**Tips:**

- Restore, import and every edit back up the current save first.
- A game paused behind Home is left alone: close it first.
- Luma Saves' backups live in `LumaCore/luma-saves/backups` until you delete them. Luma Core also backs up a DS or
  3DS save automatically before the game starts, if it changed (the newest 5, in `LumaCore/backups`; rename one to
  keep it).

## Luma Themes

![Luma Themes, 3DS themes tab](guide/img/themes-3ds.jpg)

**What it is:** the one place for how Luma Core looks. It's a tile on My Home, and Settings > General > Luma Themes and
Home's menu (Start) open it too. It has two tabs (L / R):

- **3DS themes:** real 3DS HOME Menu themes. *Installed themes* previews yours on both screens; *Get themes on
  ThemePlaza* opens themeplaza.art inside Luma Core so you can download themes; *Build a theme* makes your own from
  parts. Below are a theme's own sounds and music (on or off), music volume, **Theme shuffle** (another of your themes
  each time Home comes back, as on a 3DS), the **Boot screen** (a splash screen from ThemePlaza instead of Luma Core's
  star) and **Badges**.
- **System theme:** Luma Core's own look. Home colors (Light or Dark), Favorite color, the **Home bar** (Reimagined or
  your theme's colors), top and bottom wallpapers (your own pictures), grid size, the bar's icon style and color,
  the button style used in hints, the battery percentage and the 3DS banner jingle.

![Luma Themes, System theme tab](guide/img/themes-system.jpg)

**How to use it:**

- Open the tile, pick a tab with L / R, move with the D-pad, change a value with A (or Left / Right on a choice).
- In *Installed themes*: **A** applies a theme, **X** uninstalls it (keeping the parts you choose), **Y** opens its
  ThemePlaza page with its author. *Home light* and *Home dark* are always there as the way back to Luma Core's own look.

**Reimagined:** Luma Core's own white Home bar, with every icon in its own color and a gray selection box. It's the
default. *Your theme's colors* gives the bar the colors of the applied 3DS theme instead. Bar color and Bar icon color
can also be set apart.

**Tips:**

- Every theme is made by its author; each theme's ThemePlaza page (Y on it) credits them.
- A 3DS theme dresses the Home look; applying one keeps your Reimagined bar unless you choose your theme's colors.
- Settings has no copy of these options any more: everything is here.

![Settings > General opens Luma Themes](guide/img/settings-luma-themes.jpg)

## Luma Pass

![Luma Pass in the Luma Shop](guide/img/luma-pass.jpg)

**What it is:** StreetPass by file, for your 3DS games: your Mii, greetings, ghosts and town go into a `.pass.zip` for
friends, and friends' passes become visitors in your games. It works both ways with AzaharPlus's ZipPass. Nothing is
uploaded. It's built in (a tile on My Home).

**How to use it:**

- *Export my pass…*: pick games (A ticks them), *Make the pass*, then *Share…*. Your pass is kept in
  `LumaCore/zippass/mine`.
- *Import passes…*: finds passes in `LumaCore/zippass` and Downloads, or *Choose a file…*; *Import all new
  passes* takes them all.
- *Undo the last change*, *System StreetPass modules* (needs the [3DS system files](#3ds-system-files)), *Turn StreetPass
  off for a game…* and *How Luma Pass works*.

**Tips:** close any 3DS game first. StreetPass is backed up before every import (the last 5 are kept), and Undo puts
the newest back. Only games with StreetPass turned on in the game take visitors. Luma Friends' Nearby can swap passes
too.

## Luma Friends and the Friends tab

All your friends are in one place: your Luma Core friends, Steam friends, who you follow on RetroAchievements, and
Discord. Home's **Friends** tab and the **Luma Friends** tile show the same list.

![A Luma friend's card on the top screen](guide/img/friends-luma-card.jpg)

### Luma Friends

**What it is:** friends between Luma Core players, with no account and no server. Each player gets a **friend code**
(like 1234-5678-9012), made from a key that never leaves the device. You trade **cards**: your name, color, picture
and greeting, plus anything else you turn on (favorite games, recently played, achievements, your RetroAchievements
name, total playtime). Cards are signed, so nobody can change yours.

**The screen** has four tabs (L / R):

- **Friends:** everyone (Luma, Steam, RetroAchievements, Discord). The top screen shows the highlighted friend's card.
  A on a Luma friend: share your card with them, remove them, or block them. A on a Steam or RetroAchievements friend
  opens their page; X gives their menu (profile, chat or message, open in your browser, ask again). Y asks Steam and
  RetroAchievements again.
- **My card:** what your card shares (each part on or off), *Show my QR code*, *Share my card* (a `.lumafriend` file
  through any app) and *Save my card to Downloads*. Recently played is off until you turn it on.
- **Add a friend:** cards found in `LumaCore/friends` and Downloads, *Choose a card file*, *Choose a QR picture*,
  and *Take a photo of a QR code* on devices with a camera. Every add asks you first.
- **Nearby:** finds other Luma Core devices on the same Wi-Fi while this tab is open. Ask to swap, check that both
  screens show the same 4-digit number, and the cards trade, encrypted. *Swap Luma Passes too* trades your last
  exported pass as well (theirs waits in Luma Pass's Import passes). *Show my name nearby* can be turned off.

![X on Home's Luma Friends row: the Luma tools](guide/img/friends-luma-tools.jpg)

### Home's Friends tab

The tab (the two-people icon on the bar) is the same list. At the top is a **Luma Friends** row with your friend code:
**A** opens your card, **X** opens the Luma tools (My Luma card, Show my QR code, Add a Luma friend, Nearby, All
friends). Those tools are on X on every friend too. Then come Discord's row, friends who are playing, online, away,
your Luma friends, and offline friends.

![Home's Friends tab (names blurred)](guide/img/friends-tab.jpg)

- **Steam and RetroAchievements** need your own keys: Settings > General > Friends. Their pages and chat open in Luma
  Core's own browser.
- **Discord's row:** with the Discord app installed, A opens it on the top screen and Luma Core's dock on the bottom
  screen (*Back to Luma*, *Discord on top*, and your latest messages); without it, Discord's web app opens in Luma
  Core's browser. You sign in to Discord yourself. X: Discord's web app, Messages, Discord notifications, *Hide Discord
  here*.
- **Keys:** the Steam Web API key (from steamcommunity.com/dev/apikey), your Steam profile, and the RetroAchievements
  web key (not your password). Each key dialog has a QR code to open the page on your phone. Keys are kept encrypted.
- Adding, removing or blocking a Luma friend shows on Home at once. If you take the Luma Friends app off (Luma Shop),
  its section and tools go from the tab and the other services stay.

**Tips:**

- A friend's card updates when you get a newer one from them. Remove or block anyone any time; *Blocked players*
  (Friends tab or Settings) unblocks them.
- Nearby needs both devices on the same Wi-Fi. Some guest, hotel or school networks keep devices apart; use your QR
  code or a card file then.
- Nothing is uploaded: a card goes only where you send it. *Reset my Luma identity* (My card) gives you a new code;
  friends then see a new person.

## Notifications

![The Notifications tab](guide/img/notifications.jpg)

**What it is:** what's new, on Home's bar: the list on the bottom screen in groups, the highlighted item big on the top
screen. Groups, in order: **Downloads** (texture packs downloading, with progress), **Now** (the game waiting behind
Home), **Discord**, **Achievements earned**, **Your library** (games added or gone), **Luma
Shop** (installs and uninstalls), **Forged** (switched on or off) and **Played lately**. A *New* chip marks what's new
since your last visit, and a dot on the bar button says there's something new.

**Buttons:** **A** does the obvious thing: continue the waiting game, open the game or app, open that achievement's
game page, open the conversation in Discord, or open the pack in the Luma Shop. **X** opens the menu:

- For a download: Pause, Cancel (deletes the partial download), Retry, Dismiss, Open in the Luma Shop.
- *Remove this one* takes one entry off the list.
- Switches for each kind (Achievements earned, Played lately, Games added or removed, Luma Shop, Forged switches,
  Discord messages).
- *Clear achievements earned*, *Clear played lately* and *Clear the changes*. Clearing only empties this list: your
  achievements, play history and playtime stay.

![X on Notifications](guide/img/notifications-menu.jpg)

**Discord messages** need Android's *Notification access* for Luma Core, which you turn on yourself (X > *Discord
notification access* > *Open the setting*, then flip Luma Core's switch; if Android says it's a restricted setting:
App info > ⋮ > *Allow restricted settings*, then try again). Luma Core reads only Discord's notifications, keeps the
sender, a short preview, the time and a small picture for the last 20 conversations on the device, and never posts,
answers or dismisses anything. *Forget them* deletes them all.

**Tips:** the same switches are in Settings > General > Notifications. Turning a kind off only hides it.

## Achievements and RetroAchievements

![Luma Core's own achievements](guide/img/achievements-luma.jpg)

**What it is:** the **Achievements** tab and the **Luma Achievements** tile (for when the tab is hidden) show your
games with achievements. L / R switch the source: All, RetroAchievements or 3DS. **A** opens a game's list (Left / Right
page through it), **Y** refreshes, **X** opens Settings. The list opens offline from the last answer.

- **Luma Core's own:** 43 achievements (450 points: Bronze, Silver, Gold and Platinum) for playing, your library, My
  Home, themes and more. They stay on the device, are never sent anywhere, and survive a reinstall. Pop-ups wait for a
  menu, never during a game.
- **3DS games:** Luma Core's own sets, starting with Super Mario 3D Land (USA): a "You have X of N" pop-up at start,
  then unlock pop-ups during the game. Loading a save state can't unlock anything.
- **RetroAchievements** (DS, Game Boy, Game Boy Color, Game Boy Advance): Settings > General > RetroAchievements >
  *Sign in* with your own account (only a token is kept). **Hardcore mode** is on by default: loading states (Quick
  Resume too) is blocked, a *Hardcore* label shows in the game, and saving states and fast forward still work. The list
  is in the in-game menu > *Achievements* and in Game info. Unlocks earned offline are sent when you're back online.

![An unlock pop-up in a game](guide/img/achievements-popup.jpg)

**Tips:** until RetroAchievements approves Luma Core, every unlock counts as softcore. Changes apply from the next game
start.

## Scraping artwork

![Get artwork on a game](guide/img/artwork-menu.jpg)

**What it is:** covers, backgrounds, logos and icons for your games.

- **Free box art** from libretro's covers, downloaded as games show, with Settings > General > Library > *Artwork*:
  *Box art*. (*ROM icons* keeps the 3DS look.)
- **SteamGridDB** (covers, backgrounds, logos and icons, some animated) with your own free key: Settings > General >
  Scraping > *SteamGridDB key* (the dialog has a QR code to make one on your phone). Each picture is credited to its
  maker.
- **ScreenScraper** account: Settings > General > Scraping (not active in this version yet).

**How to use it:**

- **One game:** X > *Get artwork…*, then pick from *Covers*, *Backgrounds* and *Logos* (L / R switch kinds).
- **One system:** X on its folder > *Scrape artwork*.
- **Everything:** Settings > General > Scraping > *Scrape artwork*. Pick the parts first; it fills only games without
  art, and art you picked yourself stays.

![Picking a cover](guide/img/artwork-covers.jpg)

**Tips:** *Scrape region*, *Scrape language* and *Art sources* are in the same section. With box art on, *Game
backgrounds* puts a background behind a game's logo on Home's top screen. Files go to `LumaCore/scraped`.

## 3DS system files

![3DS system apps in Settings > General > Home](guide/img/3ds-system-apps.jpg)

**What it is:** your own 3DS's system titles and console data, kept in `LumaCore/3ds`. They're optional: every game
works without them. They bring Mii Maker, StreetPass Mii Plaza, Mii faces, StreetPass and the HOME Menu, and 3DS system
apps (Sound, Camera, Activity Log and others) on My Home. Nothing from Nintendo comes with Luma Core.

**How to get them:**

- *Set up from your 3DS over Wi-Fi…*: needs a 3DS with custom firmware (Luma3DS) running Azahar's *ArticSetupTool* from
  the Homebrew Launcher. Enter the address it shows, do *Old 3DS setup*, then *New 3DS setup*.
- *Copy from a folder…*: an Azahar or Citra user folder with `nand` and `sysdata`.

**Where:** setup step 3, the 3DS Files tile on My Home, Settings > 3DS > System files, or Settings > General > Home >
*3DS apps* (which also chooses which system apps are on My Home).

**Tips:** don't share the `nand` or `sysdata` folders, and don't go online with Luma Core and your 3DS at the same time.
The files can't change while a 3DS game is running. *How to get your system files* explains it step by step.

## Settings

![Settings tabs](guide/img/settings-tabs.jpg)

**Open it:** Home's menu (Start) > *Settings*. Tabs (L / R): **General**, **GB**, **DS**, **3DS** and **About**. On the
General tab each group opens with A; the bottom screen explains the highlighted row.

**General:**

- **Profile:** name, birthday, DS favorite color, language.
- **RetroAchievements:** *Sign in* / *Account*, *Hardcore mode*.
- **Luma Themes:** opens [Luma Themes](#luma-themes), where every theme setting lives.
- **Home:** which tabs are on the bar and their order, and which Luma apps and 3DS apps are on My Home.
- **Screens:** *Screen layout*: *Dual screen (auto)* or *Single screen*.
- **Controls:** *Remap buttons*, *Shortcut buttons*, *Swap A/B and X/Y*.
- **Menus:** menu sounds, haptics, the boot chime.
- **Library:** artwork, covers, game backgrounds, the 3DS top screen (animated banner or scraped logo), sort order,
  hidden games, game information, your ROM folders, *Run the setup again*.
- **Scraping**, **Friends** (your keys) and **Notifications** (which sections show, Discord notification access).
- **GPU driver:** custom drivers for 3DS games.
- **Storage:** all-files access. **Android:** Android settings, square app icons, and *Home app*.

**GB, DS and 3DS:** the defaults for every game of that system: video and screen, speed, buttons, textures, audio and
system options. The 3DS tab starts with the system files.

**About:** the version, what's new, credits for every project built in, privacy and the note on AI use.

**One game's settings:** X on a game > *Game settings* (or *Game settings* in the in-game menu). They start with *Game
info* and *Edit game info*, then that game's own options (a DS game also has *Swap screens* and *Bottom screen on its own
display*), and *Reset this game's settings*.

### Other devices

Luma Core runs on dual-screen handhelds such as the AYN Thor and the Retroid Pocket Duo, and on phones.

- With one screen (no second display, or *Single screen*), both screens share one display: Luma Core's own screens put
  the details above the list, and on-screen touch controls appear when no controller is connected.
- The game's resolution is chosen from the device's graphics chip (4x on the Thor, 2x on a Retroid Pocket Duo Lite).
- On narrow screens like the Retroid's, the setup stacks its picture above its text.
- Forged's *AYN Thor optimized* is marked "experimental" on other devices; *Basics* is fine anywhere.

## Troubleshooting and FAQ

**Luma Core can't see my games or saves.** It needs *All-files access* (setup step 1, or Settings > General > Storage).
Without it, data goes to the app's own folder, which uninstalling deletes.

**How do I make the Thor start in Luma Core, and go back?** Settings > General > Android > *Home app*, then pick Luma
Core (or your old launcher to go back). Luma Core never changes this itself.

**The Home button asks "Select a Home app" or opens another launcher.** Android forgot its Home app (common after
installing or updating a launcher). Home shows *Android forgot its Home app*: choose *Fix it*, pick Luma Core, then
*Always*.

**Where are my files?** In `LumaCore` on your storage:

| Folder | What's there |
|---|---|
| `textures/<game code or title id>` | HD texture packs, one folder per game |
| `saves`, `states`, `backups` | DS and 3DS saves, save states, automatic backups |
| `gba/saves`, `gba/states`, `gba/bios` | Game Boy saves and states, optional BIOS files |
| `3ds` | 3DS system files |
| `friends` | Luma friend cards and QR pictures |
| `zippass` | Luma Pass |
| `luma-saves`, `luma-dex` | Luma Saves backups and trash, the Luma Dex Bank |

**Do I need a BIOS or firmware?** No. The built-in BIOS works for nearly every Game Boy game (your own `gba_bios.bin`,
`gb_bios.bin`, `gbc_bios.bin` or `sgb_bios.bin` in `LumaCore/gba/bios` add the boot animation). The 3DS system files
are optional too.

**The buttons are the wrong way round.** Settings > General > Controls: *Swap A/B and X/Y*, or *Remap buttons*.
Shortcuts: Select+R fast forward, Select+X quick save, Select+Y quick load, Select+L swap screens, Select+Start menu.

**Nearby finds nobody.** Both devices need the Nearby tab open on the same Wi-Fi; guest, hotel and school networks often
keep devices apart. Use your QR code or a card file instead.

**Steam friends don't show.** The key must be exactly 32 characters, 0-9 and A-F (watch O and 0, I and 1), and your
Steam friends list must be public.

**I want to start over.** Settings > General > *Run the setup again*.

## Privacy

Luma Core has no servers of its own: no analytics, crash reports, ads, tracking or accounts. Everything stays on the
device, and it goes online only for features you use.

- **On the device:** settings, play time and caches stay in the app's private storage. Saves, states, backups, packs,
  artwork, themes and friend cards are in `LumaCore` (other apps with storage access can read it, and uninstalling
  leaves it). Passwords are never kept: RetroAchievements keeps a token, and your keys are encrypted.
- **Going online** (each request carries your IP address): game lists (GameTDB), covers (libretro on GitHub, or
  ScreenScraper and SteamGridDB with your own login or key), RetroAchievements, Steam and RetroAchievements friends,
  ThemePlaza and the friends browser (like any browser), and texture pack downloads from Luma Core's own storage. Your
  saves, play time and game list are never sent.
- **Luma Friends** uploads nothing; a card goes only where you send it. Nearby stays on your own Wi-Fi.
- **Discord notification access** is off until you turn it on, and reads only Discord's notifications.
- **Permissions:** Internet, All-files access and vibration. No location, contacts, camera, microphone or phone ids.

The full policy is in [PRIVACY.md](PRIVACY.md).
