import { motion } from 'framer-motion';

import { SocialLink } from '../SocialLink/SocialLink.jsx';

import style from './Contact.module.css'
import { ContactForm } from '../ContactForm/ContactForm.jsx';



export const Contact = () => {
  return (
    <motion.section
      className={style.section} 
      initial={{ x: '100%' }}
      animate={{ x: '0%' }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut'}} >
      <div className={style.contact_container}>

        <motion.div
          className={style.social_side_container}
          initial={{x: '100%'}}
          animate={{x: 0}}
          transition={{duration: 0.5, delay: 0.1}} >
          <SocialLink />
        </motion.div>


        <motion.div
          className={style.form_side_container}
          initial={{x: '200%'}}
          animate={{x: 0}}
          transition={{duration: 0.5, delay: 0.2}} >
          <h1 className={style.title}>Contact Me!</h1>

          <ContactForm />

        </motion.div>

      </div>
    </motion.section>
  )
}
