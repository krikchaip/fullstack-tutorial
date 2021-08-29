import React, { Fragment, ReactElement } from 'react'

/**
 * a handly utility to prevent [provider hell](https://stackoverflow.com/questions/67467924/how-to-reduce-react-context-hell)
 */
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
