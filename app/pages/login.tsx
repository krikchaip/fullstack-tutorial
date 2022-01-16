import tw from 'twin.macro'
import { useForm } from 'react-hook-form'

import { Input, Button, Icon, Logo } from 'lib/components'

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginForm>()

  const onLogin = handleSubmit(async data => {
    // console.log(data)

    return
  })

  return (
    <div
      css={[
        tw`font-notosans laptop:p-10`,
        tw`tablet:(w-[28rem] p-8)`,
        tw`tablet:(absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2)`,
        tw`tablet:(border border-faded rounded-3xl)`
      ]}
    >
      <Logo tw="hidden tablet:(block mb-7)" />
      <h1 tw="text-lg font-bold leading-6">Login</h1>
      <form tw="my-8 flex flex-col space-y-6" onSubmit={onLogin}>
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
          Login
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
        Don't have an account yet?{' '}
        <a href="/signup" tw="text-primary hover:underline">
          Register
        </a>
      </p>
    </div>
  )
}

export type LoginForm = { email: string; password: string }

export default LoginPage
