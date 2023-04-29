import { useState, useEffect } from 'react'

export const useCategoriesData = (API) => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window.fetch(API)
      .then(res => res.json())
      .then(res => {
        setCategories(res)
        setLoading(false)
      })
  }
  , [API])

  return { categories, loading }
}
