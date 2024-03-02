import axios from 'axios'

/**
 * @title axiosHttp
 * @description 서비스 전역에서 공통으로 사용할 axios http instance
 */

export const axiosHttp = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_DEFAULT_END_POINT,
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})
