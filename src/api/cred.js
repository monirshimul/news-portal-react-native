

import axios from "axios";


// let apiKey = "1e5d99664a644f66a2d7d3fb29ec7ef6";
console.log("this file is called")
export default axios.create({
    baseURL:"https://newsapi.org/v2",
    headers:{
        Authorization: "Bearer 1e5d99664a644f66a2d7d3fb29ec7ef6"
    }
})