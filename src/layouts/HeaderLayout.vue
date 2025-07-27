<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header
      class="bg-light-card text-gray-900 p-6 shadow-md border-primary/30 sticky top-0 z-50 flex justify-between items-center"
    >
      <!-- Left Side of the Header -->
      <div>
        <h1
          class="text-3xl font-extrabold text-light-text tracking-wide text-primary"
        >
          TradersJourn
        </h1>
      </div>

      <!-- Right Side of the Header -->
      <div class="flex items-center gap-4">
        <p class="text-lg">{{ user }}</p>
        <Avatar :image="avatar" class="mr-2" size="medium" shape="circle" />
      </div>
    </header>

    <!-- Main Content Slot -->
    <main class="flex-1 bg-light-bg">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import { ref } from "vue";
import "primeicons/primeicons.css";

import avatar from "../assets/avatar.jpg";

const user = ref("sedd.gg");

// wehn store is available, we can use it to manage state
// get user data from store
// at the other end of header we can create a person button that will show edit profile, logout, etc
</script>
