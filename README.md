# Virtual Cafeteria 🍽️

A modern, responsive web application for ordering food and beverages online.

## Description

Virtual Cafeteria is a web-based platform that allows users to browse a catalog of products, customize their orders, and simulate a checkout process. It features a clean, user-friendly interface with real-time search, filtering, and a dynamic shopping cart.

## Key Features

### 🛍️ Shopping Experience

- **Product Catalog**: Browse beverages, food, and desserts with visual cards.
- **Search & Filter**: Instantly find products by name or category (Beverages, Food, Desserts).
- **Customization**: Personalize items with ingredients (add/remove) and extra additions.
- **Dynamic Cart**: Real-time updates, quantity adjustments, and total calculation.
- **Mobile-First Design**: Fully responsive layout with a floating cart button for mobile devices.

### 💳 Checkout & Payment

- **Multiple Payment Methods**:
  - 💵 Cash
  - 💳 Credit/Debit Card (with input validation and auto-formatting)
  - 🏦 Bank Transfer
  - 🔄 Virtual Account (with balance simulation)
- **Order Confirmation**: Visual feedback upon successful order placement.

### 🚀 Technical Highlights

- **Modern Architecture**: Separation of concerns with distinct HTML, CSS, and JavaScript files.
- **SEO Optimized**: Includes meta tags, Open Graph, Twitter Cards, and JSON-LD structured data.
- **Performance**: Implements lazy loading for images and resource preconnecting.
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation support.
- **Security**: Robust XSS protection via Content Security Policy (CSP) and secure DOM manipulation.

## Installation & Usage

No installation required! This is a static web application.

1. **Clone the repository** (or download the files).
2. **Open `index.html`** in any modern web browser.

```bash
# Option 1: Open directly
open index.html

# Option 2: Use a local server (recommended for best experience)
npx http-server .
# OR
python -m http.server 8000
```

## Project Structure

```
Cafeteria/
├── index.html              # Main application entry point
├── styles.css              # Global styles and responsive design
├── script.js               # Application logic (Cart, Search, Modal)
├── images/                 # Asset directory
├── test-xss-security.html  # Security test suite
├── SECURITY.md             # Security documentation
└── README.md               # Project documentation
```

## Technologies Used

- **HTML5**: Semantic structure.
- **CSS3**: Custom styling, Flexbox/Grid, Animations, Variables.
- **JavaScript (ES6+)**: Vanilla JS for all interactivity (no frameworks).

## Security

This project takes security seriously:

- **CSP**: Strict Content Security Policy implemented.
- **Input Sanitization**: All user inputs are handled safely.
- **DOM Safety**: Uses `textContent` and `createElement` to prevent XSS.

See [SECURITY.md](SECURITY.md) for more details.

## License

This project is open source and available under the [MIT License](LICENSE).
