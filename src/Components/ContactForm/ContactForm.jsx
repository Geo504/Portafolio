import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { contactSchema } from '../../Schemas/contactSchema.js';

import style from './ContactForm.module.css'
import { FiUser, FiMail } from 'react-icons/fi';
import { TbMailQuestion } from 'react-icons/tb';
import { BsTelephone } from 'react-icons/bs';
import { SlEnvolopeLetter } from 'react-icons/sl';

export const ContactForm = () => {
  const form = useRef();

  const {register, handleSubmit, reset, formState: {errors}} = useForm({
    resolver: yupResolver(contactSchema),
  });


  const onSubmit = handleSubmit((data) => {
    console.log(form.current);
    emailjs.sendForm('service_aadnqkq', 'template_fbplw4s', form.current, 'QmWdYdh4A3pL1_c_j')
    .then((result) => {
      alert('Message sent successfully');
    }, (error) => {
      alert('Something went wrong, please try again');
    });
    reset();
  });

  return (
    <>
    <div className={style.form_container}>
      <form ref={form} onSubmit={onSubmit}>
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
    </>
  )
}
