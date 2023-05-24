import axios from 'axios'

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
})

instance.interceptors.request.use(async (config) => {
  const authData = localStorage.getItem('accessToken')
  const accessToken = JSON.parse(authData as string).state.accessToken

  config.headers['x-secret-key'] = process.env.NEXT_PUBLIC_X_SECRET_KEY
  config.headers['X-Api-App-Id'] = process.env.NEXT_PUBLIC_X_API_APP_ID
  config.headers.Authorization = `Bearer ${accessToken}`

  return config
})
