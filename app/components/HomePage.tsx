'use client'
import { useState, useEffect } from 'react'
import Article from '@/interaces/interfaces'
import config from '../../config'
import Image from 'next/image'

const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const apiKey = config.NEWS_API_KEY

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const data = await response.json()
        setArticles(data.articles)
      } catch (error) {
        console.error('Error fetching news:', error)
      }
    }

    fetchNews()
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold tracking-tight text-center mb-8">
        Top Stories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.slice(0, 5).map((article, index) => (
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
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
            ) : (
              <div className="flex justify-center items-center mx-auto">
                <Image
                  src="/images/placeholder.PNG"
                  alt="No Image available"
                  className="mx-auto"
                  width={200}
                  height={200}
                />
              </div>
            )}
            <p className="text-gray-700 font-medium mb-4">
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
