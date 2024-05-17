import axios from "axios";

axios.defaults.baseURL = 'https://cc-drf-api-pp5-b19f7ab60297.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true
