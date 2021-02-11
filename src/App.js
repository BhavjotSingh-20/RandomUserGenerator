import React, { useState ,useEffect} from "react"
import './App.css';
import {Container,Row,Col} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Axios from "axios";
 
function App() {

const [details,setDetails] = useState({})
 const fetchDetails = async () => {
   const {data}  = await Axios.get("https://randomuser.me/api/")
   console.log("Response",data);
   const details = data.result[0]
   setDetails(details)
 };

 useEffect(() => {
   fetchDetails()
 },[])

  return (
    <div className="App">
      
      </div>
      )
}

export default App;
