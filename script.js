const products = {
    bebidas: [
        {
            id: 1,
            name: 'Latte',
            description: 'Creamy espresso with steamed milk',
            price: 3.50,
            image: 'https://via.placeholder.com/400x300/667eea/ffffff?text=Latte',
            ingredients: [
                { name: 'Espresso', required: true, removable: false, discount: 0 },
                { name: 'Milk', required: true, removable: false, discount: 0 }
            ],
            additions: [
                { name: 'Extra shot', price: 0.75 },
                { name: 'Vanilla syrup', price: 0.50 },
                { name: 'Almond milk', price: 0.75 }
            ]
        },
        { 
            id: 3, 
            name: 'Cappuccino', 
            description: 'Espresso, milk and thick foam', 
            image: 'https://via.placeholder.com/400x300/764ba2/ffffff?text=Cappuccino', 
            price: 3.50,
            ingredients: [
                { name: 'Espresso', required: true, removable: false, discount: 0 },
                { name: 'Milk', required: true, removable: false, discount: 0 },
                { name: 'Cinnamon powder', required: false, removable: true, discount: 0.15 }
            ],
            additions: [
                { name: 'Extra shot', price: 0.75 },
                { name: 'Chocolate powder', price: 0.35 }
            ]
        }
    ],
    alimentos: [
        { 
            id: 7, 
            name: 'Chicken Sandwich', 
            description: 'Grilled chicken breast with fresh vegetables', 
            image: 'https://via.placeholder.com/400x300/ffc107/333333?text=Chicken+Sandwich', 
            price: 8.50,
            ingredients: [
                { name: 'Bread', required: true, removable: false, discount: 0 },
                { name: 'Chicken breast', required: true, removable: false, discount: 0 },
                { name: 'Lettuce', required: false, removable: true, discount: 0.50 },
                { name: 'Tomato', required: false, removable: true, discount: 0.50 },
                { name: 'Cheese', required: false, removable: true, discount: 0.75 },
                { name: 'Mayo', required: false, removable: true, discount: 0.25 }
            ],
            additions: [
                { name: 'Bacon', price: 1.50 },
                { name: 'Extra cheese', price: 0.75 },
                { name: 'Avocado', price: 1.25 }
            ]
        },
        { 
            id: 8, 
            name: 'Hamburger', 
            description: 'Beef patty with cheese and fresh vegetables', 
            image: 'https://via.placeholder.com/400x300/dc3545/ffffff?text=Hamburger', 
            price: 10.00,
            ingredients: [
                { name: 'Bread', required: true, removable: false, discount: 0 },
                { name: 'Beef patty', required: true, removable: false, discount: 0 },
                { name: 'Cheese', required: false, removable: true, discount: 0.75 },
                { name: 'Lettuce', required: false, removable: true, discount: 0.50 },
                { name: 'Tomato', required: false, removable: true, discount: 0.50 },
                { name: 'Onion', required: false, removable: true, discount: 0.25 },
                { name: 'Pickles', required: false, removable: true, discount: 0.25 }
            ],
            additions: [
                { name: 'Bacon', price: 1.50 },
                { name: 'Extra patty', price: 3.00 },
                { name: 'Fried egg', price: 1.00 }
            ]
        },
        { 
            id: 11, 
            name: 'Personal Pizza', 
            description: 'Individual pizza with cheese and tomato sauce', 
            image: 'https://via.placeholder.com/400x300/fd7e14/ffffff?text=Pizza', 
            price: 12.00,
            ingredients: [
                { name: 'Dough', required: true, removable: false, discount: 0 },
                { name: 'Tomato sauce', required: true, removable: false, discount: 0 },
                { name: 'Mozzarella cheese', required: true, removable: false, discount: 0 },
                { name: 'Oregano', required: false, removable: true, discount: 0.15 }
            ],
            additions: [
                { name: 'Pepperoni', price: 2.00 },
                { name: 'Mushrooms', price: 1.25 },
                { name: 'Ham', price: 1.50 },
                { name: 'Bell peppers', price: 1.00 }
            ]
        }
    ],
    postres: [
        { 
            id: 13, 
            name: 'Brownie', 
            description: 'Chocolate brownie with walnuts', 
            image: 'https://via.placeholder.com/400x300/6f42c1/ffffff?text=Brownie', 
            price: 4.50,
            ingredients: [
                { name: 'Brownie base', required: true, removable: false, discount: 0 },
                { name: 'Walnuts', required: false, removable: true, discount: 0.50 },
                { name: 'Chocolate chips', required: false, removable: true, discount: 0.35 }
            ],
            additions: [
                { name: 'Vanilla ice cream', price: 1.50 },
                { name: 'Chocolate sauce', price: 0.50 }
            ]
        },
        { 
            id: 14, 
            name: 'Cheesecake', 
            description: 'Cream cheese tart with berry topping', 
            image: 'https://via.placeholder.com/400x300/e83e8c/ffffff?text=Cheesecake', 
            price: 5.50,
            ingredients: [
                { name: 'Cheese base', required: true, removable: false, discount: 0 },
                { name: 'Graham crust', required: true, removable: false, discount: 0 },
                { name: 'Berry topping', required: false, removable: true, discount: 0.75 }
            ],
            additions: [
                { name: 'Whipped cream', price: 0.50 },
                { name: 'Extra berries', price: 1.00 }
            ]
        }
    ]
};

