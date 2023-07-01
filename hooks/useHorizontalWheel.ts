import { debounce } from 'lodash'
import { WheelEvent, useMemo, useRef } from 'react'

const useHorizontalWheel = () => {
  const wheelRef = useRef<null | HTMLDivElement>(null)
  const onWheelHandler = useMemo(
    () =>
      debounce((e: WheelEvent<HTMLDivElement>) => {
        if (wheelRef.current) {
          wheelRef.current.scrollLeft +=
            e.deltaY > 0 ? wheelRef.current.clientWidth + 10 : -wheelRef.current.clientWidth + -10
        }
      }, 100),
    []
  )

  return { wheelRef, onWheelHandler }
}

export default useHorizontalWheel
