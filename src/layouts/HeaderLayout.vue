<!-- src/layouts/HeaderLayout.vue -->
<template>
  <header
    class="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 shadow-md"
  >
    <!-- Mobile Sidebar Toggle -->
    <button
      @click="$emit('toggle-sidebar')"
      class="md:hidden text-gray-700 dark:text-gray-300"
    >
      <i class="pi pi-bars text-xl" />
    </button>

    <h1 class="text-lg font-semibold text-gray-800 dark:text-white">
      {{ headerTitle }}
    </h1>

    <!-- Avatar Right -->
    <div class="flex items-center gap-3">
      <span class="text-sm text-gray-700 dark:text-gray-300">
        {{ username }}
      </span>
      <img
        src="../assets/avatar.jpg"
        alt="User avatar"
        class="w-8 h-8 rounded-full object-cover"
      />
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const currentPage = computed(() => {
  const segments = route.path.split("/");
  return segments[segments.length - 1]; // 'dashboard'
});

const headerTitle = computed(() => {
  switch (currentPage.value) {
    case "dashboard":
      return "Dashboard";
    case "settings":
      return "Settings";
    case "profile":
      return "Profile";
    default:
      return "TradersJourn";
  }
});

const username = ref("trader123");
</script>
