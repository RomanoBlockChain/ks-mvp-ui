import { isEmpty } from '@/utils/helper'
import { NextComponentType } from 'next'
import { useSession } from 'next-auth/react'
import { BaseContext } from 'next/dist/shared/lib/utils'
import { useRouter } from 'next/router'
import { JSX } from 'react'

function withAuth<T extends BaseContext>(Component: any) {
  const Auth = (props: T) => {
    // Login data added to props via redux-store (or use react context for example)
    const route = useRouter()

    // Login data added to props via redux-store (or use react context for example)
    const { data } = useSession()

    // If user is not logged in, return login component
    if (isEmpty(data)) {
      return route.push('/signin')
    }

    // If user is logged in, return original component
    return <Component {...props} />
  }

  // Copy getInitial props so it will run as well
  // if (Component.getInitialProps) {
  //   Auth.getInitialProps = Component.getInitialProps
  // }

  return Auth
}

export default withAuth
