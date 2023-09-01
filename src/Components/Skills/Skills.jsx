import {motion} from 'framer-motion';

import style from './Skills.module.css'
import { BsGithub } from 'react-icons/bs';
import { FaReact, FaBootstrap, FaPython } from 'react-icons/fa';
import { BiLogoCss3, BiLogoHtml5, BiLogoFlask, BiLogoPostgresql, BiLogoJavascript } from 'react-icons/bi';
import { PiStudentFill } from 'react-icons/pi';
import { GrMysql } from 'react-icons/gr';
import { SiFramer, SiTailwindcss, SiJest } from 'react-icons/si';
import { TbBrandSocketIo } from 'react-icons/tb';

export const Skills = () => {
  return (
    <motion.section 
      className={style.section} 
      initial={{ x: '100%' }}
      animate={{ x: '0%' }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut'}} >
      <div className={style.skills_container}>

        <motion.div 
          className='position-relative overflow-hidden col-12 col-md-6'
          initial={{x: '100%'}}
          animate={{x: 0}}
          transition={{duration: 0.5, delay: 0.1}}  >
          <div className={style.tech_container}>
            <h2 className={style.title}>Tech Stack</h2>

            <div className='d-flex flex-column'> 
              <h5 className={style.tech_title}>Frontend:</h5>
              <div className={style.tech_body}>

                <div className='d-flex flex-column align-items-center'>
                  <BiLogoHtml5 className={style.tech_icon} />
                  <p>HTML</p>
                </div>
                <div className='d-flex flex-column align-items-center'>
                  <BiLogoCss3 className={style.tech_icon} />
                  <p>CSS</p>
                </div>
                <div className='d-flex flex-column align-items-center'>
                  <FaBootstrap className={style.tech_icon} />
                  <p>Bootstrap</p>
                </div>
                <div className='d-flex flex-column align-items-center'>
                  <BiLogoJavascript className={style.tech_icon} />
                  <p>JavaScript</p>
                </div>
                <div className='d-flex flex-column align-items-center'>
                  <FaReact className={style.tech_icon} />
                  <p>React</p>
                </div>
                
              </div>
            </div>


            <div className='d-flex flex-column'> 
              <h5 className={style.tech_title}>Backend:</h5>
              <div className={style.tech_body}>

                <div className='d-flex flex-column align-items-center'>
                  <FaPython className={style.tech_icon} />
                  <p>Python</p>
                </div>
                <div className='d-flex flex-column align-items-center'>
                  <BiLogoFlask className={style.tech_icon} />
                  <p>Flask</p>
                </div>
                <div className='d-flex flex-column align-items-center'>
                  <GrMysql className={style.tech_icon} />
                  <p>MySQL</p>
                </div>
                <div className='d-flex flex-column align-items-center'>
                  <BiLogoPostgresql className={style.tech_icon} />
                  <p>Postgre</p>
                </div>
                <div className='d-flex flex-column align-items-center'>
                  <TbBrandSocketIo className={style.tech_icon} />
                  <p>Socket.io</p>
                </div>

              </div>
            </div>


            <div className='d-flex flex-column'> 
              <h5 className={style.tech_title}>Extras:</h5>
              <div className={style.tech_body}>

                <div className='d-flex flex-column align-items-center'>
                  <BsGithub />
                  <p>GitHub</p>
                </div>
                <div className='d-flex flex-column align-items-center'>
                  <SiFramer className={style.tech_icon} />
                  <p>Motion</p>
                </div>
                <div className='d-flex flex-column align-items-center'>
                  <BiLogoFlask className={style.tech_icon} />
                  <p>Flask</p>
                </div>
                <div className='d-flex flex-column align-items-center'>
                  <SiTailwindcss className={style.tech_icon} />
                  <p>Tailwind</p>
                </div>
                <div className='d-flex flex-column align-items-center'>
                  <SiJest className={style.tech_icon} />
                  <p>Jest</p>
                </div>

              </div>
            </div>

          </div>
        </motion.div>



        <motion.div 
          className='position-relative overflow-hidden col-12 col-md-6'
          initial={{x: '200%'}}
          animate={{x: 0}}
          transition={{duration: 0.5, delay: 0.2}} >
          <div className={style.about_container}>
            <h2 className={style.title}>About Me</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique et, amet corrupti dolores quae optio porro earum sapiente quidem perspiciatis sed harum. Rem error officiis dolor nisi, tenetur corrupti laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates a omnis sint at laudantium maxime laboriosam quis veritatis. Non sint fuga dignissimos tenetur expedita illum eius voluptatibus nesciunt dolores deserunt.
            </p>
          </div>

          <div >
            <h2 className={style.title}>Education</h2>

            <div className={style.studies_container}>
              <div className={style.study_container}>
                <PiStudentFill className={style.study_icon}/>
                <div className={style.study_text}>
                  <h5>Full-Stack Developer</h5>
                  <p>4Geeks Academy</p>
                  <p>2021 - 2022</p>
                </div>
              </div>
              <div className={style.study_container} >
                <PiStudentFill className={style.study_icon} />
                <div className={style.study_text}>
                  <h5>Civil Engineer</h5>
                  <p>Universidad Catolica de Honduras</p>
                  <p>2011 - 2016</p>
                </div>
              </div>
            </div>

          </div>        
        </motion.div>

      </div>
    </motion.section>
  )
}
