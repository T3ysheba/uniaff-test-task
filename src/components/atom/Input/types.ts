import type { ChangeEvent, FocusEvent, KeyboardEvent } from 'react'

import type { TSVG } from 'types'

export type TInputProps = {
  name: string
  Icon?: TSVG
  register?: any
  error?: string
  maxLength?: number
  minLength?: number
  disabled?: boolean
  className?: string
  placeholder?: string
  autoComplete?: string
  value?: string | number
  type?: 'text' | 'email' | 'password'
  onBlur?: (data: FocusEvent<HTMLInputElement>) => void
  onFocus?: (data: FocusEvent<HTMLInputElement>) => void
  onKeyDown?: (data: KeyboardEvent<HTMLInputElement>) => void
  onChange?: (value: string | number, event: ChangeEvent<HTMLInputElement>) => void
}
