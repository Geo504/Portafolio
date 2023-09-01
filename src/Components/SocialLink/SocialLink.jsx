import conect from '../../assets/svg/conect.svg'

import style from './SocialLink.module.css'
import { BsGithub } from 'react-icons/bs';
import { BiLogoLinkedin, BiLogoGmail } from 'react-icons/bi';

export const SocialLink = () => {
  return (
    <>
      <div className={style.social_tag_left}>
        <button className={style.social_btn}>
          <BiLogoGmail />
        </button>
        <span>geovannyvalladares94@gmail.com</span>
      </div>

      <div className={style.social_tag_right}>
        <a 
          className={style.social_btn}
          href='https://github.com/Geo504'
          target='_blank'>
          <BsGithub />
        </a>
        <span>github.com/Geo504</span>
      </div>

      <div className={style.social_tag_left}>
        <a 
          className={style.social_btn}
          href='https://www.linkedin.com/in/geovanny-valladares-97975a196'
          target='_blank' >
          <BiLogoLinkedin />
        </a>
        <span>www.linkedin.com/in/geovanny-valladares-97975a196</span>
      </div>

      <div className={style.img_container}>
        <img className={style.img} src={conect} alt=""/>
      </div>
    </>
  )
}
