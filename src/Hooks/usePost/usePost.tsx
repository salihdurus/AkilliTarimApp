import { useState } from "react";
import axios from "axios";
import Config from "react-native-config";

const usePost = () => {
    const [resData, setResData]: any = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const postData = async (url: any, data: any, token?: any) => {
        setLoading(true);
        url = Config.API_URL + url;
        if (token) {
            axios.defaults.headers.post['Authorization'] = `Bearer ${token}`
            await axios.post(url, data)
                .then(({ data }) => {
                    setResData(data);
                    console.log(data);
                    setLoading(false);
                    setError(false);
                })
                .catch((err) => {
                    setError(true);
                    setResData(err.response.data.message);
                    console.log(err);
                    setLoading(false);
                });
        }
        else {

            await axios.post(url, data)
                .then(({ data }) => {
                    setResData(data);
                    console.log(data);
                    setLoading(false);
                    setError(false);
                })
                .catch((err) => {
                    setError(true);
                    setResData(err.response.data.message);
                    // console.log(err.response.data.message);
                    setLoading(false);
                })
        }
    }
    return { resData, loading, error, postData }
}
export default usePost;