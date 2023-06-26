import { useRef, useEffect } from 'react'

export const useHorizontalScroll = () => {
  const requestImagesContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault()
      if (requestImagesContainerRef.current) {
        requestImagesContainerRef.current.scrollLeft += event.deltaY * 5
      }
      console.log(requestImagesContainerRef.current?.scrollLeft)
    }

    const container = requestImagesContainerRef.current
    if (container) {
      container.addEventListener('wheel', handleScroll, { passive: false })
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll)
      }
    }
  }, [])

  return requestImagesContainerRef
}
