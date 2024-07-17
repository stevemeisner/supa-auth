export const ROUTES: { [key: string]: string } = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  FORGOT_PASSWORD: '/forgot-password',
  FORGOT_PASSWORD_SUCCESS: '/forgot-password/success',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  DASHBOARD: '/dashboard',
  PROTECTED: '/protected',
}

export const UNAUTHENTICATED_ROUTES = [
  ROUTES.HOME,
  ROUTES.LOGIN,
  ROUTES.SIGNUP,
  ROUTES.FORGOT_PASSWORD,
  ROUTES.FORGOT_PASSWORD_SUCCESS,
]
