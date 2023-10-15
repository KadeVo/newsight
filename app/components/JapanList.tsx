'use client'
import { useState, useEffect } from 'react'
import config from '../../config'
import Article from '@/interaces/interfaces'
import Image from 'next/image'

const JapanList = () => {
  const [currentPage, setPage] = useState(1)
  const [articles, setArticles] = useState<Article[]>([])

  const apiKey = config.NEWS_API_KEY
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=jp&page=${currentPage}&apiKey=${apiKey}`

  const fetchJapanNews = async () => {
    try {
      const response = await fetch(apiUrl)
      const data = await response.json()
      setArticles(data.articles)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchJapanNews()
  }, [currentPage])

  return (
    <div className="max-w-screen-md mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-6 text-black">
        Top Stories in Japan
      </h1>
      <ul className="space-y-8">
        {articles.map((article, index) => (
          <li key={index} className="space-y-2">
            <h2 className="text-2xl font-semibold text-black">
              {article.title}
            </h2>
            <div className="flex justify-center items-center w-full h-40 rounded overflow-hidden">
              {article.urlToImage ? (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  width={200}
                  height={200}
                />
              ) : (
                <Image
                  src="/images/placeholder.PNG"
                  alt="No Image available"
                  className="mx-auto"
                  width={150}
                  height={150}
                />
              )}
            </div>
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
      <div className="mt-8">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mr-4"
          onClick={() => setPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <span className="text-xl font-semibold">Page {currentPage}</span>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded ml-4"
          onClick={() => setPage(currentPage + 1)}
        >
          Next Page
        </button>
      </div>
    </div>
  )
}

export default JapanList
