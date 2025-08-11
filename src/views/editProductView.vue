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
      <h1 class="text-3xl font-bold text-gray-900">Edit Product</h1>
      <p class="text-gray-600">Update product information</p>
    </div>
  </div>
</div>

    <form @submit.prevent="updateProduct" class="space-y-8">
      
      <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      <h2 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
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
          class="lucide lucide-package"
          aria-hidden="true"
        >
          <path
            d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"
          ></path>
          <path d="M12 22V12"></path>
          <polyline points="3.29 7 12 12 20.71 7"></polyline>
          <path d="m7.5 4.27 9 5.15"></path>
        </svg>
        Basic Information
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="md:col-span-2">
          <label
            class="block text-sm font-semibold text-gray-700 mb-2"
            for="name"
            >Product Name</label
          >
          <input
            id="name"
            v-model="product.title"
            class="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-500 border-gray-300"
            placeholder="Enter product name"
            name="name"
            type="text"
          />
        </div>

        <div>
          <label
            class="block text-sm font-semibold text-gray-700 mb-2"
            for="price"
            >Price ($)</label
          >
          <input
            id="price"
            v-model.number="product.price"
            step="0.01"
            class="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-500 border-gray-300"
            placeholder="0.00"
            type="number"
            name="price"
          />
        </div>

        <div>
          <label
            class="block text-sm font-semibold text-gray-700 mb-2"
            for="stock"
            >Stock Quantity</label
          >
          <input
            id="stock"
            v-model.number="product.stock" 
            class="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-500 border-gray-300"
            placeholder="0"
            type="number"
            name="stock"
          />
        </div>

        <div class="md:col-span-2">
          <label
            class="block text-sm font-semibold text-gray-700 mb-2"
            for="category"
            >Category</label
          >
          <select
            id="category"
            v-model="product.category"
            name="category"
            class="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-500 border-gray-300"
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
          <label
            class="block text-sm font-semibold text-gray-700 mb-2"
            for="description"
            >Description</label
          >
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

   
    <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      <h2
        class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2"
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
          class="lucide lucide-image"
          aria-hidden="true"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
          <circle cx="9" cy="9" r="2"></circle>
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
        </svg>
        Product Image
      </h2>

      <div>
        <label
          class="block text-sm font-semibold text-gray-700 mb-2"
          for="imageUrl"
          >Image URL</label
        >
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

    <div class="flex gap-4 pt-6" style="opacity: 1; transform: none;">
        <a class="px-4 py-2 lg:px-6 lg:py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-center" href="/products">Cancel</a>
        <button type="submit" class="px-4 py-2 lg:px-6 lg:py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-save" aria-hidden="true">
                <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7">

                </path>
                <path d="M7 3v4a1 1 0 0 0 1 1h7">

    </path>
</svg>

Update Product

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
        id:'',
        stock: 0,
        tags: [],
        active: true,
      },
      newTag: '',
      defaultImage:
        '', 
    }
  },
  created() {
    this.fetchProduct()
  },
  watch: {
    '$route.params.id': 'fetchProduct',
  },
  methods: {
    fetchProduct() {
      const id = this.$route.params.id
      console.log("here is ", id);
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
          this.product = {
            id:id||'',
            title: data.title || '',
            price: data.price || 0,
            description: data.description || '',
            category: data.category || '',
            image: data.image || '',
            stock: data.rating ? data.rating.count || 0 : 0,
            tags: [],
            active: true,
          }
        })
        .catch(err => {
          console.error('Failed to fetch product:', err)
        })
    },
   updateProduct() {
  
  if (!this.product.title || this.product.title.trim() === '') {
    this.$toasted.show('Product title is required', { type: 'error' });
    return;
  }
  if (!this.product.price || this.product.price <= 0) {
    this.$toasted.show('Price must be greater than 0', { type: 'error' });
    return;
  }
 

  console.log("here the result it ", this.product);
  this.$store.dispatch('products/updateProduct', this.product)
    .then(() => {
      this.$toasted.show('Updated Successfully', { type: 'success' });
      this.$router.push('/dashboard');
    })
    .catch(err => {
      console.error('Failed to update product:', err);
      this.$toasted.show('Failed to update product', { type: 'error' });
    });
},
   
    
  },
}
</script>
