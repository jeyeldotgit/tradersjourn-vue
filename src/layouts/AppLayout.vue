<template>
  <div class="flex h-screen w-full bg-gray-100 dark:bg-gray-900">
    <!-- Sidebar -->
    <SidebarLayout v-if="isSidebarVisible" />

    <!-- Main Content -->
    <div class="flex-1 flex flex-col min-w-0">
      <!-- 💡 Important: min-w-0 prevents overflow in flex child -->
      <!-- Header -->
      <HeaderLayout @toggle-sidebar="toggleSidebar" />

      <!-- Page Content -->
      <main class="flex-1 overflow-y-auto p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SidebarLayout from "./SidebarLayout.vue";
import HeaderLayout from "./HeaderLayout.vue";

const isSidebarVisible = ref(true);
function toggleSidebar() {
  isSidebarVisible.value = !isSidebarVisible.value;
}
</script>
