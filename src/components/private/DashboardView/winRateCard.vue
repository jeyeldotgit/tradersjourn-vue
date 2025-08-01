<template>
  <div>
    <Card>
      <template #title>
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold">Win Ratio:</h3>
          <span class="text-lg text-gray-600">{{ winRate }}</span>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
const winRateCardProps = defineProps({
  winRatio: {
    type: Number,
    required: true,
  },
});

const winRate = "%" + winRateCardProps.winRatio.toFixed(4) * 100;
</script>
