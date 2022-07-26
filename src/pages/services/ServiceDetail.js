import React from "react"
import {useParams , useNavigate} from "react-router-dom"
import servicesData from "./servicesData"
function ServiceDetail() {
    
    const {serviceId}=useParams()
    
    const thisService=servicesData.find(service=>
        service._id===serviceId
        )
        const navigate=useNavigate()
        function handleClick(){
            setTimeout(() => {
                navigate("/services")
            }, 2000)
            navigate.replace("")
        }
    return (
        <div>
            <h1>Service Detail Page</h1>
            <h3>{thisService.name}-${thisService.price}</h3>
            <h3>{thisService.description}</h3>
            <button onClick={handleClick}>Back to service</button>
        </div>
    )
}

export default ServiceDetail








