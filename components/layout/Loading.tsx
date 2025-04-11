const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen">
      <div className="relative w-20 h-20">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    </div>
  )
}

export default Loading
