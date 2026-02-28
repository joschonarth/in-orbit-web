import { createBrowserRouter } from 'react-router-dom'
import { Application } from './pages/application'
import { SignInWithGitHub } from './pages/sign-in-with-github'
import { SignInWithGitHubCallback } from './pages/sign-in-with-github-callback'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SignInWithGitHub />,
  },
  {
    path: '/app',
    element: <Application />,
  },
  {
    path: '/auth/github/callback',
    element: <SignInWithGitHubCallback />,
  },
])
