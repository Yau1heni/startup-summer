import { authService } from '@/services/login-service'
import { useEffect } from 'react'
import { useAuthStore } from '@/store/useAuthStore'

const payloadMock = {
  login: process.env.NEXT_PUBLIC_LOGIN,
  password: process.env.NEXT_PUBLIC_PASSWORD,
  client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
  client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
  hr: 0,
}

export type PayloadMockType = typeof payloadMock

export const useAccessToken = () => {
  const token = useAuthStore((state) => state.accessToken)
  const setToken = useAuthStore((state) => state.setAccessToken)

  useEffect(() => {
    if (token.length === 0) {
      authService.login(payloadMock).then((res) => setToken(res.access_token))
    }
  }, [token, setToken])

  return [token, setToken]
}
