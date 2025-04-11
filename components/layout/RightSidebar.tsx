import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const trending = [
  { id: '1', topic: 'Technology', hashtag: '#WebDevelopment', posts: 15432 },
  { id: '2', topic: 'Sports', hashtag: '#WorldCup', posts: 42950 },
  { id: '3', topic: 'Entertainment', hashtag: '#MovieAwards', posts: 28756 },
  { id: '4', topic: 'Science', hashtag: '#SpaceExploration', posts: 12543 },
]

const suggestedAccounts = [
  { id: '1', name: 'Emma Watson', username: '@emmawatson', avatar: 'https://i.pravatar.cc/150?img=31' },
  { id: '2', name: 'Chris Evans', username: '@chrisevans', avatar: 'https://i.pravatar.cc/150?img=32' },
  { id: '3', name: 'Zendaya', username: '@zendaya', avatar: 'https://i.pravatar.cc/150?img=33' },
]

const RightSidebar: React.FC = () => {
  return (
    <div className="w-80 hidden lg:block space-y-6 py-6 px-2 overflow-y-auto h-full bg-white">
      {/* Trending Topics */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Trending Topics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-0">
          {trending.map((item) => (
            <div key={item.id} className="hover:bg-gray-50 cursor-pointer p-2 rounded-md">
              <div className="text-xs text-gray-500">{item.topic}</div>
              <div className="font-semibold text-sm">{item.hashtag}</div>
              <div className="text-xs text-gray-500">{item.posts.toLocaleString()} posts</div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Suggested Accounts */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Who to follow</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-0">
          {suggestedAccounts.map((account) => (
            <div key={account.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={account.avatar} alt={account.name} />
                  <AvatarFallback>{account.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-sm">{account.name}</div>
                  <div className="text-xs text-gray-500">{account.username}</div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="text-xs h-8 rounded-full">
                Follow
              </Button>
            </div>
          ))}
          <Button variant="ghost" size="sm" className="w-full text-blue-600 mt-2">
            Show more
          </Button>
        </CardContent>
      </Card>

      {/* Footer Links */}
      <div className="text-xs text-gray-500 space-y-2 px-4">
        <div className="flex flex-wrap gap-x-2">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Help Center
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Cookie Policy
          </a>
          <a href="#" className="hover:underline">
            Accessibility
          </a>
        </div>
        <div>© 2023 Connect with People, Inc.</div>
      </div>
    </div>
  )
}

export default RightSidebar
