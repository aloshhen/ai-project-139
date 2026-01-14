import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, Star, Users, Calendar, Package, Shield, 
  ChevronRight, ChevronDown, Info 
} from 'lucide-react'

function App() {
  const [activeCollection, setActiveCollection] = useState('summer')

  const dressCollections = {
    summer: [
      { id: 1, image: 'https://images.unsplash.com/photo-1600784906988-1381b9ef4e1a?w=600&q=80', name: 'Sunny Day Dress', price: '$45' },
      { id: 2, image: 'https://images.unsplash.com/photo-1546552916-fc952087f6c7?w=600&q=80', name: 'Floral Sunshine', price: '$55' },
      { id: 3, image: 'https://images.unsplash.com/photo-1615241586239-3020db58f445?w=600&q=80', name: 'Beach Party Dress', price: '$65' }
    ],
    winter: [
      { id: 1, image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80', name: 'Cozy Snowflake', price: '$65' },
      { id: 2, image: 'https://images.unsplash.com/photo-1602810318383-e5ec7990f71f?w=600&q=80', name: 'Winter Wonderland', price: '$75' },
      { id: 3, image: 'https://images.unsplash.com/photo-1520256862855-398fff4b9860?w=600&q=80', name: 'Festive Charm', price: '$85' }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-soft-pink to-white font-playful">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-pink-500" />
            <span className="text-2xl font-bold text-gray-900">Petite Elegance</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#collections" className="text-gray-600 hover:text-pink-500 transition-colors">Collections</a>
            <a href="#about" className="text-gray-600 hover:text-pink-500 transition-colors">About</a>
            <a href="#order" className="text-gray-600 hover:text-pink-500 transition-colors">Order</a>
          </div>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-semibold transition-colors">
            Shop Now
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Dress Your <span className="text-pink-500">Little Princess</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl text-gray-700 mb-8 max-w-2xl mx-auto"
          >
            Adorable, comfortable, and stylish dresses for your little ones
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center space-x-4"
          >
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full flex items-center gap-2 transition-colors">
              View Collections <ChevronRight className="w-5 h-5" />
            </button>
            <button className="border border-pink-500 text-pink-500 hover:bg-pink-50 px-8 py-3 rounded-full transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section id="collections" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our <span className="text-pink-500">Collections</span>
          </h2>
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-full p-1 flex space-x-2">
              <button 
                onClick={() => setActiveCollection('summer')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCollection === 'summer' 
                    ? 'bg-pink-500 text-white' 
                    : 'text-gray-600 hover:bg-pink-100'
                }`}
              >
                Summer
              </button>
              <button 
                onClick={() => setActiveCollection('winter')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCollection === 'winter' 
                    ? 'bg-pink-500 text-white' 
                    : 'text-gray-600 hover:bg-pink-100'
                }`}
              >
                Winter
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {dressCollections[activeCollection].map((dress) => (
              <motion.div 
                key={dress.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img 
                  src={dress.image} 
                  alt={dress.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900">{dress.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-pink-500 font-bold">{dress.price}</span>
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 bg-lavender/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <Star className="w-12 h-12 text-pink-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Premium Quality</h3>
              <p className="text-gray-600">
                Crafted with the finest materials for comfort and style
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-pink-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Family Friendly</h3>
              <p className="text-gray-600">
                Designs that kids love and parents trust
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <Shield className="w-12 h-12 text-pink-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Safe Materials</h3>
              <p className="text-gray-600">
                Non-toxic, hypoallergenic fabrics for sensitive skin
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-pink-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Create Magical Memories
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Dress your little ones in styles that spark joy and imagination
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-pink-600 px-10 py-4 rounded-full hover:bg-pink-50 transition-colors">
              Explore Now
            </button>
            <button className="border border-white text-white px-10 py-4 rounded-full hover:bg-white/20 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Heart className="w-12 h-12 mx-auto text-pink-500 mb-4" />
            <h3 className="text-2xl font-bold">Petite Elegance</h3>
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">Home</a>
            <a href="#collections" className="text-gray-400 hover:text-pink-500 transition-colors">Collections</a>
            <a href="#about" className="text-gray-400 hover:text-pink-500 transition-colors">About</a>
            <a href="#order" className="text-gray-400 hover:text-pink-500 transition-colors">Order</a>
          </div>
          <p className="text-gray-500">
            © 2024 Petite Elegance. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App