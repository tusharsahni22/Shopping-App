import React from 'react'
import Login from './Login';
import Signup from './Signup';





function Index({toggleSignup}) {
    const [login, setLogin] = React.useState(false);
    const SwitchLogin = () => {
        setLogin(!login);
    }
  return (
    <>
    {login?<Login SwitchLogin={SwitchLogin} toggleSignup={toggleSignup}/>:<Signup SwitchLogin={SwitchLogin} toggleSignup={toggleSignup}/>}
    </>
  )
}

export default Index