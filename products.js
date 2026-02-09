// Wesley's 3D Prints - Shared Product Data
// This file is the single source of truth for all product info.
// Edit page saves changes to localStorage which overrides these defaults.

const DEFAULT_PRODUCTS = [
  { id: 1, name: "Fidget Spinner", img: "images/fidget-spinner.jpg", emoji: "\u{1FA80}", price: 2.50, minOrder: "Min 2 ($5.00)", desc: "Classic spinning fidget toy - keeps your hands busy!", filamentG: 15, printablesId: 157347 },
  { id: 2, name: "Infinity Cube", img: "images/infinity-cube.jpg", emoji: "\u{1F532}", price: 6.00, minOrder: "", desc: "A cube that folds and flips forever. So satisfying!", filamentG: 40, printablesId: 652108 },
  { id: 3, name: "Articulated Dragon", img: "images/dragon.jpg", emoji: "\u{1F409}", price: 8.00, minOrder: "", desc: "A poseable dragon with moving joints. Super cool!", filamentG: 60, printablesId: 757123 },
  { id: 4, name: "Phone Stand", img: "images/phone-stand.jpg", emoji: "\u{1F4F1}", price: 5.00, minOrder: "", desc: "Hold your phone hands-free for videos and games.", filamentG: 35, printablesId: 187125 },
  { id: 5, name: "Pencil Holder", img: "images/pencil-holder.jpg", emoji: "\u{270F}\u{FE0F}", price: 5.00, minOrder: "", desc: "Keep your desk organized with this cool holder.", filamentG: 45, printablesId: 202588 },
  { id: 6, name: "Bookmarks (Set of 3)", img: "images/bookmark.jpg", emoji: "\u{1F4D6}", price: 5.00, minOrder: "Sold as set of 3", desc: "Never lose your page again with fun shaped bookmarks!", filamentG: 10, printablesId: 344878 },
  { id: 7, name: "Bag Clips (5-Pack)", img: "images/bag-clips.jpg", emoji: "\u{1F4CE}", price: 5.00, minOrder: "Sold as 5-pack", desc: "Keep your snacks fresh with these handy clips.", filamentG: 20, printablesId: 83628 },
  { id: 8, name: "Miniature Animal", img: "images/mini-animal.jpg", emoji: "\u{1F43E}", price: 2.50, minOrder: "Min 2 ($5.00)", desc: "Tiny collectible animals - cats, dinos, and more!", filamentG: 10, printablesId: 972232 },
  { id: 9, name: "Fidget Slug", img: "images/fidget-slug.jpg", emoji: "\u{1F40C}", price: 5.00, minOrder: "", desc: "A wiggly slug that clicks and bends. So fun to play with!", filamentG: 30, printablesId: 229666 },
  { id: 10, name: "Keychain", img: "images/keychain.jpg", emoji: "\u{1F511}", price: 2.50, minOrder: "Min 2 ($5.00)", desc: "Cool keychains in fun shapes to clip on your backpack.", filamentG: 8, printablesId: 1162168 },
  { id: 11, name: "Flexi Octopus", img: "images/flexi-octopus.jpg", emoji: "\u{1F419}", price: 5.00, minOrder: "", desc: "A bendy octopus with wiggly tentacles!", filamentG: 25, printablesId: 178035 },
  { id: 12, name: "Tic-Tac-Toe Game", img: "images/tic-tac-toe.jpg", emoji: "\u{274E}", price: 5.00, minOrder: "", desc: "A complete game that prints in one piece. Play anywhere!", filamentG: 30, printablesId: 413220 },
  { id: 13, name: "Mini Monster Truck", img: "images/monster-truck.jpg", emoji: "\u{1F697}", price: 6.00, minOrder: "", desc: "A mini truck with working wheels and suspension!", filamentG: 40, printablesId: 51083 },
  { id: 14, name: "Walking Crab", img: "images/walking-crab.jpg", emoji: "\u{1F980}", price: 6.00, minOrder: "", desc: "Turn the crank and watch it waddle! Mechanical magic.", filamentG: 35, printablesId: 294220 },
  { id: 15, name: "Catapult Launcher", img: "images/catapult.jpg", emoji: "\u{1F3F0}", price: 5.00, minOrder: "", desc: "A mini catapult that actually launches stuff!", filamentG: 25, printablesId: 977936 },
  { id: 16, name: "Cookie Cutters (3-Pack)", img: "images/cookie-cutters.jpg", emoji: "\u{1F36A}", price: 5.00, minOrder: "Sold as 3-pack", desc: "Fun shaped cookie cutters - dinos, stars, and more!", filamentG: 15, printablesId: 436994 },
  { id: 17, name: "Fidget Ball", img: "images/fidget-ball.jpg", emoji: "\u{26BD}", price: 5.00, minOrder: "", desc: "A textured rolling ball with satisfying clicks.", filamentG: 30, printablesId: 920359 },
  { id: 18, name: "Action Figure", img: "images/action-figure.jpg", emoji: "\u{1F9B8}", price: 6.00, minOrder: "", desc: "A poseable figure with joints you can move around!", filamentG: 50, printablesId: 484193 },
  { id: 19, name: "Spinning Top", img: "images/spinning-top.jpg", emoji: "\u{1FA80}", price: 5.00, minOrder: "", desc: "A perfectly balanced top that spins and spins!", filamentG: 12, printablesId: 282970 },
  { id: 20, name: "Puzzle Ball", img: "images/puzzle-ball.jpg", emoji: "\u{1F9E9}", price: 6.00, minOrder: "", desc: "Can you take it apart and put it back together?", filamentG: 45, printablesId: 986151 }
];

function getProducts() {
  const saved = localStorage.getItem('wesleys3dprints_products');
  if (saved) {
    try { return JSON.parse(saved); } catch(e) { /* fall through */ }
  }
  return DEFAULT_PRODUCTS;
}

function saveProducts(products) {
  localStorage.setItem('wesleys3dprints_products', JSON.stringify(products));
}

function resetProducts() {
  localStorage.removeItem('wesleys3dprints_products');
}
