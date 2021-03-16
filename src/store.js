import Vue from "vue";
import Vuex from "vuex";

const state = {
    specials : [
        {
            image: "/img/test.jpg",
            text: "สั่งกลับบ้านลด 50%"
        },
        {
            image: "/img/test2.jpg",
            text: "โปรโมชั่นต่างๆมากมาย"
        },
        {
            image: "/img/test3.jpg",
            text: "สั่งวันนี้จัดส่งฟรี"
        }
    ],
    menus: [
        {
            image: "/img/1.jpg",
            text: "#1 Hoodie ",
            price: 299,
            love: true
        },
        {
            image: "/img/2.png",
            text: "#2 Hoodie",
            price: 299,
            love: true
        },
        {
            image: "/img/3.png",
            text: "#3 Hoodie",
            price: 299,
            love: true
        },
        {
            image: "/img/4.jpg",
            text: "#1 T-Shirt",
            price: 150,
            love: true
        },
        {
            image: "/img/5.jpg",
            text: "#2 T-Shirt",
            price: 150,
            love: true
        },
        {
            image: "/img/6.jpg",
            text: "#1 Face Mask",
            price: 40,
            love: true
        },
        {
            image: "/img/7.jpg",
            text: "#2 Face Mask",
            price: 40,
            love: true
        },
        {
            image: "/img/9.jpg",
            text: "#3 Face Mask",
            price: 40,
            love: true
        },
        {
            image: "/img/10.webp",
            text: "#1 Mug",
            price: 60,
            love: true
        },
        {
            image: "/img/11.png",
            text: "#2  Mug",
            price: 60,
            love: true
        },
        {
            image: "/img/12.png",
            text: "#3  Mug",
            price: 60,
            love: true
        },
        {
            image: "/img/poster.webp",
            text: "Poster",
            price: 100,
            love: true
        }
    ],
    orders : [],
    orderInfo: null
};

const getters = {
    specials(state) {
        return state.specials;
    },
    menus(state) {
        return state.menus;
    },
    haveOrders(state) {
        return state.orders.length > 0;
    },
    numberOfOrders(state) {
        return state.orders.length;
    },
    orders(state) {
        return state.orders;
    }
};

const mutations = {
    ADD_ORDER(state, order) {
        state.orders.push(order);
    },
    DELETE_ORDER(state, index) {
        state.orders.splice(index, 1);
    },
    SUBMIT_ORDER(state, orderInfo) {
        state.orderInfo = orderInfo;
    },
    CLEAR_ORDER(state) {
        state.orders = [];
    }
};

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    getters,
    mutations
});

export default store;