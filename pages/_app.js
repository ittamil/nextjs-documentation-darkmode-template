import '../styles/globals.css'
import { Progress } from '../components/progress/index'
import { useProgress } from '../components/useProgress'
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {

  const setIsAnimating = useProgress((state) => state.setIsAnimating)
  const isAnimating = useProgress((state) => state.isAnimating)
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true)
    }
    const handleStop = () => {
      setIsAnimating(false)
    }
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router,setIsAnimating])

  
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <Progress isAnimating={isAnimating} />
            <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp