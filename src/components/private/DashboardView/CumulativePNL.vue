<template>
  <div class="">
    <Card>
      <template #title>
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold">Cumulative PNL:</h3>
          <span :class="`text-lg font-semibold ${pnlColorClass}`">{{
            formattedPNL
          }}</span>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { computed } from "vue";

// Props
const props = defineProps({
  cumulativePNL: {
    type: Number,
    required: true,
  },
});

const { cumulativePNL } = props;

const formattedPNL = computed(() => {
  const sign = cumulativePNL > 0 ? "+" : "";
  return `${sign}$${Math.abs(cumulativePNL).toFixed(2)}`;
});

const pnlColorClass = computed(() => {
  return cumulativePNL > 0 ? "text-light-accent" : "text-red-500";
});
</script>
