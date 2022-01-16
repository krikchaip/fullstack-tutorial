/* eslint-disable @next/next/no-img-element */

import tw from 'twin.macro'
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'

import Camera from 'public/icon/camera.solid.svg'

import { Button } from '../button'

export type ImageUploadProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export function ImageUpload(props: ImageUploadProps) {
  const { ...otherProps } = props

  const [imageSource, setImageSource] = useState<string>(
    'https://picsum.photos/72'
  )

  async function handleChangePhoto() {
    return
  }

  return (
    <div tw="flex items-center space-x-6" {...otherProps}>
      <div tw="w-[4.5rem] h-[4.5rem] rounded-lg relative cursor-pointer">
        <div
          css={[
            tw`w-full h-full absolute flex items-center justify-center`,
            tw`text-white rounded-[inherit]`,
            tw`opacity-0 hover:opacity-100 backdrop-brightness-75`,
            tw`transition duration-200`
          ]}
        >
          <Camera tw="w-6 h-6 fill-current" />
        </div>
        <img
          tw="w-auto h-auto rounded-[inherit]"
          alt="current photo"
          src={imageSource}
        />
      </div>
      <Button
        tw="h-7 px-2 uppercase text-secondary text-xs font-medium"
        onClick={handleChangePhoto}
      >
        change photo
      </Button>
    </div>
  )
}
