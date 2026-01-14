/**
 * Fonts Configuration
 * Central registry for all Colors of Joy font options
 *
 * To add a new font:
 * 1. Add an entry to FONT_COLLECTIONS below
 * 2. The font selector will automatically pick it up
 */

const FONT_COLLECTIONS = [
  // Decorative fonts - best for headers
  {
    id: 'rastanty-cortex',
    name: 'Rastanty Cortex',
    category: 'Handwriting',
    fontFamily: "'Rastanty Cortex', cursive",
    description: 'Elegant handwritten style with flowing curves',
    suitableFor: ['header', 'body'],
    featured: true
  },
  {
    id: 'lucida',
    name: 'Lucida',
    category: 'Handwriting',
    fontFamily: "'Lucida Handwriting', 'Lucida', cursive",
    description: 'Clean, legible handwriting with personality',
    suitableFor: ['header', 'body'],
    featured: false
  },
  {
    id: 'apple-chancery',
    name: 'Apple Chancery',
    category: 'Calligraphy',
    fontFamily: "'Apple Chancery', cursive",
    description: 'Classic calligraphic elegance',
    suitableFor: ['header', 'body'],
    featured: false
  },
  {
    id: 'lucida-calligraphy',
    name: 'Lucida Calligraphy',
    category: 'Calligraphy',
    fontFamily: "'Lucida Calligraphy', cursive",
    description: 'Formal calligraphic style with refined details',
    suitableFor: ['header', 'body'],
    featured: true
  },
  {
    id: 'modern-love',
    name: 'Modern Love',
    category: 'Calligraphy',
    fontFamily: "'Modern Love', cursive",
    description: 'Contemporary calligraphy with romantic flair',
    suitableFor: ['header', 'body'],
    featured: true
  },
  {
    id: 'monotype-corsiva',
    name: 'Monotype Corsiva',
    category: 'Calligraphy',
    fontFamily: "'Monotype Corsiva', cursive",
    description: 'Timeless italic script with sophistication',
    suitableFor: ['header', 'body'],
    featured: false
  },
  {
    id: 'pristina',
    name: 'Pristina',
    category: 'Calligraphy',
    fontFamily: "'Pristina', cursive",
    description: 'Delicate script with graceful letterforms',
    suitableFor: ['header', 'body'],
    featured: false
  },
  {
    id: 'segoe-print',
    name: 'Segoe Print',
    category: 'Handwriting',
    fontFamily: "'Segoe Print', cursive",
    description: 'Casual handwritten style with friendly appeal',
    suitableFor: ['header', 'body'],
    featured: false
  },
  {
    id: 'segoe-ui',
    name: 'Segoe UI',
    category: 'Sans-serif',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    description: 'Clean, modern sans-serif from Microsoft',
    suitableFor: ['header', 'body'],
    featured: true
  },

  // Serif fonts - great for body text
  {
    id: 'georgia',
    name: 'Georgia',
    category: 'Serif',
    fontFamily: "Georgia, serif",
    description: 'Classic readable serif, perfect for body text',
    suitableFor: ['header', 'body'],
    featured: true
  },
  {
    id: 'garamond',
    name: 'Garamond',
    category: 'Serif',
    fontFamily: "'Garamond', 'EB Garamond', serif",
    description: 'Elegant old-style serif with refinement',
    suitableFor: ['header', 'body'],
    featured: true
  },
  {
    id: 'times',
    name: 'Times New Roman',
    category: 'Serif',
    fontFamily: "'Times New Roman', Times, serif",
    description: 'Traditional and authoritative serif',
    suitableFor: ['header', 'body'],
    featured: false
  },
  {
    id: 'baskerville',
    name: 'Baskerville',
    category: 'Serif',
    fontFamily: "Baskerville, 'Libre Baskerville', serif",
    description: 'Transitional serif with elegance',
    suitableFor: ['header', 'body'],
    featured: false
  },

  // Sans-serif fonts - clean and modern
  {
    id: 'helvetica',
    name: 'Helvetica',
    category: 'Sans-serif',
    fontFamily: "Helvetica, Arial, sans-serif",
    description: 'Clean, modern sans-serif',
    suitableFor: ['header', 'body'],
    featured: false
  },
  {
    id: 'avenir',
    name: 'Avenir',
    category: 'Sans-serif',
    fontFamily: "'Avenir Next', Avenir, sans-serif",
    description: 'Geometric sans-serif with warmth',
    suitableFor: ['header', 'body'],
    featured: false
  },
  {
    id: 'futura',
    name: 'Futura',
    category: 'Sans-serif',
    fontFamily: "Futura, 'Century Gothic', sans-serif",
    description: 'Geometric sans-serif with elegance',
    suitableFor: ['header', 'body'],
    featured: false
  }
];

/**
 * Get all font collections
 */
function getAllFonts() {
  return FONT_COLLECTIONS;
}

/**
 * Get featured fonts only
 */
function getFeaturedFonts() {
  return FONT_COLLECTIONS.filter(f => f.featured);
}

/**
 * Get fonts by category
 */
function getFontsByCategory(category) {
  return FONT_COLLECTIONS.filter(f => f.category === category);
}

/**
 * Get font by ID
 */
function getFontById(id) {
  return FONT_COLLECTIONS.find(f => f.id === id);
}

/**
 * Get unique categories
 */
function getAvailableCategories() {
  return [...new Set(FONT_COLLECTIONS.map(f => f.category))].sort();
}

/**
 * Get fonts suitable for headers
 */
function getFontsForHeaders() {
  return FONT_COLLECTIONS.filter(f => f.suitableFor.includes('header'));
}

/**
 * Get fonts suitable for body text
 */
function getFontsForBody() {
  return FONT_COLLECTIONS.filter(f => f.suitableFor.includes('body'));
}

/**
 * Search fonts by query
 */
function searchFonts(query) {
  const lowerQuery = query.toLowerCase();
  return FONT_COLLECTIONS.filter(f =>
    f.name.toLowerCase().includes(lowerQuery) ||
    f.description.toLowerCase().includes(lowerQuery) ||
    f.category.toLowerCase().includes(lowerQuery)
  );
}

// Export for use in other scripts
if (typeof window !== 'undefined') {
  window.FONT_COLLECTIONS = FONT_COLLECTIONS;
  window.getAllFonts = getAllFonts;
  window.getFeaturedFonts = getFeaturedFonts;
  window.getFontsByCategory = getFontsByCategory;
  window.getFontById = getFontById;
  window.getAvailableCategories = getAvailableCategories;
  window.getFontsForHeaders = getFontsForHeaders;
  window.getFontsForBody = getFontsForBody;
  window.searchFonts = searchFonts;
}
