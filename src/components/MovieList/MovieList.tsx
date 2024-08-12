/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { getRequest, postRequest } from "../../services/ApiServices";
import { Button, Modal } from "react-bootstrap";
const MovieList = () => {

   interface movie{
    _id: string,
    title: string,
    genre :{
      _id :string,
      name : string
    },
    numberInStock:number,
    dailyRentalPrice:number
   }
  const [movies,setMovies] = useState<movie[]>([]);
  const [show, setShow] = useState(false);
  const [movieId,setMovieId] = useState("");

  const handleClose = () => setShow(false);

  const BuyMovie = async(event: { preventDefault: () => void; })=>{
    event.preventDefault();
    const user = sessionStorage.getItem('user');
    const jsonuser = JSON.parse(user+"");
    const currentId = jsonuser._id;
      const rental = {
        customerId : currentId,
        movieId: movieId
      } 
    const response = await postRequest('/rental',rental);
    handleClose();
    // console.log(response);
  }

  const getAllMovies = async() =>{
    const response = await getRequest("/movies");
    setMovies(response?.data)
    console.log(response);
  }
  useEffect(()=>{
    getAllMovies();
  },[])
  return (
    <>
<div className="container mt-5" id="movie">
    <div className="row">
    {
    movies && movies.map((movie) => (
    
      <div key={movie._id} className="col-md-4 mt-2 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">Genre: {movie.genre.name}</p>
            <p className="card-text">In Stock: {movie.numberInStock}</p>
            <p className="card-text">Rental Price: ${movie.dailyRentalPrice}</p>
            <Button variant="secondary" onClick={()=>{ setShow(true); setMovieId(movie._id)}}>Buy Now</Button>
          </div>
        </div>
      </div>
     
    ))
  }
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Buy an Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>Add to cart</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="white" onClick={BuyMovie} className="btn btn-outline-secondary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  </div>

    </>
  )
}

export default MovieList