<template>
  <div id="app">
    <router-view />

    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

body {
  margin: 0;

  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';

}
.custom-toast {
  background-color: #4ade80 !important;  /* Tailwind green-400 */
  color: white !important;
  font-weight: 600;
  border-radius: 0.5rem !important;      /* rounded-lg */
  box-shadow: 0 10px 15px -3px rgba(34,197,94,0.4), 0 4px 6px -2px rgba(34,197,94,0.2);
}

.custom-toast .toasted-icon {
  color: white !important;
}
</style>
