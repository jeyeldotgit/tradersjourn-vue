<template>
  <div class="h-screen w-full flex items-center justify-center bg-light-bg">
    <div
      class="w-102 p-6 flex flex-col items-center shadow-sm rounded-lg bg-light-card gap-2"
    >
      <AuthHeaderComponent />
      <form
        action=""
        class="flex flex-col w-full gap-2"
        @submit.prevent="handleSubmit"
      >
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
        </div>
        <div class="flex flex-col gap-1">
          <PasswordInput v-model="formData.password" placeholder="Password" />
        </div>

        <i
          >Doesn't have an account?
          <RouterLink to="/signup" class="underline text-blue-500"
            >Create Account</RouterLink
          ></i
        >

        <button class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import AuthHeaderComponent from "../../components/public/AuthHeaderComponent.vue";
import PasswordInput from "../../components/public/form/PasswordInput.vue";
import { useRouter } from "vue-router";

const formData = reactive({
  username: "",
  password: "",
});

const router = useRouter();

const handleSubmit = () => {
  const isValid = validateForm();
  if (!isValid) {
    console.error("Form validation failed");
    return;
  }
  console.log("Form submitted with data:", formData);

  // Redirect to home after successful login
  router.push("/accounts");
};

const validateForm = () => {
  let isValid = true;
  if (!formData.username) {
    isValid = false;
    console.error("Username is required");
  }
  if (!formData.password) {
    isValid = false;
    console.error("Password is required");
  }
  return isValid;
};
</script>
