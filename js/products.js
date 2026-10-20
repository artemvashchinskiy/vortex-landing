// Product cards are kept in one file so items, images and affiliate URLs can be
// updated without redesigning the page. Current markup has accessible fallbacks.
const VORTEX_PRODUCTS = [
  {
    name: 'Notes on Being a Man',
    image: 'img/Notes_on_Being_a_Man.jpg',
    affiliateUrl: 'https://link.amazon/B0cQklxAt',
    category: 'BOOK · PERSPECTIVE',
    description: 'Scott Galloway’s candid look at purpose, resilience, relationships, and modern masculinity.',
    tag: 'READ & REFLECT'
  },
  {
    name: 'Taja Lined Spiral Notebook',
    image: 'img/Spiral_Notebook.jpg',
    affiliateUrl: 'https://link.amazon/B09l0hHNW',
    category: 'NOTEBOOK · WORK & LIFE',
    description: 'A sturdy, lay-flat notebook for daily notes, planning, journaling, and ideas on the go.',
    tag: 'DAILY NOTES'
  },
  {
    name: 'Five Star Compact Notebook',
    image: 'img/Five_Star_Spiral_Notebook.jpg',
    affiliateUrl: 'https://link.amazon/B060wGBO9',
    category: 'NOTEBOOK · POCKET-SIZED',
    description: 'A small, durable notebook for quick thoughts, lists, and reminders away from your desk.',
    tag: 'TAKE IT WITH YOU'
  },
  {
    name: 'Olive A5 Spiral Journal',
    image: 'img/Lined_Spiral_Journal_Notebook.jpg',
    affiliateUrl: 'https://link.amazon/B0bZLyKGk',
    category: 'JOURNAL · ORGANIZE',
    description: 'Numbered pages, a contents section, and a clean layout for longer-running projects and reflections.',
    tag: 'DEEP WORK'
  }
];
// Add or change product data here when you want to manage the catalogue from JS.
// The static HTML product cards intentionally remain visible if JavaScript is disabled.
