/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { deleteRequest, getRequest } from "../../services/ApiServices"
import { useEffect, useState } from "react"

interface rentals {
  
    _id: string,
    customer: {
        name: string,
        isGold: boolean,
        phone: string,
        _id: string,
    },
    movie: {
        title: string,
        dailyRentalPrice: number, 
        _id: string,
    },
    dateOut: Date,
}

const Rentals = () => {

  const [error,setError] = useState("");
  const [rentals,setRentals] = useState<rentals[]>([]);
  const [name,setName] = useState("");
  const getRentals = async()=>{
    
     try {
       const user = sessionStorage.getItem('user');
       const jsonuser = JSON.parse(user+"");
       const current = jsonuser._id; // 
       const response = await getRequest('/rental/byCustomer/'+current);
       if(response?.status===200){
        setError("");
        setRentals(response?.data);
        setName(response?.data[0].customer.name);
        
       }else{
        setError("error occured");
       }
      

     } catch (err:any) {
        setError(err.response.data)
     }
  }
  const removeRental = async(_id: string)=>{
   
    try {
       const response = await deleteRequest('/rental/'+_id);
       if(response?.status==200){
        getRentals();
       }
    } catch (error) {
      console.log('error');
    }
  }

  useEffect(()=>{
     getRentals();
  },[]);

  return (
    <>
    <Container>
     <Row className="d-flex justify-content-center">
      <Col sm={6} md={10}>
      <h1 className="text-center mt-2 fst-italic">Hello Welcome {name}</h1>
      <h3 className="text-center mt-2">Rental List </h3>
       {
        rentals && rentals.map((rental)=>(
          <Card key={rental._id} className="border border-5 m-3 ">
          <Card.Body>
            <Card.Title>{rental.movie.title}</Card.Title>
            <Card.Text>
              {rental.movie.dailyRentalPrice}
            </Card.Text>
            <Card.Text>
              {
               
              new Date(rental.dateOut).getFullYear()+"/"+(new Date(rental.dateOut).getMonth()+1)+"/"+new Date(rental.dateOut).getDate()}
            </Card.Text>
            <Button variant="secondary" onClick={()=>{removeRental(rental._id)}}>Remove</Button>
          </Card.Body>
        </Card>
        ))
       }
      </Col>
     </Row>
    </Container>
    {
      error && <>
      <Container>
        <Row>
          <Col>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
              </div>
           <h4>Loading...error occured</h4>
          </Col>
        </Row>
      </Container>  
</>
    }
    </>
  )
}

export default Rentals