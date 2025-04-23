import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<Auth0Provider
    domain="dev-xk31r8ggv2wqaqpl.us.auth0.com"
    clientId="yMdO6AVE82srhrPY6p3Qe7cnmshz8Pgp"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
