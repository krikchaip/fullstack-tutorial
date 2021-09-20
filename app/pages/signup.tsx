import { useForm } from 'react-hook-form'

import { Input, Button, Icon } from 'lib/components'

export function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignupForm>()

  const onSignup = handleSubmit(async data => {
    // console.log(data)

    return
  })

  return (
    <div className="font-notosans">
      <div className="space-y-[0.875rem]">
        <h1 className="text-lg font-bold leading-6">
          Join thousands of learners from around the world
        </h1>
        <p>
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </p>
      </div>
      <form className="my-8 flex flex-col space-y-6" onSubmit={onSignup}>
        <div className="flex flex-col space-y-4">
          <Input
            type="email"
            icon="mail.solid"
            placeholder="Email"
            {...register('email', { required: true })}
          />
          <Input
            type="password"
            icon="lock-closed.solid"
            placeholder="Password"
            {...register('password', { required: true })}
          />
        </div>
        <Button className="bg-[#2F80ED]" type="submit">
          Start coding now
        </Button>
      </form>
      <p className="text-sm text-[#828282] text-center">
        or continue with these social profile
      </p>
      <div className="py-6 flex justify-center items-center space-x-5">
        <Button
          variant="outline"
          className="w-11 h-11 rounded-full text-[#828282] border"
        >
          <Icon name="google" className="w-[1.125rem] h-[1.125rem]" />
        </Button>
        <Button
          variant="outline"
          className="w-11 h-11 rounded-full text-[#828282] border"
        >
          <Icon name="facebook-square" className="w-[1.125rem] h-[1.125rem]" />
        </Button>
        <Button
          variant="outline"
          className="w-11 h-11 rounded-full text-[#828282] border"
        >
          <Icon name="twitter" className="w-[1.125rem] h-[1.125rem]" />
        </Button>
        <Button
          variant="outline"
          className="w-11 h-11 rounded-full text-[#828282] border"
        >
          <Icon name="github" className="w-[1.125rem] h-[1.125rem]" />
        </Button>
      </div>
      <p className="text-sm text-[#828282] text-center">
        Already a member?{' '}
        <a href="/login" className="text-[#2F80ED] hover:underline">
          Login
        </a>
      </p>
    </div>
  )
}

export type SignupForm = { email: string; password: string }

export default SignupPage
