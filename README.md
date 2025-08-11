# 🛍️ Vue 2 Mini E‑Commerce Admin Dashboard

**Vue 2.6.14** · **Vuex** · **Vue Router** · **TailwindCSS**  
License: **MIT**

A streamlined single‑page application for managing products in a fictional e‑commerce store. Built with Vue 2, this dashboard enables secure product management operations with a clean, responsive UI.

---

## 📦 Repository
GitHub: https://github.com/RadifTajwar/pathaoFinal

---

## 📸 Screenshots

### 🔐 Login Page
![Login](images/Screenshot%20(2).png)

### 📦 Product List
![Product List 1](images/Screenshot%20(3).png)
![Product List 2](images/Screenshot%20(4).png)

### ✏️ Edit Product
![Edit Product 1](images/Screenshot%20(5).png)
![Edit Product 2](images/Screenshot%20(6).png)

### ➕ Add Product
![Add Product 1](images/Screenshot%20(7).png)
![Add Product 2](images/Screenshot%20(8).png)


## ✨ Features

### 🔐 Authentication
- Login & logout handled via Vuex
- Static credentials (mock auth):
  - **Username:** `admin`
  - **Password:** `admin123`
- Session persisted using **localStorage**
- Navigation guards for protected routes

### 📦 Product Management (CRUD)
- **View** products in a responsive table/grid
- **Add** new product with validation (title, price, category, description, image URL)
- **Edit** existing products via dynamic route: `products/edit/:id`
- **Delete** products with confirmation feedback

### 🔎 Search & Filters
- **Debounced search** by product title



### ⚙️ State Management
- Modular Vuex store: `auth`, `products`
- Centralized API handling in Vuex actions
- Products fetched once and shared reactively across views

### 🧭 Routing
- Vue Router with auth guards
- Dynamic route for editing products: `/edit/:id`

### 🎨 UI/UX
- TailwindCSS styling
- Toast notifications for success/error
- Loading spinners during API calls
- Image preview on add/edit
- Responsive layout (mobile & desktop)

---

## 🌐 API
- Data powered by the **Fake Store API**: https://fakestoreapi.com/

---

## 🗂️ Project Structure

```
src/
├─ assets/        # Stylesheets, images
├─ components/    # Reusable UI components
├─ hooks/         # Small reusable helpers (e.g., debounce)
├─ router/        # Route definitions & guards
├─ store/         # Vuex modules (auth.js, products.js)
├─ utils/         # Helpers & validators
├─ views/         # Pages (Login, Dashboard, Product CRUD)
└─ App.vue
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (LTS recommended)
- **npm** or **yarn**

### Installation

```bash
git clone https://github.com/RadifTajwar/pathaoFinal.git
cd pathaoFinal

npm install
# or
yarn install
```

### Development

```bash
npm run serve
# or
yarn serve
```

### Production Build

```bash
npm run build
# or
yarn build
```

---

## ✅ Feature Status

| Feature                                  | Status        |
|------------------------------------------|---------------|
| Authentication                           | ✅ Completed  |
| View Products                            | ✅ Completed  |
| Add Product                              | ✅ Completed  |
| Edit Product (`products/edit/:id`)       | ✅ Completed  |
| Delete Product                           | ✅ Completed  |
| Search by Title                          | ✅ Completed  |


---

## 🙏 Acknowledgments
- [Vue.js](https://vuejs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Fake Store API](https://fakestoreapi.com/)



## 🙏 Acknowledgments
- [Vue.js](https://vuejs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Fake Store API](https://fakestoreapi.com/)