// Shopping cart
let cart = [];
let currentCategory = 'all';
let searchTerm = '';
let selectedPayment = null;
let virtualAccountBalance = 50.00; // Virtual account balance in USD

// Setup event listeners
function setupEventListeners() {
    // Filter Buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update category
            currentCategory = btn.dataset.category;
            renderProducts();
        });
    });
}

// Initialize the page
function init() {
    setupEventListeners();
    renderProducts();
    updateCart();
    updateVirtualBalance();
}
// Render all products
function renderProducts() {
    const productsSection = document.getElementById('products-section');
    productsSection.innerHTML = '';

    const categoryNames = {
        bebidas: '☕ Beverages',
        alimentos: '🍔 Food',
        postres: '🍰 Desserts'
    };

    let hasResults = false;

    for (const [category, items] of Object.entries(products)) {
        if (currentCategory !== 'all' && currentCategory !== category) continue;

        // No search term filtering needed anymore
        const filteredItems = items;

        if (filteredItems.length === 0) continue;
        hasResults = true;

        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = categoryNames[category];
        categoryDiv.appendChild(categoryTitle);

        const productsGrid = document.createElement('div');
        productsGrid.className = 'products-grid';

        filteredItems.forEach(product => {
            const productCard = document.createElement('article');
            productCard.className = 'product-card';
            productCard.setAttribute('aria-label', `${product.name} - ${product.description} - $${product.price.toLocaleString()}`);
            
            const img = document.createElement('img');
            img.className = 'product-image';
            img.src = product.image;
            img.alt = product.name;
            img.loading = 'lazy';
            
            const content = document.createElement('div');
            content.className = 'product-card-content';

            const h3 = document.createElement('h3');
            h3.textContent = product.name;
            
            const p = document.createElement('p');
            p.textContent = product.description;
            
            const priceDiv = document.createElement('div');
            priceDiv.className = 'product-price';
            priceDiv.textContent = `$${product.price.toLocaleString()}`;
            priceDiv.setAttribute('aria-label', `Precio: ${product.price.toLocaleString()} pesos`);
            
            const button = document.createElement('button');
            button.className = 'add-to-cart-btn';
            button.textContent = 'Add to Cart';
            button.setAttribute('aria-label', `Add ${product.name} to cart`);
            button.onclick = () => addToCart(product.id);
            
            content.appendChild(h3);
            content.appendChild(p);
            content.appendChild(priceDiv);
            content.appendChild(button);
            
            productCard.appendChild(img);
            productCard.appendChild(content);
            
            productsGrid.appendChild(productCard);
        });

        categoryDiv.appendChild(productsGrid);
        productsSection.appendChild(categoryDiv);
    }

    if (!hasResults) {
        productsSection.innerHTML = '<div class="no-results">No products found matching your criteria</div>';
    }
}

