<template>
  <aside
    class="w-64 min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-lg flex flex-col"
  >
    <div class="p-4 font-bold text-xl border-b dark:border-gray-700">
      Account Menu
    </div>

    <ul class="flex-1 p-4 space-y-2">
      <li>
        <router-link
          to="dashboard"
          class="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <i class="pi pi-home mr-2" /> Dashboard
        </router-link>
      </li>
      <li>
        <router-link
          to="analytics"
          class="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <i class="pi pi-chart-line mr-2" /> Analytics
        </router-link>
      </li>
      <li>
        <router-link
          to="settings"
          class="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <i class="pi pi-cog mr-2" /> Settings
        </router-link>
      </li>
    </ul>

    <div class="p-4 border-t dark:border-gray-700 text-sm">
      <button class="text-red-500 hover:underline" @click="logout">
        <i class="pi pi-sign-out mr-2" /> Logout
      </button>
    </div>
  </aside>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function logout() {
  // placeholder logout logic
  alert("Logged out!");
  router.push("/login");
}
</script>

<style scoped>
.pi {
  font-size: 1.1rem;
}
</style>
