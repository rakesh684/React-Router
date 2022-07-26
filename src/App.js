import React from "react"
import './App.css';
import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Header from "./component/Header"
import ServiceDetail from "./pages/services/ServiceDetail";
// import ServicesData from "./pages/services/ServicesData";
import ServicesList from "./pages/services/ServicesList" 

function App() {    
  
    return (
   
        <div>
            <Header />
           
            <Routes>
                <Route  path="/" element={<Home />} />
                <Route exact path="/services" element={<ServicesList />}/>
                <Route path="/services/:serviceId" element={<ServiceDetail />} />
            </Routes>
            
            
        </div>
       
    )
}

export default App


