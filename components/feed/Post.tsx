import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { HeartIcon, CommentIcon, ShareIcon } from '@/components/icons/SocialIcons'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export interface PostProps {
  id: string
  author: {
    id: string
    name: string
    avatar?: string
  }
  content: string
  image?: string
  createdAt: string
  likes: number
  comments: number
  shares: number
  isLiked?: boolean
}

const Post: React.FC<PostProps> = ({ author, content, image, createdAt, likes, comments, shares, isLiked = false }) => {
  const [liked, setLiked] = useState(isLiked)
  const [likeCount, setLikeCount] = useState(likes)

  const handleLike = () => {
    if (liked) {
      setLikeCount((prev) => prev - 1)
    } else {
      setLikeCount((prev) => prev + 1)
    }
    setLiked(!liked)
  }

  return (
    <Card className="mb-4 overflow-hidden">
      <CardHeader className="p-4 pb-0 flex flex-row items-center space-y-0">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            {author.avatar ? (
              <AvatarImage src={author.avatar} alt={author.name} />
            ) : (
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            )}
          </Avatar>
          <div>
            <div className="font-semibold">{author.name}</div>
            <div className="text-xs text-gray-500">{new Date(createdAt).toLocaleString()}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-sm whitespace-pre-line mb-3">{content}</p>
        {image && (
          <div className="relative rounded-md overflow-hidden mt-2">
            <Image src={image} alt="Post" className="w-full object-cover max-h-96" fill />
          </div>
        )}
      </CardContent>
      <CardFooter className="px-4 py-2 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Button
            variant="ghost"
            size="sm"
            className={cn('flex items-center gap-1 rounded-full', liked && 'text-red-500')}
            onClick={handleLike}>
            <HeartIcon className={cn('h-5 w-5', liked && 'fill-red-500')} />
            <span>{likeCount}</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-1 rounded-full">
            <CommentIcon className="h-5 w-5" />
            <span>{comments}</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-1 rounded-full">
            <ShareIcon className="h-5 w-5" />
            <span>{shares}</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default Post
