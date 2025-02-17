const games = [
  {
    id: 1,
    name: "Grand Theft Auto V",
    rating: "9.8/10",
    description:
      "Grand Theft Auto V is a sprawling open-world action-adventure game developed by Rockstar Games. Set in the vast and dynamic city of Los Santos and the surrounding Blaine County, the game follows the lives of three distinct characters: Michael De Santa, a retired bank robber struggling to cope with his dysfunctional family; Franklin Clinton, a young repo man seeking a better life; and Trevor Philips, a violent and unpredictable ex-military pilot. Players can switch between these characters at will, experiencing each of their unique perspectives and storylines as they weave together. The game is renowned for its intricate heists, countless side missions, dynamic NPCs, and breathtaking graphics. GTA V also features a robust online multiplayer mode, GTA Online, allowing players to collaborate or compete in a wide variety of missions, races, and elaborate criminal enterprises. Its longevity and cultural impact make it one of the best-selling games of all time.",
    splash: "images/games/gtav.jpg",
    price: 29.99,
    discount: 0.2,
  },
  {
    id: 2,
    name: "Counter-Strike: Global Offensive",
    rating: "9/10",
    description:
      "Counter-Strike: Global Offensive (CS:GO) is a competitive first-person shooter that pits two teams, Terrorists and Counter-Terrorists, against each other in objective-based missions. Developed by Valve Corporation and Hidden Path Entertainment, CS:GO emphasizes strategic gameplay, precise aiming, and team coordination. Players engage in rounds where they either complete objectives like planting or defusing bombs, rescuing hostages, or eliminating the opposing team. The game's minimalistic yet intense approach to tactical shooting has made it a staple of eSports, with a thriving competitive scene and regular updates to maps, weapon skins, and gameplay balance. CS:GO is known for its skill ceiling and mechanical precision, making it both challenging for newcomers and rewarding for experienced players.",
    splash: "images/games/csgo.jpg",
    price: 14.99,
    discount: 0,
  },
  {
    id: 3,
    name: "Fortnite",
    rating: "8.5/10",
    description:
      "Fortnite, developed by Epic Games, is a widely popular battle royale game that blends survival, combat, and building mechanics in a colorful and fast-paced environment. Up to 100 players parachute onto a sprawling island and compete to be the last one standing. Fortnite's unique gameplay twist lies in its construction mechanics, allowing players to quickly build walls, ramps, and structures for defense and offense during combat. Beyond battle royale, Fortnite offers limited-time events, creative mode for building your own worlds, and collaborative crossovers with popular franchises. Its vibrant visuals, frequent updates, and engaging community events have made it a cultural phenomenon, attracting millions of players across the globe.",
    splash: "images/games/fort.jpg",
    price: 0.0,
    discount: 0,
  },
  {
    id: 4,
    name: "Among Us",
    rating: "8/10",
    description:
      "Among Us is a multiplayer social deduction game developed by InnerSloth that became a global sensation due to its unique blend of cooperation and deception. Set aboard a spaceship, players are assigned roles as Crewmates or Impostors. Crewmates must complete various tasks around the ship while working together to identify and eliminate the Impostors hiding among them. Meanwhile, Impostors aim to sabotage missions and eliminate Crewmates without revealing their identity. With its simple controls, colorful art style, and strategic gameplay, Among Us encourages communication, trust, and bluffing. The game can be played online or locally, making it perfect for parties, streaming, and connecting with friends.",
    splash: "images/games/aus.jpg",
    price: 4.99,
    discount: 0.1,
  },
  {
    id: 5,
    name: "Forza Horizon 5",
    rating: "9.2/10",
    description:
      "Forza Horizon 5, developed by Playground Games, is an open-world racing game that transports players to a vibrant and diverse depiction of Mexico. With a vast map full of breathtaking landscapes, from deserts and jungles to historic cities and beaches, players can explore the world at their own pace in a variety of customizable cars. The game offers numerous races, challenges, stunts, and festivals that celebrate car culture. Forza Horizon 5 features a dynamic weather system, day-night cycle, and realistic driving physics that enhance the immersion and excitement of racing. Its expansive online multiplayer options and community events make it a must-play for racing enthusiasts.",
    splash: "images/games/fh5.jpg",
    price: 59.99,
    discount: 0.15,
  },
  {
    id: 6,
    name: "League of Legends",
    rating: "9/10",
    description:
      "League of Legends (LoL), developed by Riot Games, is one of the most popular multiplayer online battle arena (MOBA) games in the world. Players assume the role of Summoners, controlling Champions with unique abilities, and engage in fast-paced, strategic 5v5 battles to destroy the opposing team's Nexus. With over 150 Champions to choose from, each offering different playstyles and roles, LoL offers a constantly evolving experience driven by regular updates, new content releases, and an expansive eSports scene. The game rewards strategy, teamwork, and mechanical skill, making it a top choice for competitive gaming enthusiasts.",
    splash: "images/games/lol.jpg",
    price: 0.0,
    discount: 0,
  },
  {
    id: 7,
    name: "Minecraft",
    rating: "9.3/10",
    description:
      "Minecraft, developed by Mojang Studios, is a sandbox game that encourages creativity, exploration, and survival in a procedurally generated blocky 3D world. Players can gather resources, craft tools, and build elaborate structures either alone or in multiplayer mode. With multiple game modes such as Survival, Creative, and Adventure, Minecraft offers something for everyone. Whether battling mobs, mining deep underground, or constructing massive architectural feats, the game has endless possibilities. Frequent updates, community mods, and educational uses have cemented Minecraft's legacy as one of the best-selling games of all time, capturing the imaginations of players young and old.",
    splash: "images/games/mc.jpg",
    price: 26.95,
    discount: 0.1,
  },
  {
    id: 8,
    name: "Red Dead Redemption 2",
    rating: "9.7/10",
    description:
      "Red Dead Redemption 2, developed by Rockstar Games, is an open-world action-adventure game set in 1899 during the twilight of America's Wild West era. Players control Arthur Morgan, a member of the Van der Linde gang, as he navigates loyalty, honor, and survival amidst changing times. The game offers an expansive and highly detailed world full of immersive storytelling, engaging side quests, hunting, fishing, horseback riding, and dynamic NPC interactions. With stunning graphics and a powerful narrative that examines morality and redemption, Red Dead Redemption 2 is widely regarded as a masterpiece in modern gaming.",
    splash: "images/games/rdr2.jpg",
    price: 59.99,
    discount: 0.25,
  },
  {
    id: 9,
    name: "Sea of Thieves",
    rating: "8.4/10",
    description:
      "Sea of Thieves, developed by Rare, is an open-world pirate adventure game that invites players to live out their pirate fantasies. Players can form crews, sail the seas on customizable ships, hunt for treasure, and engage in thrilling naval battles with other pirates. The game encourages cooperation and creativity as players can choose their own path, from questing for gold hoards to engaging in player-versus-player (PvP) combat. Sea of Thieves is regularly updated with new content and features, providing an ever-evolving world that celebrates exploration and adventure in a light-hearted, cartoonish setting.",
    splash: "images/games/sot.jpg",
    price: 39.99,
    discount: 0.2,
  },
  {
    id: 10,
    name: "Terraria",
    rating: "8.6/10",
    description:
      "Terraria is a sandbox adventure game that blends exploration, building, combat, and crafting within a procedurally generated 2D pixelated world. Players can dig deep into caves, build intricate structures, defeat powerful bosses, and acquire rare items. With countless biomes, monsters, and crafting recipes, Terraria offers players the freedom to play how they want, whether by focusing on building elaborate bases, uncovering hidden secrets, or mastering difficult challenges. Its retro art style and addictive gameplay have made Terraria a beloved title in the gaming community, offering a rich experience for both solo adventurers and multiplayer parties.",
    splash: "images/games/ter.jpg",
    price: 9.99,
    discount: 0.3,
  },
];

export default games;
