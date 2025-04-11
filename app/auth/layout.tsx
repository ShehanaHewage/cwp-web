'use client'

import { useIsAuthenticated } from '@/stores/authStore'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useIsAuthenticated()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated, router])

  return <>{children}</>
}

export default AuthLayout
