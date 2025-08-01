<template>
  <div class="min-h-screen w-full bg-light-bg">
    <HeaderLayout />
    <div class="flex flex-col gap-4 p-6">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold">Accounts</h1>
        <AddAccountModal />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AccountCard :account="accounts" />

        <!-- add as many as needed -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import AccountCard from "../../components/private/HomeView/AccountCard.vue";
import AddAccountModal from "../../components/private/HomeView/AddAccountModal.vue";
import { mockTradingAccount } from "../../mockdata/TradingAccount";
import HeaderLayout from "../../layouts/HeaderLayout.vue";

const accounts = mockTradingAccount;

const route = useRoute();

// Get the selected account ID from the route parameters
// This will be used to fetch account-specific data or perform actions
// Replace with actual api logic once backend is implemented
const selectedAccountId = route.params.accountId;
</script>
