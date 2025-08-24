import React from "react";
import { Link } from 'react-router-dom';
// import memory1 from '.'

export default function Gallery() {
  // Contoh data gambar bento
  const items = [
    { id: 1, src: '../assets/tes.png', title: 'Moment 1' },
    { id: 2, src: 'https://source.unsplash.com/random/400x400?sig=2', title: 'Moment 2' },
    { id: 3, src: 'https://source.unsplash.com/random/400x400?sig=3', title: 'Moment 3' },
    { id: 4, src: 'https://source.unsplash.com/random/400x400?sig=4', title: 'Moment 4' },
    { id: 5, src: 'https://source.unsplash.com/random/400x400?sig=5', title: 'Moment 5' },
    { id: 6, src: 'https://source.unsplash.com/random/400x400?sig=6', title: 'Moment 6' },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-6">Gallery Bento</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl">
        {items.map(item => (
          <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center justify-center">
            <img src={item.src} alt={item.title} className="object-cover w-full h-40 md:h-56" />
            <div className="p-2 text-center text-black font-semibold">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}