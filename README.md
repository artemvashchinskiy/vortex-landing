# Vortex landing page

A responsive static HTML/CSS/JavaScript landing page. No framework or build step required.

## Run locally
Open `index.html` in a browser, or serve this folder with any static web server.

## Files
- `index.html` — page structure and editable copy
- `css/styles.css` — responsive design and visual system
- `js/main.js` — mobile navigation, year, Bible verse API + local fallback, copy button
- `js/products.js` — product catalogue data reference for easy edits
- `img/` — product photos and the Vortex SVG favicon

## Product photos
Add the four supplied/approved image files to `img/`:
- `Notes_on_Being_a_Man.jpg`
- `Spiral_Notebook.jpg`
- `Five_Star_Spiral_Notebook.jpg`
- `Lined_Spiral_Journal_Notebook.jpg`

The cards currently use these local paths. If an image is missing, the card's dark background remains, but the photo won't appear.

## Amazon links
The product buttons use the short affiliate URLs supplied for this page. Verify each link works and is correctly attributed to your Amazon Associates account before publishing. Product prices are intentionally not hard-coded because they change.

## Bible verse section
The “Another verse” button tries `https://bible-api.com/?random=verse`. If the request fails, the page rotates through a small local set of verses. The site works without an API key, but availability/CORS/network policies can vary. Verses shown are from the World English Bible (public domain). The API's exact response and availability are not guaranteed.

## Social links
The LinkedIn button points to the supplied Vortex profile URL. LumaSpace is presented specifically as the lamp and lighting collection.

## Deploy
Deploy the folder as a static site on Vercel. Keep `index.html` at the project root. No build command is needed for this plain HTML project.
