'use client'
import { useState, useEffect } from 'react'
import config from '../../config'
import Article from '@/interaces/interfaces'
import Image from 'next/image'

const NewsPage = () => {
  const [currentPage, setPage] = useState(1)
  const [articles, setArticles] = useState<Article[]>([])

  const apiKey = config.NEWS_API_KEY
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=au&page=${currentPage}&apiKey=${apiKey}`

  const fetchPageNews = async () => {
    try {
      const response = await fetch(apiUrl)
      const data = await response.json()
      console.log(data)
      setArticles(data.articles)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchPageNews()
  }, [currentPage])

  return (
    <div>
      <h1>Top Stories</h1>
      <ul>
        {articles.slice(0, 5).map((article, index) => (
          <li key={index}>
            <h2>{article.title}</h2>
            {article.urlToImage ? (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="h-20 w-20"
              />
            ) : (
              <Image
                src="/images/placeholder.PNG"
                alt="No Image available"
                width={200}
                height={200}
              />
            )}
            <p>{article.description}</p>
            <a href={article.url}>Click to read more </a>
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => setPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <span> Page {currentPage} </span>
        <button onClick={() => setPage(currentPage + 1)}>Next Page</button>
      </div>
    </div>
  )
}

export default NewsPage
