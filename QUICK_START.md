# Quick Start Guide

## Load Your Extension

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top right)
3. Click "Load unpacked"
4. Select your extension folder: `extension-web-ciencias`
5. The extension should appear in your extensions list

## Test the Extension

1. Visit: https://web.fciencias.unam.mx/
2. Click the extension icon in your browser toolbar
3. Click "Alternar Extensión" to toggle styles on/off
4. You should see the dark theme applied when enabled

## Start Customizing

1. **Inspect the website**: Right-click elements and choose "Inspect"
2. **Find selectors**: Note class names and IDs of elements you want to style
3. **Edit styles.css**: Add your custom styles using the pattern:
   ```css
   body.fciencias-customizer-active .your-element {
     property: value !important;
   }
   ```
4. **Reload extension**: Go to `chrome://extensions/` and click the reload icon
5. **Refresh website**: Test your changes

## Example: Change Header Color

```css
/* Add this to styles.css */
body.fciencias-customizer-active .site-header,
body.fciencias-customizer-active header {
  background: linear-gradient(135deg, #667eea, #764ba2) !important;
}
```

## Need Help?

- Check `DEVELOPMENT_GUIDE.md` for detailed instructions
- Use browser console (F12) to debug issues
- Test one change at a time to identify problems