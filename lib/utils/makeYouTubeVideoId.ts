const sliceYouTubeUrlType = (youtubeUrl: string) => youtubeUrl.slice()

const isUrlContainsVParam = (youtubeUrl: string) => {
  const regex = /\?v=/
  return regex.test(youtubeUrl)
}

const makeYouTubeVideoId = (youtubeUrl: string) => {
  if (isUrlContainsVParam(youtubeUrl)) return new URL(youtubeUrl).searchParams.get('v') as string
  else return youtubeUrl.slice(youtubeUrl.lastIndexOf('/') + 1)
}

export default makeYouTubeVideoId
