<template>
  <div class="container mx-auto px-4 pb-8 ">
    <h1 class="text-2xl font-bold mb-6 bg-white p-6 text-center">Products</h1>
    <div class="mb-6">
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
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
            class="lucide lucide-search h-5 w-5 text-gray-400"
            aria-hidden="true"
          >
            <path d="m21 21-4.34-4.34"></path>
            <circle cx="11" cy="11" r="8"></circle>
          </svg>
        </div>
        <input
          placeholder="Search products by name..."
          class="w-full pl-12 pr-10 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-gray-900 placeholder-gray-500"
          type="text"
          v-model="searchTerm"
        />
      </div>
    </div>

    <div class="w-full flex justify-center">
      <button
        v-if="loading"
        type="button"
        class="text-center bg-indigo-500 text-white px-4 py-2 rounded flex items-center justify-center"
        disabled
      >
        <svg
          class="mr-3 h-5 w-5 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
        Loading Products ...
      </button>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6"
    >
      <product-view
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />

      <div v-if="error" class="col-span-full text-center text-red-600">
        {{ error }}
      </div>
      <div
        v-if="filteredProducts.length === 0 && !loading && !error"
        class="col-span-full text-center text-gray-600"
      >
        No products found.
      </div>
    </div>
  </div>
</template>

<script>
import ProductView from "@/components/productView.vue";


function debounce(fn, delay) {
  let timeoutID = null;
  return function (...args) {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

export default {
  name: "ProductsView",
  components: { ProductView },

  data() {
    return {
      searchTerm: "",
      filteredProducts: [],
    };
  },

  computed: {
    products() {
      return this.$store.getters["products/products"];
    },
    loading() {
      return this.$store.getters["products/loading"];
    },
    error() {
      return this.$store.getters["products/error"];
    },
  },

  watch: {
    
    products: {
      immediate: true,
      handler(products) {
        this.filteredProducts = products;
      },
    },

 
    searchTerm: {
      handler: debounce(function (val) {
        const search = val.toLowerCase().trim();
        if (!search) {
          this.filteredProducts = this.products;
        } else {
          this.filteredProducts = this.products.filter((p) =>
            p.title.toLowerCase().includes(search)
          );
        }
      }, 300),
    },
  },

  created() {
    
    this.$store.dispatch("products/fetchProducts");
  },
};
</script>
