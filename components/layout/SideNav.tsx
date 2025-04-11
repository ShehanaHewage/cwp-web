import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import { HomeIcon, BellIcon, MessageIcon } from '@/components/icons/SocialIcons'

interface SideNavProps {
  firstName?: string
  lastName?: string
  avatar?: string
  activeItem?: string
}

const navItems = [
  { label: 'Home', icon: HomeIcon, href: '/' },
  { label: 'Messages', icon: MessageIcon, href: '/messages' },
  { label: 'Notifications', icon: BellIcon, href: '/notifications' },
]

const friendSuggestions = [
  { id: '1', name: 'Alex Johnson', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: '2', name: 'Sam Wilson', avatar: 'https://i.pravatar.cc/150?img=2' },
  { id: '3', name: 'Jamie Lee', avatar: 'https://i.pravatar.cc/150?img=3' },
  { id: '4', name: 'Taylor Swift', avatar: 'https://i.pravatar.cc/150?img=4' },
  { id: '5', name: 'Morgan Freeman', avatar: 'https://i.pravatar.cc/150?img=5' },
]

export default function SideNav({ firstName, lastName, avatar, activeItem }: SideNavProps) {
  return (
    <div className="w-64 hidden md:block h-full overflow-y-auto py-6 px-4 border-r border-gray-200 bg-white">
      {/* User Profile Section */}
      {firstName && (
        <Link href="/profile" className="flex items-center space-x-3 mb-8 pb-4 border-b">
          <Avatar className="h-10 w-10">
            {avatar ? (
              <AvatarImage src={avatar} alt={`${firstName} ${lastName}`} />
            ) : (
              <AvatarFallback className="bg-blue-100 text-blue-600">
                {firstName[0]}
                {lastName ? lastName[0] : ''}
              </AvatarFallback>
            )}
          </Avatar>
          <div>
            <div className="font-medium">
              {firstName} {lastName}
            </div>
            <div className="text-xs text-gray-500">View your profile</div>
          </div>
        </Link>
      )}

      {/* Main Navigation */}
      <nav className="mb-8 pb-4 border-b">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.label}>
                <Link href={item.href}>
                  <div
                    className={cn(
                      'flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors',
                      activeItem === item.label.toLowerCase() && 'bg-blue-50 text-blue-600 font-medium',
                    )}>
                    <Icon
                      className={cn(
                        'h-5 w-5',
                        activeItem === item.label.toLowerCase() ? 'text-blue-600' : 'text-gray-500',
                      )}
                    />
                    <span>{item.label}</span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Friend Suggestions */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3 px-3">People you may know</h3>
        <ul className="space-y-3">
          {friendSuggestions.map((friend) => (
            <li key={friend.id}>
              <Link href={`/profile/${friend.id}`}>
                <div className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={friend.avatar} alt={friend.name} />
                    <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{friend.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
