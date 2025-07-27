<template>
  <p class="text-red-500 text-[12px] min-h-[1rem]" v-if="error">
    {{ error }}
  </p>
  <p v-else class="min-h-[1rem]"><!-- placeholder space --></p>
</template>

<script setup>
defineProps({ error: String });
</script>
