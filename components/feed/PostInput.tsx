import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { PhotoIcon, EmojiIcon } from '@/components/icons/SocialIcons'
import Image from 'next/image'
import { useAuthUser } from '@/stores/authStore'

const PostInput: React.FC = () => {
  const authUser = useAuthUser()
  const [content, setContent] = useState('')
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = () => {
    if (content.trim() || selectedImage) {
      setContent('')
      setSelectedImage(null)
      setPreviewUrl(null)
    }
  }

  const handleRemoveImage = () => {
    setSelectedImage(null)
    setPreviewUrl(null)
  }

  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <div className="flex space-x-3">
          <Avatar className="h-10 w-10">
            {authUser?.avatar ? (
              <AvatarImage src={authUser.avatar} alt={authUser.firstName} />
            ) : (
              <AvatarFallback>{authUser.firstName.charAt(0)}</AvatarFallback>
            )}
          </Avatar>
          <div className="flex-1">
            <textarea
              className="w-full border-none focus:ring-0 resize-none text-sm h-24 bg-gray-50 rounded-lg p-3"
              placeholder={`What's on your mind, ${authUser?.firstName.split(' ')[0]}?`}
              value={content}
              onChange={(e) => setContent(e.target.value)}></textarea>
            {previewUrl && (
              <div className="relative mt-2 rounded-lg overflow-hidden">
                <Image src={previewUrl} alt="Preview" className="max-h-60 w-full object-cover" fill />
                <Button
                  variant="destructive"
                  size="sm"
                  className="absolute top-2 right-2 rounded-full h-6 w-6 p-0"
                  onClick={handleRemoveImage}>
                  &times;
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t py-3">
        <div className="flex space-x-2">
          <label className="cursor-pointer">
            <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
            <div className="flex items-center text-gray-500 hover:text-gray-700 text-sm gap-1">
              <PhotoIcon className="h-5 w-5" />
              <span>Photo</span>
            </div>
          </label>
          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
            <EmojiIcon className="h-5 w-5 mr-1" />
            <span>Emoji</span>
          </Button>
        </div>
        <Button
          onClick={handleSubmit}
          disabled={!content.trim() && !selectedImage}
          className="bg-blue-600 hover:bg-blue-700 text-white">
          Post
        </Button>
      </CardFooter>
    </Card>
  )
}

export default PostInput
