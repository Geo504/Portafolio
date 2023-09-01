import {motion} from 'framer-motion';

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
      transition={{ duration: 0.3, ease: 'easeOut'}} >
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
            <button className={style.btn_contact}>Contact Me!</button>
            <button className={style.btn_contact}>Download CV</button>
          </div>
          <div className={style.social_icons_container}>
            <button className={style.social_icon}><BsGithub /></button>
            <button className={style.social_icon}><BiLogoLinkedin /></button>
            <button className={style.social_icon}><BiLogoGmail /></button>
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
