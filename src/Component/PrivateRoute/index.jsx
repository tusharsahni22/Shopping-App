import React, { useEffect, useState } from 'react'
import {isUserLoggedIn} from '../Services/auth'
import { Outlet } from 'react-router'
import Auth from '../Auth'

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

    const [login, setLogin] = useState(true)
    const toggleLogin = () => {
      setLogin(!login)
    };
    
  return (<>
    {loggedIn ? <Outlet/> :login? <Auth login={login} toggleLogin={toggleLogin} />:""}
    
  </>
  )
}

export default PrivateRoutes