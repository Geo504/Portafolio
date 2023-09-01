import {easeInOut, motion} from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { contactSchema } from '../../Schemas/contactSchema.js';
import conect from '../../assets/svg/conect.svg'

import style from './Contact.module.css'
import { BsGithub } from 'react-icons/bs';
import { BiLogoLinkedin, BiLogoGmail } from 'react-icons/bi';
import { FiUser, FiMail } from 'react-icons/fi';
import { TbMailQuestion } from 'react-icons/tb';
import { BsTelephone } from 'react-icons/bs';
import { SlEnvolopeLetter } from 'react-icons/sl';

export const Contact = () => {

  const {register, handleSubmit, reset, formState: {errors}} = useForm({
    resolver: yupResolver(contactSchema),
  });


  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

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
          <div className={style.social_tag_left}>
            <button className={style.social_btn}>
              <BiLogoGmail />
            </button>
            <span>geovannyvalladares94@gmail.com</span>
          </div>

          <div className={style.social_tag_right}>
            <span>https://github.com/Geo504</span>
            <a 
              className={style.social_btn}
              href='https://github.com/Geo504'
              target='_blank'>
              <BsGithub />
            </a>
          </div>

          <div className={style.social_tag_left}>
            <button className={style.social_btn}>
              <BiLogoLinkedin />
            </button>
            <span>www.linkedin.com/in/geovanny-valladares-97975a196</span>
          </div>

          <div className={style.img_container}>
            <img className={style.img} src={conect} alt=""/>
          </div>
        </motion.div>


        <motion.div
          className={style.form_side_container}
          initial={{x: '200%'}}
          animate={{x: 0}}
          transition={{duration: 0.5, delay: 0.2}} >
          <h1 className={style.title}>Contact Me!</h1>

          <div className={style.form_container}>
            <form onSubmit={onSubmit}>
              <div className={style.input_container}>

                <div className={style.input_group}>
                  <div className={`position-relative ${errors.fullName?style.error:''}`}>
                    <input 
                      type="text" 
                      name='fullName'
                      {...register('fullName')}
                      placeholder=''/>
                    <label htmlFor='fullName'>Full Name:</label>
                    <FiUser className={style.form_icon} />
                    {<span>{errors.fullName?.message}</span>}
                  </div>
                  <div className={`position-relative ${errors.mobile?style.error:''}`}>
                    <input 
                      type="text" 
                      name='mobile'
                      {...register('mobile')}
                      placeholder='' />
                    <label htmlFor='mobile'>Mobile Number:</label>
                    <BsTelephone className={style.form_icon} />
                    {<span>{errors.mobile?.message}</span>}
                  </div>
                </div>
                
                <div className={style.input_group}>
                  <div className={`position-relative ${errors.email?style.error:''}`}>
                    <input 
                      type="text"
                      name='email'
                      {...register('email')}
                      placeholder='' />
                    <label htmlFor='email'>Email:</label>
                    <FiMail className={style.form_icon} />
                    {<span>{errors.email?.message}</span>}
                  </div>
                  <div className={`position-relative ${errors.email_subject?style.error:''}`}>
                    <input 
                      type="text" 
                      name='email_subject'
                      {...register('email_subject')}
                      placeholder='' />
                    <label htmlFor='email_subject'>Email Subject:</label>
                    <TbMailQuestion className={style.form_icon} />
                    {<span>{errors.email_subject?.message}</span>}
                  </div>
                </div>

                <div className={`${style.textarea_box} ${errors.message?style.error:''}`}>
                  <textarea 
                    name='message'
                    {...register('message')}
                    placeholder='' >
                  </textarea>
                  <label htmlFor='message'>Write your message:</label>
                  <SlEnvolopeLetter className={style.textarea_icon} />
                  {<span>{errors.message?.message}</span>}
                </div>
              </div>

              <div className={style.btn_submit_container}>
                <button type='submit' className={style.btn_submit}>
                  Send
                </button>
              </div>
            </form>
          </div>

        </motion.div>

      </div>
    </motion.section>
  )
}
