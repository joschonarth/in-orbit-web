import { Loader2 } from 'lucide-react'
import { useEffect } from 'react'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { useAuthenticateFromGitHub } from '../http/generated/api'

export function SignInWithGitHubCallback() {
  const navigate = useNavigate()

  const { mutateAsync: authenticateFromGitHub } = useAuthenticateFromGitHub()

  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')

  useEffect(() => {
    if (!code) return

    authenticateFromGitHub({ data: { code } }).then(response => {
      const token = response.data.token
      const cookies = new Cookies()

      cookies.set('in-orbit.token', token, {
        path: '/',
        maxAge: 60 * 60 * 24, // 1 day
      })

      navigate('/app')
    })
  }, [code, authenticateFromGitHub, navigate])

  if (!code) {
    return <Navigate to="/" />
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <Loader2 className="size-6 text-gray-500 animate-spin" />
    </div>
  )
}
