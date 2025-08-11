<template>
 
    <div>
     
        <ProductsView />
      
    </div>
  
</template>

<script>
import DashboardLayout from '@/layouts/DashboardLayout.vue'

import ProductsView from '@/components/productsView.vue'

export default {
  name: 'DashboardView',
  components: { DashboardLayout, ProductsView },
}
</script>
