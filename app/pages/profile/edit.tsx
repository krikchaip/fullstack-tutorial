import tw from 'twin.macro'
import { useFieldArray, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

import { Button, Input } from 'lib/components'

export function ProfileEditPage() {
  const router = useRouter()

  return (
    <div tw="mb-4">
      <div tw="text-center space-y-2 mb-8">
        <h1 css={[tw`text-2xl`, tw`tablet:text-4xl`]}>Personal info</h1>
        <p css={[tw`font-light text-sm`, tw`tablet:text-lg`]}>
          Basic info, like your name and photo
        </p>
      </div>
      <div
        css={[
          tw`mx-auto`,
          tw`tablet:(max-w-[80%] px-8 py-6 border rounded-xl)`,
          tw`laptop:(max-w-3xl px-12 py-7)`
        ]}
      >
        <div tw="flex justify-between items-center">
          <div tw="space-y-1 max-w-[55%]">
            <h2 tw="text-2xl">Change Info</h2>
            <p tw="font-medium text-sm text-secondary">
              Changes will be reflected to every services
            </p>
          </div>
          <Button
            variant="outline"
            tw="px-8 py-2 text-danger font-medium"
            onClick={() => {
              confirm(
                'The data has been modified, your changes will be discarded. Do you want to proceed?'
              ) && router.back()
            }}
          >
            Back
          </Button>
        </div>
        {/* TODO: map each field like on index page and use `useFieldArray` */}
        <Input
          type="text"
          label="Name"
          placeholder="Enter your name..."
          tw="border-secondary placeholder-faded"
        />
        <Textarea
          label="Bio"
          placeholder="Enter your bio..."
          rows={3}
          tw="text-xs resize-none border-secondary placeholder-faded"
        />
        <Input
          type="tel"
          label="Phone"
          placeholder="Enter your phone..."
          tw="border-secondary placeholder-faded"
        />
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email..."
          tw="border-secondary placeholder-faded"
        />
        <Input
          type="password"
          label="Password"
          placeholder="Enter your password..."
          tw="border-secondary placeholder-faded"
        />
        <Button type="submit" tw="px-6 py-2 bg-primary">
          Save
        </Button>
      </div>
    </div>
  )
}

export default ProfileEditPage
