import React,{useEffect} from "react";
import "../server/server"


export default function Home(){
   
   
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vansCards = vans.map(van=>{
        return(
            <div>
                <img src={van.imageUrl}/>
                <h1>{van.name}</h1>
                <p>{van.description}</p>
            </div>
        )
    })
   
    return(  <div>
             <h1>This is Home</h1> 
             <div>{vansCards}</div>
             </div>       
        )

}