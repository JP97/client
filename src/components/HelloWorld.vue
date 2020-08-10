<template>
    <div class="hello">
        <div>
            <ul>
                <li v-for="(data, index) in torqueData" :key="index">
                    <p>{{ data.id }}</p>
                    <p>{{ data.datapoints }}</p>
                </li>
            </ul>
            <ul v-if="errors && errors.length">
                <li v-for="(error, index) in errors" :key="index">
                    {{ error.message }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
// import TorqueDataService from "../TorqueDataService";
import { mapActions } from "vuex";
export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },
    data() {
        return {
            torqueData: [],
            errors: "",
            specificTData: [],
        };
    },
    methods: {
        ...mapActions(["fetchTorqueData"]),
    },
    async created() {
        // console.log("started fetching data");
        // try {
        //     console.log("fetching all data");
        //     this.torqueData = await TorqueDataService.getData();
        //     console.log("fetching just one data");
        //     this.specificTData = await TorqueDataService.getSpecificData(2);
        // } catch (error) {
        //     this.error = error;
        // }
        this.fetchTorqueData();
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
