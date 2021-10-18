import { css } from 'twin.macro'

// TODO: NotoSans 600
const notosans = css`
  @font-face {
    font-family: NotoSans;
    font-weight: 300;
    font-style: normal;
    src: url('/font/NotoSans/NotoSans-Light.ttf');
  }

  @font-face {
    font-family: NotoSans;
    font-weight: 400;
    font-style: normal;
    src: url('/font/NotoSans/NotoSans-Regular.ttf');
  }

  @font-face {
    font-family: NotoSans;
    font-weight: 400;
    font-style: italic;
    src: url('/font/NotoSans/NotoSans-Italic.ttf');
  }

  @font-face {
    font-family: NotoSans;
    font-weight: 500;
    font-style: normal;
    src: url('/font/NotoSans/NotoSans-Medium.ttf');
  }

  @font-face {
    font-family: NotoSans;
    font-weight: 600;
    font-style: normal;
    src: url('/font/NotoSans/NotoSans-SemiBold.ttf');
  }

  @font-face {
    font-family: NotoSans;
    font-weight: 700;
    font-style: normal;
    src: url('/font/NotoSans/NotoSans-Bold.ttf');
  }

  @font-face {
    font-family: NotoSans;
    font-weight: 700;
    font-style: italic;
    src: url('/font/NotoSans/NotoSans-BoldItalic.ttf');
  }
`

const poppins = css`
  @font-face {
    font-family: Poppins;
    font-weight: 400;
    font-style: normal;
    src: url('/font/Poppins/Poppins-Regular.ttf');
  }

  @font-face {
    font-family: Poppins;
    font-weight: 500;
    font-style: normal;
    src: url('/font/Poppins/Poppins-Medium.ttf');
  }

  @font-face {
    font-family: Poppins;
    font-weight: 600;
    font-style: normal;
    src: url('/font/Poppins/Poppins-SemiBold.ttf');
  }
`

export const fontFace = css`
  ${notosans}
  ${poppins}
`
