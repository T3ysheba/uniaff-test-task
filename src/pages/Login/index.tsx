import { useCallback, type FC } from 'react'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { loginScheme } from 'utils'
import { login } from 'store/auth/actions'
import { Button, Input } from 'components'
import { EmailIcon, LockIcon } from 'assets'
import { TLoginFormData } from 'store/auth/types'
import { AuthSelectors } from 'store/auth/selectors'
import { useAppDispatch, useAppSelector } from 'libraries/redux'

import styles from './Login.module.scss'

const Login: FC = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<TLoginFormData>({
    mode: 'onChange',
    resolver: yupResolver(loginScheme),
  })

  const dispatch = useAppDispatch()
  const { loading } = useAppSelector(AuthSelectors.getLogin)

  const onSubmit = useCallback(
    (data: TLoginFormData) => {
      dispatch(login({ email: data.email, password: data.password })).then(() => reset())
    },
    [dispatch, reset]
  )

  return (
    <section className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <h1 className={styles.wrapper__container__title}>Войдите в свой профиль</h1>

        <form className={styles.wrapper__form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.wrapper__input__column}>
            <Input
              placeholder='Электронная почта'
              register={register}
              error={errors?.email?.message}
              Icon={EmailIcon}
              name='email'
              className={styles.wrapper__email}
            />

            <Input
              placeholder='Пароль'
              register={register}
              error={errors?.password?.message}
              Icon={LockIcon}
              type='password'
              name='password'
              className={styles.wrapper__password}
            />
          </div>

          <NavLink to='' className={classNames(styles.wrapper__forgot, styles.wrapper__link)}>
            Забыли пароль?
          </NavLink>

          <div className={styles.wrapper__button__column}>
            <Button isLoading={loading} type='submit' disabled={!isValid || !isDirty}>
              Войти
            </Button>

            <NavLink to='' className={styles.wrapper__link}>
              Зарегистрироваться
            </NavLink>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login
