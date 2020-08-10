import axios from "axios";

const state = {
    torqueData: [],
    errors: "",
    url: "http://localhost:5000/api/torquedata",
};

const getters = {
    getTorqueData: (state) => state.torqueData,
};

const actions = {
    fetchTorqueData({ commit }) {
        console.log("in action");
        try {
            console.log("in try");
            const data = axios.get(state.url);
            const mappedData = data.map((post) => ({
                ...post,
            }));
            commit("saveTorqueData", mappedData);
        } catch (error) {
            console.log(error);
        }
    },
    fetchTorqueData2({ commit }) {
        console.log("in action");
        try {
            console.log("in try");
            axios
                .get(this.state.url)
                .then((result) => {
                    commit("saveTorquqData", result.data);
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
