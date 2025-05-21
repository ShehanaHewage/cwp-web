"use client";

import Link from 'next/link';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white text-blue-500 shadow-2xl border-b-2 border-gray-300 rounded-b-2xl">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-24">
    <div className="flex items-center space-x-4">
      <img src="/logo.png" alt="Logo" className="w-30 h-30" />
      <span className="text-3xl font-extrabold">CONNECT</span>
    </div>
    <div className="space-x-8 text-lg font-semibold">
      <a href="#home" className="hover:text-blue-700 transition-colors duration-200">Home</a>
      <a href="#features" className="hover:text-blue-700 transition-colors duration-200">Features</a>
      <a href="#about-us" className="hover:text-blue-700 transition-colors duration-200">About us</a>
      <a href="#reviews" className="hover:text-blue-700 transition-colors duration-200">Reviews</a>
      <Link href="/auth/login" className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">Log in</Link>
    </div>
  </div>
</nav>



      {/* Hero Section */}
      <header id="home" className="bg-blue-100 py-16 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">"Connect, Share, And Engage Like Never Before."</h2>
        <p className="text-lg text-gray-700 mb-6">
          Create posts, share ideas, and gather opinions through interactive polls. Experience the future with enhanced AR/MR features that bring your social interactions to life.
        </p>
        <Link href="/auth/login" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">Get Started</Link>
      </header>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center mb-12">FEATURES</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center group transform transition-transform duration-300 hover:scale-105">
              <div className="overflow-hidden">
                <img src="/Pictures Front end/create-posts.jpg" alt="Create Posts" className="mx-auto mb-2 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h4 className="text-xl font-bold mb-2">Create Posts</h4>
              <p className="text-gray-600">Share your thoughts, ideas, and creativity with the world.</p>
              <Link href="/Features/post" className="text-blue-500 hover:underline mt-4 block">Read More</Link>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center group transform transition-transform duration-300 hover:scale-105">
              <div className="overflow-hidden">
                <img src="/Pictures Front end/share-posts.jpg" alt="Share Posts" className="mx-auto mb-2 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h4 className="text-xl font-bold mb-2">Share Posts with Others</h4>
              <p className="text-gray-600">Seamlessly share your content with others and spread your message.</p>
              <Link href="/Features/share" className="text-blue-500 hover:underline mt-4 block">Read More</Link>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center group transform transition-transform duration-300 hover:scale-105">
              <div className="overflow-hidden">
                <img src="/Pictures Front end/create-polls.jpg" alt="Create Polls" className="mx-auto mb-2 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h4 className="text-xl font-bold mb-2">Create Polls</h4>
              <p className="text-gray-600">Gather opinions and insights quickly with interactive polls.</p>
              <Link href="/Features/polls" className="text-blue-500 hover:underline mt-4 block">Read More</Link>
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
            {["Shehana Hewage", "Disanda Epaladeniya", "Himal Anuruddha", "Milinda Madhushan"].map((name, i) => (
              <div className="text-center" key={i}>
                <img src={`/Pictures Front end/team${i + 1}.jpg`} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                <h4 className="font-bold">{name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section id="reviews" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center mb-12">CUSTOMER REVIEWS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M. (Content Creator)",
                img: "/Pictures Front end/reviewer1.jpeg",
                stars: 5,
                review: "I absolutely love this platform! It's so easy to create and share posts.",
              },
              {
                name: "Daniel K. (Community Enthusiast)",
                img: "/Pictures Front end/reviewer2.jpeg",
                stars: 4,
                review: "This website has completely transformed the way I interact online.",
              },
              {
                name: "Priya R. (Student & Poll Enthusiast)",
                img: "/Pictures Front end/reviewer3.jpeg",
                stars: 3,
                review: "I joined to stay updated on my favorite topics, and I've been hooked ever since!",
              },
            ].map(({ name, img, stars, review }, i) => (
              <div key={i} className="bg-gray-100 p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105">
                <div className="mb-4">
                  <img src={img} alt={name} className="w-20 h-20 rounded-full mx-auto" />
                </div>
                <div className="mb-4 flex justify-center">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className={j < stars ? "text-yellow-500" : "text-gray-300"}>★</span>
                  ))}
                </div>
                <p className="text-gray-700">"{review}"</p>
                <h4 className="mt-4 font-bold">{name}</h4>
              </div>
            ))}
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
