import * as Yup from "yup";
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


export const validationFormSchema = Yup.object().shape({
  name: Yup.string()
      .required('*')
      .matches(/^[aA-zZ\s]+$/, "only alphabets are allowed")
      .min(3, '* /min - 3smb/'),
  surName: Yup.string()
      .required('*')
      .matches(/^[aA-zZ\s]+$/, "only alphabets are allowed")
      .min(3, '* /min - 3smb/'),
  age: Yup.number()
      .required('*')
      .min(1, '* to young! /min age: 1/')
      .max(120, '* to old! /max age: 120/'),
  email: Yup.string()
      .required('*')
      .email('* invalid email! /all rules for email required/'),
  address: Yup.string()
      .required('*')
      .min(10, '* /min - 10smb/'),
  phone: Yup.string()
      .required('*')
      .matches(/^[0-9]{10}$/, '* /numbers only - 10smb/'),
  // .matches(phoneRegExp, '* /phone/'),
  password: Yup.string()
      .required('*')
      .min(3, '* too short password! /min - 3smb/'),
  confirmPassword: Yup.string()
      .required('*')
      .oneOf(
          [Yup.ref("password")],
          "* does not match the password!"
      )
})
