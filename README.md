# Wesley's 3D Prints

A fun, kid-friendly business website for Wesley (age 9) to showcase and sell his 3D printed creations. Customers can browse 20 products, see real photos, and submit order requests right from the site.

---

## What's in This Project

| File | What It Does |
|------|-------------|
| `index.html` | The main website customers see — product catalog + order form |
| `edit.html` | Admin page for adding, editing, deleting, and reordering products |
| `products.js` | Shared product data used by both pages |
| `images/` | Product photos (20 JPG files) |
| `models/` | Folder for 3D model files (STLs) |
| `Wesley's 3D Prints - Product Catalog.xlsx` | Spreadsheet with all product info, pricing, and Printables links |

### Project Structure

```
wesleys-3d-prints/
├── index.html          ← Customer website
├── edit.html           ← Product editor (admin)
├── products.js         ← Shared product data
├── images/             ← 20 product photos
│   ├── fidget-spinner.jpg
│   ├── infinity-cube.jpg
│   ├── dragon.jpg
│   └── ... (17 more)
├── models/             ← 3D model files (STLs)
├── Wesley's 3D Prints - Product Catalog.xlsx
└── README.md           ← This file
```

---

## Quick Start

### View the website locally

Just double-click `index.html` to open it in your browser. That's it!

If product images don't load (some browsers block local file access), start a quick server instead:

```bash
# Open Terminal, navigate to the project folder, then run:
cd "/Users/geo/Claude Projects/wesleys-3d-prints"
python3 -m http.server 8000
```

Then open **http://localhost:8000** in your browser.

### Put it online

The easiest free options:

