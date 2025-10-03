export interface Game {
  id: string;
  title: string;
  tags: string[];
  thumbnail: string;
  url: string;
  featured?: boolean;
}

export const games: Game[] = [
  // --- Popular 🔥 ---
  {
    id: "poly-track",
    title: "Poly Track",
    tags: ["racing", "arcade"],
    thumbnail: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=400&h=225&fit=crop",
    url: "https://iliill1.github.io/polytrackfix/polytrack/",
    featured: true,
  },
  {
    id: "cookie-clicker",
    title: "Cookie Clicker",
    tags: ["idle", "clicker"],
    thumbnail: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=225&fit=crop",
    url: "https://scherb96.github.io/",
    featured: true,
  },
  {
    id: "drive-mad",
    title: "Drive Mad",
    tags: ["cars", "physics"],
    thumbnail: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=225&fit=crop",
    url: "https://lizzyben1.github.io/poopygamesbeta/play/drive-mad/",
    featured: true,
  },
  {
    id: "2048",
    title: "2048",
    tags: ["puzzle", "numbers"],
    thumbnail: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=400&h=225&fit=crop",
    url: "https://lizzyben1.github.io/poopygamesbeta/play/2048/",
    featured: true,
  },
  {
    id: "slope",
    title: "Slope",
    tags: ["arcade", "reflex"],
    thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=225&fit=crop",
    url: "https://lizzyben1.github.io/poopygamesbeta/play/slope/",
    featured: true,
  },
  {
    id: "bitlife",
    title: "Bitlife",
    tags: ["sim", "life"],
    thumbnail: "https://images.unsplash.com/photo-1556438758-8d49568ce18e?w=400&h=225&fit=crop",
    url: "https://vaz63.github.io/g5/class-441",
    featured: true,
  },
  {
    id: "retro-bowl",
    title: "Retro Bowl",
    tags: ["sports", "football"],
    thumbnail: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&h=225&fit=crop",
    url: "https://vaz63.github.io/g5/class-400/",
    featured: true,
  },
];
