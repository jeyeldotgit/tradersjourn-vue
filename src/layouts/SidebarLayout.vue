<template>
  <transition name="slide">
    <aside
      class="fixed md:static z-40 h-full bg-white dark:bg-gray-900 shadow-lg flex flex-col justify-between transition-all duration-300 border-r border-gray-200 dark:border-gray-800"
      :class="isCollapsed ? 'w-14' : 'w-52'"
    >
      <!-- Top Section -->
      <div class="flex flex-col gap-4">
        <!-- Logo & Collapse Button -->
        <div class="relative">
          <div
            class="flex items-center p-4 border-b border-gray-200 dark:border-gray-800"
          >
            <div
              class="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-white truncate"
            >
              <i
                class="pi pi-chart-line text-gray-600 dark:text-blue-400"
                style="font-size: 1.2rem"
              />
              <span v-if="!isCollapsed">TradersJourn</span>
            </div>
          </div>

          <!-- Floating Toggle Button -->
          <button
            @click="toggleCollapse"
            class="absolute top-3 -right-4 z-50 bg-white dark:bg-gray-800 shadow-md rounded-full p-1 border border-gray-300 dark:border-gray-700 hover:bg-gray-200 transition"
          >
            <i
              class="pi text-lg"
              :class="isCollapsed ? 'pi-angle-right' : 'pi-angle-left'"
            />
          </button>
        </div>

        <!-- Navigation Links -->
        <nav class="flex flex-col gap-2 p-1">
          <RouterLink
            to="/dashboard"
            class="group relative flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 hover: dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition"
          >
            <i
              class="pi pi-home text-gray-500 group-hover:text-gray-600"
              style="font-size: 1.2rem"
            />
            <span v-if="!isCollapsed" class="truncate">Dashboard</span>
            <span
              v-else
              class="absolute left-full ml-2 px-2 py-1 text-xs text-white bg-gray-800 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Dashboard
            </span>
          </RouterLink>

          <!-- Add more links here using same structure -->
        </nav>
      </div>

      <!-- Bottom Section -->
      <div
        class="flex items-center justify-between p-4 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800"
      >
        <div class="flex items-center gap-2">
          <i class="pi pi-user text-blue-500" />
          <span
            v-if="!isCollapsed"
            class="truncate font-medium text-gray-700 dark:text-gray-300"
          >
            {{ selectedAccountName }}
          </span>
        </div>
      </div>
    </aside>
  </transition>
</template>

<script setup>
import { RiHome5Line } from "oh-vue-icons/icons";

import { ref } from "vue";

const selectedAccountName = ref("DumbForexTrader");
const isCollapsed = ref(false);

function toggleCollapse() {
  isCollapsed.value = !isCollapsed.value;
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
