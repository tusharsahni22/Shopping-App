import React from 'react'
import Login from './Login';
import Signup from './Signup';





function Index({toggleLogin}) {
    const [login, setLogin] = React.useState(false);
    const SwitchLogin = () => {
        setLogin(!login);
    }
  return (
    <>
    {login?<Signup SwitchLogin={SwitchLogin} toggleLogin={toggleLogin}/>:<Login SwitchLogin={SwitchLogin} toggleLogin={toggleLogin}/>}
    </>
  )
}

export default Index