import { ReactNode } from 'react'

export interface CustomSuspenseProps {
  fallback: ReactNode
  maxDuration?: number
  children: ReactNode
}
