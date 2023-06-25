import { useEffect, useState } from 'react'
import ColorThief from 'colorthief'

const usePickImageColor = (imgSrc: string) => {
  const [color, setColor] = useState<string>('')

  useEffect(() => {
    const img = new Image()
    img.crossOrigin = 'Anonymous'
    img.src = imgSrc
    img.onload = async function () {
      const colorThief = new ColorThief()
      const result = await colorThief.getColor(img)
      setColor(`rgb(${result[0]}, ${result[1]}, ${result[2]})`)
    }
  }, [imgSrc])

  return color
}

export default usePickImageColor
