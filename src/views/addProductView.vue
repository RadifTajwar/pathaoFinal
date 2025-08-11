<template>
  <div class="max-w-4xl mx-auto">

    <div class="mb-6" style="opacity: 1; transform: none;">
      <div class="flex items-center gap-4 mb-6">
        <router-link
          to="/dashboard"
          class="p-2 bg-gray-400 hover:bg-gray-500 rounded-full transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-left"
            aria-hidden="true"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
        </router-link>
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Add Product</h1>
          <p class="text-gray-600">Create a new product</p>
        </div>
      </div>
    </div>

    <form @submit.prevent="addProduct" class="space-y-8">
      <!-- Basic Information Section (same as yours) -->
      <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <h2 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <!-- Icon here -->
          Basic Information
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="md:col-span-2">
            <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">Product Name</label>
            <input
              id="name"
              v-model="product.title"
              class="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-500 border-gray-300"
              placeholder="Enter product name"
              name="name"
              type="text"
              required
            />
          </div>
          <div>
            <label for="price" class="block text-sm font-semibold text-gray-700 mb-2">Price ($)</label>
            <input
              id="price"
              v-model.number="product.price"
              step="0.01"
              class="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-500 border-gray-300"
              placeholder="0.00"
              type="number"
              name="price"
              required
              min="0.01"
            />
          </div>
          <div>
            <label for="stock" class="block text-sm font-semibold text-gray-700 mb-2">Stock Quantity</label>
            <input
              id="stock"
              v-model.number="product.stock"
              class="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-500 border-gray-300"
              placeholder="0"
              type="number"
              name="stock"
              min="0"
            />
          </div>
          <div class="md:col-span-2">
            <label for="category" class="block text-sm font-semibold text-gray-700 mb-2">Category</label>
            <select
              id="category"
              v-model="product.category"
              name="category"
              class="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-500 border-gray-300"
              required
            >
              <option value="">Select a category</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Books</option>
              <option>Home &amp; Garden</option>
              <option>Sports</option>
              <option>Toys</option>
              <option>Beauty</option>
              <option>Automotive</option>
              <option>Health</option>
              <option>Food</option>
            </select>
          </div>
          <div class="md:col-span-2">
            <label for="description" class="block text-sm font-semibold text-gray-700 mb-2">Description</label>
            <textarea
              id="description"
              v-model="product.description"
              rows="4"
              class="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none text-gray-500 border-gray-300"
              placeholder="Describe your product..."
              name="description"
            ></textarea>
          </div>
        </div>
      </div>

      <!-- Image Section -->
      <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <h2 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <!-- Image Icon -->
          Product Image
        </h2>

        <div>
          <label for="imageUrl" class="block text-sm font-semibold text-gray-700 mb-2">Image URL</label>
          <input
            id="imageUrl"
            v-model="product.image"
            class="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-500 border-gray-300"
            placeholder="https://example.com/image.jpg"
            name="imageUrl"
            type="text"
          />
        </div>

        <div class="mt-4">
          <p class="text-sm font-semibold text-gray-700 mb-2">Preview:</p>
          <div
            class="relative w-32 h-32 rounded-xl overflow-hidden border border-gray-200"
          >
            <img
              alt="Product preview"
              class="w-full h-full object-cover"
              :src="product.image || defaultImage"
            />
          </div>
        </div>
      </div>

      <!-- Buttons -->
      <div class="flex gap-4 pt-6" style="opacity: 1; transform: none;">
        <router-link
          to="/products"
          class="px-4 py-2 lg:px-6 lg:py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-center"
        >
          Cancel
        </router-link>
        <button
          type="submit"
          class="px-4 py-2 lg:px-6 lg:py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold flex items-center justify-center gap-2"
          :disabled="!product.title || !product.price || product.price <= 0"
        >
          <!-- Save Icon -->
          Add Product
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        title: '',
        price: 0,
        description: '',
        category: '',
        image: '',
        stock: 0,
        tags: [],
        active: true,
      },
      defaultImage: '', // put your default image url if any
    }
  },
  methods: {
    addProduct() {
      // Validation (you can add more if needed)
      if (!this.product.title.trim()) {
        this.$toasted.show('Product title is required', { type: 'error' });
        return;
      }
      if (!this.product.price || this.product.price <= 0) {
        this.$toasted.show('Price must be greater than 0', { type: 'error' });
        return;
      }
      if (!this.product.category) {
        this.$toasted.show('Category is required', { type: 'error' });
        return;
      }

      // Dispatch add product action to Vuex store (assuming you have it)
      this.$store.dispatch('products/addProduct', this.product)
        .then(() => {
          this.$toasted.show('Product added successfully', { type: 'success' });
          this.$router.push('/dashboard');
        })
        .catch((err) => {
          console.error('Failed to add product:', err);
          this.$toasted.show('Failed to add product', { type: 'error' });
        });
    }
  },
};
</script>
