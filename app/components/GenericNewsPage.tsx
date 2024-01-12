'use client'
import { useEffect, useState } from 'react'
import Article from '@/interaces/interfaces'
import { useSearchParam } from '../Hooks/SearchParamas'

const GenericNewsPage = () => {
  const { apiUrl, country, page, setCountry, setPage } = useSearchParam()
  const [articles, setArticles] = useState<Article[]>([])

  const handleCountryChange = (newCountry: string) => {
    setCountry(newCountry)
  }
  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl)
      if (!response.ok) {
        throw new Error('Failed to fetch news')
      }
      const data = await response.json()
      setArticles(data.articles)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [apiUrl])

  return (
    <div className="max-w-screen-md mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-6 text-black">
        Top Stories in {country}
      </h1>
      <label>Select Country:</label>
      <select
        value={country}
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="us">United States</option>
        <option value="jp">Japan</option>
        <option value="kr">Korea</option>
      </select>
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
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <span className="text-xl font-semibold">Page {page}</span>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded ml-4"
          onClick={() => setPage(page + 1)}
        >
          Next Page
        </button>
      </div>
    </div>
  )
}

export default GenericNewsPage
