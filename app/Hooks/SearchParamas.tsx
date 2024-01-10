import { useSearchParams } from 'next/navigation'
import config from '../../config'
import { useState, useEffect } from 'react'

export const useSearchParam = () => {
  const searchParams = useSearchParams()
  const apiKey = config.NEWS_API_KEY
  const [country, setCountry] = useState(searchParams.get('country') || '')
  const [page, setPage] = useState(1)

  useEffect(() => {
    setCountry(searchParams.get('country') || '')
    const pageParam = parseInt(searchParams.get('page') || '1', 10)
    setPage(pageParam)
  }, [searchParams])

  const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&page=${page}&apiKey=${apiKey}`

  return {
    apiUrl,
    country,
    page,
    setCountry,
    setPage,
  }
}
