import { Route, Routes, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

import {routes} from '../Routes/Routes.jsx'

export const Views = () => {
  const location = useLocation();

  return (
    <AnimatePresence initial={false} >
      <Routes location={location} key={location.pathname}>
        { routes.map(route=> <Route {...route} key={route.path} />) }
      </Routes>
    </AnimatePresence>
  )
}
