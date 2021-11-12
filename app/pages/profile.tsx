import tw from 'twin.macro'
import Img from 'next/image'

import { Button } from 'lib/components'

/* eslint-disable @next/next/no-img-element */
// TODO: use <Image /> component from 'next/image' instead
export function ProfilePage() {
  const fields: ProfileField[] = [
    {
      type: 'image',
      label: 'photo',
      value: 'https://picsum.photos/72'
    },
    {
      type: 'text',
      label: 'name',
      value: 'Xanthe Neal'
    },
    {
      type: 'text',
      label: 'bio',
      value: 'I am a software developer and a big fan of devchallenges.'
    },
    {
      type: 'text',
      label: 'phone',
      value: '908249274292'
    },
    {
      type: 'text',
      label: 'email',
      value: 'xanthe.neal@gmail.com'
    },
    {
      type: 'mask',
      label: 'password',
      value: '1234567890'
    }
  ]

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
            <h2 tw="text-2xl">Profile</h2>
            <p tw="font-medium text-sm text-secondary">
              Some info may be visible to other people
            </p>
          </div>
          <Button variant="outline" tw="px-8 py-2 text-secondary font-medium">
            Edit
          </Button>
        </div>
        {fields.map((data, idx) => (
          <div
            key={idx}
            css={[
              data.type === 'image' ? tw`py-4` : tw`py-6`,
              tw`py-6 border-b border-lite`,
              tw`last:(pb-0 border-b-0)`,
              tw`flex justify-between items-center`
            ]}
          >
            <span tw="font-medium text-sm tracking-tight text-faded uppercase">
              {data.label}
            </span>
            <div tw="max-w-[60%] tablet:(w-[70%] max-w-none)">
              {data.type === 'image' && (
                <img
                  css={[
                    tw`w-16 h-16 rounded-lg`,
                    tw`laptop:(w-[4.5rem] h-[4.5rem])`
                  ]}
                  src={data.value}
                  alt={data.label}
                />
              )}
              {data.type === 'text' && (
                <p tw="text-plain overflow-hidden overflow-ellipsis whitespace-nowrap">
                  {data.value}
                </p>
              )}
              {data.type === 'mask' && (
                <p tw="text-plain">
                  {Array.from(data.value).map(() => '\u2022')}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export type ProfileField = {
  type: 'image' | 'text' | 'mask'
  label: string
  value: string
}

export default ProfilePage
