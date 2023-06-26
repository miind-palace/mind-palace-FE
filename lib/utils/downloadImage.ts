import html2canvas from 'html2canvas'

const downloadILmage = async (element: HTMLDivElement | null) => {
  if (!element) {
    console.error('찾을수 없습니다.')
    return
  }

  try {
    const canvas = await html2canvas(element)
    const imageUrl = canvas.toDataURL('image/png')

    const imageLink = document.createElement('a')
    imageLink.href = imageUrl
    imageLink.download = 'my_memory.png'
    imageLink.click()
  } catch (error) {
    console.error('이미지 캡쳐에 실패했습니다.')
  }
}

export default downloadILmage
