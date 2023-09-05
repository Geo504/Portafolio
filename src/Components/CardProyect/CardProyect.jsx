import { useState } from 'react'
import {motion} from 'framer-motion';

import {tecnologyIcons} from './Utils/tecnologyIcons';

import style from './CardProyect.module.css'
import { BsGithub, BsInfoCircle } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import { FaReact, FaBootstrap } from 'react-icons/fa';
import { BiLogoCss3, BiLogoHtml5 } from 'react-icons/bi';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';


export const CardProyect = ({ proyect }) => {
  const [open, setOpen] = useState(false);
  return (
    <section className={style.card_container}>

      <BsInfoCircle 
        className={style.more_info_icon}
        onClick={() => setOpen(true)} />


      <motion.div
        className={style.more_info_container}
        animate={{y: open ? '0%' :'-100%'}}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring', bounce: 0.5}}>
        <h4>{proyect.title}</h4>
        <p>{proyect.long_description}</p>
        <MdKeyboardDoubleArrowUp 
          className={style.close_icon} 
          onClick={() => setOpen(false)} />
      </motion.div>


      <div className={style.img_container}>
        <img className={style.img} src={proyect.img} alt=''/>
      </div>

      <div className={style.body_container}>
        <h5>{proyect.title}</h5>
        <p>{proyect.description}</p>
        <div className={style.footer_container}>
          <div className={style.tech_container}>
            {proyect.tecnologies.map((tech, index) => (
              <div key={index}>
                {tecnologyIcons[tech]}
              </div>
            ))}
          </div>
          <div className={style.link_container}>
            <a 
              className={style.social_icon} 
              href={proyect.link_github} 
              target='_blank'>
              <BsGithub />
            </a>
            <a 
              className={style.social_icon} 
              href={proyect.link_demo} 
              target='_blank'>
              <FiExternalLink />
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}
