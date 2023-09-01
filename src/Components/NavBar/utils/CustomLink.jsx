import { Link, useMatch, useResolvedPath } from "react-router-dom";

import style from './CustomLink.module.css'

export const CustomLink = ({to, children, onClick, whitetext}) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });


  return (
    <li className={isActive ? style.active : ''} onClick={onClick}>
      <Link className={`${style.link_navbar} ${whitetext?'':style.black_text}`} to={to}>
        {children}
      </Link>
    </li>
  )
}
