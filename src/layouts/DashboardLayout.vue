<template>
  <div class="flex min-h-screen">
   
    <aside
      :class="[
        'bg-gray-800 text-white flex flex-col fixed inset-y-0 left-0 w-64 z-40 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full',
      ]"
    >
      <div class="p-6 font-bold text-xl border-b border-gray-700">My App</div>
      <nav class="flex-grow mt-6">
        <router-link
          to="/dashboard"
          class="block py-3 px-6 hover:bg-gray-700"
          active-class="bg-gray-900"
          exact
          @click="closeSidebar"
        >
          Dashboard
        </router-link>
        <router-link
          to="dashboard/add-product"
          class="block py-3 px-6 hover:bg-gray-700"
          active-class="bg-gray-900"
          @click="closeSidebar"
        >
          Add Product
        </router-link>
      </nav>
    </aside>

   
    <div
      v-if="sidebarOpen"
      @click="closeSidebar"
      class="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
    ></div>


    <div class="flex-1 flex flex-col ">
      <header class="flex items-center justify-between bg-white shadow px-6 h-16">
     
        <button
          @click="toggleSidebar"
          class="lg:hidden p-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
          aria-label="Toggle sidebar"
        >
          <svg
            class="h-6 w-6 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div>
          <span class="font-semibold">Logged in as: </span>
          <span>{{ user?.username || 'Radif' }}</span>
        </div>
        <button
          @click="logout"
          class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </header>

      <main class="flex-grow p-6 bg-gray-100 overflow-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "DashboardLayout",
  data() {
    return {
      sidebarOpen: false,
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapMutations(["setUser"]),
    logout() {
      this.setUser(null);
      this.$router.push("/login");
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    closeSidebar() {
      this.sidebarOpen = false;
    },
  },
};
</script>
