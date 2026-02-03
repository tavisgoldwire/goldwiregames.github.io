# Goldwire Games Landing Page - Trophic

A science-informed, sketchbook-style landing page for Goldwire Games' flagship ecosystem-building board game.

## 🎯 Design Philosophy

This landing page was built with a singular focus: **email signups via "Join the Ecosystem"**. Every design decision supports this primary conversion goal while establishing brand legitimacy and intrigue.

### Visual Identity
- **Aesthetic**: Hand-drawn sketchbook style with paper textures
- **Typography**: Libre Baskerville (display) + Work Sans (body)
- **Color System**: Ecosystem-specific palettes that appear contextually, not all at once
- **Motion**: Subtle fade-ins and staggered reveals on scroll

## 📁 File Structure

```
goldwire-games/
├── index.html          # Main landing page
├── styles.css          # Complete stylesheet with ecosystem colors
├── script.js           # Minimal JavaScript for interactions
└── README.md           # This file
```

## 🚀 Quick Start

### GitHub Pages Deployment

1. Create a new repository on GitHub
2. Upload these three files: `index.html`, `styles.css`, `script.js`
3. Go to Settings → Pages
4. Select your branch (usually `main`) and root directory
5. Save and wait for deployment (usually 1-2 minutes)
6. Your site will be live at `https://yourusername.github.io/repo-name/`

### Local Testing

Simply open `index.html` in any modern browser. All dependencies are loaded from CDNs.

## 🎨 Customization Guide

### 1. Email Signup Form

**Current Setup**: The form uses a placeholder Formspree endpoint.

**To Activate**:
```html
<!-- In index.html, line 106, replace: -->
<form class="signup-form" id="signup-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">

<!-- With your actual Formspree ID: -->
<form class="signup-form" id="signup-form" action="https://formspree.io/f/xyzabc123" method="POST">
```

**Alternative Services**:
- **Mailchimp**: Embed their form code in the signup section
- **ConvertKit**: Use their JavaScript embed
- **Custom Backend**: Update the `action` attribute to your API endpoint

### 2. Social Media Links

Update links in the footer (lines 137-148 in index.html):

```html
<!-- Instagram -->
<a href="https://instagram.com/goldwiregames" target="_blank">

<!-- X/Twitter -->
<a href="https://x.com/goldwiregames" target="_blank">
```

### 3. Contact Email

Update the footer contact link (line 153 in index.html):

```html
<a href="mailto:hello@goldwiregames.com">hello@goldwiregames.com</a>
```

### 4. Color Customization

All ecosystem colors are defined as CSS variables in `styles.css` (lines 10-35):

```css
:root {
    /* Arctic Ice - Blue & White */
    --arctic-primary: #2B5F7C;
    --arctic-secondary: #4A8AAE;
    
    /* Savanna - Yellow */
    --savanna-primary: #D4A017;
    --savanna-secondary: #E8B84E;
    
    /* Amazon - Green */
    --amazon-primary: #2D5F3F;
    --amazon-secondary: #4A8F5E;
    
    /* Rockies/Temperate - Orange */
    --temperate-primary: #C66B3D;
    --temperate-secondary: #D98B5C;
}
```

Simply update these hex values to change the entire color scheme.

### 5. Copy & Messaging

All text is directly in `index.html` for easy editing:

- **Hero headline** (line 19): "Enter the Ecosystem"
- **Hero subtitle** (line 20): Modify the tagline
- **Ecosystem phrases** (lines 34, 43, 52, 61, 70): One-line descriptions
- **Mission statement** (lines 101-103): Studio identity

## 🎯 Section Breakdown

### Section 1: Hero
- Full-screen entrance with gradient background
- Single CTA button that scrolls to signup
- Paper texture overlay for organic feel

### Section 2: Ecosystem Diversity
- Horizontal bands showing 5 ecosystems
- Color-coded by biome
- Subtle hover animations
- Key differentiator message

### Section 3: What is Trophic
- Three-column feature grid (responsive)
- High-level gameplay overview
- Muted "View Rulebook" link for future

### Section 4: Mission
- Goldwire Games brand positioning
- Science-informed design philosophy
- Accessible but intelligent tone

### Section 5: Email Signup (PRIMARY CTA)
- Green gradient background for visual prominence
- Inline email form
- Clear value proposition

### Section 6: Footer
- Social links
- Future-proofed muted links (Rulebook, Deck Builder, etc.)
- Contact information

## 🔮 Future-Proofing

The structure is designed to easily add new pages:

```
/rulebook/          → Interactive rulebook viewer
/deck-builder/      → Digital deck building tool
/calculator/        → Score calculator
/educators/         → Teaching resources
/kickstarter/       → Campaign hub
```

Simply create new directories and update the footer links when ready.

## 📱 Responsive Design

- **Mobile-first**: All styles scale down gracefully
- **Breakpoints**: 768px (tablet), 480px (mobile)
- **Form**: Stacks vertically on mobile
- **Ecosystem bands**: Column layout on mobile

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels on form inputs
- Focus states for keyboard navigation
- Reduced motion support via `prefers-reduced-motion`
- Color contrast meets WCAG AA standards

## 🎨 Design System at a Glance

### Typography Scale
- Hero: 2.5rem - 5rem (clamp)
- H2: 2rem - 3rem (clamp)
- H3: 1.5rem - 2rem
- Body: 17px (1.7 line height)

### Spacing Scale
- XS: 0.5rem
- SM: 1rem
- MD: 2rem
- LG: 4rem
- XL: 6rem

### Color Philosophy
Each ecosystem has its moment—colors don't compete, they take turns establishing mood.

## 🐛 Troubleshooting

**Fonts not loading?**
- Check internet connection (Google Fonts CDN)
- Ensure `<link>` tag is in `<head>`

**Form not submitting?**
- Verify Formspree form ID is correct
- Check browser console for errors
- Ensure `method="POST"` is set

**Animations choppy on mobile?**
- Animations are intentionally subtle to avoid performance issues
- If needed, disable via `prefers-reduced-motion`

## 📊 Performance

- **No JavaScript frameworks**: Pure vanilla JS
- **Minimal dependencies**: Only Google Fonts
- **Optimized animations**: CSS-only where possible
- **GitHub Pages compatible**: Static site, no build step

## 📝 Notes

- Update copyright year in footer annually
- Add `favicon.ico` and `og:image` meta tags before launch
- Consider adding Google Analytics via `gtag.js`
- Test email form thoroughly before going live

## 🎮 About Trophic

Trophic is an asymmetric engine-building card game about ecosystems. Players build trophic pyramids from producers to apex predators across five distinct biomes: Arctic, Savanna, Amazon, Rockies, and Temperate.

For more information, visit [goldwiregames.com](https://goldwiregames.com) (placeholder).

---

**Built with**: HTML5, CSS3, Vanilla JavaScript  
**Fonts**: Libre Baskerville, Work Sans  
**License**: © 2026 Goldwire Games. All rights reserved.
