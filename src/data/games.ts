export interface Game {
  id: string;
  title: string;
  tags: string[];
  thumbnail: string;
  url: string;
  featured?: boolean;
}

export const games: Game[] = [
  {
    id: "1",
    title: "Minecraft",
    tags: ["sandbox", "survival", "creative"],
    thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=225&fit=crop",
    url: "https://www.minecraft.net",
    featured: true,
  },
  {
    id: "2",
    title: "Among Us",
    tags: ["multiplayer", "social", "strategy"],
    thumbnail: "https://images.unsplash.com/photo-1640955014216-75201056c829?w=400&h=225&fit=crop",
    url: "https://www.innersloth.com/games/among-us/",
    featured: true,
  },
  {
    id: "3",
    title: "Roblox",
    tags: ["sandbox", "multiplayer", "creative"],
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop",
    url: "https://www.roblox.com",
    featured: true,
  },
  {
    id: "4",
    title: "Fortnite",
    tags: ["battle-royale", "multiplayer", "shooter"],
    thumbnail: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=400&h=225&fit=crop",
    url: "https://www.fortnite.com",
    featured: true,
  },
  {
    id: "5",
    title: "Valorant",
    tags: ["fps", "tactical", "competitive"],
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=225&fit=crop",
    url: "https://playvalorant.com",
    featured: true,
  },
  {
    id: "6",
    title: "Rocket League",
    tags: ["sports", "racing", "multiplayer"],
    thumbnail: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=225&fit=crop",
    url: "https://www.rocketleague.com",
  },
  {
    id: "7",
    title: "Fall Guys",
    tags: ["party", "casual", "multiplayer"],
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=225&fit=crop",
    url: "https://fallguys.com",
  },
  {
    id: "8",
    title: "Stardew Valley",
    tags: ["farming", "rpg", "relaxing"],
    thumbnail: "https://images.unsplash.com/photo-1625806786037-2af608423424?w=400&h=225&fit=crop",
    url: "https://www.stardewvalley.net",
  },
];
