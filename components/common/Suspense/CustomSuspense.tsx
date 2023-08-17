import { useEffect, useState, ReactNode } from 'react'

interface CustomSuspenseProps {
  fallback: ReactNode
  maxDuration?: number
  children: ReactNode
}

export default function CustomSuspense({ fallback, maxDuration, children }: CustomSuspenseProps) {
  const [loadingDone, setLoadingDone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingDone(true)
    }, maxDuration)

    return () => clearTimeout(timer)
  }, [maxDuration])

  return <>{loadingDone ? children : fallback}</>
}
