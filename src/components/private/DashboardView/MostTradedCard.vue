<template>
  <div class="">
    <Card>
      <template #title>
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold">Most Traded Instrument:</h3>
          <span class="text-lg text-gray-600">{{
            mostTradedInstrument
          }}</span>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
const props = defineProps({
  mostTradedInstrument: {
    type: String,
    required: true,
  },
});

const { mostTradedInstrument } = props;
</script>
