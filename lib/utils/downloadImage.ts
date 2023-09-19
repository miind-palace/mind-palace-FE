import { toPng } from 'html-to-image'

const downloadILmage = async (element: React.RefObject<HTMLDivElement>) => {
  if (!element.current) {
    console.error('찾을수 없습니다.')
    return
  }
  try {
    const imageUrl = await toPng(element.current, { includeQueryParams: true })
    const imageLink = document.createElement('a')
    imageLink.href = imageUrl
    imageLink.download = 'my_memory.png'
    imageLink.click()
  } catch (error) {
    console.error('이미지 캡쳐에 실패했습니다.')
  }
}

export default downloadILmage
