<template>This is account dashboard</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const selectedAccountId = route.params.accountname;
</script>
