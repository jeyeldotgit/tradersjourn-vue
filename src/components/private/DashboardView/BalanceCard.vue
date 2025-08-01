<template>
  <div>
    <Card>
      <template #title>
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold">Balance:</h3>
          <span class="text-lg text-light-accent">${{ balance }}</span>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
const balanceCardProps = defineProps({
  balance: {
    type: Number,
    required: true,
  },
});

console.log("Balance Card Props:", balanceCardProps);
</script>
