import React, { useState ,useEffect} from "react"
import './App.css';
import {Container,Row,Col} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Axios from "axios";
 import MyCard from "./MyCard"
function App() {

const [details,setDetails] = useState({})
 const fetchDetails = async () => {
   const {data}  = await Axios.get("https://randomuser.me/api/")
   console.log("Response",data);
   const details = data.results[0]
   setDetails(details)
 };

 useEffect(() => {
   fetchDetails()
 },[])

  return (
    <Container fluid className="p-4 bg-primary App">
        <Row>
          <Col md={6} className="offset-md-3 mt-4">
            <MyCard details={details} /> 
          </Col>
        </Row>

    </Container>
      )
}

export default App;
