const games = [
  {
    id: 1,
    name: "Grand Theft Auto V",
    rating: "9.8/10",
    description:
      "Grand Theft Auto V is a sprawling open-world action-adventure game developed by Rockstar Games. Set in the vast and dynamic city of Los Santos and the surrounding Blaine County, the game follows the lives of three distinct characters: Michael De Santa, a retired bank robber struggling to cope with his dysfunctional family; Franklin Clinton, a young repo man seeking a better life; and Trevor Philips, a violent and unpredictable ex-military pilot. Players can switch between these characters at will, experiencing each of their unique perspectives and storylines as they weave together. The game is renowned for its intricate heists, countless side missions, dynamic NPCs, and breathtaking graphics. GTA V also features a robust online multiplayer mode, GTA Online, allowing players to collaborate or compete in a wide variety of missions, races, and elaborate criminal enterprises. Its longevity and cultural impact make it one of the best-selling games of all time.",
    splash: "../images/games/gtav.jpg",
    price: 29.99,
    discount: 0.0,
  },
  {
    id: 2,
    name: "Counter-Strike: Global Offensive",
    rating: "9/10",
    description:
      "Counter-Strike: Global Offensive (CS:GO) is a competitive first-person shooter that pits two teams, Terrorists and Counter-Terrorists, against each other in objective-based missions. Developed by Valve Corporation and Hidden Path Entertainment, CS:GO emphasizes strategic gameplay, precise aiming, and team coordination. Players engage in rounds where they either complete objectives like planting or defusing bombs, rescuing hostages, or eliminating the opposing team. The game's minimalistic yet intense approach to tactical shooting has made it a staple of eSports, with a thriving competitive scene and regular updates to maps, weapon skins, and gameplay balance. CS:GO is known for its skill ceiling and mechanical precision, making it both challenging for newcomers and rewarding for experienced players.",
    splash: "../images/games/csgo.jpg",
    price: 14.99,
    discount: 0.0,
  },
  {
    id: 3,
    name: "Fortnite",
    rating: "8.5/10",
    description:
      "Fortnite, developed by Epic Games, is a widely popular battle royale game that blends survival, combat, and building mechanics in a colorful and fast-paced environment. Up to 100 players parachute onto a sprawling island and compete to be the last one standing. Fortnite's unique gameplay twist lies in its construction mechanics, allowing players to quickly build walls, ramps, and structures for defense and offense during combat. Beyond battle royale, Fortnite offers limited-time events, creative mode for building your own worlds, and collaborative crossovers with popular franchises. Its vibrant visuals, frequent updates, and engaging community events have made it a cultural phenomenon, attracting millions of players across the globe.",
    splash: "../images/games/fort.jpg",
    price: 0.0,
    discount: 0,
  },
  {
    id: 4,
    name: "Among Us",
    rating: "8/10",
    description:
      "Among Us is a multiplayer social deduction game developed by InnerSloth that became a global sensation due to its unique blend of cooperation and deception. Set aboard a spaceship, players are assigned roles as Crewmates or Impostors. Crewmates must complete various tasks around the ship while working together to identify and eliminate the Impostors hiding among them. Meanwhile, Impostors aim to sabotage missions and eliminate Crewmates without revealing their identity. With its simple controls, colorful art style, and strategic gameplay, Among Us encourages communication, trust, and bluffing. The game can be played online or locally, making it perfect for parties, streaming, and connecting with friends.",
    splash: "../images/games/aus.jpg",
    price: 4.99,
    discount: 0.1,
  },
  {
    id: 5,
    name: "Forza Horizon 5",
    rating: "9.2/10",
    description:
      "Forza Horizon 5, developed by Playground Games, is an open-world racing game that transports players to a vibrant and diverse depiction of Mexico. With a vast map full of breathtaking landscapes, from deserts and jungles to historic cities and beaches, players can explore the world at their own pace in a variety of customizable cars. The game offers numerous races, challenges, stunts, and festivals that celebrate car culture. Forza Horizon 5 features a dynamic weather system, day-night cycle, and realistic driving physics that enhance the immersion and excitement of racing. Its expansive online multiplayer options and community events make it a must-play for racing enthusiasts.",
    splash: "../images/games/fh5.jpg",
    price: 59.99,
    discount: 0.15,
  },
  {
    id: 6,
    name: "League of Legends",
    rating: "9/10",
    description:
      "League of Legends (LoL), developed by Riot Games, is one of the most popular multiplayer online battle arena (MOBA) games in the world. Players assume the role of Summoners, controlling Champions with unique abilities, and engage in fast-paced, strategic 5v5 battles to destroy the opposing team's Nexus. With over 150 Champions to choose from, each offering different playstyles and roles, LoL offers a constantly evolving experience driven by regular updates, new content releases, and an expansive eSports scene. The game rewards strategy, teamwork, and mechanical skill, making it a top choice for competitive gaming enthusiasts.",
    splash: "../images/games/lol.jpg",
    price: 0.0,
    discount: 0,
  },
  {
    id: 7,
    name: "Minecraft",
    rating: "9.3/10",
    description:
      "Minecraft, developed by Mojang Studios, is a sandbox game that encourages creativity, exploration, and survival in a procedurally generated blocky 3D world. Players can gather resources, craft tools, and build elaborate structures either alone or in multiplayer mode. With multiple game modes such as Survival, Creative, and Adventure, Minecraft offers something for everyone. Whether battling mobs, mining deep underground, or constructing massive architectural feats, the game has endless possibilities. Frequent updates, community mods, and educational uses have cemented Minecraft's legacy as one of the best-selling games of all time, capturing the imaginations of players young and old.",
    splash: "../images/games/mc.jpg",
    price: 26.95,
    discount: 0.1,
  },
  {
    id: 8,
    name: "Red Dead Redemption 2",
    rating: "9.7/10",
    description:
      "Red Dead Redemption 2, developed by Rockstar Games, is an open-world action-adventure game set in 1899 during the twilight of America's Wild West era. Players control Arthur Morgan, a member of the Van der Linde gang, as he navigates loyalty, honor, and survival amidst changing times. The game offers an expansive and highly detailed world full of immersive storytelling, engaging side quests, hunting, fishing, horseback riding, and dynamic NPC interactions. With stunning graphics and a powerful narrative that examines morality and redemption, Red Dead Redemption 2 is widely regarded as a masterpiece in modern gaming.",
    splash: "../images/games/rdr2.jpg",
    price: 59.99,
    discount: 0.0,
  },
  {
    id: 9,
    name: "Sea of Thieves",
    rating: "8.4/10",
    description:
      "Sea of Thieves, developed by Rare, is an open-world pirate adventure game that invites players to live out their pirate fantasies. Players can form crews, sail the seas on customizable ships, hunt for treasure, and engage in thrilling naval battles with other pirates. The game encourages cooperation and creativity as players can choose their own path, from questing for gold hoards to engaging in player-versus-player (PvP) combat. Sea of Thieves is regularly updated with new content and features, providing an ever-evolving world that celebrates exploration and adventure in a light-hearted, cartoonish setting.",
    splash: "../images/games/sot.jpg",
    price: 39.99,
    discount: 0.0,
  },
  {
    id: 10,
    name: "Terraria",
    rating: "8.6/10",
    description:
      "Terraria is a sandbox adventure game that blends exploration, building, combat, and crafting within a procedurally generated 2D pixelated world. Players can dig deep into caves, build intricate structures, defeat powerful bosses, and acquire rare items. With countless biomes, monsters, and crafting recipes, Terraria offers players the freedom to play how they want, whether by focusing on building elaborate bases, uncovering hidden secrets, or mastering difficult challenges. Its retro art style and addictive gameplay have made Terraria a beloved title in the gaming community, offering a rich experience for both solo adventurers and multiplayer parties.",
    splash: "../images/games/ter.jpg",
    price: 9.99,
    discount: 0.0,
  },
  {
    id: 11,
    name: "Marvel's Spider-Man 2",
    rating: "9.8/10",
    description:
      "Marvels Spider-Man 2 is an exhilarating open-world action-adventure game developed by Insomniac Games. Players step into the suits of both Peter Parker and Miles Morales as they navigate the bustling streets of New York City, facing off against iconic villains like Venom and Kraven the Hunter. With an expanded map, refined combat mechanics, and new symbiote abilities, the game delivers a fast-paced and emotional superhero experience. The dynamic web-swinging and seamless character switching make exploration and combat more immersive than ever. This highly praised sequel builds upon the success of its predecessors, offering a gripping story and stunning visuals that capture the essence of being Spider-Man.",
    splash: "../images/games/spiderman.jpg",
    price: 59.99,
    discount: 0.0,
  },
  {
    id: 12,
    name: "It Takes Two",
    rating: "9.8/10",
    description:
      "It Takes Two is a critically acclaimed cooperative adventure developed by Hazelight Studios. Designed exclusively for two players, the game follows Cody and May, a couple on the verge of divorce who are magically transformed into tiny dolls. Trapped in a whimsical and ever-changing world, they must work together to overcome a variety of creative and challenging puzzles, platforming sections, and action-packed sequences. With its deeply emotional narrative, humorous dialogue, and unique mechanics that require constant cooperation, It Takes Two delivers an unforgettable gaming experience. Perfect for friends or couples, this award-winning game redefines co-op storytelling and gameplay.",
    splash: "../images/games/takestwo.jpg",
    price: 39.99,
    discount: 0.0,
  },
  {
    id: 13,
    name: "The Witcher 3: Wild Hunt",
    rating: "9.7/10",
    description:
      "The Witcher 3: Wild Hunt is an open-world action RPG developed by CD Projekt Red. Players control Geralt of Rivia, a monster hunter, as he searches for his adopted daughter in a war-torn world filled with dangerous beasts, mythical creatures, and treacherous politics. The game is known for its deep narrative, rich world-building, and meaningful player choices that shape the story. With a vast open world to explore, complex combat mechanics, and expansive DLCs, it's one of the most critically acclaimed games of its generation.",
    splash: "../images/games/tw3.jpg",
    price: 39.99,
    discount: 0.0,
  },
  {
    id: 14,
    name: "Subnautica 2",
    rating: "9.0/10",
    description:
      "Subnautica 2, developed by Unknown Worlds Entertainment, is an underwater survival adventure game set in the vast and mysterious oceans of an alien planet. Players explore the depths, encountering unique marine life, uncovering ancient secrets, and crafting tools and habitats to survive. The game emphasizes exploration, resource management, and base-building, with a captivating story that unfolds as players delve deeper into the ocean. With stunning visuals and an immersive atmosphere, Subnautica 2 is a must-play for fans of survival and exploration games.",
    splash: "../images/games/subnautica2.jpg",
    price: 59.99,
    discount: 0.0,
},
  {
    id: 15,
    name: "Call of Duty: Black Ops 6",
    rating: "9/10",
    description:
      "Call of Duty: Black Ops 6 is the latest installment in the Black Ops series, developed by Treyarch. Featuring an intense single-player campaign, fast-paced multiplayer, and the beloved Zombies mode, BO6 delivers an action-packed experience with cutting-edge graphics and fluid gunplay. The game introduces new mechanics, a gripping storyline, and a variety of multiplayer maps and modes, making it a must-play for FPS fans.",
    splash: "../images/games/bo6.jpg",
    price: 69.99,
    discount: 0.15,
  },
  {
    id: 16,
    name: "Apex Legends",
    rating: "9/10",
    description:
      "Apex Legends is a free-to-play battle royale game developed by Respawn Entertainment. Players select from a roster of unique 'Legends', each with their own abilities, and team up in squads of three to fight against other squads in a fast-paced, tactical environment. The game features dynamic combat, frequent updates, and seasonal events, with new Legends, weapons, and gameplay elements added regularly.",
    splash: "../images/games/apexlegends.jpg",
    price: 0.0,
    discount: 0.0,
  },
  {
    id: 17,
    name: "Hades",
    rating: "9.5/10",
    description:
      "Hades is a rogue-like dungeon crawler developed by Supergiant Games. Players control Zagreus, the son of Hades, as he attempts to escape the Underworld. Each run is procedurally generated, with new enemies, challenges, and upgrades. The game features fast-paced combat, a rich narrative that unfolds over time, and a memorable cast of characters from Greek mythology. Its challenging gameplay and narrative depth have made it one of the standout indie games of the year.",
    splash: "../images/games/hades.jpg",
    price: 24.99,
    discount: 0.15,
  },
  {
    id: 18,
    name: "Stardew Valley",
    rating: "9.2/10",
    description:
      "Stardew Valley is a farming simulation game developed by ConcernedApe. Players inherit a run-down farm and must cultivate crops, raise animals, mine for resources, and build relationships with the local villagers. The game has a relaxing pace, allowing players to play at their own speed, and includes seasonal events, festivals, and various ways to improve the farm. Its open-ended nature and charming pixel art style have made it a beloved game among casual and hardcore players alike.",
    splash: "../images/games/sdv.jpg",
    price: 14.99,
    discount: 0.0,
  },
  {
    id: 19,
    name: "Euro Truck Simulator 2",
    rating: "9/10",
    description:
      "Euro Truck Simulator 2 (ETS2) is a truck driving simulation game developed by SCS Software. Players take on the role of a truck driver, transporting goods across a vast and detailed map of Europe. The game offers realistic driving mechanics, a wide variety of trucks, and an expansive career mode where players can build their own trucking company. With numerous DLC expansions and a dedicated modding community, ETS2 provides an immersive and relaxing driving experience.",
    splash: "../images/games/ets2.jpg",
    price: 19.99,
    discount: 0.2,
  },
  {
    id: 20,
    name: "Resident Evil Village",
    rating: "9/10",
    description:
      "Resident Evil Village is a survival horror game developed by Capcom. Players control Ethan Winters as he searches for his kidnapped daughter in a mysterious village plagued by terrifying monsters and supernatural forces. The game blends traditional survival horror elements with first-person combat and exploration. It continues the story from Resident Evil 7, with stunning visuals, atmospheric gameplay, and intense moments that keep players on edge.",
    splash: "../images/games/re8.jpg",
    price: 49.99,
    discount: 0.0,
  },
  {
    id: 21,
    name: "Dead by Daylight",
    rating: "8.4/10",
    description:
      "Dead by Daylight is an asymmetric survival horror game developed by Behaviour Interactive. In the game, one player controls a killer while the others play as survivors trying to escape the killer's grasp. The survivors must work together to repair generators and avoid the killer's traps while the killer uses unique abilities to hunt them down. The game features a wide variety of killers and survivors from popular horror franchises, providing a diverse and ever-evolving experience.",
    splash: "../images/games/dbd.jpg",
    price: 19.99,
    discount: 0.0,
  },
  {
    id: 22,
    name: "Super Mario Odyssey",
    rating: "9.5/10",
    description:
      "Super Mario Odyssey is a 3D platformer developed by Nintendo for the Nintendo Switch. Players control Mario as he embarks on a globe-trotting adventure to rescue Princess Peach from Bowser. Along the way, Mario uses his iconic hat, Cappy, to possess objects and enemies to solve puzzles and overcome obstacles. The game features vibrant worlds, creative gameplay mechanics, and a variety of collectibles, making it one of the best Mario games in recent years.",
    splash: "../images/games/marioodyssey.jpg",
    price: 59.99,
    discount: 0.15,
  },
  {
    id: 23,
    name: "The Elder Scrolls V: Skyrim",
    rating: "9.4/10",
    description:
      "The Elder Scrolls V: Skyrim is an open-world action RPG developed by Bethesda. Players take on the role of the Dragonborn, a hero destined to save the world from the return of dragons. Set in the vast fantasy world of Skyrim, players can explore dungeons, complete quests, and develop their skills in combat, magic, and stealth. Skyrim's dynamic open world, rich lore, and modding community have kept it popular for years.",
    splash: "../images/games/skyrim.jpg",
    price: 39.99,
    discount: 0.0,
  },
  {
    id: 24,
    name: "Portal 2",
    rating: "9.7/10",
    description:
      "Portal 2 is a critically acclaimed puzzle-platformer developed by Valve. Players control Chell, a test subject in a mysterious research facility, as she uses a portal gun to solve complex puzzles and navigate through a series of increasingly difficult chambers. The game features a witty storyline, unique puzzle mechanics, and cooperative gameplay that allows two players to work together to solve puzzles.",
    splash: "../images/games/portal2.jpg",
    price: 19.99,
    discount: 0.0,
  },
  {
    id: 25,
    name: "Tomb Raider (2013)",
    rating: "8.8/10",
    description:
      "Tomb Raider (2013) is an action-adventure game developed by Crystal Dynamics. It serves as a reboot of the iconic series, focusing on Lara Croft's origins as a young adventurer. Players control Lara as she navigates dangerous environments, solves puzzles, and fights enemies. The game blends exploration, platforming, and combat, with a gripping narrative and emotional character development.",
    splash: "../images/games/tombraider2013.jpg",
    price: 29.99,
    discount: 0.0,
  },
  {
    id: 26,
    name: "Minecraft Dungeons",
    rating: "7.5/10",
    description:
      "Minecraft Dungeons is an action RPG developed by Mojang. Set in the Minecraft universe, players explore dungeons, fight monsters, and collect loot in a top-down, hack-and-slash gameplay style. The game features cooperative multiplayer and allows players to customize their characters with various gear and abilities. It's a more accessible, action-oriented spin-off of the beloved Minecraft series.",
    splash: "../images/games/mcdungeons.jpg",
    price: 19.99,
    discount: 0.0,
  },
  {
    id: 27,
    name: "Final Fantasy XV",
    rating: "8.6/10",
    description:
      "Final Fantasy XV is an open-world RPG developed by Square Enix. The game follows Noctis Lucis Caelum and his companions on a quest to reclaim his throne and save the kingdom from an evil empire. Featuring real-time combat, a vast open world, and a focus on friendship and brotherhood, Final Fantasy XV offers a rich experience with both action and deep narrative elements.",
    splash: "../images/games/ffxv.jpg",
    price: 39.99,
    discount: 0.0,
  },
  {
    id: 28,
    name: "Far Cry 5",
    rating: "8/10",
    description:
      "Far Cry 5 is a first-person shooter developed by Ubisoft. Set in a fictional Montana town overrun by a doomsday cult, players take on the role of a sheriff's deputy as they attempt to overthrow the cult leader and his followers. The game features an open world with exploration, gunplay, and tactical combat. Its cooperative multiplayer mode also allows players to team up and take down enemies together.",
    splash: "../images/games/fc5.jpg",
    price: 29.99,
    discount: 0.0,
  },
  {
    id: 29,
    name: "Hitman 3",
    rating: "8.9/10",
    description:
      "Hitman 3 is the conclusion to the World of Assassination trilogy, developed by IO Interactive. Players take on the role of Agent 47, a professional assassin, as he travels to various locations to eliminate high-profile targets. The game emphasizes stealth, strategy, and player choice, with multiple ways to approach each assassination. Stunning visuals and a captivating narrative make it a standout in the stealth genre.",
    splash: "../images/games/hitman3.jpg",
    price: 59.99,
    discount: 0.0,
  },
  {
    id: 30,
    name: "Assassin's Creed Odyssey",
    rating: "9.1/10",
    description:
      "Assassin's Creed Odyssey is an open-world action RPG developed by Ubisoft. Set in ancient Greece during the Peloponnesian War, players control either Alexios or Kassandra, a mercenary caught in the conflict. The game offers vast exploration, naval combat, and RPG elements like dialogue choices, skill trees, and multiple endings. With beautiful graphics and an engaging story, it's a favorite among Assassin's Creed fans.",
    splash: "../images/games/acodyssey.jpg",
    price: 49.99,
    discount: 0.0,
  },
  {
    id: 31,
    name: "Shadow of the Tomb Raider",
    rating: "8.5/10",
    description:
      "Shadow of the Tomb Raider is an action-adventure game developed by Eidos-Montreal. It is the final chapter in Lara Croft's origin story, as she navigates the jungles of South America to prevent the Mayan apocalypse. The game features stealth-based gameplay, environmental puzzles, and intense combat. It also introduces new exploration mechanics, such as swimming and climbing.",
    splash: "../images/games/shadowofthetombraider.jpg",
    price: 39.99,
    discount: 0.0,
  },
  {
    id: 32,
    name: "Doom Eternal",
    rating: "9.3/10",
    description:
      "Doom Eternal is a first-person shooter developed by id Software. Players control the Doom Slayer as he battles demons from Hell in a fast-paced, action-packed game. The game features intense combat, new weapons and abilities, and a deep narrative that expands on the Doom universe. With its rock-heavy soundtrack and non-stop action, Doom Eternal is a thrilling experience for FPS fans.",
    splash: "../images/games/doometernal.jpg",
    price: 59.99,
    discount: 0.0,
  },
  {
    id: 33,
    name: "World of Warcraft",
    rating: "9/10",
    description:
      "World of Warcraft is a massively multiplayer online role-playing game (MMORPG) developed by Blizzard Entertainment. Players create a character and explore the vast world of Azeroth, completing quests, engaging in combat, and interacting with other players. The game is known for its deep lore, frequent expansions, and its influence on the MMORPG genre.",
    splash: "../images/games/wow.jpg",
    price: 39.99,
    discount: 0.0,
  },
  {
    id: 34,
    name: "Red Dead Redemption",
    rating: "9.3/10",
    description:
      "Red Dead Redemption is an open-world action-adventure game developed by Rockstar Games. Set in the dying days of the American Wild West, players control John Marston, a former outlaw who must hunt down his former gang members. The game features a dynamic open world filled with wildlife, outlaws, and lawmen, as well as a deep narrative.",
    splash: "../images/games/rdr.jpg",
    price: 29.99,
    discount: 0.0,
  },
  {
    id: 35,
    name: "Battlefield 2042",
    rating: "7.8/10",
    description:
      "Battlefield 2042 is a first-person shooter developed by DICE. Set in the near future, the game features large-scale battles with up to 128 players in a variety of multiplayer modes. It emphasizes dynamic combat with destructible environments and a vast array of vehicles and weapons. Although it faced some criticism at launch, the game has received numerous updates to improve performance and gameplay.",
    splash: "../images/games/bf2042.jpg",
    price: 59.99,
    discount: 0.0,
  },
  {
    id: 36,
    name: "The Last of Us Part I",
    rating: "9.7/10",
    description:
      "The Last of Us Part I is an action-adventure game developed by Naughty Dog. Set in a post-apocalyptic world, players control Ellie as she seeks revenge after a traumatic event. The game features a gripping narrative, stealth-based gameplay, and intense combat sequences. It's widely regarded as one of the best narrative-driven games of its generation.",
    splash: "../images/games/thelastofus1.jpg",
    price: 49.99,
    discount: 0.0,
  },
  {
    id: 37,
    name: "Ghost of Tsushima",
    rating: "9/10",
    description:
      "Ghost of Tsushima is an open-world action-adventure game developed by Sucker Punch Productions. Set in feudal Japan during the Mongol invasion, players control Jin Sakai, a samurai who must adapt to unconventional warfare tactics to protect his home. The game features beautiful environments, sword combat, and stealth mechanics, along with a captivating story.",
    splash: "../images/games/ghostoftsushima.jpg",
    price: 59.99,
    discount: 0.0,
  },
  {
    id: 38,
    name: "Overcooked! 2",
    rating: "8.5/10",
    description:
      "Overcooked! 2 is a chaotic cooking simulation game developed by Ghost Town Games. Players must work together to prepare and serve food orders in increasingly absurd and challenging kitchens. The game is fast-paced, with a focus on cooperation and communication between players to overcome obstacles and achieve the highest score.",
    splash: "../images/games/overcooked2.jpg",
    price: 24.99,
    discount: 0.0,
  },
  {
    id: 39,
    name: "Dead Space (2008)",
    rating: "9/10",
    description:
      "Dead Space is a survival horror game developed by EA Redwood Shores. Players control Isaac Clarke, an engineer aboard a space station overrun by horrifying alien creatures. The game features atmospheric environments, tense combat, and psychological horror, as well as strategic dismemberment of enemies to survive.",
    splash: "../images/games/deadspace.jpg",
    price: 19.99,
    discount: 0.0,
  },
  {
    id: 40,
    name: "The Division 2",
    rating: "8.5/10",
    description:
      "The Division 2 is an online action RPG developed by Massive Entertainment. Set in a post-apocalyptic Washington D.C., players control members of a special unit tasked with restoring order to the city. The game features a mix of PvE and PvP gameplay, with an emphasis on tactical combat and loot collection.",
    splash: "../images/games/division2.jpg",
    price: 29.99,
    discount: 0.0,
  },
  {
    id: 41,
    name: "Sekiro: Shadows Die Twice",
    rating: "9.5/10",
    description:
      "Sekiro: Shadows Die Twice is an action-adventure game developed by FromSoftware. Set in a reimagined Japan, players control Wolf, a shinobi on a mission to rescue his kidnapped master and seek revenge. The game features challenging combat, exploration, and stealth elements, with an emphasis on precise timing and strategy.",
    splash: "../images/games/sekiro.jpg",
    price: 59.99,
    discount: 0.0,
  },
  {
    id: 42,
    name: "FIFA 23",
    rating: "8/10",
    description:
      "FIFA 23 is a football simulation game developed by EA Sports. The game features realistic graphics, player animations, and various game modes, including career mode, Ultimate Team, and online multiplayer. With yearly updates, FIFA remains the go-to choice for football fans looking for an immersive sports experience.",
    splash: "../images/games/fifa23.jpg",
    price: 59.99,
    discount: 0.0,
  },
  {
    id: 43,
    name: "The Sims 4",
    rating: "8.7/10",
    description:
      "The Sims 4 is a life simulation game developed by Maxis. Players create and control virtual people, building homes, developing relationships, and managing their careers. The game features a wide range of customization options and expansion packs that add new content and gameplay mechanics.",
    splash: "../images/games/thesims4.jpg",
    price: 39.99,
    discount: 0.0,
  },
  {
    id: 44,
    name: "Rocket League",
    rating: "8.9/10",
    description:
      "Rocket League is a hybrid of soccer and vehicular mayhem developed by Psyonix. Players control cars and attempt to score goals in a futuristic arena, with a focus on aerial maneuvers and fast-paced action. The game features both single-player and multiplayer modes, with a thriving competitive community.",
    splash: "../images/games/rocketleague.jpg",
    price: 0.0,
    discount: 0.0,
  },
  {
    id: 45,
    name: "Monster Hunter: World",
    rating: "9/10",
    description:
      "Monster Hunter: World is an action RPG developed by Capcom. Players take on the role of a hunter tasked with tracking down massive creatures in an open world. The game features cooperative multiplayer, where players team up to hunt and battle formidable monsters, using a variety of weapons and strategies.",
    splash: "../images/games/monsterhunterworld.jpg",
    price: 49.99,
    discount: 0.0,
  },
  {
    id: 46,
    name: "Battlefield V",
    rating: "8/10",
    description:
      "Battlefield V is a first-person shooter developed by DICE. Set during World War II, the game features large-scale multiplayer battles across various theaters of war. The game emphasizes tactical gameplay, destructible environments, and teamwork, with a variety of vehicles and weapons.",
    splash: "../images/games/bf5.jpg",
    price: 39.99,
    discount: 0.0,
  },
  {
    id: 47,
    name: "Borderlands 3",
    rating: "8.7/10",
    description:
      "Borderlands 3 is a loot-driven first-person shooter developed by Gearbox Software. Set in the post-apocalyptic world of Pandora, players control one of four 'Vault Hunters' as they fight through hordes of enemies, collect loot, and complete quests. The game features a distinctive cel-shaded art style, humorous dialogue, and chaotic combat.",
    splash: "../images/games/borderlands3.jpg",
    price: 39.99,
    discount: 0.0,
  },
  {
    id: 48,
    name: "Dark Souls III",
    rating: "9.5/10",
    description:
      "Dark Souls III is an action RPG developed by FromSoftware. Players control the Ashen One, a character tasked with ending the curse that plagues the world. The game is known for its challenging combat, deep lore, and intricate level design, as well as its atmospheric environments.",
    splash: "../images/games/darksouls3.jpg",
    price: 59.99,
    discount: 0.0,
  },
  {
    id: 49,
    name: "Control",
    rating: "9/10",
    description:
      "Control is an action-adventure game developed by Remedy Entertainment. Players control Jesse Faden, a woman seeking answers about her missing brother in the mysterious Federal Bureau of Control. The game features telekinetic powers, environmental destruction, and a complex, mind-bending narrative.",
    splash: "../images/games/control.jpg",
    price: 39.99,
    discount: 0.0,
  },
  {
    id: 50,
    name: "Assassin's Creed Valhalla",
    rating: "8.8/10",
    description:
      "Assassin's Creed Valhalla is an open-world action RPG developed by Ubisoft. Set during the Viking invasions of England, players control Eivor, a Viking warrior, as they build a settlement, raid enemies, and explore a vast, open world. The game features a branching narrative, combat, and stealth elements.",
    splash: "../images/games/acvalhalla.jpg",
    price: 59.99,
    discount: 0.0,
  },
  {
    id: 51,
    name: "Monster Hunter Rise",
    rating: "9/10",
    description:
      "Monster Hunter Rise is an action RPG developed by Capcom. Players take on the role of a hunter in a vibrant, rural village threatened by monsters. The game introduces new mechanics such as the Wirebug and canine companions, as well as improved combat and exploration.",
    splash: "../images/games/monsterhunterrise.jpg",
    price: 49.99,
    discount: 0.0,
  },
  {
    id: 52,
    name: "Hitman 2",
    rating: "8.9/10",
    description:
      "Hitman 2 is a stealth-based action game developed by IO Interactive. Players control Agent 47 as he completes a series of contract killings around the world. The game emphasizes player choice, with multiple ways to approach each mission, whether through stealth or aggressive tactics.",
    splash: "../images/games/hitman2.jpg",
    price: 39.99,
    discount: 0.0,
  },
  {
    id: 53,
    name: "Dying Light 2",
    rating: "8.5/10",
    description:
      "Dying Light 2 is a first-person survival horror game developed by Techland. Set in a post-apocalyptic world filled with zombies, players control Aiden, a man searching for his missing sister. The game features parkour-style movement, combat, and a branching narrative with choices that impact the world around you.",
    splash: "../images/games/dyinglight2.jpg",
    price: 59.99,
    discount: 0.0,
  },
  {
    id: 54,
    name: "Gears 5",
    rating: "8.8/10",
    description:
      "Gears 5 is a third-person shooter developed by The Coalition. Players control Kait Diaz as she navigates a world at war with the monstrous Locust Horde. The game features a rich narrative, cooperative multiplayer modes, and intense combat with cover-based mechanics.",
    splash: "../images/games/gears5.jpg",
    price: 39.99,
    discount: 0.0,
  },
  {
    id: 55,
    name: "State of Decay 2",
    rating: "7.5/10",
    description:
      "State of Decay 2 is a survival game developed by Undead Labs. Set in a post-apocalyptic world overrun by zombies, players must manage a community of survivors, scavenge for resources, and build a base. The game features both single-player and multiplayer modes, with an emphasis on resource management and decision-making.",
    splash: "../images/games/stateofdecay2.jpg",
    price: 29.99,
    discount: 0.0,
  },
  {
    id: 56,
    name: "Hell Pie",
    rating: "8/10",
    description:
      "Hell Pie is an obscene and over-the-top 3D platformer developed by Sluggerfly. Players control Nate, the ‘Demon of Bad Taste,’ as he embarks on a chaotic adventure to collect ingredients for Satan’s birthday pie. The game features creative level design, grotesque humor, and fast-paced platforming with a unique chain-hook movement system.",
    splash: "../images/games/hellpie.jpg",
    price: 24.99,
    discount: 0.2,
  },
  {
    id: 57,
    name: "For Honor",
    rating: "8/10",
    description:
      "For Honor is a medieval combat game developed by Ubisoft. Players choose from a variety of warriors, including knights, samurais, and vikings, and engage in strategic, melee combat. The game features both single-player and multiplayer modes, with a deep combat system that rewards timing, tactics, and precision.",
    splash: "../images/games/forhonor.jpg",
    price: 29.99,
    discount: 0.0,
  },
  {
    id: 58,
    name: "Star Wars Jedi: Fallen Order",
    rating: "8.5/10",
    description:
      "Star Wars Jedi: Fallen Order is an action-adventure game developed by Respawn Entertainment. Players control Cal Kestis, a young Jedi who must evade the Empire's forces while uncovering secrets about the Force. The game features lightsaber combat, exploration, and a story set in the Star Wars universe.",
    splash: "../images/games/swfallenorder.jpg",
    price: 49.99,
    discount: 0.0,
  },
  {
    id: 59,
    name: "Cyberpunk 2077",
    rating: "8.3/10",
    description:
      "Cyberpunk 2077 is an open-world RPG developed by CD Projekt Red. Set in the dystopian future of Night City, players control V, a mercenary whose story unfolds through a blend of action, exploration, and deep narrative choices. Despite a rocky launch, the game has been continually updated, adding new features and improving gameplay.",
    splash: "../images/games/cyberpunk2077.jpg",
    price: 49.99,
    discount: 0.0,
  },
  {
    id: 60,
    name: "Horizon Zero Dawn",
    rating: "9/10",
    description:
      "Horizon Zero Dawn is an open-world action RPG developed by Guerrilla Games. Players control Aloy, a young hunter in a post-apocalyptic world overrun by robotic creatures. The game features a beautiful open world, engaging combat, and a story filled with mystery and discovery.",
    splash: "../images/games/horizonzerodawn.jpg",
    price: 39.99,
    discount: 0.0,
  },
];

export default games;