// Add product to cart (now opens customization modal)
let currentCustomization = null;

function addToCart(productId) {
    const product = findProductById(productId);
    if (!product) return;
    
    // Open customization modal
    openCustomizationModal(product);
}

// Open customization modal
function openCustomizationModal(product) {
    currentCustomization = {
        product: product,
        selectedIngredients: product.ingredients.map(ing => ({ ...ing, selected: true })),
        selectedAdditions: product.additions.map(add => ({ ...add, selected:false }))
    };

    // Populate modal with product info
    document.getElementById('modal-product-name').textContent = product.name;
    document.getElementById('modal-product-description').textContent = product.description;
    document.getElementById('modal-base-price').textContent = `$${product.price.toLocaleString()}`;

    // Render ingredients
    const ingredientsList = document.getElementById('modal-ingredients-list');
    ingredientsList.innerHTML = '';
    
    currentCustomization.selectedIngredients.forEach((ing, index) => {
        const item = document.createElement('div');
        item.className = 'ingredient-item' + (ing.required ? ' required' : '');
        
        const left = document.createElement('div');
        left.className = 'ingredient-left';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'ingredient-checkbox';
        checkbox.checked = ing.selected;
        checkbox.disabled = ing.required;
        checkbox.onchange = (e) => {
            currentCustomization.selectedIngredients[index].selected = e.target.checked;
            updateModalPrices();
        };
        
        const name = document.createElement('span');
        name.className = 'ingredient-name';
        name.textContent = ing.name;
        
        left.appendChild(checkbox);
        left.appendChild(name);
        
        if (ing.required) {
            const badge = document.createElement('span');
            badge.className = 'ingredient-badge';
            badge.textContent = 'REQUIRED';
            left.appendChild(badge);
        }
        
        const priceSpan = document.createElement('span');
        priceSpan.className = 'ingredient-price' + (ing.discount > 0 ? ' discount' : '');
        if (ing.discount > 0) {
            priceSpan.textContent = `-$${ing.discount.toLocaleString()}`;
        }
        
        item.appendChild(left);
        if (ing.discount > 0) {
            item.appendChild(priceSpan);
        }
        
        ingredientsList.appendChild(item);
    });

    // Render additions
    const additionsList = document.getElementById('modal-additions-list');
    additionsList.innerHTML = '';
    
    if (currentCustomization.selectedAdditions.length > 0) {
        currentCustomization.selectedAdditions.forEach((add, index) => {
            const item = document.createElement('div');
            item.className = 'addition-item';
            
            const left = document.createElement('div');
            left.className = 'addition-left';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'addition-checkbox';
            checkbox.checked = add.selected;
            checkbox.onchange = (e) => {
                currentCustomization.selectedAdditions[index].selected = e.target.checked;
                updateModalPrices();
            };
            
            const name = document.createElement('span');
            name.className = 'addition-name';
            name.textContent = add.name;
            
            left.appendChild(checkbox);
            left.appendChild(name);
            
            const priceSpan = document.createElement('span');
            priceSpan.className = 'addition-price';
            priceSpan.textContent = `+$${add.price.toLocaleString()}`;
            
            item.appendChild(left);
            item.appendChild(priceSpan);
            
            additionsList.appendChild(item);
        });
        
        document.getElementById('additions-section').style.display = 'block';
    } else {
        document.getElementById('additions-section').style.display = 'none';
    }

    updateModalPrices();
    document.getElementById('customization-modal').classList.add('show');
}

