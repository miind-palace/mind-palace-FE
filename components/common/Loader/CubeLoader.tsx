import { createPortal } from 'react-dom'
import { Container } from './CubeLoader.style'
import { useEffect, useState } from 'react'

export interface CubeLoaderProps {
  size?: number
  showBackColor?: boolean
  backColor?: string
  cubeColor?: string
}

const CubeLoader = ({
  size = 60,
  showBackColor,
  backColor = 'rgba(0, 0, 0, 0.2)',
  cubeColor = '#000',
}: CubeLoaderProps) => {
  const [documentElement, setDocumentElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setDocumentElement(document.getElementById('loader-root'))

    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;
      `

    return () => {
      const scrollY = document.body.style.top

      document.body.style.cssText = ''
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
    }
  }, [])

  if (!documentElement) return null

  return createPortal(
    <>
      <Container size={size} backColor={backColor} cubeColor={cubeColor} showBackColor={showBackColor}>
        <div className="cube-wrapper">
          <div className="cube">
            <div className="wraaper-half-1">
              <div className="box-fragment box-fragment-1"></div>
              <div className="box-fragment box-fragment-2"></div>
              <div className="box-fragment box-fragment-5"></div>
            </div>
            <div className="wraaper-half-2">
              <div className="box-fragment box-fragment-3"></div>
              <div className="box-fragment box-fragment-4"></div>
              <div className="box-fragment box-fragment-6"></div>
            </div>
          </div>
        </div>
      </Container>
    </>,
    documentElement
  )
}

export default CubeLoader
