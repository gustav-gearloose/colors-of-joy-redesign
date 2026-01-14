# Fonts Reference - Colors of Joy

This document lists all the fonts configured in the font selector and where they are available from.

## Requested Fonts (All Included ✓)

### 1. **Rastanty Cortex** ✓
- **Status**: Included
- **Category**: Handwriting
- **Source**: Custom font (needs to be loaded via @font-face or web font service)
- **Fallback**: cursive

### 2. **Lucida** ✓
- **Status**: Included
- **Display Name**: Lucida
- **Font Family**: 'Lucida Handwriting', 'Lucida', cursive
- **Category**: Handwriting
- **Source**: System font (macOS, Windows)
- **Availability**: Pre-installed on most systems

### 3. **Apple Chancery** ✓
- **Status**: Included
- **Category**: Calligraphy
- **Source**: System font (macOS)
- **Availability**: Pre-installed on Mac systems
- **Fallback**: cursive

### 4. **Modern Love** ✓
- **Status**: Included
- **Category**: Calligraphy
- **Source**: Custom font (needs to be loaded via @font-face or web font service)
- **Fallback**: cursive

### 5. **Monotype Corsiva** ✓
- **Status**: Included
- **Category**: Calligraphy
- **Source**: System font (Windows)
- **Availability**: Pre-installed on Windows systems
- **Fallback**: cursive

### 6. **Pristina** ✓
- **Status**: Included
- **Category**: Calligraphy
- **Source**: System font (Windows)
- **Availability**: Pre-installed on Windows systems
- **Fallback**: cursive

### 7. **Segoe Print** ✓
- **Status**: Included
- **Category**: Handwriting
- **Source**: System font (Windows)
- **Availability**: Pre-installed on Windows systems
- **Fallback**: cursive

### 8. **Segoe UI** ✓
- **Status**: Included (Added as separate font)
- **Category**: Sans-serif
- **Source**: System font (Windows)
- **Availability**: Pre-installed on Windows systems
- **Fallback**: Tahoma, Geneva, Verdana, sans-serif

## Additional Fonts Included

### Serif Fonts
- **Georgia** - Universal system font
- **Garamond** - Classic serif
- **Times New Roman** - Universal system font
- **Baskerville** - Elegant serif

### Sans-serif Fonts
- **Helvetica** - macOS system font
- **Avenir** - macOS system font
- **Futura** - Classic geometric sans

### Calligraphy
- **Lucida Calligraphy** - Windows system font

## To Add Custom Fonts

If you want to load **Rastanty Cortex** or **Modern Love** from a web font service, add this to your HTML `<head>`:

```html
<!-- Example: Google Fonts or custom hosted fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

Or use @font-face in your CSS:

```css
@font-face {
  font-family: 'Rastanty Cortex';
  src: url('fonts/rastanty-cortex.woff2') format('woff2'),
       url('fonts/rastanty-cortex.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
```

## Font Availability Summary

✅ **All 8 requested fonts are included in the configuration**

- **System fonts** (work out of the box): Lucida, Apple Chancery, Monotype Corsiva, Pristina, Segoe Print, Segoe UI
- **Custom fonts** (may need web font loading): Rastanty Cortex, Modern Love
- **Fallback fonts** are provided for all fonts to ensure graceful degradation

## Usage

The font selector in `fonts-config.js` includes all requested fonts. Users can select:
- **Header Font**: Applied to all h1-h6 elements
- **Body Font**: Applied to all body text and paragraphs

The system automatically saves preferences to localStorage and applies them globally across all pages.
