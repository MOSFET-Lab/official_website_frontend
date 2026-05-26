"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Star, Heart, Share2, Mail, Facebook, Twitter, MapPin, ChevronRight, ArrowLeft } from 'lucide-react';

// Mock Data - In a real app, this would come from a database or API
const PRODUCT_DATA = {
  "smart-ai-lighting": {
    name: "Smart AI Lighting System",
    price: 49.90,
    originalPrice: 79.00,
    description: "Adaptive, intelligent, and energy-efficient lighting solutions powered by MOSFET AI & IoT systems. Features real-time automation and 3D visualization compatibility.",
    colors: [
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Cyber Blue', hex: '#3b82f6' },
      { name: 'Deep Black', hex: '#000000' }
    ],
    // 4 Unique Images
    images: [
      "https://media.printables.com/media/prints/721759/images/5691337_b81da326-41d2-4320-80bf-63ff911c94fb_c19b47f6-47f6-4639-ae8e-39d4c65c82c0/thumbs/inside/1600x1200/png/bild4.webp",
      "https://media.printables.com/media/prints/721759/stls/5656631_7eb12d03-4b84-49db-95e1-dd4bb276bda7_9a17667d-0543-41c2-987f-a4bf18c4bf44/thumbs/inside/1600x1200/png/pilz_3_preview.webp",
      "https://media.printables.com/media/prints/721759/images/5745828_a87be2e5-5fbc-4c25-8122-003933b03318_7d8a5d2d-3ee6-40a2-bb2f-3bc14a6fd852/thumbs/inside/1600x1200/png/bild3.webp",
      "https://media.printables.com/media/prints/721759/images/5656631_7eb12d03-4b84-49db-95e1-dd4bb276bda7_d3b589f5-b294-4aa0-8b1d-8d79420fbeac/thumbs/inside/1600x1200/jpg/sam_4745.webp"
    ]
  },
  "majestic-dragon": {
    name: "Majestic Dragon Statue",
    price: 29.90,
    originalPrice: 45.00,
    description: "Experience precision lighting with immersive 3D visualization and real-time automation. Perfect for modern workspaces and smart homes.",
    colors: [
      { name: 'Neon Purple', hex: '#a855f7' },
      { name: 'Cyan Glow', hex: '#22d3ee' }
    ],
    images: [
      "https://i.etsystatic.com/58083831/r/il/2fc3e5/7314911297/il_1588xN.7314911297_ht2r.jpg",
      "https://i.etsystatic.com/58083831/r/il/4ca987/7314911733/il_1588xN.7314911733_9qq2.jpg",
      "https://i.etsystatic.com/58083831/r/il/951e16/7314911747/il_1588xN.7314911747_fbvk.jpg",
      "https://i.etsystatic.com/58083831/r/il/a8bbff/7314911757/il_1588xN.7314911757_nt5q.jpg"
    ]
  }
};

