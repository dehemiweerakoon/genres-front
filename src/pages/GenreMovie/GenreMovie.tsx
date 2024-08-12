/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getRequest } from "../../services/ApiServices";
import { Button } from "react-bootstrap";

const GenreMovie = () => {
const {genreid} = useParams();
interface movie{
    _id: string,
    title: string,
    genre :{
      name : string
    },
    numberInStock:number,
    dailyRentalPrice:number
   }
  const [movies,setMovies] = useState<movie[]>([]);

  const getAllMovies = async() =>{
    const response = await getRequest(`/movies/ByGenre/${genreid}`);
    setMovies(response?.data)
    console.log(response);
  }
  useEffect(()=>{
    getAllMovies();
  },[])
  return (
    <>
<div className="container mt-5 mb-5" id="movie">
    <div className="row mb-4 p-5">
    {
    movies && movies.map((movie) => (
    
      <div key={movie._id} className="col-md-4 mt-2 mb-4">
        <div className="card border border-5">
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">Genre: {movie.genre.name}</p>
            <p className="card-text">In Stock: {movie.numberInStock}</p>
            <p className="card-text">Rental Price: ${movie.dailyRentalPrice}</p>
            <Button variant="secondary " onClick={()=>{}}>Buy Now</Button>{' '}
          </div>
        </div>
      </div>
    
    ))
  }
    </div>
  </div>

    </>
  )
}

export default GenreMovie