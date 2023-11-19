import ReactDOM from 'react-dom/client'
import React from 'react'
import Routes from './Router.jsx'
import { Provider } from 'react-redux'
import store from './store'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Routes />
    </Provider>


   
);
