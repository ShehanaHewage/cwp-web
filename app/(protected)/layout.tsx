'use client'

import Header from '@/components/layout/Header'
import Loading from '@/components/layout/Loading'
import { useIsAuthenticated } from '@/stores/authStore'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Toaster } from 'sonner'

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useIsAuthenticated()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login')
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return <Loading />
  }

  return (
    <div>
      <Header />
      {children}
      <Toaster position="top-center" richColors />
    </div>
  )
}

export default ProtectedLayout
