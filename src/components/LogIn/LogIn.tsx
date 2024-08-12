/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import axios from 'axios';

const LogIn = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState<string | null>(null);

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>)=>{
  event.preventDefault();
  const data = {
    email : email,
    password :password
  }
  try {
     const response = await axios.post('http://localhost:9000/api/auth',data);
  if(response.status ===200){
     sessionStorage.setItem('token',response.data);
     setError("");
     window.location.href="/home";
  }else{
     console.log(response.data);
  }
  } catch (err:any) {
    setError(err.response.data);
  }
  }

  return (
    <>
      <Container fluid="md" className='bg'>
        <Row className='justify-content-md-center'>
          <Col sm={4} md={4} className='mt-4 '>
     <div className='shadow rounded p-3 bg-white'>
      <h1 className='text-center'>Log In </h1>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(event) =>{setPassword(event.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    {error && 
        <div className='mb-3'>
         {error}
        </div>
    }</div>
          </Col>
        </Row>
    </Container>
    </>
  )
}

export default LogIn