<template>
  <Card
    class="!shadow-lg border !border-gray-200 !dark:bg-gray-900 !dark:border-gray-700 !rounded-xl !hover-shadow-xl !transition-shadow !duration-300 !cursor-pointer"
    @click="handleCardClick"
  >
    <template #title>
      <div class="flex items-center justify-between">
        <span class="text-lg font-semibold text-gray-800 dark:text-gray-100"
          >Trading Account</span
        >
        <span
          class="text-sm px-2 py-1 rounded-full"
          :class="
            account.isActive
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
          "
        >
          {{ account.isActive ? "Active" : "Not Active" }}
        </span>
      </div>
    </template>

    <template #subtitle>
      <div class="text-sm text-gray-500 dark:text-gray-400">
        Account No: {{ account.accountId }} -
        {{ account.accountName }}
      </div>
    </template>

    <template #content>
      <div class="flex flex-col gap-2 text-sm text-gray-700 dark:text-gray-200">
        <div class="flex justify-between">
          <span class="font-medium">Initial Deposit</span>
          <span class="text-blue-600 dark:text-blue-400 font-semibold">
            {{ account.initialDeposit }}</span
          >
        </div>
        <div class="flex justify-between">
          <span class="font-medium">Balance:</span>
          <span class="text-green-600 dark:text-green-400 font-semibold">{{
            account.balance
          }}</span>
        </div>

        <div class="flex justify-between">
          <span class="font-medium">Today's P/L:</span>
          <span
            :class="account.pnlToday >= 0 ? 'text-green-600' : 'text-red-600'"
          >
            {{
              account.pnlToday >= 0 ? "+" + account.pnlToday : account.pnlToday
            }}
          </span>
        </div>
        <div class="flex justify-between">
          <span class="font-medium">Equity:</span>
          <span>{{ account.equity }}</span>
        </div>
        <div class="flex justify-between">
          <span class="font-medium">Total PnL:</span>
          <span
            :class="account.totalPnl > 0 ? 'text-green-600' : 'text-red-600'"
            >{{
              account.totalPnl >= 0 ? "+" + account.totalPnl : account.totalPnl
            }}</span
          >
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  account: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

const handleCardClick = () => {
  // Navigate to the account dashboard page
  // Replace with actual data and api logic once backend is implemented

  try {
    const tradingAccount = props.account;
    if (!tradingAccount || !tradingAccount.accountId) {
      throw new Error("Invalid account data");
    }
    router.push(`/${tradingAccount.accountId}/dashboard`);
  } catch (error) {
    console.error("Error in handleCardClick:", error);
    return;
  }
};
</script>
