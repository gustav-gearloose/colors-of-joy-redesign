# Colors of Joy – Template Gallery

An easily navigable template gallery system for exploring and comparing different design layouts for the Colors of Joy jewelry website.

## 🎨 Overview

This project contains 7 template collections, each with 5 design variations (35 templates total). The gallery provides an intuitive way to browse, filter, and explore all templates.

## 📁 Project Structure

```
/
├── index.html                  # Master gallery page (landing page)
├── templates-config.js         # Central configuration for all templates
├── image-pool.js              # Shared image management system
├── templates/                 # All template HTML files
│   ├── anna-li-once-again.html
│   ├── completely-different-layout.html
│   ├── design-freedom.html
│   ├── free-color-design.html
│   ├── initial-spa-templates.html
│   ├── lulu-copenhagen-inspired-templates.html
│   └── organic-layout.html
└── assets/                    # Static assets (if needed)
```

## 🚀 Usage

### Viewing the Gallery

1. Open `index.html` in your browser
2. Browse the template collection cards
3. Use the search bar to find templates by name, style, or tags
4. Filter by style (Editorial, Structured, Experimental, etc.)
5. Click "View Templates" on any card to explore that collection

### Navigating Templates

- Each template file contains 5 variations with a dropdown switcher
- Use the "Back to Gallery" button (top-left) to return to the main gallery
- Use the dropdown (top-right) to switch between variations

## ✨ Features

### Gallery Features
- **Search**: Find templates by name, description, style, or tags
- **Filter by Style**: Quick filters for Editorial, Structured, Experimental, etc.
- **Featured Templates**: Highlighted collections worth exploring first
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Card Metadata**: See variation count, style, tags, and descriptions

### Template Features
- **5 Variations Per Collection**: Each file contains multiple design approaches
- **Instant Switching**: Dropdown navigation between variations
- **Shared Image Pool**: All templates use the same curated product images
- **Back Navigation**: Easy return to gallery from any template

## 🔧 Adding New Templates

To add a new template collection:

### 1. Create Your Template File

Create a new HTML file in the `templates/` directory following the existing pattern:

```html
<!DOCTYPE html>
<html lang="da">
<head>
  <meta charset="UTF-8" />
  <title>Colors of Joy – Your Template Name</title>
  <style>
    /* Your styles */
    #backNav { /* ... */ }
    #switcher { /* ... */ }
  </style>
</head>
<body>
  <div id="backNav">
    <a href="../index.html">Back to Gallery</a>
  </div>
  <div id="switcher">
    <select id="templateSelect">
      <!-- Your variations -->
    </select>
  </div>
  <!-- Your template sections -->
  <script src="../image-pool.js"></script>
  <script>
    // Your template logic
  </script>
</body>
</html>
```

### 2. Add Configuration Entry

Add your template to `templates-config.js`:

```javascript
{
  id: 'your-template-id',
  file: 'your-template-file.html',
  name: 'Your Template Name',
  description: 'A brief description of what makes this template unique',
  style: 'YourStyle', // e.g., 'Modern', 'Minimal', etc.
  tags: ['tag1', 'tag2', 'tag3'],
  variations: 5,
  thumbnail: 'https://colorsofjoy.dk/webshopmedia/YourImage.jpeg',
  featured: false // Set to true to feature it
}
```

### 3. That's It!

The gallery will automatically pick up your new template. No other changes needed!

## 🎯 Template Collections

| Collection | Style | Variations | Description |
|------------|-------|------------|-------------|
| **Floating Editorial Split** | Editorial | 5 | Organic shapes with dynamic positioning |
| **Architecture SPA** | Structured | 5 | Clean grid systems and modular layouts |
| **Design Freedom** | Experimental | 5 | Bold typography and creative layouts |
| **Color Exploration** | Colorful | 5 | Color-driven with distinct mood palettes |
| **Clean SPA Templates** | Classic | 5 | Foundational templates with refined aesthetics |
| **Lulu Copenhagen Inspired** | Premium | 5 | Sophisticated high-end jewelry aesthetics |
| **Organic Layouts** | Organic | 5 | Natural, flowing compositions |

## 🛠 Technology Stack

- **Pure Vanilla JavaScript** – No frameworks or build tools required
- **CSS3** – Modern CSS with Grid and Flexbox
- **ES6+** – Modern JavaScript features
- **Responsive Design** – Mobile-first approach
- **No Dependencies** – Runs directly in the browser

## 📱 Responsive Design

The gallery is fully responsive:
- **Desktop**: Multi-column grid layout
- **Tablet**: Adaptive columns
- **Mobile**: Single column, optimized for touch

## 🎨 Design System

The gallery uses a consistent design system:

```css
--bg-main: #f6f3ed;      /* Warm neutral background */
--bg-card: #ffffff;      /* Clean card background */
--text-dark: #2b2b2b;    /* Primary text */
--text-muted: #6f6a64;   /* Secondary text */
--accent: #b88a5a;       /* Brand accent color */
```

## 🌐 Deployment

### For Coolify Hosting

1. Push to your git repository
2. Configure Coolify to serve from the root directory
3. Set `index.html` as the entry point
4. No build process needed – serve static files directly

### Local Testing

Simply open `index.html` in any modern web browser. No server required!

## 📝 Configuration Reference

### Template Config Properties

- `id` *(string)*: Unique identifier for the template
- `file` *(string)*: Filename in the templates directory
- `name` *(string)*: Display name shown in the gallery
- `description` *(string)*: Brief description (1-2 sentences)
- `style` *(string)*: Style category (used for filtering)
- `tags` *(array)*: Array of searchable tags
- `variations` *(number)*: Number of design variations in the file
- `thumbnail` *(string)*: URL to preview image
- `featured` *(boolean)*: Whether to highlight as featured

### Available Helper Functions

From `templates-config.js`:

- `getAllTemplates()` – Get all template collections
- `getFeaturedTemplates()` – Get only featured templates
- `getTemplatesByStyle(style)` – Filter by style
- `getTemplatesByTag(tag)` – Filter by tag
- `searchTemplates(query)` – Search templates
- `getAvailableStyles()` – Get unique style list
- `getAvailableTags()` – Get unique tag list

## 🤝 Contributing

To contribute new templates:

1. Create your template file following the structure
2. Add configuration entry
3. Test navigation (gallery → template → back)
4. Ensure responsive design works
5. Commit and push

## 📄 License

Colors of Joy © 2024

---

**Built with care using vanilla JavaScript – no frameworks, no complexity, just clean code.**
