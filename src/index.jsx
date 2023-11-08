import ReactDOM from 'react-dom'
import React from 'react'
import Routes from './Router.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
        domain="tusharsahni22.us.auth0.com"
        clientId="zpT8KPhkUCVxC4KEIN4DHtur7DsKCi7g"
        redirectUri={window.location.origin}
    >
        <Routes/>
    </Auth0Provider>
);
