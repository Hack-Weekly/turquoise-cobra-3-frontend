import React from "react";
import { useParams } from "react-router-dom";

export default function Blogs()
{   
    const [blogData, setBlogData]= React.useState([])
    const params = useParams();
    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setBlogData(data.vans))
    }, [])

    

    return(
    
    <div>
        <h1>{blogData.name}</h1>
        <img src={blogData.imageUrl}/>
        <p>Cost per day is is ${blogData.price}</p>
        <p>{blogData.description}</p>

    </div>
        
    
    
    )
}