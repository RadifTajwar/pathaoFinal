<template>
  <div class="min-h-screen flex items-center justify-center p-4"
       style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
    <div class="max-w-md w-full bg-white p-8 rounded shadow">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-900">Login</h2>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block mb-1 font-semibold" for="username">Username</label>
          <input
            id="username"
            v-model="username"
            type="text"
            placeholder="admin"
            class="w-full px-3 py-2 border rounded "
            required
          />
        </div>
        <div>
          <label class="block mb-1 font-semibold" for="password">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="admin123"
            class="w-full px-3 py-2 border rounded "
            required
          />
        </div>
        <div v-if="error" class="text-red-600 font-semibold">{{ error }}</div>
        <button
          type="submit"
          class="w-full bg-black text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    handleLogin() {
  if (this.username === 'admin' && this.password === 'admin123') {
    this.$store.commit('setUser', { username: this.username })
    this.error = ''
    this.$toasted.show('Login successful!', { type: 'success' })
    this.$router.push('/dashboard')
  } else {
    this.error = 'Invalid username or password'
  }
}
  }
}
</script>
