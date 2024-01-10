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
    <div className="max-w-screen-md mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-6 text-black">Top Stories</h1>
      <ul className="space-y-8">
        {articles.slice(0, 5).map((article, index) => (
          <li key={index} className="space-y-2">
            <h2 className="text-2xl font-semibold text-black">
              {article.title}
            </h2>
            {article.urlToImage ? (
              <div className="flex justify-center items-center">
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  width={200}
                  height={200}
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
            <p className="text-gray-700">{article.description}</p>
            <a
              href={article.url}
              className="text-blue-500 hover:underline inline-block"
            >
              Click to read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
