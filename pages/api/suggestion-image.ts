// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { keyword } = req.body
  const PAPAGO_API_URL = process.env.PAPAGO_TRANSLATION_API_URL
  const PAPAGO_CLIENT_ID = process.env.PAPAGO_CLIENT_ID
  const PAPAGO_CLIENT_SECRET = process.env.PAPAGO_CLIENT_SECRET
  const KAKAO_REST_API_KEY = process.env.KAKAO_REST_API_KEY

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Naver-Client-Id': PAPAGO_CLIENT_ID,
    'X-Naver-Client-Secret': PAPAGO_CLIENT_SECRET,
  }
  let text

  try {
    const response = await axios.post(
      PAPAGO_API_URL as string,
      {
        source: 'ko',
        target: 'en',
        text: keyword,
      },
      { headers }
    )

    text = response.data.message.result.translatedText
  } catch (error) {
    console.log(error)

    return res.status(500).json({ message: '키워드 영변환에 실패했습니다.' })
  }

  try {
    const response = await axios.post(
      'https://api.kakaobrain.com/v1/inference/karlo/t2i',
      {
        prompt: {
          text: text + 'by Claude Monet',
          batch_size: 8,
        },
      },
      {
        headers: {
          Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    )

    return res.status(200).json({ ...response.data })
  } catch (error) {
    console.log(error)

    return res.status(500).json({
      message: '이미지 추천에 실패했습니다. 다른 키워드를 입력해 주세요.',
    })
  }
}
