import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom' 
import { router } from './router.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux"
import store from './store/store.js'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)