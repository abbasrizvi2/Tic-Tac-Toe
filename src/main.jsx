<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
=======

import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './components/App'
// import Practice from './components/Practice'
import {Practice2} from './components/Practice2'

createRoot(document.getElementById('root')).render(

    <Practice2/>
>>>>>>> 18cf99d (TO-DO done with making components)
)