1. **Netlify** — Drag the entire `wesleys-3d-prints` folder onto [app.netlify.com/drop](https://app.netlify.com/drop). Done! You'll get a live URL instantly.
2. **GitHub Pages** — Push the folder to a GitHub repository, go to Settings > Pages, and enable it.
3. **Vercel** — Similar to Netlify, drag and drop at [vercel.com](https://vercel.com).

> **Important:** When hosting online, the order form will start sending real emails through Formspree. Make sure the email address in `index.html` is correct (currently set to `wesscootermcgee+3d@gmail.com`).

---

## Using the Website (Customer View)

### Browsing Products

- Scroll down from the hero banner to see all 20 products displayed as cards
- Each card shows: a photo, product name, short description, and price
- Items under $5 show "ea" after the price and a minimum order note (e.g., "Min 2 ($5.00)")

### Placing an Order

1. Click the **"Order This!"** button on any product card — the page scrolls to the order form and pre-checks that item
2. Fill in your **name**, **email**, and **phone number**
3. Check the boxes for all the items you want
4. Optionally enter a **color preference** and any **special requests**
5. Click **"Send My Order Request!"**
6. A thank-you popup appears confirming the order was sent

### What Happens After Submitting

- The form sends an email to Wesley's email address via [Formspree](https://formspree.io)
- The email includes: customer name, email, phone, selected items, color preference, and notes
- Wesley (or his parent) can then reply to the customer to arrange the exchange

---

## Using the Product Editor (Admin View)

Open `edit.html` in your browser to manage products. Changes you make here automatically show up on the main website.

### Opening the Editor

- Double-click `edit.html`, or
- If running a local server, go to **http://localhost:8000/edit.html**
- Click **"View Website"** in the top bar to switch back to the customer site

### The Dashboard

At the top you'll see live stats:
- **Products** — total number of items
- **Avg Price** — average price across all products
- **Total Filament** — combined filament weight in grams
- **Material Cost** — total cost at $0.02 per gram

### Editing a Product

1. Click anywhere on a product row to expand its edit form
2. Change any field: name, emoji, price, min order note, image path, filament weight, description, or Printables ID
3. Changes **save automatically** as soon as you edit a field — no save button needed
4. Click **"Close"** or click the row header again to collapse

### Adding a New Product

1. Click the green **"+ Add Product"** button in the top bar
2. A new product appears at the top of the list, expanded for editing
3. Fill in all the fields (name, price, description, etc.)
4. Add an image to the `images/` folder and set the image path (e.g., `images/my-new-item.jpg`)

### Deleting a Product

1. Click the red trash can button on the product row
2. A confirmation popup appears — click **"Delete"** to confirm
3. The product is removed from the list

### Reordering Products

- Use the **up arrow** and **down arrow** buttons on each product row to move it up or down in the list
- The order here is the order customers see on the website

### Exporting Product Data

- Click **"Export JSON"** to download all product data as a JSON file
- Useful for backups or transferring data to another computer

### Resetting to Defaults

- Click **"Reset to Defaults"** to restore all 20 original products
- A confirmation popup appears first — this erases any changes you've made
- The original products and settings are built into `products.js`

### How Data Storage Works

- Product edits are saved in your browser's **localStorage**
- This means changes persist between page refreshes on the same browser
- If you clear your browser data or switch browsers, edits are lost (products revert to defaults)
- Use **"Export JSON"** to back up your changes

---

## Product Catalog (20 Default Items)

| # | Product | Price | Min Order | Filament | Printables Link |
|---|---------|-------|-----------|----------|----------------|
| 1 | Fidget Spinner | $2.50 ea | Min 2 ($5.00) | 15g | [#157347](https://www.printables.com/model/157347) |
| 2 | Infinity Cube | $6.00 | — | 40g | [#652108](https://www.printables.com/model/652108) |
| 3 | Articulated Dragon | $8.00 | — | 60g | [#757123](https://www.printables.com/model/757123) |
| 4 | Phone Stand | $5.00 | — | 35g | [#187125](https://www.printables.com/model/187125) |
| 5 | Pencil Holder | $5.00 | — | 45g | [#202588](https://www.printables.com/model/202588) |
| 6 | Bookmarks (Set of 3) | $5.00 | Set of 3 | 10g | [#344878](https://www.printables.com/model/344878) |
| 7 | Bag Clips (5-Pack) | $5.00 | 5-pack | 20g | [#83628](https://www.printables.com/model/83628) |
| 8 | Miniature Animal | $2.50 ea | Min 2 ($5.00) | 10g | [#972232](https://www.printables.com/model/972232) |
| 9 | Fidget Slug | $5.00 | — | 30g | [#229666](https://www.printables.com/model/229666) |
| 10 | Keychain | $2.50 ea | Min 2 ($5.00) | 8g | [#1162168](https://www.printables.com/model/1162168) |
| 11 | Flexi Octopus | $5.00 | — | 25g | [#178035](https://www.printables.com/model/178035) |
| 12 | Tic-Tac-Toe Game | $5.00 | — | 30g | [#413220](https://www.printables.com/model/413220) |
| 13 | Mini Monster Truck | $6.00 | — | 40g | [#51083](https://www.printables.com/model/51083) |
| 14 | Walking Crab | $6.00 | — | 35g | [#294220](https://www.printables.com/model/294220) |
| 15 | Catapult Launcher | $5.00 | — | 25g | [#977936](https://www.printables.com/model/977936) |
| 16 | Cookie Cutters (3-Pack) | $5.00 | 3-pack | 15g | [#436994](https://www.printables.com/model/436994) |
| 17 | Fidget Ball | $5.00 | — | 30g | [#920359](https://www.printables.com/model/920359) |
| 18 | Action Figure | $6.00 | — | 50g | [#484193](https://www.printables.com/model/484193) |
| 19 | Spinning Top | $5.00 | — | 12g | [#282970](https://www.printables.com/model/282970) |
| 20 | Puzzle Ball | $6.00 | — | 45g | [#986151](https://www.printables.com/model/986151) |

**Pricing formula:** All prices are at least 3x the filament material cost ($0.02/gram). Items priced under $5 require a minimum order of 2.

---

## Downloading 3D Model Files (STLs)

The STL files for each product are hosted on [Printables.com](https://www.printables.com). To download them:

1. Click any Printables link from the table above (or from the edit page / spreadsheet)
2. On the Printables model page, click the **"Files"** tab
3. Click **"All Model Files"** to download a ZIP, or click **"Download"** next to individual STL files
4. Save the files to the `models/` folder in this project

You can also open the spreadsheet (`Wesley's 3D Prints - Product Catalog.xlsx`) which has clickable links to both the model page and the direct files/download page for every product.

---

## Adding New Product Images

1. Save your image as a JPG file in the `images/` folder
   - Use a lowercase, hyphenated name (e.g., `my-cool-toy.jpg`)
   - Square or landscape photos work best (they display at 250px wide x 200px tall)
2. Open `edit.html` and find your product (or add a new one)
3. Set the **Image Path** field to `images/my-cool-toy.jpg`
4. The image appears immediately on the website

If an image can't be found, the product card shows the emoji as a colorful placeholder instead.

---

## Customization Guide

### Changing the Business Name

Open `index.html` and search for these lines to change the name and taglines:

- **Line 543:** `<h1>Wesley's 3D Prints</h1>` — the big title
- **Line 544:** The tagline below it
- **Line 545:** The sub-tagline
- **Line 6:** The browser tab title

### Changing the Order Form Email

Open `index.html` and find line 572:

```html
<form action="https://formspree.io/wesscootermcgee+3d@gmail.com" ...>
```

Replace the email address with whatever email should receive orders. Formspree will send a verification email the first time someone submits the form to that new address.

### Changing Colors

The main colors are defined in the `<style>` section of `index.html`:

| What | Current Color | Where |
|------|--------------|-------|
| Hero gradient | Purple to pink (`#667eea` to `#fda085`) | `.hero` background |
| Section titles | Dark purple (`#4a3f8a`) | `.section-title` color |
| Prices | Red-pink (`#f5576c`) | `.card-price` color |
| Buttons | Purple gradient | `.order-btn` background |
| Page background | Light blue (`#f0f4ff`) | `body` background |

---

## Files Reference

| File | Description |
|------|-------------|
| **index.html** | The public-facing website with hero section, product grid, order form, about section, and footer. Uses Google Fonts (Fredoka One + Nunito) and CSS animations. |
| **edit.html** | Dark-themed admin panel for full product CRUD (create, read, update, delete). Features live stats, reordering, JSON export, and reset to defaults. |
| **products.js** | Shared JavaScript module containing the 20 default products and three functions: `getProducts()`, `saveProducts()`, and `resetProducts()`. Bridges localStorage with both HTML pages. |
| **images/** | 20 product photos downloaded from Printables.com. Each named to match its product (e.g., `dragon.jpg` for Articulated Dragon). |
| **models/** | Folder for STL/ZIP 3D model files. Download from the Printables links in the catalog table above. |
| **Product Catalog.xlsx** | Excel spreadsheet with all product data, filament costs, markup calculations, and clickable Printables links for downloading STL files. |

---

Made with love and a 3D printer by Wesley
