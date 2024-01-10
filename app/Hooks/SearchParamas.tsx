import { useSearchParams } from 'next/navigation'
import config from '../../config'
import { useState } from 'react'
export const useSearchParam = () => {
  const searchParams = useSearchParams()
  const apiKey = config.NEWS_API_KEY
  const country = searchParams.get('country') || ''
  // const page = searchParams.get('page') || ''
  // const [currentPage, setPage] = useState(1)
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&page=1&apiKey=${apiKey}`

  return apiUrl
}
