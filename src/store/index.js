import Vue from "vue";
import Vuex from "vuex";
import axiostest from "./modules/axiostest";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        axiostest,
    },
});
