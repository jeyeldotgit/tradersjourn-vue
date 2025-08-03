<template>
  <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
    Trade History
  </h2>
  <div class="card">
    <DataTable :value="trades" tableStyle="min-width: 50rem">
      <Column field="id" header="Trade ID" />
      <Column field="asset" header="Asset" />
      <Column field="type" header="Type" />
      <Column field="quantity" header="Quantity" />
      <Column field="price" header="Price" />
      <Column header="Total">
        <template #body="slotProps">
          {{ (slotProps.data.quantity * slotProps.data.price).toFixed(2) }}
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Mock data for trades
const trades = ref([]);

onMounted(() => {
  trades.value = [
    {
      id: "T001",
      asset: "AAPL",
      type: "Buy",
      quantity: 10,
      price: 150.25,
    },
    {
      id: "T002",
      asset: "ETH",
      type: "Sell",
      quantity: 2,
      price: 1850.5,
    },
    {
      id: "T003",
      asset: "BTC",
      type: "Buy",
      quantity: 0.5,
      price: 30000,
    },
    {
      id: "T004",
      asset: "TSLA",
      type: "Sell",
      quantity: 5,
      price: 720.45,
    },
  ];
});
</script>

<style scoped>
.card {
  width: 100%;
  border: 1px solid #e5e7eb;
}
</style>
