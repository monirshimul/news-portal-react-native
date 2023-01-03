import cred from "./cred"
import {useState} from 'react'


export default () => {

    const[results, setResults] = useState({
        data:null,
        loading:false,
        error:null
    })

    const searchApis = async (category) => {
        setResults({
            data:null,
            loading:true,
            error:null 
        })
        try {
            const response = await cred.get("/top-headlines", {
                params: {
                    country: "us",
                    category,
                    pageSize: 10
                }
            })
            setResults({
                data:response.data.articles,
                loading:false,
                error:null
            })
            
        } catch (error) {
            console.log("Error", error)
            setResults({
                error:"Something went wrong",
                data:null,
                loading:false,
            })
        }
        
    }
    return [results, searchApis]
    
}