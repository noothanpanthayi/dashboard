import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import { Auth0Provider } from '@auth0/auth0-react';

const domain:any=process.env.NODE_ENV==='production' ?process.env.REACT_APP_AUTH0_PROD_DOMAIN:process.env.REACT_APP_AUTH0_DOMAIN
const clientId:any=process.env.NODE_ENV==='production' ?process.env.REACT_APP_AUTH0_PROD_CLIENT_ID:process.env.REACT_APP_AUTH0_CLIENT_ID;

const rootElement:HTMLElement | any=document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);

console.log("ENV DEV OR PROD ",process.env.NODE_ENV);

root.render(
  <Provider store={store}>
    <Auth0Provider 
    domain={domain} 
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin
  }}
    >
    
    <App />
    </Auth0Provider>
  </Provider>
)
