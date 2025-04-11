const MessagesPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center mr-[15px]">
      <div className="max-w-md w-full p-8 text-center">
        <div className="mb-4">
          <svg
            className="w-16 h-16 mx-auto text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Coming Soon!</h2>
        <p className="text-gray-600">
          Our messaging feature is currently under development. Stay tuned for an amazing communication experience!
        </p>
      </div>
    </div>
  )
}

export default MessagesPage
