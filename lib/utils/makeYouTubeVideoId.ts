const makeYouTubeVideoId = (youtubeUrl: string) => {
  return new URL(youtubeUrl).searchParams.get('v') || youtubeUrl.slice(youtubeUrl.lastIndexOf('/') + 1)
}

export default makeYouTubeVideoId
