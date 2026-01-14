/**
 * Templates Configuration
 * Central registry for all Colors of Joy template collections
 *
 * To add a new template collection:
 * 1. Add your HTML file to the /templates directory
 * 2. Add an entry to TEMPLATE_COLLECTIONS below
 * 3. The gallery will automatically pick it up
 */

const TEMPLATE_COLLECTIONS = [
  {
    id: 'anna-li',
    file: 'anna-li-once-again.html',
    name: 'Floating Editorial Split',
    description: 'Calm overlapping organic shapes with editorial text layout. Features floating blob-shaped images with dynamic positioning.',
    style: 'Editorial',
    tags: ['floating', 'editorial', 'organic-shapes', 'minimal'],
    variations: 5,
    thumbnail: 'https://colorsofjoy.dk/webshopmedia/Liva%2004.jpeg',
    featured: true
  },
  {
    id: 'architecture',
    file: 'completely-different-layout.html',
    name: 'Architecture SPA',
    description: 'Clean architectural layouts with strong grid systems. Multiple template approaches from editorial entry to product-first displays.',
    style: 'Structured',
    tags: ['grid', 'architectural', 'modular', 'versatile'],
    variations: 5,
    thumbnail: 'https://colorsofjoy.dk/webshopmedia/Always%2087.jpeg',
    featured: true
  },
  {
    id: 'design-freedom',
    file: 'design-freedom.html',
    name: 'Design Freedom Collection',
    description: 'Experimental layouts with creative freedom. Bold typography and unconventional spacing for a unique brand expression.',
    style: 'Experimental',
    tags: ['bold', 'creative', 'unconventional', 'expressive'],
    variations: 5,
    thumbnail: 'https://colorsofjoy.dk/webshopmedia/Tigerlilly%2001.jpeg',
    featured: false
  },
  {
    id: 'color-exploration',
    file: 'free-color-design.html',
    name: 'Color Exploration SPA',
    description: 'Color-driven templates with distinct mood palettes. Each variation explores a different color story from soft rose to confident contrast.',
    style: 'Colorful',
    tags: ['color-driven', 'mood', 'vibrant', 'playful'],
    variations: 5,
    thumbnail: 'https://colorsofjoy.dk/webshopmedia/Sofia%2001.jpeg',
    featured: true
  },
  {
    id: 'initial-spa',
    file: 'initial-spa-templates.html',
    name: 'Clean SPA Templates',
    description: 'Foundational templates with calm signature aesthetics. Perfect starting point with balanced layouts and refined typography.',
    style: 'Classic',
    tags: ['clean', 'balanced', 'refined', 'foundational'],
    variations: 5,
    thumbnail: 'https://colorsofjoy.dk/webshopmedia/Zoe%CC%81%2001.jpeg',
    featured: false
  },
  {
    id: 'lulu-inspired',
    file: 'lulu-copenhagen-inspired-templates.html',
    name: 'Lulu Copenhagen Inspired',
    description: 'Premium aesthetic inspired by high-end jewelry brands. Sophisticated layouts with editorial photography and refined details.',
    style: 'Premium',
    tags: ['premium', 'sophisticated', 'editorial', 'luxury'],
    variations: 5,
    thumbnail: 'https://colorsofjoy.dk/webshopmedia/Lilly%2010.jpeg',
    featured: true
  },
  {
    id: 'organic-layout',
    file: 'organic-layout.html',
    name: 'Organic Layouts',
    description: 'Natural, flowing compositions with soft edges and organic spacing. Emphasizes the handcrafted nature of the jewelry.',
    style: 'Organic',
    tags: ['organic', 'natural', 'flowing', 'handcrafted'],
    variations: 5,
    thumbnail: 'https://colorsofjoy.dk/webshopmedia/SEA%2010.jpeg',
    featured: false
  },
{
  id: 'storytelling-scroll',
  file: 'storytelling-scroll.html',
  name: 'Joyful Journey',
  description: 'Et fortællende, vertikalt layout der guider kunden gennem Colors of Joys univers.',
  style: 'StorytellingScroll',
  tags: ['story', 'emotion', 'scroll', 'brand'],
  variations: 5,
  thumbnail: 'https://colorsofjoy.dk/webshopmedia/Liva%2004.jpeg',
  featured: false
},
{
  id: 'art-gallery',
  file: 'art-gallery.html',
  name: 'Art Gallery',
  description: 'Et roligt, galleri-inspireret layout hvor smykkerne præsenteres som små kunstværker.',
  style: 'ArtGallery',
  tags: ['gallery', 'minimal', 'editorial', 'product-focus'],
  variations: 5,
  thumbnail: 'https://colorsofjoy.dk/webshopmedia/Liva%2004.jpeg',
  featured: false
},
{
  id: 'magazine-editorial',
  file: 'magazine-editorial.html',
  name: 'Soft Editorial',
  description: 'Magasin-inspireret landing pages med rig historiefortælling og tydelig produktfokus.',
  style: 'MagazineEditorial',
  tags: ['editorial', 'storytelling', 'landing', 'brand'],
  variations: 5,
  thumbnail: 'https://colorsofjoy.dk/webshopmedia/Liva%2004.jpeg',
  featured: false
},
];

/**
 * Get all template collections
 */
function getAllTemplates() {
  return TEMPLATE_COLLECTIONS;
}

/**
 * Get featured templates only
 */
function getFeaturedTemplates() {
  return TEMPLATE_COLLECTIONS.filter(t => t.featured);
}

/**
 * Get templates by style
 */
function getTemplatesByStyle(style) {
  return TEMPLATE_COLLECTIONS.filter(t => t.style === style);
}

/**
 * Get templates by tag
 */
function getTemplatesByTag(tag) {
  return TEMPLATE_COLLECTIONS.filter(t => t.tags.includes(tag));
}

/**
 * Search templates by query
 */
function searchTemplates(query) {
  const lowerQuery = query.toLowerCase();
  return TEMPLATE_COLLECTIONS.filter(t =>
    t.name.toLowerCase().includes(lowerQuery) ||
    t.description.toLowerCase().includes(lowerQuery) ||
    t.style.toLowerCase().includes(lowerQuery) ||
    t.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Get unique styles
 */
function getAvailableStyles() {
  return [...new Set(TEMPLATE_COLLECTIONS.map(t => t.style))].sort();
}

/**
 * Get unique tags
 */
function getAvailableTags() {
  const allTags = TEMPLATE_COLLECTIONS.flatMap(t => t.tags);
  return [...new Set(allTags)].sort();
}

// Export for use in other scripts
if (typeof window !== 'undefined') {
  window.TEMPLATE_COLLECTIONS = TEMPLATE_COLLECTIONS;
  window.getAllTemplates = getAllTemplates;
  window.getFeaturedTemplates = getFeaturedTemplates;
  window.getTemplatesByStyle = getTemplatesByStyle;
  window.getTemplatesByTag = getTemplatesByTag;
  window.searchTemplates = searchTemplates;
  window.getAvailableStyles = getAvailableStyles;
  window.getAvailableTags = getAvailableTags;
}