export default function ProductDetail() {
 const params = useParams();
  const productId = Array.isArray(params.id) ? params.id[0] : params.id || "smart-ai-lighting";
  const product = PRODUCT_DATA[productId as keyof typeof PRODUCT_DATA] || PRODUCT_DATA["smart-ai-lighting"];

  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [qty, setQty] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const [activeImg, setActiveImg] = useState(product.images[0]);

  

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-zinc-100 transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        
        {/* Navigation / Back Button */}
        <div className="flex items-center gap-4 mb-6">
           <button 
            onClick={() => window.history.back()} 
            className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest hover:text-red-600 transition-colors"
           >
            <ArrowLeft size={14} /> Back
           </button>
           <div className="h-3 w-px bg-zinc-300"></div>
           {/* Breadcrumbs */}
           <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-zinc-400">
             <span className="hover:text-blue-500 cursor-pointer">Home</span>
             <ChevronRight size={10} />
             <span className="hover:text-blue-500 cursor-pointer">Products</span>
             <ChevronRight size={10} />
             <span className="text-zinc-800 dark:text-zinc-200 font-bold">{product.name}</span>
           </nav>
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          
          {/* LEFT: IMAGE GALLERY */}
          <div className="md:col-span-7 flex gap-4">
            {/* Clickable Thumbnails */}
            <div className="hidden md:flex flex-col gap-3 w-20">
              {product.images.map((imgUrl, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImg(imgUrl)}
                  className={`aspect-3/4 border overflow-hidden transition-all ${
                    activeImg === imgUrl 
                    ? 'border-blue-500 ring-2 ring-blue-500/20' 
                    : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-400'
                  }`}
                >
                  <img src={imgUrl} alt="thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            
          
                        {/* Main Image */}
            <div className="relative w-full aspect-square md:aspect-4/3 max-h-125 bg-zinc-50 dark:bg-zinc-900 overflow-hidden">
            <img 
            src={activeImg} 
            alt={product.name} 
            className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal" 
            />
            {/* WORKABLE FAVORITE ICON */}
            <button 
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute top-5 right-5 p-3 bg-white/80 dark:bg-zinc-800/80 backdrop-blur rounded-full hover:scale-110 transition shadow-sm"
            >
                <Heart 
                size={20} 
                className={`transition-colors duration-300 ${isFavorite ? 'fill-red-600 text-red-600' : 'text-zinc-600 dark:text-zinc-300'}`} 
                />
            </button>
            </div>
                    </div>

          {/* RIGHT: PRODUCT INFO (5 COLUMNS) */}
          <div className="md:col-span-5">
            <div className="inline-block bg-red-600 text-white text-[10px] font-black px-2 py-1 mb-4">
              SPECIAL MOSFET OFFER
            </div>
            
            <h1 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 leading-none">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-xs text-zinc-400 border-b border-zinc-400 cursor-pointer">128 REVIEWS</span>
            </div>

            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-zinc-400 line-through text-xl">${product.originalPrice.toFixed(2)}</span>
              <span className="text-blue-500 text-4xl font-black">${product.price.toFixed(2)}</span>
            </div>

            <hr className="border-zinc-100 dark:border-zinc-800 mb-8" />

            {/* Color Selection
            <div className="mb-8">
              <p className="text-xs font-bold uppercase mb-4 tracking-widest">
                Color: <span className="font-normal text-zinc-500 italic ml-2">{selectedColor}</span>
              </p>
              <div className="flex gap-4">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${selectedColor === color.name ? 'border-blue-500 scale-110' : 'border-transparent'}`}
                    style={{ backgroundColor: color.hex, boxShadow: 'inset 0 0 5px rgba(0,0,0,0.1)' }}
                  />
                ))}
              </div>
            </div> */}

            {/* Size Selection */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <p className="text-xs font-bold uppercase tracking-widest">Select Variant:</p>
                <button className="text-[10px] font-bold border-b border-black dark:border-white uppercase">Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {['Basic', 'Pro', 'Enterprise', 'AI-Max'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-xs font-bold border transition-all ${
                      selectedSize === size 
                      ? 'border-2 border-zinc-900 dark:border-white bg-zinc-900 dark:bg-white text-white dark:text-black' 
                      : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold uppercase">Qty:</span>
                <select 
                  className="bg-black border border-blue-500 dark:border-zinc-200 p-2 text-sm w-20"
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                >
                  {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>

              <button className="w-full bg-blue-500 hover:bg-purple-700 text-white font-black py-5 tracking-widest transition-transform active:scale-95">
                ADD TO CART
              </button>
              
              <button className="w-full border border-zinc-300 dark:border-zinc-700 font-bold py-4 flex items-center justify-center gap-2 hover:bg-zinc-50 dark:hover:bg-zinc-900">
                <MapPin size={18} className="text-blue-600" /> FIND IN NEAREST HUB
              </button>
            </div>

            {/* Social Share */}
            <div className="flex justify-center gap-6 mt-10 text-zinc-400">
              <Mail size={18} className="hover:text-blue-500 cursor-pointer" />
              <Facebook size={18} className="hover:text-blue-500 cursor-pointer" />
              <Twitter size={18} className="hover:text-blue-500 cursor-pointer" />
              <Share2 size={18} className="hover:text-blue-500 cursor-pointer" />
            </div>

            <div className="mt-10 border-t dark:border-zinc-800 pt-6">
              <div className="flex gap-8 border-b dark:border-zinc-800 mb-6">
                <button className="pb-2 border-b-2 border-black dark:border-white font-bold text-xs uppercase">Product Detail</button>
                <button className="pb-2 text-zinc-400 font-bold text-xs uppercase">Specs & Tech</button>
              </div>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}