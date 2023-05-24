import { instance } from '@/services/config'
import { PayloadMockType } from '@/hooks/useAccessToken'

export const authService = {
  login: (params: PayloadMockType) => {
    return instance
      .get<LoginResponseType>('oauth2/password/', {
        params,
      })
      .then((res) => res.data)
  },
}

type LoginResponseType = {
  access_token: string
  refresh_token: string
  ttl: number
  expires_in: number
  token_type: string
  reg_user_resumes_count: number
}
