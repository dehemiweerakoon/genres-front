import { Route, Routes } from "react-router-dom"
import Auth from "./pages/Auth/Auth"
import Home from "./pages/Home/Home"
import ProtectedUtills from "./utills/ProtectedUtills"
import Movie from "./pages/Movie/Movie"
import Genres from "./pages/Genres/Genres"
import GenreMovie from "./pages/GenreMovie/GenreMovie"
import Register from "./components/LogIn/Register"
import Rentals from "./pages/Rentals/Rentals"


function App() {

  return (
    <>
  <Routes> 
    
    <Route element={<ProtectedUtills/>}>
    <Route path="/home" element={<Home/>}/>
    <Route path="/movie" element={<Movie/>}/>
    <Route path="/genres" element={<Genres/>}/>
    <Route path ="movies/:genreid" element={<GenreMovie/>}/>
    <Route path= "/rentals" element={<Rentals/>}/>
    </Route>
    <Route path='/auth/login' element={<Auth/>}/>
    <Route path='/auth/register'element= {<Register/>}/>
  </Routes>
    </>
  )
}

export default App