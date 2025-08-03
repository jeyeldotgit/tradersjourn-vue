<template>
  <div class="flex flex-col h-full w-full p-4 lg:p-6 gap-6">
    <!-- Top Part: Metrics Cards -->
    <div class="flex flex-col gap-4 lg:flex-row">
      <div class="flex-1">
        <BalanceCard :balance="balanceData" />
      </div>
      <div class="flex-1">
        <CumulativePNL :cumulativePNL="cumulativePNLData" />
      </div>
      <div class="flex-1">
        <winRateCard :winRatio="winRateData" />
      </div>
      <div class="flex-1">
        <MostTradedCard :mostTradedInstrument="mostTradedInstrument" />
      </div>
    </div>

    <!-- Bottom Part: Performance Overview -->
    <!-- <div class="flex flex-col gap-4">
      <div class="flex-1">
        <h2 class="text-xl font-semibold mb-4">Performance Overview</h2>
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <PerformanceLineGraph />
        </div>
      </div>
    </div> -->

    <div class="w-full overflow-auto">
      <PerformanceLineGraph />
      <TradesTable />
    </div>

    <!-- Trades Table -->
  </div>
</template>

<script setup>
import { DashboardMockData } from "../../mockdata/DashboardData";

import { onMounted } from "vue";

import BalanceCard from "../../components/private/DashboardView/BalanceCard.vue";
import CumulativePNL from "../../components/private/DashboardView/CumulativePNL.vue";
import winRateCard from "../../components/private/DashboardView/winRateCard.vue";
import MostTradedCard from "../../components/private/DashboardView/MostTradedCard.vue";
import PerformanceLineGraph from "../../components/private/DashboardView/PerformanceLineGraph.vue";
import TradesTable from "../../components/private/DashboardView/TradesTable.vue";

const mostTradedInstrument = DashboardMockData.mostTradedInstrument;
const balanceData = DashboardMockData.balance;
const cumulativePNLData = DashboardMockData.CumulativePNL;
const winRateData = DashboardMockData.winRate;

onMounted(() => {
  console.log("Dashboard View Mounted");
  // Fetch or process any data needed for the dashboard view when the backend is implemented
  // For now, we are using mock data
});
</script>
