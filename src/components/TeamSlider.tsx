'use client'
import { useState } from 'react';
import Image from 'next/image';

const teamMembers = [
    { src: '/images/team1.png', name: 'Baylee', role: 'Co-President' },
    { src: '/images/team2.png', name: 'Anika', role: 'Co-President' },
    { src: '/images/team3.png', name: 'Jennifer', role: 'Sponsorship Director' },
    { src: '/images/team4.png', name: 'Pallavi', role: 'Sponsorship Director' },
    { src: '/images/team5.png', name: 'Rahil', role: 'Logistics Director' },
    { src: '/images/team6.png', name: 'Max', role: 'Finance Director' },
    { src: '/images/team7.png', name: 'Fatima', role: 'Marketing Director' },
]

export default function TeamSlider() {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % teamMembers.length)
    }
  
    const prevImage = () => {
      setCurrentImage((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length)
    }
  return (
    <div className='bg-[#61BBE2] flex flex-col items-center justify-center p-10 space-y-4'>
      <Image src={teamMembers[currentImage].src} width={300} height={300} alt="Team" />
      <div className="text-center">
        <p className="text-xl font-bold">{teamMembers[currentImage].name}</p>
        <p className="text-lg">{teamMembers[currentImage].role}</p>
      </div>
      <div className="flex justify-center space-x-4">
        <button onClick={prevImage} className="px-4 py-2 rounded bg-[#1F457E] text-white">Previous</button>
        <button onClick={nextImage} className="px-4 py-2 rounded bg-[#1F457E] text-white">Next</button>
      </div>
    </div>
  )
}