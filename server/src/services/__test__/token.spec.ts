import { Token } from '../token'

it('no "SECRET" throws an error', async () => {
  const tokenService = new Token()

  process.env.SECRET = ''
  expect(() => tokenService.sign({})).toThrowErrorMatchingInlineSnapshot(
    `"secretOrPrivateKey not found"`
  )
})

it('with "SECRET" returns a token', async () => {
  const tokenService = new Token()

  process.env.SECRET = 'SUPER_SECRET'
  expect(tokenService.sign({ name: 'winner' })).toEqual(expect.any(String))
})
