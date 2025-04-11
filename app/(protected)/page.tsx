'use client'

import SideNav from '@/components/layout/SideNav'
import RightSidebar from '@/components/layout/RightSidebar'
import PostInput from '@/components/feed/PostInput'
import PostFeed from '@/components/feed/PostFeed'
import { useAuthUser } from '@/stores/authStore'

export default function HomePage() {
  const user = useAuthUser()

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex flex-1 relative">
        <div className="sticky top-16 h-[calc(100vh-64px)]">
          <SideNav
            firstName={user?.firstName}
            lastName={user?.lastName}
            avatar={user?.avatar || undefined}
            activeItem="home"
          />
        </div>

        <main className="flex-1 max-w-2xl mx-auto py-6 px-4 sm:px-6 lg:px-8 overflow-y-auto">
          <PostInput />
          <PostFeed />
        </main>

        <div className="sticky top-16 h-[calc(100vh-64px)]">
          <RightSidebar />
        </div>
      </div>
    </div>
  )
}
