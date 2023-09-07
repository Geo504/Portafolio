import { BrowserRouter } from 'react-router-dom';

import {NavBar} from './Components/NavBar/NavBar.jsx'
import { Views } from './View/Views.jsx';


import './App.css'

function App() {

  return (
    <BrowserRouter basename='/'>
      <NavBar />
      <Views />
    </BrowserRouter>
  )
}

export default App
