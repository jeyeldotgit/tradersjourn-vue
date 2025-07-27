<template>
  <div class="flex">
    <AppSidebarComponent />
    <main class="flex-1 p-6 overflow-y-auto bg-gray-50 dark:bg-gray-950">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import AppSidebarComponent from "../components/Layout/AppSidebarComponent.vue";
</script>
