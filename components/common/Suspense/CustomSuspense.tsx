import { useEffect, useState } from 'react'
import { CustomSuspenseProps } from '../../../lib/types/mainTypes'

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
