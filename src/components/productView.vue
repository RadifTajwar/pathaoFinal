<template>
 <div
   class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 max-w-sm mx-auto"
 >
   <div class="relative">
     <img
       :alt="product.title"
       class="w-full h-48 object-cover"
       :src="product.image"
     />
     
   </div>
   <div class="p-6">
     <div class="flex items-start justify-between mb-3">
       <h3 class="text-xl font-bold text-gray-900 line-clamp-2">
         {{ product.title }}
       </h3>
       <div class="text-2xl font-bold text-purple-600">${{ product.price }}</div>
     </div>
     <p class="text-gray-600 text-sm mb-4 line-clamp-3">
       {{ product.description }}
     </p>
     
     <div class="flex flex-wrap gap-2 mb-4">
       
       <span
         class="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full capitalize"
       >
         {{ product.category }}
       </span>
     </div>
     <div class="flex items-center gap-2">
       <a
         class="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
         :href="`/dashboard/products/${product.id}`"
       >
        
         View
       </a>
       <a
         class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
         :href="`/dashboard/products/edit/${product.id}`"
       >
         edit
       </a>
       <button @click="handleDelete"
         class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
       >
         delete
       </button>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: "ProductView",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleDelete() {
      if (confirm(`Are you sure you want to delete the product "${this.product.title}"?`)) {
       console.log("this ", this.product.id);
        this.$store.dispatch('products/deleteProduct', this.product.id);
        
        
      }
    }
  },
  mounted() {
    console.log(this.product);
  },
};
</script>

