# Phone Catalog — E-commerce React Application

Phone Catalog is a comprehensive e-commerce web application built with React, featuring a modern product browsing experience with shopping cart functionality, favorites management, and smooth page transitions. The project demonstrates advanced React patterns, state management with Redux, and responsive design principles.

## 🔗 Preview
- [DEMO LINK](https://vlad14982.github.io/phone-catalog_react)

## 🎨 Design
- [Figma Design](https://www.figma.com/file/T5ttF21UnT6RRmCQQaZc6L/Phone-catalog-(V2)-Original)

---

## 🚀 Technologies Used

- **React** — Component-based UI library with hooks
- **TypeScript** — Type-safe JavaScript development
- **Redux Toolkit** — State management for cart, favorites, and data loading
- **React Router** — Client-side routing and navigation
- **CSS Modules** — Scoped styling with SCSS preprocessing
- **SCSS** — Advanced styling with mixins and variables
- **LocalStorage** — Persistent cart and favorites storage
- **Custom PageTransitionOverlay** — Smooth animated transitions between routes

---

## ⚙️ Key Features

### 🏗️ Advanced Project Architecture
- **CSS Modules** — Scoped styling preventing style conflicts
- **TypeScript Integration** — Type safety throughout the application
- **Component Co-location** — Each component folder contains `.tsx`, `.module.scss`, and `index.ts`

### 🎨 Smooth User Experience
- **Page Transition Overlay** — Custom loading animation between page navigations
- **Global Loader Integration** — Unified loading state management across pages
- **Hover Effects** — Smooth image scaling and interactive elements
- **Responsive Design** — The application is fully responsive and mobile-friendly. Layout adapts to different screen widths (desktop / tablet / mobile)

### 🏠 Home Page Features
- **Dynamic Pictures Slider** — Auto-rotating hero images every 5 seconds
- **Hot Prices Section** — Products sorted by discount value with horizontal scrolling
- **Shop by Category** — Quick navigation to phones, tablets, and accessories
- **Brand New Products** — Newest products showcase with slider functionality

### 🏠 Home Page (`/`)

- Auto-playing image slider with manual nav and dot indicators. The banners uses the HTML **<picture>** element to load different images based on screen size
- **"Hot Prices"** slider sorted by biggest discounts
- **"Shop by category"** block with links to product categories
- **"Brand New"** section sorted by newest products

### 📦 Product Listing Pages (`/phones`, `/tablets`, `/accessories`)

- Fetch products by category
- **Sort**: Newest, Alphabetically, Cheapest
- **Pagination** with 4/8/16/all per page
- Sort & pagination synced to URL (`?sort=age&page=2&perPage=8`)
- Error handling & empty states

### 🔍 Product Details (`/product/:productId`)

- Full product info: images, colors, capacities
- **"About"** section with description
- Selected tech specs
- **Breadcrumbs**: Home / Category / Product Name
- **"You may also like"** random products
- **"Back"** button on the Product Details page navigates to the category page (/phones, /tablets, or /accessories) of the current product
- Graceful **"Product not found"** fallback

### 🛒 Cart Page (`/cart`)

- Add to cart from product card or product page
- Quantity +/− controls, total price, remove item
- Checkout modal with order confirmation and cart reset logic
- Cart synced to localStorage
- Cart quantity shown in header icon and menu icon

### ❤️ Favorites Page (`/favorites`)

- Toggle favorite with heart icon
- Persisted in localStorage
- Live counter in header and menu

---

## 🚀 Getting Started

1. Clone the repository:
```bash
  git clone https://github.com/vlad14982/phone-catalog_react.git
```
2. Navigate to the project directory:
```bash
   cd phone-catalog_react
```

3. Install the dependencies:
```bash
   npm install
```

4. Start the development server:
```bash
  npm start
```

---

## 👨‍💻 Author

> Crafted with attention to detail, performance optimization, and modern React best practices.
> **Vlad Hriaznov** — [@vlad14982](https://github.com/vlad14982).
> Frontend developer focused on clean layout, performance, and a touch of creative flair in every project.
