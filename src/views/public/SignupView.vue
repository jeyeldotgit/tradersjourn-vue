<template>
  <div class="h-screen w-full flex items-center justify-center bg-gray-50">
    <div
      class="w-102 p-6 flex flex-col items-center shadow-sm rounded-lg bg-white gap-2"
    >
      <AuthHeaderComponent />

      <form class="flex flex-col w-full" @submit.prevent="handleSubmit">
        <!-- Username -->
        <div class="flex flex-col gap-1">
          <div class="relative">
            <input
              type="text"
              placeholder="Username"
              class="p-2 pr-10 border rounded w-full"
              v-model="formData.username"
            />
            <i
              class="pi pi-user absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            ></i>
          </div>
          <FormError :error="errors.username" />
        </div>

        <!-- Email -->
        <div class="flex flex-col gap-1">
          <div class="relative">
            <input
              type="email"
              placeholder="Email"
              class="p-2 pr-10 border rounded w-full"
              v-model="formData.email"
            />
            <i
              class="pi pi-at absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            ></i>
          </div>
          <FormError :error="errors.email" />
        </div>

        <!-- Password -->
        <div class="flex flex-col gap-1">
          <PasswordInput v-model="formData.password" placeholder="Password" />
          <FormError :error="errors.password" />
        </div>

        <!-- Confirm Password -->
        <div class="flex flex-col gap-1">
          <PasswordInput
            v-model="formData.confirmPassword"
            placeholder="Confirm Password"
          />
          <FormError :error="errors.confirmPassword" />
        </div>

        <!-- Submit Button -->
        <div class="flex justify-between items-center">
          <RouterLink to="/login" class="text-blue-500 hover:underline text-sm">
            Already have an account? Login
          </RouterLink>
        </div>
        <button
          type="submit"
          class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import AuthHeaderComponent from "../../components/public/AuthHeaderComponent.vue";
import FormError from "../../components/public/form/FormError.vue";
import PasswordInput from "../../components/public/form/PasswordInput.vue";
import { RouterLink } from "vue-router";

import "primeicons/primeicons.css";

import { reactive } from "vue";
const formData = reactive({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const errors = reactive({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const handleSubmit = () => {
  const isValid = validateForm();
  if (!isValid) {
    return;
  }

  console.log("Form submitted successfully", formData);
};

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validateForm = () => {
  // Reset all errors
  errors.username = "";
  errors.email = "";
  errors.password = "";
  errors.confirmPassword = "";

  const { username, email, password, confirmPassword } = formData;

  let isValid = true;

  if (!username) {
    errors.username = "Username is required";
    isValid = false;
  }

  if (!email) {
    errors.email = "Email is required";
    isValid = false;
  } else if (!validateEmail(email)) {
    errors.email = "Invalid email format";
    isValid = false;
  }

  if (!password) {
    errors.password = "Password is required";
    isValid = false;
  }

  if (!confirmPassword) {
    errors.confirmPassword = "Please confirm your password";
    isValid = false;
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
    isValid = false;
  }

  return isValid;
};
</script>
