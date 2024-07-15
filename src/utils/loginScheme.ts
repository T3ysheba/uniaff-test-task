import { object, string } from 'yup'

const loginScheme = object().shape({
  email: string()
    .required('Электронная почта обязательна')
    .email('Некорректный формат электронной почты')
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, 'Электронная почта не должна содержать пробелов'),
  password: string()
    .min(6, 'Пароль должен содержать не менее 6 символов')
    .matches(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
    .required('Пароль обязателен для заполнения'),
})

export default loginScheme
