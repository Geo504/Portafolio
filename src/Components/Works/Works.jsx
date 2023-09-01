import {motion} from 'framer-motion';

import { CardProyect } from '../CardProyect/CardProyect.jsx'
import {proyectsData} from '../../Context/proyectData.jsx'

import style from './Works.module.css'

export const Works = () => {
  return (
    <motion.section 
      className={style.section}
      initial={{ x: '100%' }}
      animate={{ x: '0%' }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut'}} >
      <div className={style.works_container}>
        <motion.h1 
          className={style.title}
          initial={{x: '500%'}}
          animate={{x: 0}}
          transition={{duration: 0.5, delay: 0.2}} >
          My Projects
        </motion.h1>

        <motion.div 
          className={style.cards_container}
          initial={{x: '100%'}}
          animate={{x: 0}}
          transition={{duration: 0.5, delay: 0.1}} >
          {proyectsData.map((proyect) => (
            <CardProyect key={proyect.id} proyect={proyect} />
          ))}
        </motion.div>

      </div>
    </motion.section>
  )
}