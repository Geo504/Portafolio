import {motion} from 'framer-motion';
import { Link } from "react-router-dom";

import profile_img from '../../assets/Image/Profile_img.jpg'
import { ParticlesBackground } from '../ParticlesBackground/ParticlesBackground';

import style from './Home.module.css'
import { BsGithub } from 'react-icons/bs';
import { BiLogoLinkedin, BiLogoGmail } from 'react-icons/bi';

export const Home = () => {
  return (
    <motion.section
      className={style.section}
      initial={{ x: '100%' }}
      animate={{ x: '0%' }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut'}} >
      <ParticlesBackground />
      <div className={style.home_container}>

        <div className='position-relative overflow-hidden col-sm-12 col-md-6'>
        <motion.div
          className={style.text_container}
          initial={{y: '100%'}}
          animate={{y: 0}}
          transition={{duration: 0.5, delay: 0.2}} >
          <h2>Hi, I'm Geovanny Valladares</h2>
          <h1>Full-Stack Developer</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, itaque, quidem nihil accusantium qui culpa omnis placeat sit repellendus optio, blanditiis ducimus eaque quos! Atque repellat officiis facere at enim.
          </p>
          <div className={style.btn_container}>
            <Link className={style.btn_contact} to={'/Contact'}>Contact Me!</Link>
            <button className={style.btn_contact}>Download CV</button>
          </div>
          <div className={style.social_icons_container}>
            <a
              className={style.social_icon}
              href='https://github.com/Geo504'
              target='_blank'>
              <BsGithub />
            </a>
            <a 
              className={style.social_icon}
              href='https://www.linkedin.com/in/geovanny-valladares-97975a196'
              target='_blank'>
              <BiLogoLinkedin />
            </a>
            <button className={style.social_icon}>
              <BiLogoGmail />
            </button>
          </div>  
        </motion.div>
        </div>

        <div className='position-relative overflow-hidden'>
        <motion.div 
          className={style.img_container}
          initial={{y: '-100%'}}
          animate={{y: 0}}
          transition={{duration: 0.5, delay: 0.2}} >
          <img className={style.img} src={profile_img} alt=''/>
        </motion.div>
        </div>

      </div>
    </motion.section>
  )
}
