<template>
  <h1>This is Landing Page</h1>
  <p>Welcome to this application. This is currently in development mode.</p>

  <button @click="toggleDarkMode()">Is Dark: {{ isDark }}</button>

  <router-link to="/login">Go to login</router-link>
</template>

<script setup>
import { usePreferredDark, useToggle } from "@vueuse/core";

const isDark = usePreferredDark();
</script>
