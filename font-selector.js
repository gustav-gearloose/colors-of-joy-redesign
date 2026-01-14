/**
 * Font Selector
 * Global font selection system for Colors of Joy
 * Allows separate font selection for headers and body text
 */

// =====================================================
// STORAGE KEYS
// =====================================================
const STORAGE_KEY_HEADER = 'colorsOfJoy_headerFont';
const STORAGE_KEY_BODY = 'colorsOfJoy_bodyFont';

// =====================================================
// FONT APPLICATION
// =====================================================

/**
 * Apply header font globally
 */
function applyHeaderFont(fontId) {
  const font = getFontById(fontId);
  if (!font) {
    console.warn(`Font not found: ${fontId}`);
    return;
  }

  // Set CSS custom property
  document.documentElement.style.setProperty('--font-header', font.fontFamily);

  // Save to localStorage
  localStorage.setItem(STORAGE_KEY_HEADER, fontId);

  console.log(`Header font applied: ${font.name}`);
}

/**
 * Apply body font globally
 */
function applyBodyFont(fontId) {
  const font = getFontById(fontId);
  if (!font) {
    console.warn(`Font not found: ${fontId}`);
    return;
  }

  // Set CSS custom property
  document.documentElement.style.setProperty('--font-body', font.fontFamily);

  // Save to localStorage
  localStorage.setItem(STORAGE_KEY_BODY, fontId);

  console.log(`Body font applied: ${font.name}`);
}

/**
 * Get current header font from localStorage
 */
function getCurrentHeaderFont() {
  return localStorage.getItem(STORAGE_KEY_HEADER) || 'georgia';
}

/**
 * Get current body font from localStorage
 */
function getCurrentBodyFont() {
  return localStorage.getItem(STORAGE_KEY_BODY) || 'georgia';
}

/**
 * Initialize fonts from saved preferences
 */
function initializeFonts() {
  const headerFontId = getCurrentHeaderFont();
  const bodyFontId = getCurrentBodyFont();

  const headerFont = getFontById(headerFontId);
  const bodyFont = getFontById(bodyFontId);

  if (headerFont) {
    document.documentElement.style.setProperty('--font-header', headerFont.fontFamily);
  }

  if (bodyFont) {
    document.documentElement.style.setProperty('--font-body', bodyFont.fontFamily);
  }
}

/**
 * Reset fonts to defaults
 */
function resetFonts() {
  localStorage.removeItem(STORAGE_KEY_HEADER);
  localStorage.removeItem(STORAGE_KEY_BODY);

  document.documentElement.style.setProperty('--font-header', 'Georgia, serif');
  document.documentElement.style.setProperty('--font-body', 'Georgia, serif');

  // Update selectors if they exist
  const headerSelect = document.getElementById('headerFontSelect');
  const bodySelect = document.getElementById('bodyFontSelect');

  if (headerSelect) headerSelect.value = 'georgia';
  if (bodySelect) bodySelect.value = 'georgia';

  console.log('Fonts reset to defaults');
}

// =====================================================
// UI RENDERING
// =====================================================

/**
 * Render font selector dropdown
 */
function renderFontSelector(containerId, type) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.warn(`Container not found: ${containerId}`);
    return;
  }

  const fonts = type === 'header' ? getFontsForHeaders() : getFontsForBody();
  const currentFont = type === 'header' ? getCurrentHeaderFont() : getCurrentBodyFont();
  const selectId = type === 'header' ? 'headerFontSelect' : 'bodyFontSelect';
  const label = type === 'header' ? 'Header Font' : 'Body Font';

  // Group fonts by category
  const fontsByCategory = {};
  fonts.forEach(font => {
    if (!fontsByCategory[font.category]) {
      fontsByCategory[font.category] = [];
    }
    fontsByCategory[font.category].push(font);
  });

  // Build options HTML with optgroups
  let optionsHTML = '';
  Object.keys(fontsByCategory).sort().forEach(category => {
    optionsHTML += `<optgroup label="${category}">`;
    fontsByCategory[category].forEach(font => {
      const selected = font.id === currentFont ? 'selected' : '';
      optionsHTML += `<option value="${font.id}" ${selected}>${font.name}</option>`;
    });
    optionsHTML += `</optgroup>`;
  });

  container.innerHTML = `
    <div class="font-selector-group">
      <label for="${selectId}" class="font-selector-label">${label}</label>
      <select id="${selectId}" class="font-selector-dropdown">
        ${optionsHTML}
      </select>
    </div>
  `;

  // Add event listener
  const select = document.getElementById(selectId);
  select.addEventListener('change', (e) => {
    const fontId = e.target.value;
    if (type === 'header') {
      applyHeaderFont(fontId);
    } else {
      applyBodyFont(fontId);
    }
  });
}

/**
 * Initialize font selectors in the UI
 */
function initializeFontSelectors() {
  renderFontSelector('headerFontSelector', 'header');
  renderFontSelector('bodyFontSelector', 'body');
}

// =====================================================
// INITIALIZATION
// =====================================================

// Auto-initialize fonts when the script loads
if (typeof window !== 'undefined') {
  // Apply saved fonts immediately
  initializeFonts();

  // Initialize UI when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeFontSelectors);
  } else {
    initializeFontSelectors();
  }

  // Export functions globally
  window.applyHeaderFont = applyHeaderFont;
  window.applyBodyFont = applyBodyFont;
  window.getCurrentHeaderFont = getCurrentHeaderFont;
  window.getCurrentBodyFont = getCurrentBodyFont;
  window.resetFonts = resetFonts;
  window.initializeFonts = initializeFonts;
  window.initializeFontSelectors = initializeFontSelectors;
}
