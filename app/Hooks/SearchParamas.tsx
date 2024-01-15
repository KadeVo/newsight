import { useSearchParams } from 'next/navigation'
import config from '../../config'
import { useState, useEffect } from 'react'

export const useSearchParam = () => {
  const searchParams = useSearchParams()
  const apiKey = config.NEWS_API_KEY
  const defaultCategory = 'general'
  const defaultCountry = 'us'
  const [country, setCountry] = useState(
    searchParams.get('country') || defaultCountry
  )
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState(
    searchParams.get('category') || defaultCategory
  )

  const categories = [
    { value: '', label: 'Choose a category' },
    { value: 'business', label: 'Business' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'general', label: 'General' },
    { value: 'health', label: 'Health' },
    { value: 'science', label: 'Science' },
    { value: 'sports', label: 'Sports' },
    { value: 'technology', label: 'Technology' },
  ]

  useEffect(() => {
    setCountry(searchParams.get('country') || '')
    const pageParam = parseInt(searchParams.get('page') || '1', 10)
    setPage(pageParam)
  }, [searchParams])

  const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&apiKey=${apiKey}`

  return {
    apiUrl,
    country,
    page,
    category,
    setCountry,
    setCategory,
    setPage,
    categories,
  }
}
