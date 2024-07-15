import { forwardRef, useState, type FocusEvent, type ChangeEvent, type LegacyRef, type KeyboardEvent } from 'react'
import classNames from 'classnames'

import { Tooltip } from 'components'
import { ErrorIcon, HideIcon, ShowIcon } from 'assets'

import type { TInputProps } from './types'
import styles from './Input.module.scss'

const Input = forwardRef(
  (
    {
      name,
      Icon,
      error,
      value,
      onBlur,
      onFocus,
      register,
      disabled,
      onChange,
      maxLength,
      minLength,
      onKeyDown,
      type = 'text',
      className = '',
      placeholder = '',
      autoComplete = 'off',
    }: TInputProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const isPassword = type === 'password'

    const inputClassName = classNames(styles.wrapper__input, {
      [styles.wrapper__input__error]: error,
      [styles.wrapper__input__icon]: Icon,
    })

    const eyeIconToggler = () => {
      setIsOpen(!isOpen)
    }

    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      onChange?.(value, e)
    }

    const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
      onBlur?.(e)
    }

    const onFocusHandler = (e: FocusEvent<HTMLInputElement>) => {
      onFocus?.(e)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      onKeyDown?.(e)
    }

    const onRegisterChangeCallback = {
      onChange: onChangeValueHandler,
      onBlur: onBlurHandler,
    }

    return (
      <div data-testid='input-wrapper' className={classNames(className, styles.wrapper)}>
        <div className={styles.wrapper__box}>
          {Icon ? <Icon data-testid='input-icon' className={styles.wrapper__icon} /> : null}

          <input
            ref={ref}
            name={name}
            value={value}
            disabled={disabled}
            data-testid='input'
            maxLength={maxLength}
            minLength={minLength}
            onBlur={onBlurHandler}
            onFocus={onFocusHandler}
            placeholder={placeholder}
            className={inputClassName}
            autoComplete={autoComplete}
            onKeyDown={onKeyDownHandler}
            onChange={onChangeValueHandler}
            type={isOpen ? 'text' : type}
            {...(register ? register(name, onRegisterChangeCallback) : null)}
          />

          {error || isPassword ? (
            <div className={styles.wrapper__box__container}>
              {error ? (
                <Tooltip showFromStart className={styles.wrapper__error} content={error}>
                  <ErrorIcon />
                </Tooltip>
              ) : null}

              {isPassword ? (
                <div
                  onClick={eyeIconToggler}
                  data-testid='input-password'
                  className={classNames(styles.wrapper__box__eye, { [styles.wrapper__box__eye__open]: isOpen })}
                >
                  {!isOpen ? <HideIcon /> : <ShowIcon />}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    )
  }
)

export default Input
