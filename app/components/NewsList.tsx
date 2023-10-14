'use client'
import { useState, useEffect } from 'react'
import Article from '@/interaces/interfaces'
import config from '../../config'
import Image from 'next/image'
const NewsList: React.FC = () => {
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
        console.log(data)
        setArticles(data.articles)
      } catch (error) {
        console.error('Error fetching news:', error)
      }
    }

    fetchNews()
  }, [])

  return (
    <div>
      <h1>Top Stories</h1>
      <ul>
        {articles.slice(0, 5).map((article, index) => (
          <li key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url}>Click to read more </a>
            {article.urlToImage ? (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="h-20 w-20"
              />
            ) : (
              <Image
                src="images/placeholder.PNG"
                alt="No Image available"
                width={200}
                height={200}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NewsList
