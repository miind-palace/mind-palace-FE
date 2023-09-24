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

    text = String(response.data.message.result.translatedText)
  } catch (error: any) {
    return res.send({ ...error })
  }

  try {
    const response = await axios.post(
      'https://api.kakaobrain.com/v2/inference/karlo/t2i',
      {
        prompt:
          text +
          'digital art, stunning beauty, devine beauty, best quality, detailed with 32K UHD resolution, masterpiece, distinct, highres, best dynamic composition',
        negative_prompt:
          'poorly drawn hands, poorly drawn feet, photorealistic, poorly drawn face, out of frame, body out of frame, watermark, distorted face, bad anatomy, ugly, mutilated, disfigured, mutation, bad proportions, cropped head, cross-eye, mutilated, distorted eyes, strabismus, skin blemishes, missing anatomy, missing body, missing face, missing legs, missing fingers, missing feet, missing toe, fewer digits, extra limbs, extra anatomy, extra face, extra arms, extra fingers, extra hands, extra legs, extra feet, extra toe, mutated hands',
        return_type: 'base64_string',
        width: 568,
        height: 264,
        nsfw_checker: true,
        image_quality: 100,
        samples: '8',
      },
      {
        headers: {
          Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    )

    return res.status(200).json({ ...response.data })
  } catch (error: any) {
    console.log(error)
    return res.send({ ...error })
  }
}
