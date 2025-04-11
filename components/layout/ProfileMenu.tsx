import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { useAuthUser, useClearAuth } from '@/stores/authStore'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { toast } from 'sonner'
import { InfoIcon } from 'lucide-react'

const ProfileMenu: React.FC = () => {
  const user = useAuthUser()
  const clearAuth = useClearAuth()

  const showCommingSoonToast = () => {
    toast.success('Coming Soon!', {
      description: 'This feature is currently under development.',
      icon: <InfoIcon className="w-4 h-4" />,
    })
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2 rounded-md px-2 py-1.5 hover:bg-gray-100 transition-colors cursor-pointer">
          <Avatar className="p-2 bg-blue-100 rounded-full border border-gray-200 overflow-hidden">
            {user.avatar ? (
              <AvatarImage src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
            ) : (
              <AvatarFallback className="bg-blue-100 text-blue-600 font-medium flex items-center justify-center">
                {user.firstName[0]}
                {user.lastName ? user.lastName[0] : ''}
              </AvatarFallback>
            )}
          </Avatar>
          <div className="hidden md:block">
            <div className="text-sm font-medium text-gray-800">
              {user.firstName} {user.lastName}
            </div>
            <div className="text-xs text-gray-500">{user.username}</div>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem className="cursor-pointer" onClick={() => showCommingSoonToast()}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={() => showCommingSoonToast()}>
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={() => clearAuth()}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProfileMenu
