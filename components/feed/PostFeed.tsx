import Post from './Post'
import { placeholderPosts } from '@/data/placeholderData'

const PostFeed: React.FC = () => {
  return (
    <div className="space-y-6">
      {placeholderPosts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  )
}

export default PostFeed
