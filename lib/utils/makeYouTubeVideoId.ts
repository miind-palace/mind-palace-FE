const isUrlContainsVParam = (youtubeUrl: string) => {
  const regex = /\?v=/
  return regex.test(youtubeUrl)
}

const makeYouTubeVideoId = (youtubeUrl: string) => {
  if (!youtubeUrl.includes('youtu.be/') && !youtubeUrl.includes('youtube.com')) return ''

  if (isUrlContainsVParam(youtubeUrl)) return new URL(youtubeUrl).searchParams.get('v') as string
  else return youtubeUrl.slice(youtubeUrl.lastIndexOf('/') + 1)
}

export default makeYouTubeVideoId
