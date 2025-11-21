# Virtual Cafeteria 🍽️

Virtual cafeteria system for online orders

## Description

Web platform for placing online orders at the cafeteria with features for:
- Product catalog (beverages, food, desserts)
- Interactive shopping cart
- Multiple payment methods
- Responsive and user-friendly interface
- **🔒 Enterprise-level XSS security**

## Features

### Product Catalog
- **☕ Beverages**: Coffee, juices, tea, hot chocolate
- **🍔 Food**: Sandwiches, hamburgers, salads, pasta, pizza
- **🍰 Desserts**: Brownies, cheesecake, ice cream, tiramisu

### Functionality
- ✅ Add/remove products from cart
- ✅ Adjust product quantities
- ✅ Automatic total calculation
- ✅ Payment method selection:
  - 💵 Cash
  - 💳 Credit/Debit Card
  - 🏦 Bank Transfer
  - 🔄 Virtual Account
- ✅ Order confirmation
- ✅ Responsive design (mobile and desktop)
- ✅ WCAG 2.1 AA compliant accessibility

### 🔒 Security

This application features **multiple layers of XSS protection**:
- Content Security Policy (CSP)
- HTTP security headers
- Secure DOM manipulation (pure DOM API)
- Automated security test suite

📖 **See [SECURITY.md](SECURITY.md)** for complete security documentation

## Usage

1. Open the `index.html` file in your web browser
2. Browse the product catalog organized by categories
3. Click "Add to Cart" for the products you want
4. Adjust quantities using the + and - buttons in the cart
5. Select your preferred payment method
6. Click "Complete Order" to confirm

## Installation

No installation required. Simply open the `index.html` file in any modern web browser:

```bash
# Option 1: Open directly
open index.html

# Option 2: Use a local server
python -m http.server 8000
# Then visit http://localhost:8000

# Option 3: With Node.js
npx http-server
```

## Security Tests

To run the XSS security test suite:

```bash
# Start server
python -m http.server 8000

# Open in browser
open http://localhost:8000/test-xss-security.html
```

The suite will run 25+ tests verifying all security layers.

## Technologies

- Semantic HTML5
- CSS3 (with gradients, animations and section organization)
- Vanilla JavaScript ES6+ (no dependencies)
- Pure DOM API for maximum security

## Project Structure

```
Cafeteria/
├── index.html              # Main page with all functionality
├── test-xss-security.html  # XSS security test suite
├── test-functional.html    # Functional test suite
├── SECURITY.md             # Complete security documentation
├── README.md               # This file
├── LICENSE                 # Project license
└── .gitignore             # Files ignored by git
```

## Screenshots

The interface includes:
- Header with attractive gradient
- Product section with interactive cards
- Sticky side cart with quantity controls
- Payment methods section
- Visual notifications when adding products

## Security

### Implemented Protection Layers:

1. **Content Security Policy (CSP)** - Restrictive policies
2. **Security Headers** - X-Content-Type-Options, X-Frame-Options, etc.
3. **DOM Manipulation** - 100% createElement + textContent
4. **Automated Testing** - Suite with 25+ tests

See [SECURITY.md](SECURITY.md) for complete details.

## License

See LICENSE file for more details.
