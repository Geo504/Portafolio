import * as yup from 'yup';


const phoneExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const contactSchema = yup.object().shape({
  fullName: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: yup
    .string()
    .email('Email is not valid')
    .required('Email is required'),
  email_subject: yup
    .string()
    .required('Email subject is required'),
  mobile: yup
    .string()
    .nullable()
    .transform((v, o) => o === '' ? null : v)
    .typeError('Mobile must be a number')
    .matches(phoneExp, 'Phone number is not valid'),
  message: yup
    .string()
    .max(500)
    .required('A message is required'),
})