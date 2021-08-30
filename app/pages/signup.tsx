import { useForm } from 'react-hook-form'

import { Input, Button } from 'lib/components'

export function SignupPage() {
  return (
    <div>
      <div className="space-y-[0.875rem]">
        <h1 className="text-lg font-bold leading-6">
          Join thousands of learners from around the world
        </h1>
        <p>
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </p>
      </div>
      <form className="my-8 space-y-4">
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />
        <Button type="submit">Start coding now</Button>
      </form>
      <p>or continue with these social profile</p>
    </div>
  )
}

export default SignupPage
