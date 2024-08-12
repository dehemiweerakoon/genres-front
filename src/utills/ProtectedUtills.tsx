/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const ProtectedUtills = () => {
    const token = sessionStorage.getItem('token');
    axios.defaults.headers.common['x-auth-token'] = token;

    const [role,setRole] = useState(false);

    const getUser = async()=>{
      try {
         const response = await axios.get('http://localhost:9000/api/user/me');
        setRole(response.data.isAdmin);
        sessionStorage.setItem('user',JSON.stringify(response.data));
      } catch (error) {
        console.error(error);
        
      }
    
    }
    useEffect(()=>{
      getUser()
    },[]);

    if(!token){
        return (
        <Navigate to={"/auth/login"} replace/>
      )
    }
    if(!role){  
      return <><NavBar/><Outlet/><Footer/></>
    }else{
        return(
            <p>error</p>
        )
    }
}

export default ProtectedUtills