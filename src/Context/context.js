import { createContext, useEffect, useState } from "react";
import { getDataFromApi } from "../Utils/api";
const AppContext = createContext();


const AppProvider = ({ children }) => {
    const [coinsData,setCoinsData]=useState([])
    const [id,setId]=useState("");
    const [singleData,setSingleData]=useState({})
    const [loading,setLoading]=useState(false);
   
    useEffect(()=>{
        getData();
     },[id])
 
    async function getData(){
        setLoading(true);
        try{
            setSingleData({})
            const response=await getDataFromApi('/coins');
            // console.log(response.data.data.coins);
            const data=response.data.data.coins;
            setCoinsData(data);
            const response2=await getDataFromApi(`/coin/${id}`);
            console.log(response2.data.data.coin);
            setSingleData(response2.data.data.coin);
            setLoading(false);
        }
        catch(err){
            console.log(err);
        }
    }
    return (
        <AppContext.Provider value={{coinsData,setId,singleData,loading}}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider };