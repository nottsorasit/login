import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/Home.vue";
import Order from "./components/Order.vue";
import Checkout from "./components/Checkout.vue";
import CheckoutProcess from "./components/CheckoutProcess.vue";
import Signin from "./components/Signin.vue";
import Register from "./components/Register.vue";
import Apply from "./components/Apply.vue";

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/order/:id",
        component: Order
    },
    {
        path: "/checkout",
        component: Checkout
    },
    {
        path: "/checkout-process",
        component: CheckoutProcess
    }, 
    {
        path: "/signin",
        component: Signin
    },
    {
        path: "/Register",
        component: Register
    },
    {
        path: "/Apply",
        component: Apply
    },
];

const router = new VueRouter(
    {
        routes
    }
);

Vue.use(VueRouter);

export default router;