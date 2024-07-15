import type { RootState } from 'types'

const getLogin = (state: RootState) => state.auth.login

export const AuthSelectors = {
  getLogin,
}
