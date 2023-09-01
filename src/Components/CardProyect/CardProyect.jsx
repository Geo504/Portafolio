import style from './CardProyect.module.css'
import { BsGithub } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import { FaReact, FaBootstrap } from 'react-icons/fa';
import { BiLogoCss3, BiLogoHtml5 } from 'react-icons/bi';

export const CardProyect = ({ proyect }) => {
  return (
    <section className={style.card_container}>

      <div className={style.img_container}>
        <img className={style.img} src={proyect.img} alt=''/>
      </div>

      <div className={style.body_container}>
        <h5>{proyect.title}</h5>
        <p>{proyect.description}</p>
        <div className={style.footer_container}>
          <div className={style.tech_container}>
            <FaReact className={style.tech_icon} />
            <BiLogoCss3 className={style.tech_icon} />
            <FaBootstrap className={style.tech_icon} />
            <BiLogoHtml5 className={style.tech_icon} />
          </div>
          <div className={style.link_container}>
            <a className={style.social_icon} href={proyect.link_github}><BsGithub /></a>
            <a className={style.social_icon} href={proyect.link_demo}><FiExternalLink /></a>
          </div>
        </div>
      </div>

    </section>
  )
}
