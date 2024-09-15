'use client'

import { useState, useEffect } from 'react'
import Loading from '@/app/loading'

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited')
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsLoading(false)
        localStorage.setItem('hasVisited', 'true')
      }, 4000)
      return () => clearTimeout(timer)
    } else {
      setIsLoading(false)
    }
  }, [])

  return (
      <>
        {isLoading && <Loading />}
        {children}
      </>
  )
}