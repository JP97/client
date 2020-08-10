import axios from "axios";

const state = {
    torqueData: [],
    errors: "",
    url: "http://localhost:5000/api/torquedata",
};

const getters = {
    getTorqueData: (state) => state.torqueData,
    getApiLink: (state) => state.url,
};

const actions = {
    fetchTorqueData({ commit, getters }) {
        console.log("in action");
        try {
            console.log("in try");
            axios
                .get(getters.getApiLink)
                .then((result) => {
                    commit("saveTorqueData", result.data);
                })
                .catch((error) => {
                    throw new Error(`API: ${error}`);
                });
        } catch (error) {
            console.log(error);
        }
    },
};

const mutations = {
    saveTorqueData: (state, data) => {
        console.log("in mutation");
        state.torqueData = data;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
