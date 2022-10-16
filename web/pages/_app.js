import '../styles/globals.css'
import SessionProvider from '../components/SessionProvider'
import AuthFilter from '../components/AuthFilter'

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <AuthFilter>
        <Component {...pageProps} />
      </AuthFilter>
    </SessionProvider>
  ) 

}

export default MyApp
