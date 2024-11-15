import { useEffect, useState } from "react";
import axios from 'axios'
import _ from 'lodash';

const usePagintion = (url,pageSize) => {
    const [loading,setLoading] =useState(true)
    const [data,setData] =useState([])

    const fetchFunction = async()=>{
        const response = await axios.get(url)
        setData(_.chunk(response.data,pageSize))
        setLoading(false)
    }


    useEffect(() => {
        fetchFunction()
    }, []);


    return [loading,data]
}
export default usePagintion;