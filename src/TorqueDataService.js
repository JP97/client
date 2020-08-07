import axios from "axios";

const ownAPI = "http://localhost:5000/api/torquedata/";
// const JSONPlaceholder = 'https://jsonplaceholder.typicode.com/todos'

class TorqueDataService {
    static async getData() {
        const res = await axios.get(ownAPI);
        try {
            const data = res.data;
            return data.map((post) => ({
                ...post,
            }));
        } catch (err) {
            return err;
        }
    }
    //get specifik
    static async getSpecificData(id) {
        const res = await axios.get(`${ownAPI}${id}`);
        try {
            return res.data;
        } catch (err) {
            return err;
        }
    }
}

export default TorqueDataService;
