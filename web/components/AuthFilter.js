import { useContext } from 'react'
import Auth from './Auth'
import { SessionContext } from './SessionProvider'

export default function AuthFilter({ children }) {
  const session = useContext(SessionContext)
  if (session) {
    return <>{children}</>
  } else {
    return <Auth />
  }
}