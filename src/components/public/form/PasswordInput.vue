<template>
  <div class="relative w-full">
    <input
      :type="isVisible ? 'text' : 'password'"
      :placeholder="placeholder"
      v-model="modelValueProxy"
      class="p-2 pr-10 border rounded w-full"
    />
    <button
      type="button"
      v-on:click="toggleVisibility"
      class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
    >
      <i :class="isVisible ? 'pi pi-eye-slash' : 'pi pi-eye'"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const isVisible = ref(false);

const props = defineProps({
  modelValue: String,
  placeholder: String,
});

const emit = defineEmits(["update:modelValue"]);

// Toggle password visibility function
const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};

const modelValueProxy = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
</script>
