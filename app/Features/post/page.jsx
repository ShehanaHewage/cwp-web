"use client"; // For App Router — optional in Pages Router

import Link from 'next/link';

export default function PostFeaturePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">"Create Stunning Posts"</h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-12">
        Share your thoughts, ideas, and creativity with ease. Our powerful post creation tools let you express yourself like never before.
      </p>

      <div className="bg-gray-50 rounded-xl shadow-lg p-10 w-full max-w-xl text-left">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">How It Works</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700">
          <li>
            <strong>Step 1:</strong> Write your content using our intuitive editor.
          </li>
          <li>
            <strong>Step 2:</strong> Add media (images, videos) to bring your message to life.
          </li>
          <li>
            <strong>Step 3:</strong> Publish your post instantly and reach your audience.
          </li>
        </ol>
      </div>

      <div className="mt-12 flex flex-wrap justify-between w-full max-w-xl text-sm text-blue-500">
        <Link href="/#features" className="hover:underline">&larr; Back to Features</Link>
        <Link href="/create" className="hover:underline">Start Creating &rarr;</Link>
      </div>
    </div>
  );
}