import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

import { BurgerButton } from './utils/BurgerButton';
import { CustomLink } from './utils/CustomLink';

import style from './NavBar.module.css'
import { TbHexagonLetterG } from 'react-icons/tb';
import { BiHomeAlt2 } from 'react-icons/bi';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import { BsUiChecks } from 'react-icons/bs';
import { RiMailSendLine } from 'react-icons/ri';

export const NavBar = () => {
  const [showMenu, setshowMenu] = useState(false);
  const [whiteNavbar, setWhiteNavbar] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/Skills') {
      setWhiteNavbar(true);
    } else {
      setWhiteNavbar(false);
    }
  }, [location.pathname]);

  const hideMenu = () => {
    setshowMenu(false);
  }


  return (
    <header className={`${style.navBar_container} ${whiteNavbar?style.white:style.black}`}>
      <div className={style.title_container}>
        <TbHexagonLetterG className={style.title_icon}/>
        <h2 className={style.title}>Geovanny</h2>
      </div>

      <ul className={`${style.link_container} ${showMenu?style.open_menu:''}`}>
        <CustomLink to={'/'} onClick={hideMenu} whitetext={whiteNavbar}>
          <BiHomeAlt2 />
          Home
        </CustomLink>
        <CustomLink to={'/Works'} onClick={hideMenu} whitetext={whiteNavbar}>
          <AiOutlineFolderOpen />
          Works
        </CustomLink>
        <CustomLink to={'/Skills'} onClick={hideMenu} whitetext={whiteNavbar}>
          <BsUiChecks />
          Skills
        </CustomLink>
        <CustomLink to={'/Contact'} onClick={hideMenu} whitetext={whiteNavbar}>
          <RiMailSendLine />
          Contact
        </CustomLink>
      </ul>

      <div className={style.menu_icon} onClick={() => setshowMenu(!showMenu)}>
        <BurgerButton open={showMenu} whiteColor={whiteNavbar}/>
      </div>

    </header>
  )
}
