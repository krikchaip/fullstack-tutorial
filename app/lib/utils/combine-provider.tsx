import React, { Fragment, ReactElement } from 'react'

export function combineProvider(providers: ReactElement[]) {
  return providers.reduceRight(
    (Children, curr) =>
      ({ children }) =>
        React.cloneElement(curr, undefined, <Children>{children}</Children>),
    Identity
  )
}

const Identity: React.ComponentType = ({ children }) => (
  <Fragment>{children}</Fragment>
)