// Update modal prices
function updateModalPrices() {
    if (!currentCustomization) return;

    let adjustment = 0;

    // Calculate ingredient discounts
    currentCustomization.selectedIngredients.forEach(ing => {
        if (!ing.selected && ing.removable && ing.discount > 0) {
            adjustment -= ing.discount;
        }
    });

    // Calculate addition extras
    currentCustomization.selectedAdditions.forEach(add => {
        if (add.selected) {
            adjustment += add.price;
        }
    });

    const basePrice = currentCustomization.product.price;
    const totalPrice = basePrice + adjustment;

    const adjustmentColor = adjustment >= 0 ? '#667eea' : '#28a745';
    const adjustmentSign = adjustment >= 0 ? '+' : '';

    document.getElementById('modal-adjustments').textContent = `${adjustmentSign}$${adjustment.toLocaleString()}`;
    document.getElementById('modal-adjustments').style.color = adjustmentColor;
    document.getElementById('modal-total-price').textContent = `$${totalPrice.toLocaleString()}`;
}

// Close customization modal
function closeCustomizationModal() {
    document.getElementById('customization-modal').classList.remove('show');
    currentCustomization = null;
}

// Confirm customization and add to cart
function confirmCustomization() {
    if (!currentCustomization) return;

    // Calculate final price
    let finalPrice = currentCustomization.product.price;
    
    currentCustomization.selectedIngredients.forEach(ing => {
        if (!ing.selected && ing.removable && ing.discount > 0) {
            finalPrice -= ing.discount;
        }
    });
    
    currentCustomization.selectedAdditions.forEach(add => {
        if (add.selected) {
            finalPrice += add.price;
        }
    });

    // Create cart item with customization
    const cartItem = {
        id: Date.now(), // Use timestamp for unique ID per customization
        productId: currentCustomization.product.id,
        name: currentCustomization.product.name,
        price: finalPrice,
        originalPrice: currentCustomization.product.price,
        quantity: 1,
        customization: {
            ingredients: currentCustomization.selectedIngredients.filter(ing => ing.selected).map(ing => ing.name),
            additions: currentCustomization.selectedAdditions.filter(add => add.selected).map(add => add.name)
        }
    };

    // Check if same customized product exists
    const existingItem = cart.find(item => 
        item.productId === cartItem.productId && 
        JSON.stringify(item.customization) === JSON.stringify(cartItem.customization)
    );

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push(cartItem);
    }

    showNotification(`✅ ${currentCustomization.product.name} added to cart!`, 2000);
    updateCart();
    closeCustomizationModal();
}

// Find product by ID
function findProductById(id) {
    for (const category of Object.values(products)) {
        const product = category.find(p => p.id === id);
        if (product) return product;
    }
    return null;
}

