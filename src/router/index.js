import { createWebHistory, createRouter } from "vue-router";

// Public Routes or Views (Unauthenticated)
import LoginView from "../views/public/LoginView.vue";
import LandingView from "../views/public/LandingView.vue";
import SignupView from "../views/public/SignupView.vue";

// Private Routes or Views (Authenticated)
import HomeView from "../views/private/HomeView.vue";
// Private Route -- Selected Account Views
import DashboardView from "../views/private/DashboardView.vue";

// Layouts for authenticated routes
import AppLayout from "../layouts/AppLayout.vue";

const routes = [
  { path: "/", component: LandingView },
  { path: "/login", component: LoginView },
  { path: "/signup", component: SignupView },

  // Accounst Routes
  {
    path: "/accounts",
    component: HomeView,
  },

  // Selected Account Routes
  {
    path: "/:accountId",
    component: AppLayout,
    children: [
      {
        path: "dashboard",
        component: DashboardView,
        meta: { title: "Dashboard" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
