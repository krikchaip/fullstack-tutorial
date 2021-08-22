import { useForm } from 'react-hook-form'

import { Logo } from 'lib/components'

export function LoginPage() {
  return (
    <div className="w-screen h-screen p-4">
      <nav>
        <Logo />
      </nav>
      <div className="">
        <h1 className="text-lg font-bold">
          Join thousands of learners from around the world
        </h1>
        <p>
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </p>
      </div>
      <form className="">
        <input className="" type="email" name="email" />
        <input className="" type="password" name="password" />
        <button className="" type="submit">
          Start coding now
        </button>
      </form>
      <p>or continue with these social profile</p>
    </div>
  )
}

export default LoginPage
