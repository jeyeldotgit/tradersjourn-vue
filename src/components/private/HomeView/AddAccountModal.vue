<template>
  <Button
    label="Add Account"
    class="!p-2 !text-sm !bg-blue-600 !hover:bg-blue-700 !text-white !rounded-lg !border-none"
    @click="visible = true"
  />
  <Dialog
    v-model:visible="visible"
    modal
    header="Create Trading Profile"
    class="!w-96 !max-w-md !flex !flex-col"
  >
    <div class="flex flex-col gap-2">
      <span class="text-surface-500 dark:text-surface-400 block"
        >Lorem ipsum dolor sit amet.</span
      >
      <div class="flex items-center gap-4 mb-4">
        <label for="username" class="font-semibold w-24 text-md"
          >Account Name:</label
        >
        <InputText
          v-model="username"
          id="username"
          placeholder="Enter account name"
          class="!hover:!border-blue-500 !border-2 !rounded-lg"
          fluid
        />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="username" class="font-semibold w-24 text-md">Deposit</label>
        <InputNumber
          v-model="value3"
          inputId="minmaxfraction"
          :minFractionDigits="2"
          :maxFractionDigits="5"
          fluid
        />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="account_type" class="font-semibold w-24">Type</label>
        <Select
          v-model="selectedAccountType"
          :options="accountTypes"
          optionLabel="name"
          placeholder="Account Type"
          class="!hover:!border-blue-500 !border-2 !rounded-lg"
          fluid
        />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="account_type" class="font-semibold w-24">Market</label>
        <Select
          v-model="selectedMarket"
          :options="marketTypes"
          optionLabel="name"
          placeholder="Market Type"
          class="!hover:!border-blue-500 !border-2 !rounded-lg"
          fluid
        />
      </div>
    </div>

    <div class="flex justify-end gap-2">
      <Button
        type="button"
        label="Cancel"
        severity="secondary"
        @click="visible = false"
      ></Button>
      <Button
        type="button"
        label="Save"
        v-on:click="handleSubmit"
        class="!bg-blue-500 !border-none !hover:bg-blue-700"
      ></Button>
    </div>
  </Dialog>
</template>

<script setup>
import { onMounted, ref, watch, watchEffect } from "vue";

const value3 = ref(0);
const selectedAccountType = ref("");
const selectedMarket = ref("");
const username = ref("");

const accountTypes = [
  { name: "Personal", code: "PE" },
  { name: "Demo", code: "DM" },
  { name: "Funded", code: "FD" },
];

const marketTypes = [
  { name: "Forex", code: "FX" },
  { name: "Crypto", code: "CR" },
  { name: "Stocks", code: "ST" },
];

// Send this data to the backend when implemented
const handleSubmit = () => {
  console.log("Account Created:", {
    username: username.value,
    initialDeposit: value3.value,
    accountType: selectedAccountType.value,
    marketType: selectedMarket.value,
  });

  visible.value = false;
};

const visible = ref(false);
</script>
