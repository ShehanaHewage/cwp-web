import { PostProps } from '@/components/feed/Post'

export interface UserProfile {
  id: string
  firstName: string
  lastName: string
  email: string
  username: string
  avatar?: string
  bio?: string
  followers: number
  following: number
}

export const placeholderPosts: PostProps[] = [
  {
    id: 'p1',
    author: {
      id: '2',
      name: 'Jordan Lee',
      avatar: 'https://i.pravatar.cc/150?img=13',
    },
    content:
      "Just launched my new portfolio website! It's been a journey building it with Next.js and Tailwind CSS. Check it out and let me know what you think! 🚀 #WebDevelopment #Portfolio",
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    likes: 42,
    comments: 7,
    shares: 3,
  },
  {
    id: 'p2',
    author: {
      id: '3',
      name: 'Taylor Smith',
      avatar: 'https://i.pravatar.cc/150?img=14',
    },
    content:
      'Beautiful sunset at the beach today! Sometimes you need to take a break from coding and enjoy nature. 🌅 #BeachDay #Sunset',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
    likes: 128,
    comments: 23,
    shares: 12,
    isLiked: true,
  },
  {
    id: 'p3',
    author: {
      id: '4',
      name: 'Casey Wilson',
      avatar: 'https://i.pravatar.cc/150?img=15',
    },
    content:
      "I've been working on a new open-source project to make API integrations easier. Looking for contributors who are interested in TypeScript and API design. Comment if you'd like to join! #OpenSource #TypeScript",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(), // 8 hours ago
    likes: 65,
    comments: 31,
    shares: 8,
  },
  {
    id: 'p4',
    author: {
      id: '5',
      name: 'Riley Johnson',
      avatar: 'https://i.pravatar.cc/150?img=16',
    },
    content:
      'Just finished reading "Atomic Habits" by James Clear. Highly recommend it to anyone looking to build better habits and break bad ones! What are you currently reading? 📚 #AtomicHabits #BookRecommendation',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(), // 12 hours ago
    likes: 87,
    comments: 14,
    shares: 5,
  },
  {
    id: 'p5',
    author: {
      id: '6',
      name: 'Jamie Parker',
      avatar: 'https://i.pravatar.cc/150?img=17',
    },
    content:
      "Big news! I've accepted a position as a Senior Developer at Awesome Tech Company! So excited for this new journey. #NewJob #CareerMove",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
    likes: 215,
    comments: 56,
    shares: 18,
  },
  {
    id: 'p6',
    author: {
      id: '1',
      name: 'Alex Morgan',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    content:
      "I'm working on a new project using React and TypeScript. The type safety is making development so much smoother! What's your favorite TypeScript feature? #React #TypeScript #WebDevelopment",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString(), // 1.5 days ago
    likes: 53,
    comments: 12,
    shares: 4,
    isLiked: true,
  },
]
