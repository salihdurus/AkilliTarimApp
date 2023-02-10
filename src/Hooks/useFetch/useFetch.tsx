import React, { useState } from "react";
import axios from "axios";
import Config from "react-native-config";

export default function useFetch() {
    const [resFetchData, setResFetchData] = useState("");
    const [fetchLoading, setFetchLoading] = useState(false);
    const [fetchError, setFetchError] = useState(false);

    const fetchData = async (url: any, token: any, id?: any) => {
        url = Config.API_URL + url;
        setFetchLoading(true);
        axios.defaults.headers.get['Authorization'] = `Bearer ${token}`
        if (id) {
            await axios.get(url, {
                params: {
                    "gardenId": id
                }
            })
                .then((data: any) => {
                    setResFetchData(data.data);
                    
                })
                .catch((err) => console.log(err)
                ).finally(()=>{
                    setFetchLoading(false);
                })
        }
        else {

            await axios.get(url)
                .then((data: any) => {
                    setResFetchData(data.data);
                })
                .catch((err) => {
                    setFetchError(err)
                })
                .finally(()=>{
                    setFetchLoading(false);
                })
        }
    }
    return { fetchData, fetchLoading, fetchError, resFetchData };
}