//import { useEffect, useState } from "react";
import { useLoaderData } from 'react-router-dom'


function Github(){
    const data = useLoaderData()

    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/shadow-debugger").then((response)=> response.json())
    //     .then((data) => {
    //         setData(data)
    //     })
    // },[])

    return(
        <>
        
        <div className="bg-green-500 text-white pd-5">
            Follwers : {data.followers}
        </div>
        <img src={data.avatar_url} alt="" />
        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/shadow-debugger')
    return response.json()
}