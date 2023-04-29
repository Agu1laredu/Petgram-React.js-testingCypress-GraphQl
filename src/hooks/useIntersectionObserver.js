import { useState, useEffect, useRef } from 'react'

export const useIntersectionObserver = () => {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  const options = {
    threshold: 0.5
  }

  function callBack (entries, observer) {
    Promise.resolve(
      typeof window.IntersectionObserver !==
        'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })
  }

  useEffect(function () {
    const observer = new window.IntersectionObserver(callBack, options)
    observer.observe(element.current)
  }, [element])

  return { element, show }
}
