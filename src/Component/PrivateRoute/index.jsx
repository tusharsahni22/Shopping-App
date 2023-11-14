import React, { useEffect, useState } from 'react'
import {isUserLoggedIn} from '../Services/auth'
import { Navigate, Outlet } from 'react-router'

const PrivateRoutes =()=> {
    const [loggedIn,setLoggedIn]=useState(true)
   const handleLoggedIn = ()=>{
    if(isUserLoggedIn()){
        setLoggedIn(true);
    }
    else setLoggedIn(false)
   }
   useEffect(()=>{
    handleLoggedIn()},[])
  return (<>
    {loggedIn ? <Outlet/> : <Navigate to="/"/>}
    
  </>
  )
}

export default PrivateRoutes