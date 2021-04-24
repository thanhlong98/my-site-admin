import { ACCESS_TOKEN_NAME } from '@/constants'
import Cookies from 'js-cookie'

export const checkIsAuthen = (): boolean => {
  const accessToken = Cookies.get(ACCESS_TOKEN_NAME) // => 'value'

  return !!accessToken
}

export const removeAuthToken = (): boolean => {
  Cookies.remove(ACCESS_TOKEN_NAME)

  return true
}
