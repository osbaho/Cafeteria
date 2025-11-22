# Virtual Cafeteria 🍽️

A modern, responsive web application for ordering food and beverages online with a focus on visual browsing and intuitive navigation.

## Description

Virtual Cafeteria is a web-based platform that allows users to browse a catalog of products, customize their orders, and simulate a checkout process. It features a clean, user-friendly interface with **category-based navigation**, professional product imagery, and a dynamic shopping cart.

## Key Features

### 🛍️ Shopping Experience

- **Browse-First Navigation**: Discover products visually through category filters (All Products, Beverages, Food, Desserts)
- **Product Catalog**: Beautiful product cards with professional images across three categories:
  - ☕ **Beverages**: Latte, Cappuccino
  - 🍔 **Food**: Chicken Sandwich, Hamburger, Personal Pizza
  - 🍰 **Desserts**: Brownie, Cheesecake
- **Customization**: Personalize items with ingredients (add/remove) and extra additions
- **Dynamic Cart**: Real-time updates, quantity adjustments, and total calculation
- **Mobile-First Design**: Fully responsive layout with a floating cart button for mobile devices

### 💳 Checkout & Payment

- **Multiple Payment Methods**:
  - 💵 **Cash**: Pay on pickup with instructions
  - 💳 **Credit/Debit Card**: Input validation and auto-formatting
  - 🏦 **Bank Transfer**: With reference number tracking
  - 🔄 **Virtual Account**: Balance simulation ($50.00 default)
- **Order Confirmation**: Visual feedback upon successful order placement

### 🎨 Design & UX

- **Premium Filter Buttons**: Pill-shaped buttons with gradient effects and smooth hover animations
- **Clean Layout**: Full-width category filters followed by a responsive product grid
- **Professional Images**: AI-generated product photography stored locally
- **Optimized Grid**: Auto-adjusting product cards (min 220px) for perfect display on any screen

### 🚀 Technical Highlights

- **Modern Architecture**: Separation of concerns with distinct HTML, CSS, and JavaScript files
- **SEO Optimized**: Includes meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
- **Performance**:
  - Lazy loading for images
  - Local image storage (no external dependencies)
  - Smooth animations using CSS transitions
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation support
- **Security**: Robust XSS protection via secure DOM manipulation (using `textContent` and `createElement` instead of `innerHTML`)

## Installation & Usage

No installation required! This is a static web application.

1. **Clone the repository** (or download the files)
2. **Open `index.html`** in any modern web browser

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
├── script.js               # Application logic (Categories, Cart, Modals)
├── images/                 # Product images (AI-generated)
│   ├── latte.png
│   ├── cappuccino.png
│   ├── chicken-sandwich.png
│   ├── hamburger.png
│   ├── pizza.png
│   ├── brownie.png
│   └── cheesecake.png
├── SECURITY.md             # Security documentation
└── README.md               # Project documentation
```

## Technologies Used

- **HTML5**: Semantic structure with proper accessibility attributes
- **CSS3**: Custom styling with Flexbox/Grid, smooth animations, and modern effects
- **JavaScript (ES6+)**: Vanilla JS for all interactivity (no frameworks required)

## User Experience Philosophy

This application follows a **"Browse-First"** approach, prioritizing visual product discovery over search functionality. Users are encouraged to explore the full catalog through intuitive category filters, promoting product visibility and impulse purchases - perfect for a cafeteria setting.

## Security

This project prioritizes security:

- **Input Sanitization**: User inputs are handled safely
- **DOM Safety**: Uses `textContent` and `createElement` to prevent XSS attacks
- **No External Dependencies**: All images and resources are local

See [SECURITY.md](SECURITY.md) for more details on security practices.

## License

This project is open source and available under the [MIT License](LICENSE).
