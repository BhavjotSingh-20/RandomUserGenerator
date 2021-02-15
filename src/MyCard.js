import React from "react"
import {Card,CardBody,CardTitle,CardText} from "reactstrap"
import {FaEnvelope,FaMapMarkedAlt,FaPhone,FaAddressBook} from "react-icons/fa"


const MyCard = ({details}) => {
      return (
          <Card>
              <CardBody className="text-center">
                  <img height="150" width="150"  className="rounded-circle img-thumbnail border-danger" src={details.picture?.large}/>
                  <CardTitle className="text-primary"><h1><span className="pr-2">
                      {details.name?.title}</span>
                      <span>
                      {details.name?.first}</span>
                      <span>
                      {details.name?.last}</span></h1></CardTitle>
                      <CardText>

                         <div className="d-flex flex-row justify-content-around">
                             <div className="pl-2" ><FaMapMarkedAlt/><p>{details.location?.city}</p></div>
                             <div><FaPhone/><p>{details.phone}</p></div>
                         </div>
                         <div className="d-flex flex-row">
                             <div className="pr-5 pl-4"><FaEnvelope/><p>{details.email}</p></div>
                             <div className="pl-5"><FaAddressBook/><p>{details.location?.postcode}</p></div>
                         </div>


                          {/* <div className="d-flex  flex-row justify-content-around"><p className="pr-3"><FaMapMarkedAlt />  {details.location?.city}</p>
                      <p className="pr-3"><FaPhone/>{details.phone}</p>
                      </div><div className="d-flex flex-row justify-content-around">
                      <p className="pr-3"><FaEnvelope/>{details.email}</p>
                      <p className="pr-3"><FaAddressBook/>{details.location?.postcode}</p>
                      </div> */}
                      
                      </CardText>
                      
              </CardBody>
          </Card>
      )
}

export default MyCard