// Update quantity
function updateQuantity(productId, change) {
    const cartItem = cart.find(item => item.id === productId);
    if (!cartItem) return;

    cartItem.quantity += change;
    if (cartItem.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCart();
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Update cart display
function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalDiv = document.getElementById('cart-total');
    const paymentSection = document.getElementById('payment-section');
    const checkoutBtn = document.getElementById('checkout-btn');

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '';
        const emptyDiv = document.createElement('div');
        emptyDiv.className = 'cart-empty';
        
        // Create text nodes without using innerHTML
        const line1 = document.createTextNode('Your cart is empty');
        const br = document.createElement('br');
        const line2 = document.createTextNode('Add products to get started!');
        
        emptyDiv.appendChild(line1);
        emptyDiv.appendChild(br);
        emptyDiv.appendChild(line2);
        
        cartItemsDiv.appendChild(emptyDiv);
        cartTotalDiv.style.display = 'none';
        paymentSection.style.display = 'none';
        checkoutBtn.disabled = true;
    } else {
        cartItemsDiv.innerHTML = '';
        cart.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'cart-item';
            
            const itemInfo = document.createElement('div');
            itemInfo.className = 'cart-item-info';
            
            const itemName = document.createElement('div');
            itemName.className = 'cart-item-name';
            itemName.textContent = item.name;
            
            const itemPrice = document.createElement('div');
            itemPrice.className = 'cart-item-price';
            itemPrice.textContent = `$${item.price.toLocaleString()} c/u`;
            
            itemInfo.appendChild(itemName);
            itemInfo.appendChild(itemPrice);
            
            const controls = document.createElement('div');
            controls.className = 'cart-item-controls';
            
            const decreaseBtn = document.createElement('button');
            decreaseBtn.className = 'quantity-btn';
            decreaseBtn.textContent = '-';
            decreaseBtn.setAttribute('aria-label', `Decrease quantity of ${item.name}`);
            decreaseBtn.onclick = () => updateQuantity(item.id, -1);
            
            const quantitySpan = document.createElement('span');
            quantitySpan.className = 'quantity';
            quantitySpan.textContent = item.quantity;
            quantitySpan.setAttribute('aria-label', `Quantity: ${item.quantity}`);
            
            const increaseBtn = document.createElement('button');
            increaseBtn.className = 'quantity-btn';
            increaseBtn.textContent = '+';
            increaseBtn.setAttribute('aria-label', `Increase quantity of ${item.name}`);
            increaseBtn.onclick = () => updateQuantity(item.id, 1);
            
            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-btn';
            removeBtn.textContent = '✕';
            removeBtn.setAttribute('aria-label', `Remove ${item.name} from cart`);
            removeBtn.onclick = () => removeFromCart(item.id);
            
            controls.appendChild(decreaseBtn);
            controls.appendChild(quantitySpan);
            controls.appendChild(increaseBtn);
            controls.appendChild(removeBtn);
            
            cartItemDiv.appendChild(itemInfo);
            cartItemDiv.appendChild(controls);
            
            cartItemsDiv.appendChild(cartItemDiv);
        });

        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        document.getElementById('subtotal').textContent = `$${subtotal.toLocaleString()}`;
        document.getElementById('total').textContent = `$${subtotal.toLocaleString()}`;

        cartTotalDiv.style.display = 'block';
        paymentSection.style.display = 'block';
        checkoutBtn.disabled = !selectedPayment;
    }

    // Update floating cart badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('floating-cart-count');
    if (badge) {
        badge.textContent = totalItems;
        
        // Pulse animation
        const btn = document.querySelector('.floating-cart-btn');
        if (btn) {
            btn.classList.remove('pulse');
            void btn.offsetWidth; // trigger reflow
            btn.classList.add('pulse');
        }
    }
}

// Toggle mobile cart
function toggleMobileCart() {
    const cartSection = document.querySelector('.cart-section');
    cartSection.classList.toggle('show-mobile');
    
    // Add close button if not exists
    if (!document.getElementById('mobile-cart-close')) {
        const closeBtn = document.createElement('button');
        closeBtn.id = 'mobile-cart-close';
        closeBtn.innerHTML = '✕';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '20px';
        closeBtn.style.right = '20px';
        closeBtn.style.background = 'none';
        closeBtn.style.border = 'none';
        closeBtn.style.fontSize = '1.5em';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.color = '#667eea';
        closeBtn.onclick = toggleMobileCart;
        
        const header = cartSection.querySelector('h2');
        // Insert before header or append to cart section
        cartSection.insertBefore(closeBtn, cartSection.firstChild);
    }
}

