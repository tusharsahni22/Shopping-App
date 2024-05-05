import ReactDOM from 'react-dom/client'
import React, {useEffect} from 'react'
import Routes from './Router.jsx'
import { Provider } from 'react-redux'
import store from './store'
import './App.css'
import ReactGA from 'react-ga';

// Initialize Google Analytics
ReactGA.initialize(import.meta.env.VITE_GA_TRACKING_ID);

function Main() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Provider store={store}>
        <Routes />
    </Provider>  
)
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
