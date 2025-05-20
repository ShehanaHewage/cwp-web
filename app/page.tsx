"use client";

import Link from 'next/link';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    // Enable smooth scrolling globally
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold">CONNECT WITH PEOPLE</h1>
          <div className="space-x-6">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#features" className="hover:underline">Features</a>
            <a href="#about-us" className="hover:underline">About us</a>
            <a href="#reviews" className="hover:underline">Reviews</a>
            <Link href="/auth/login" className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100">Log in</Link>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="bg-blue-100 py-16 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">"Connect, Share, And Engage Like Never Before."</h2>
        <p className="text-lg text-gray-700 mb-6">
          Create posts, share ideas, and gather opinions through interactive polls. Experience the future with enhanced AR/MR features that bring your social interactions to life.
        </p>
        <Link href="/signup" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">Get Started</Link>
      </header>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center mb-12">FEATURES</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center group transform transition-transform duration-300 hover:scale-105">
              <div className="overflow-hidden">
                <img
                  src="/Pictures Front end/create-posts.jpg"
                  alt="Create Posts"
                  className="mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h4 className="text-xl font-bold mb-2">Create Posts</h4>
              <p className="text-gray-600">Share your thoughts, ideas, and creativity with the world.</p>
              <Link href="/features/create-posts" className="text-blue-500 hover:underline mt-4 block">Read More</Link>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center group transform transition-transform duration-300 hover:scale-105">
              <div className="overflow-hidden">
                <img
                  src="/Pictures Front end/share-posts.jpg"
                  alt="Share Posts"
                  className="mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h4 className="text-xl font-bold mb-2">Share Posts with Others</h4>
              <p className="text-gray-600">Seamlessly share your content with others and spread your message.</p>
              <Link href="/features/share-posts" className="text-blue-500 hover:underline mt-4 block">Read More</Link>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center group transform transition-transform duration-300 hover:scale-105">
              <div className="overflow-hidden">
                <img
                  src="/Pictures Front end/create-polls.jpg"
                  alt="Create Polls"
                  className="mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h4 className="text-xl font-bold mb-2">Create Polls</h4>
              <p className="text-gray-600">Gather opinions and insights quickly with interactive polls.</p>
              <Link href="/features/create-polls" className="text-blue-500 hover:underline mt-4 block">Read More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-6">ABOUT US</h3>
          <p className="text-gray-700 mb-12">
            We aim to redefine the way people connect and interact online. Our platform empowers users to express themselves creatively, share meaningful moments, and engage with communities that inspire them.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <img src="/Pictures Front end/team1.jpg" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h4 className="font-bold">Shehana Hewage</h4>
            </div>
            <div className="text-center">
              <img src="/Pictures Front end/team2.jpg" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h4 className="font-bold">Disanda Epaladeniya</h4>
            </div>
            <div className="text-center">
              <img src="/Pictures Front end/team3.jpg" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h4 className="font-bold">Himal Anuruddha</h4>
            </div>
            <div className="text-center">
              <img src="/Pictures Front end/team4.jpg" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h4 className="font-bold">Milinda Madhushan</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
{/* Customer Reviews Section */}
<section id="reviews" className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h3 className="text-2xl font-bold text-center mb-12">CUSTOMER REVIEWS</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Review 1 */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105">
        {/* Reviewer Image */}
        <div className="mb-4">
          <img
            src="/Pictures Front end/reviewer1.jpeg"
            alt="Sarah M."
            className="w-20 h-20 rounded-full mx-auto"
          />
        </div>
        {/* Stars */}
        <div className="mb-4">
          <div className="flex justify-center">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-500 text-lg">★</span>
            ))}
          </div>
        </div>
        {/* Review Content */}
        <p className="text-gray-700">"I absolutely love this platform! It's so easy to create and share posts."</p>
        <h4 className="mt-4 font-bold">Sarah M. (Content Creator)</h4>
      </div>

      {/* Review 2 */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105">
        {/* Reviewer Image */}
        <div className="mb-4">
          <img
            src="/Pictures Front end/reviewer2.jpeg"
            alt="Daniel K."
            className="w-20 h-20 rounded-full mx-auto"
          />
        </div>
        {/* Stars */}
        <div className="mb-4">
          <div className="flex justify-center">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-yellow-500 text-lg">★</span>
            ))}
            <span className="text-gray-300 text-lg">★</span>
          </div>
        </div>
        {/* Review Content */}
        <p className="text-gray-700">"This website has completely transformed the way I interact online."</p>
        <h4 className="mt-4 font-bold">Daniel K. (Community Enthusiast)</h4>
      </div>

      {/* Review 3 */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105">
        {/* Reviewer Image */}
        <div className="mb-4">
          <img
            src="/Pictures Front end/reviewer3.jpeg"
            alt="Priya R."
            className="w-20 h-20 rounded-full mx-auto"
          />
        </div>
        {/* Stars */}
        <div className="mb-4">
          <div className="flex justify-center">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="text-yellow-500 text-lg">★</span>
            ))}
            {[...Array(2)].map((_, i) => (
              <span key={i} className="text-gray-300 text-lg">★</span>
            ))}
          </div>
        </div>
        {/* Review Content */}
        <p className="text-gray-700">"I joined to stay updated on my favorite topics, and I've been hooked ever since!"</p>
        <h4 className="mt-4 font-bold">Priya R. (Student & Poll Enthusiast)</h4>
      </div>
    </div>
  </div>
</section>



      {/* Footer */}
      <footer className="bg-blue-500 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-4">SocialNET</h4>
            <p>Your gateway to meaningful connections and creative expression.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul>
              <li><Link href="/features" className="hover:underline">Features</Link></li>
              <li><Link href="/support" className="hover:underline">Help & Support</Link></li>
              <li><Link href="/terms" className="hover:underline">Terms and Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p>123 Innovation Drive, Silicon Valley, CA 94025, USA</p>
            <p>+94 112 345 678</p>
            <p>socialnet@ltd.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}