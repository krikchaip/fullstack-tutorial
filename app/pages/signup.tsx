import tw from 'twin.macro'
import { useForm } from 'react-hook-form'

import { Input, Button, Icon, Logo } from 'lib/components'

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
    <div
      css={[
        tw`font-notosans laptop:p-10`,
        tw`tablet:(max-w-md p-8)`,
        tw`tablet:(absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2)`,
        tw`tablet:(border border-faded rounded-3xl)`
      ]}
    >
      <Logo tw="hidden tablet:(block mb-7)" />
      <div tw="space-y-[0.875rem]">
        <h1 tw="text-lg font-bold leading-6">
          Join thousands of learners from around the world
        </h1>
        <p>
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </p>
      </div>
      <form tw="my-8 flex flex-col space-y-6" onSubmit={onSignup}>
        <div tw="flex flex-col space-y-4">
          <Input
            type="email"
            icon="mail.solid"
            placeholder="Email"
            showError
            error={errors.email?.message}
            {...register('email', {
              required: { value: true, message: 'Please enter an email!' }
            })}
          />
          <Input
            type="password"
            icon="lock-closed.solid"
            placeholder="Password"
            showError
            error={errors.password?.message}
            {...register('password', {
              required: { value: true, message: 'Please enter a password!' }
            })}
          />
        </div>
        <Button tw="bg-primary" type="submit">
          Start coding now
        </Button>
      </form>
      <p tw="text-sm text-secondary text-center">
        or continue with these social profile
      </p>
      <div tw="py-6 flex justify-center items-center space-x-5">
        <Button
          variant="outline"
          tw="w-11 h-11 rounded-full text-secondary border"
        >
          <Icon name="google" tw="w-[1.125rem] h-[1.125rem]" />
        </Button>
        <Button
          variant="outline"
          tw="w-11 h-11 rounded-full text-secondary border"
        >
          <Icon name="facebook-square" tw="w-[1.125rem] h-[1.125rem]" />
        </Button>
        <Button
          variant="outline"
          tw="w-11 h-11 rounded-full text-secondary border"
        >
          <Icon name="twitter" tw="w-[1.125rem] h-[1.125rem]" />
        </Button>
        <Button
          variant="outline"
          tw="w-11 h-11 rounded-full text-secondary border"
        >
          <Icon name="github" tw="w-[1.125rem] h-[1.125rem]" />
        </Button>
      </div>
      <p tw="text-sm text-secondary text-center">
        Already a member?{' '}
        <a href="/login" tw="text-primary hover:underline">
          Login
        </a>
      </p>
    </div>
  )
}

export type SignupForm = { email: string; password: string }

export default SignupPage
