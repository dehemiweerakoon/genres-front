/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import { getRequest } from '../../services/ApiServices';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import vedio from '../../assets/2317031-hd_1920_1080_30fps.mp4'

const Genres = () => {
   interface genre {
    _id : string
    name : string
   }
    
    const [genres,setGenres] = useState<genre[]>([]);

    const getAllGenres =async ()=>{
      const response = await getRequest('/genres');
      setGenres(response?.data);
      console.log(response?.data)
    }
   useEffect(()=>{
     getAllGenres()
   },[]);

  return (
   <>
   <Container>
      <Row className=''>
        <Col sm={2} md={4} className='mt-4 mb-2 p-4'>
         <Card>
           
            <ListGroup variant="flush">
                {
                  genres && genres.map((genre)=>(
                    <>
                    {/* */}
                    <NavLink to={`/movies/${genre._id}`}className='text-decoration-none'> <ListGroup.Item key={genre._id} className='bg-dark-subtle p-2 text-dark bg-opacity-50'>{genre.name}</ListGroup.Item></NavLink>
                    </>
                  ))
                }
                
            </ListGroup>
            </Card>
         </Col>
         <Col sm={2} md={6} className='mt-4 mb-2 p-4'>
         <video
        controls={false} 
        autoPlay 
        loop 
        src={vedio} 
        title="Vimeo video"
        aria-label="Video without controls"    
        className='object'
      >
        Your browser does not support the video tag.
      </video>
         </Col>
     </Row>
   </Container>
   </>
  )
}

export default Genres