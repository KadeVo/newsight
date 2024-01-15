'use client'
import { useEffect, useState } from 'react'
import Article from '@/interaces/interfaces'
import { useSearchParam } from '../Hooks/SearchParamas'

const GenericNewsPage = () => {
  const {
    apiUrl,
    country,
    page,
    setCountry,
    setPage,
    setCategory,
    category,
    categories,
    setSort,
    sort,
  } = useSearchParam()
  const [articles, setArticles] = useState<Article[]>([])

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory)
  }
  const handleSort = (newSort: string) => {
    setSort(newSort)
  }

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
      <h1 className="text-4xl font-bold tracking-tight text-center mb-8 text-black">
        Top Stories in {country}
      </h1>
      <div className="flex pb-10">
        <div className="flex-1">
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
          </select>
          <label className="text-black pl-4 block mb-2 mt-4">Country:</label>
          <select
            value={country}
            onChange={(e) => handleCountryChange(e.target.value)}
            className="px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md"
          >
            <option disabled={true} value="">
              Choose a country
            </option>
            <option value="us">United States</option>
            <option value="jp">Japan</option>
            <option value="kr">Korea</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="text-black pl-4 block mb-2 mt-4">Category:</label>
          <select
            value={category}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md"
          >
            <option disabled={true} value="">
              Choose a category
            </option>
            {categories.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ul className="space-y-8">
        {articles.slice(0, 10).map((article, index) => (
          <li key={index} className="space-y-2">
            <h2 className="text-2xl font-semibold text-black mb-4">
              {article.title}
            </h2>
            <div className="flex justify-center items-center w-full rounded overflow-hidden">
              {article.urlToImage ? (
                <div className="flex justify-center w-full h-500 object-cover rounded-t-lg">
                  <img src={article.urlToImage} alt={article.title} />
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
            </div>
            <p className="flex text-gray-700 font-medium mb-4 justify-center">
              {article.description}
            </p>
            <a
              href={article.url}
              className="flex justify-center px-4 py-2 text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
        <span className="text-xl font-semibold text-black">Page {page}</span>
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
