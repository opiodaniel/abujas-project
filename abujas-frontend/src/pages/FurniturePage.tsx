import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

// Furniture Type
interface Furniture {
  id: number;
  name: string;
  price: string;
  image: string;
  category: 'beds' | 'tables' | 'chairs' | 'cupboards' | 'sofas' | 'desks';
  description: string;
}

const FurniturePage = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Sample furniture data
  const furniture: Furniture[] = [
    {
      id: 1,
      name: "Solid Wood Dining Table",
      price: "From UGX 1,200,000",
      image: "Solid-Wood-Dining-Table.jpg",
      category: 'tables',
      description: "Handcrafted from premium mahogany. Perfect for 6-8 people."
    },
    {
      id: 2,
      name: "Modern Office Desk",
      price: "From UGX 750,000",
      image: "Executive-Office-Desk.jpg",
      category: 'desks',
      description: "Sleek design with storage. Ideal for home offices."
    },
    {
      id: 3,
      name: "Queen Size Wooden Bed",
      price: "From UGX 1,800,000",
      image: "Wood-Queen.jpg",
      category: 'beds',
      description: "Sturdy frame with carved headboard. Fits queen mattress."
    },
    {
      id: 4,
      name: "Custom Wardrobe Cupboard",
      price: "From UGX 2,500,000",
      image: "Custom-Closet-Hallway-Grey.jpg",
      category: 'cupboards',
      description: "Tailored to your room. Multiple shelves and hanging space."
    },
    {
      id: 5,
      name: "Leather Lounge Sofa",
      price: "From UGX 2,200,000",
      image: "spencer-ii-leather-pu-the-a2z-furniture.jpg",
      category: 'sofas',
      description: "Comfortable 3-seater with premium leather finish."
    },
    {
      id: 6,
      name: "Dining Room Chairs (Set of 4)",
      price: "From UGX 900,000",
      image: "chairs.png",
      category: 'chairs',
      description: "Matching chairs with cushioned seats. Sold as a set."
    },
  ];

  const filteredFurniture = activeFilter === 'all'
    ? furniture
    : furniture.filter(item => item.category === activeFilter);

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'beds', label: 'Beds' },
    { key: 'tables', label: 'Tables' },
    { key: 'chairs', label: 'Chairs' },
    { key: 'cupboards', label: 'Cupboards' },
    { key: 'sofas', label: 'Sofas' },
    { key: 'desks', label: 'Desks' },
  ];

  return (
    <>
      <Navbar />

      {/* COMPACT HERO - Updated to Red */}
      <section id="hero" className="relative bg-red-900 text-white py-8 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-red-700 rounded-full opacity-20" />
        <div className="absolute -left-16 bottom-0 w-64 h-64 bg-red-800 rounded-full opacity-20" />

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          {/* Left */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
              Quality Furniture. <br /> Built to Last.
            </h1>
            <p className="text-sm md:text-base mb-4 text-red-100 max-w-md mx-auto md:mx-0">
              Handcrafted wooden furniture for your home or office — from beds to custom cupboards.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                to="/hire"
                className="bg-white text-red-900 text-sm px-5 py-2 rounded-lg font-semibold hover:bg-red-50 transition shadow"
              >
                Book a Carpenter
              </Link>
              {/* <Link
                to="/furniture"
                className="bg-red-800 text-white text-sm px-5 py-2 rounded-lg font-semibold hover:bg-red-700 transition shadow"
              >
                Browse Furniture
              </Link> */}
            </div>
            <p className="text-red-100 text-xs mt-3">
              Tables · Beds · Sofas · Cupboards · Desks · Custom
            </p>
          </div>

          {/* Right */}
          <div className="flex-1 mt-6 md:mt-0 flex justify-center">
            <img
              src="/images/furniture-showcase.jpg"
              alt="Handcrafted furniture by Abujas"
              className="max-w-full h-auto rounded-lg shadow-lg w-48 md:w-64"
            />
          </div>
        </div>
      </section>

      <div id="about" className="bg-red-800 px-6 py-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h2 className="text-lg md:text-xl font-bold text-white">
              From Concept to Craftsmanship
            </h2>
            <p className="text-red-100 text-xs md:text-sm">
              Custom or ready-made, Abujas delivers durable, stylish furniture.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#furniture"
              className="bg-white text-red-800 text-xs font-bold py-1.5 px-3 rounded-full hover:bg-red-100 transition shadow-sm"
            >
              Explore Collection
            </a>
          </div>
        </div>
      </div>

      {/* FURNITURE GRID */}
      <section id="furniture" className="py-12 px-6 bg-red-50">
        {/* Header */}
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Shop Furniture</h1>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            Handcrafted, durable furniture made by Abujas' expert carpenters.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium capitalize transition-all duration-300 shadow-sm
                ${
                  activeFilter === key
                    ? 'bg-red-700 text-white'
                    : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-700'
                }
              `}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Furniture Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFurniture.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-red-100"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2">
                  <span className="px-1.5 py-0.5 bg-red-700 text-white text-xs rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                <p className="text-gray-600 text-xs mb-2 line-clamp-2">{item.description}</p>
                <p className="text-red-700 font-bold text-sm mb-3">{item.price}</p>

                <button
                  onClick={() => alert(`Thank you! We'll contact you about: ${item.name}`)}
                  className="w-full bg-red-700 hover:bg-red-800 text-white py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="max-w-xs mx-auto text-center mt-10 bg-white p-5 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Custom Furniture?</h2>
          <p className="text-gray-600 text-sm mb-4">
            We build pieces to fit your space and style.
          </p>
          <Link
            to="/hire"
            className="inline-block bg-red-700 text-white text-sm px-4 py-2 rounded-lg font-semibold hover:bg-red-800 transition"
          >
            Request Custom Piece
          </Link>
        </div>
      </section>
    </>
  );
};

export default FurniturePage;