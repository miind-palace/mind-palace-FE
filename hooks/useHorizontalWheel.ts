import debounce from 'lodash/debounce'
import { WheelEvent, useRef } from 'react'

const useHorizontalWheel = () => {
  const wheelRef = useRef<null | HTMLDivElement>(null)
  const onWheelHandler = debounce((e: WheelEvent<HTMLDivElement>) => {
    if (wheelRef.current) {
      wheelRef.current.scrollLeft +=
        e.deltaY > 0 ? wheelRef.current.clientWidth + 24 : -wheelRef.current.clientWidth + -24
    }
  }, 100)

  return { wheelRef, onWheelHandler }
}

export default useHorizontalWheel