// Select payment method
function selectPayment(method, event) {
    selectedPayment = method;
    
    // Update visual selection
    document.querySelectorAll('.payment-option').forEach(option => {
        option.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
    document.getElementById(method).checked = true;
    
    // Hide all payment forms
    document.querySelectorAll('.payment-form').forEach(form => {
        form.classList.remove('active');
    });
    
    // Show selected payment form
    const selectedForm = document.getElementById(`form-${method}`);
    if (selectedForm) {
        selectedForm.classList.add('active');
    }
    
    // Enable checkout button
    document.getElementById('checkout-btn').disabled = false;
}

// Handle keyboard events for payment options
function handlePaymentKeydown(method, event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        selectPayment(method, event);
    }
}

// Update virtual balance display
function updateVirtualBalance() {
    const balanceElement = document.getElementById('virtual-balance');
    if (balanceElement) {
        balanceElement.textContent = `$${virtualAccountBalance.toLocaleString()}`;
    }
}

// Validate payment details
function validatePaymentDetails() {
    if (!selectedPayment) return false;

    switch(selectedPayment) {
        case 'tarjeta':
            const cardNumber = document.getElementById('card-number').value.trim();
            const cardName = document.getElementById('card-name').value.trim();
            const cardExpiry = document.getElementById('card-expiry').value.trim();
            const cardCvv = document.getElementById('card-cvv').value.trim();
            
            if (!cardNumber || !cardName || !cardExpiry || !cardCvv) {
                showNotification('❌ Please complete all card details', 3000);
                return false;
            }
            break;

        case 'transferencia':
            const transferRef = document.getElementById('transfer-reference').value.trim();
            if (!transferRef) {
                showNotification('❌ Please enter your transfer reference number', 3000);
                return false;
            }
            break;

        case 'contra':
            const pin = document.getElementById('virtual-pin').value.trim();
            if (!pin || pin.length !== 4) {
                showNotification('❌ Please enter a valid 4-digit PIN', 3000);
                return false;
            }
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            if (total > virtualAccountBalance) {
                showNotification('❌ Insufficient balance in virtual account', 3000);
                return false;
            }
            break;

        case 'efectivo':
            // Cash doesn't need validation
            break;
    }

    return true;
}

// Checkout
function checkout() {
    if (cart.length === 0 || !selectedPayment) return;

    // Validate payment details
    if (!validatePaymentDetails()) {
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const paymentNames = {
        efectivo: 'Cash',
        tarjeta: 'Card',
        transferencia: 'Transfer',
        contra: 'Virtual Account'
    };

    // Deduct from virtual account if that payment method was used
    if (selectedPayment === 'contra') {
        virtualAccountBalance -= total;
        updateVirtualBalance();
    }

    // Show custom confirmation message
    const confirmationMsg = 
        `Order Confirmed! 🎉\n\n` +
        `Total: $${total.toLocaleString()}\n` +
        `Payment method: ${paymentNames[selectedPayment]}\n\n` +
        `Your order is being processed.\nYou will receive a confirmation soon.`;
    
    showNotification(confirmationMsg, 4000);

    // Reset cart and forms
    cart = [];
    selectedPayment = null;
    document.querySelectorAll('.payment-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelectorAll('input[name="payment"]').forEach(input => {
        input.checked = false;
    });
    
    // Hide all payment forms
    document.querySelectorAll('.payment-form').forEach(form => {
        form.classList.remove('active');
    });
    
    // Clear form inputs
    document.getElementById('card-number').value = '';
    document.getElementById('card-name').value = '';
    document.getElementById('card-expiry').value = '';
    document.getElementById('card-cvv').value = '';
    document.getElementById('transfer-reference').value = '';
    document.getElementById('virtual-pin').value = '';
    
    updateCart();
}

// Show notification
function showNotification(message, duration = 2000) {
    const notification = document.getElementById('notification');
    // Clear previous content
    notification.innerHTML = '';
    
    // Split multi-line messages and create proper elements
    const lines = message.split('\n');
    lines.forEach((line, index) => {
        if (line.trim()) {
            const lineElement = document.createElement('div');
            lineElement.textContent = line;
            notification.appendChild(lineElement);
        }
    });
    
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, duration);
}

// Initialize on page load
window.onload = init;
