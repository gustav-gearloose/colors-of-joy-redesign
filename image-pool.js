/**
 * Shared image pool for Colors of Joy
 * Automatically injects real product images into elements with data-img attributes
 */

// Image pool with all available product images
const IMAGE_POOL = [
  "https://colorsofjoy.dk/webshopmedia/Liva%2004.jpeg",
  "https://colorsofjoy.dk/webshopmedia/Liva%2002.jpeg",
  "https://colorsofjoy.dk/webshopmedia/Liva%2003.jpeg",
  "https://colorsofjoy.dk/webshopmedia/Liva%2005.jpeg",
  "https://colorsofjoy.dk/webshopmedia/Always%2087.jpeg",
  "https://colorsofjoy.dk/webshopmedia/Always%2088.jpeg",
  "https://colorsofjoy.dk/webshopmedia/Always%2089.jpeg",
  "https://colorsofjoy.dk/webshopmedia/Always%2090.jpeg",
  "https://colorsofjoy.dk/webshopmedia/Always%2091.jpeg",
  "https://colorsofjoy.dk/webshopmedia/Always%2092.jpeg",
  "https://colorsofjoy.dk/webshopmedia/Lilly%2010.jpeg",
  "https://colorsofjoy.dk/webshopmedia/Zoe%CC%81%2001.jpeg",
  "https://colorsofjoy.dk/webshopmedia/Zoe%CC%81%2002.jpeg",
  "https://colorsofjoy.dk/webshopmedia/Zoe%CC%81%2003.jpeg",
  "https://colorsofjoy.dk/webshopmedia/Sofia%2001.jpeg",
  "https://colorsofjoy.dk/webshopmedia/Sofia%2003.jpeg",
  "https://colorsofjoy.dk/webshopmedia/Sofia%2005.jpeg",
  "https://colorsofjoy.dk/webshopmedia/Tigerlilly%2001.jpeg",
  "https://colorsofjoy.dk/webshopmedia/Tigerlilly%2002.jpeg",
  "https://colorsofjoy.dk/webshopmedia/Tigerlilly%2004.jpeg",
  "https://colorsofjoy.dk/webshopmedia/Tigerlilly%2005.jpeg",
  "https://colorsofjoy.dk/webshopmedia/Tigerlilly%2009.jpeg",
  "https://colorsofjoy.dk/webshopmedia/Tigerlilly%2008.jpeg",
  "https://colorsofjoy.dk/webshopmedia/Tigerlilly10.jpeg",
  "https://colorsofjoy.dk/webshopmedia/Tigerlilly%2011.jpeg",
  "https://colorsofjoy.dk/webshopmedia/SEA%2010.jpeg",
  "https://colorsofjoy.dk/webshopmedia/SEA%2011.jpeg"
];

// Track used images to avoid duplicates (optional: can be reset if needed)
let usedImageIndex = 0;

/**
 * Get the next image from the pool (cycles through)
 */
function getNextImage() {
  const image = IMAGE_POOL[usedImageIndex % IMAGE_POOL.length];
  usedImageIndex++;
  return image;
}

/**
 * Get a random image from the pool
 */
function getRandomImage() {
  return IMAGE_POOL[Math.floor(Math.random() * IMAGE_POOL.length)];
}

/**
 * Reset the image counter (useful if you want to restart cycling)
 */
function resetImageCounter() {
  usedImageIndex = 0;
}

/**
 * Inject images into all elements with data-img attributes
 * Replaces any existing image URLs with images from the pool
 * 
 * @param {Object} options - Configuration options
 * @param {boolean} options.random - Use random selection instead of sequential (default: false)
 * @param {Object} options.customMapping - Optional custom mapping of data-img paths to specific images
 */
function injectImages(options = {}) {
  const { random = false, customMapping = {} } = options;
  
  document.querySelectorAll("[data-img]").forEach(el => {
    const imgPath = el.dataset.img;
    
    // Check if there's a custom mapping for this path
    let imageUrl;
    if (customMapping[imgPath]) {
      imageUrl = customMapping[imgPath];
    } else {
      // Use pool images
      imageUrl = random ? getRandomImage() : getNextImage();
    }
    
    // Apply image based on element type
    if (el.tagName === "IMG") {
      el.src = imageUrl;
    } else {
      // For divs and other elements (typically using background-image)
      el.style.backgroundImage = `url(${imageUrl})`;
    }
  });
}

/**
 * Create an IMAGES object compatible with existing code structure
 * Maps data-img paths to images from the pool
 * 
 * @param {Object} customMapping - Optional nested object structure to merge in (e.g., {categories: {earrings: "url"}})
 * @param {boolean} random - Whether to assign images randomly (default: false)
 */
function createImageMapping(customMapping = {}, random = false) {
  const images = {};
  let index = 0;
  
  // Helper to get next image
  const getImage = () => {
    if (random) {
      return getRandomImage();
    } else {
      const img = IMAGE_POOL[index % IMAGE_POOL.length];
      index++;
      return img;
    }
  };
  
  // Helper to set nested value
  function setNestedValue(obj, pathParts, value) {
    let current = obj;
    for (let i = 0; i < pathParts.length - 1; i++) {
      const key = pathParts[i];
      if (!current[key]) {
        current[key] = {};
      }
      current = current[key];
    }
    current[pathParts[pathParts.length - 1]] = value;
  }
  
  // Helper to get nested value
  function getNestedValue(obj, pathParts) {
    let current = obj;
    for (const key of pathParts) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        return undefined;
      }
    }
    return current;
  }
  
  // First, merge in any custom mappings (they take precedence)
  if (customMapping && typeof customMapping === 'object') {
    Object.keys(customMapping).forEach(key => {
      images[key] = customMapping[key];
    });
  }
  
  // Extract all paths from data-img attributes
  const allPaths = new Set();
  if (typeof document !== 'undefined') {
    document.querySelectorAll("[data-img]").forEach(el => {
      allPaths.add(el.dataset.img);
    });
  }
  
  // Build/complete the images object for all paths
  allPaths.forEach(path => {
    const parts = path.split('.');
    
    // Check if already exists in custom mapping
    const existing = getNestedValue(images, parts);
    if (!existing) {
      // Auto-assign from pool
      setNestedValue(images, parts, getImage());
    }
  });
  
  return images;
}

// Auto-inject when DOM is ready (if this script is included)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    // Only auto-inject if IMAGES object doesn't exist (to avoid conflicts)
    if (typeof IMAGES === 'undefined') {
      injectImages();
    }
  });
} else if (typeof IMAGES === 'undefined') {
  // DOM already loaded
  injectImages();
}

// Export for use in other scripts
if (typeof window !== 'undefined') {
  window.IMAGE_POOL = IMAGE_POOL;
  window.getNextImage = getNextImage;
  window.getRandomImage = getRandomImage;
  window.resetImageCounter = resetImageCounter;
  window.injectImages = injectImages;
  window.createImageMapping = createImageMapping;
}
