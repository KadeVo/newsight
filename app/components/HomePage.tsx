'use client'
import { useState, useEffect } from 'react'
import Article from '@/interaces/interfaces'
import config from '../../config'
import { useSearchParams } from 'next/navigation'

const HomePage: React.FC = () => {
  const searchParams = useSearchParams()
  const [articles, setArticles] = useState<Article[]>([])
  const apiKey = config.NEWS_API_KEY
  const [sort, setSort] = useState(searchParams.get('sortBy') || '')

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&sortBy=${sort}&apiKey=${apiKey}`
        const response = await fetch(apiUrl)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const data = await response.json()
        console.log(apiUrl)
        console.log(data)
        setArticles(data.articles)
      } catch (error) {
        console.error('Error fetching news:', error)
      }
    }

    fetchNews()
  }, [sort])

  const handleSort = (newSort: string) => {
    setSort(newSort)
    console.log(newSort)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold tracking-tight text-center mb-8 text-black">
        Top Stories
      </h1>
      {/* <label className="text-black pl-4 block mb-2 mt-4">Filter</label>
      <select
        value={sort}
        onChange={(e) => handleSort(e.target.value)}
        className="px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md"
      >
        <option disabled={true} value="">
          Filter
        </option>
        <option value="popularity">Popular</option>
        <option value="relevancy">Relevant</option>
        <option value="publishedAt">Newest</option>
      </select> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.slice(0, 10).map((article, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-100"
          >
            <h2 className="text-2xl font-semibold text-black mb-4">
              {article.title}
            </h2>
            {article.urlToImage ? (
              <div className="w-full h-500 object-cover rounded-t-lg">
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-full object-cover rounded-t-lg pb-4 pt-4"
                />
              </div>
            ) : (
              <div className="flex justify-center items-center mx-auto">
                <img
                  src="/images/placeholder.PNG"
                  alt="No Image available"
                  className="mx-auto"
                  width={200}
                  height={200}
                />
              </div>
            )}
            <p className="flex text-gray-700 font-medium mb-4 justify-center">
              {article.description}
            </p>
            <a
              href={article.url}
              className="flex justify-center px-4 py-2 text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
