import { FaGithub } from 'react-icons/fa'
import logo from '../assets/logo-in-orbit.svg'
import { Button } from '../components/ui/button'

export function SignInWithGitHub() {
  const githubUrl = new URL('https://github.com/login/oauth/authorize')

  githubUrl.searchParams.set('client_id', 'Ov23lihufCIFl3YEotBB')

  return (
    <main className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" />

      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Conclua suas metas semanais, ganhe experiência e suba de nível!
      </p>

      <Button
        className="bg-white text-black hover:bg-white hover:opacity-60"
        asChild
      >
        <a href={githubUrl.toString()}>
          <FaGithub className="size-5" />
          Entrar com Github
        </a>
      </Button>
    </main>
  )
}
