import png_1 from '../../assets/Black Dark Elegant Stylish Images Instagram Post (1).jpg'
import vedio from '../../assets/1998560-hd-1920-1080-24fps_RkbBmW52.mp4'
import { Button, Card, Col, Container, Row} from 'react-bootstrap'
import './Dev.css'
const Dev = () => {
  return (
    <>
 <Container className="d-flex flex">
  <Row className='justify-content-md-center'>
  <Col xs lg="4">
  <Card  className=" m-3">
      <Card.Img variant="top" src={png_1} className='img' />
      <Card.Body>
        <Card.Title>Treanding Movies</Card.Title>
        <Card.Text>
        Most Popular Movies · Deadpool & Wolverine · Twisters · Longlegs · Twister · The Ministry of Ungentlemanly Warfare ·
         Bad Boys: Ride or Die · Find Me Falling.
        </Card.Text>
       <a href="#movie"> <Button variant="secondary">See More</Button></a>
      </Card.Body>
    </Card>
    </Col>
    <Col xs lg="4">
    <Card  className="m-3" >
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
       
      <Card.Body>
    
        <Card.Title>Treanding Movies</Card.Title>
        <Card.Text>
        Vidly is the world's most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows.

        </Card.Text>
       
        <Button variant="secondary" >See More</Button>
      </Card.Body>
    </Card>
    </Col> 
    </Row>
    </Container>
    </>
  )
}

export default Dev