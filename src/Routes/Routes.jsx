import {Home} from '../Components/Home/Home.jsx'
import {Works} from '../Components/Works/Works.jsx'
import { Skills } from '../Components/Skills/Skills.jsx'
import { Contact } from '../Components/Contact/Contact.jsx'


 export const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Works',
    element: <Works />
  },
  {
    path: '/Skills',
    element: <Skills />
  },
  {
    path: '/Contact',
    element: <Contact />
  }
]