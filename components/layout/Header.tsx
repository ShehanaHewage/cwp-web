'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { HomeIcon, BellIcon, MessageIcon, SearchIcon } from '@/components/icons/SocialIcons'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import ProfileMenu from './ProfileMenu'
import { motion } from 'framer-motion'

const useActiveNavigation = () => {
  const pathname = usePathname()
  const [active, setActive] = useState('home')

  useEffect(() => {
    if (pathname === '/') {
      setActive('home')
    } else if (pathname === '/messages') {
      setActive('messages')
    } else if (pathname === '/notifications') {
      setActive('notifications')
    }
  }, [pathname])

  return active
}

interface NavigationButtonProps {
  href: string
  isActive: boolean
  icon: React.ReactNode
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ href, isActive, icon }) => {
  return (
    <Link href={href}>
      <Button variant="ghost" size="lg" className="relative px-4">
        {icon}
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"
            layoutId="navigation-underline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </Button>
    </Link>
  )
}

const Header: React.FC = () => {
  const active = useActiveNavigation()

  return (
    <div className={cn('sticky top-0 z-10 bg-white border-b border-gray-200', 'transition-all duration-300')}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and search */}
          <div className="flex items-center flex-1">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600 mr-6">CWP</h1>
            </Link>
            <div className="relative max-w-xs w-full hidden md:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-4 w-4 text-gray-400" />
              </div>
              <Input type="text" placeholder="Search..." className="pl-10 bg-gray-50 border-gray-200 w-full" />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-1 flex-1">
            <NavigationButton
              href="/"
              isActive={active === 'home'}
              icon={
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <HomeIcon className={cn('h-6 w-6', active === 'home' ? 'text-blue-600' : 'text-gray-600')} />
                </motion.div>
              }
            />
            <NavigationButton
              href="/messages"
              isActive={active === 'messages'}
              icon={
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <MessageIcon className={cn('h-6 w-6', active === 'messages' ? 'text-blue-600' : 'text-gray-600')} />
                </motion.div>
              }
            />
            <NavigationButton
              href="/notifications"
              isActive={active === 'notifications'}
              icon={
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <BellIcon className={cn('h-6 w-6', active === 'notifications' ? 'text-blue-600' : 'text-gray-600')} />
                </motion.div>
              }
            />
          </div>

          {/* User profile */}
          <div className="flex items-center justify-end flex-1">
            <ProfileMenu />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
