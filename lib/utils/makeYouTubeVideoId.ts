const makeYouTubeVideoId = (youtubeUrl: string) => {
  if (youtubeUrl.includes('youtu.be/')) {
    return youtubeUrl.slice(youtubeUrl.lastIndexOf('/') + 1)
  }

  if (youtubeUrl.includes('youtube.com')) {
    return new URL(youtubeUrl).searchParams.get('v')
  }
}

export default makeYouTubeVideoId
