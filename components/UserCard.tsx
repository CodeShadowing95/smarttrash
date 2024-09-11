import Image from 'next/image'
import React from 'react'

const UserCard = () => {
  return (
    <div className="w-full flex justify-center items-start p-4 hover:border hover:border-[#de7665] hover:shadow-xl hover:shadow-[#de7665]/10 rounded-xl transition-all duration-300 group">
      {/* Image */}
      <Image src="/assets/149071.png" alt="user" width={100} height={100} className="rounded-full" />
      {/* Text */}
      <div className="flex flex-col ml-4">
        <p className="text-gray-900 font-bold text-xl">Livaï Akermann</p>
        <p className="text-gray-500 text-sm font-semibold">Admin - CEO</p>
        {/* Socials */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-[#de7665] text-white flex items-center justify-center cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"/></svg>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#de7665] text-white flex items-center justify-center cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"/></svg>
            </div>
          </div>
          <div className="w-8 h-8 rounded-lg bg-red-500 hover:bg-red-600 opacity-0 group-hover:opacity-100 text-white flex items-center justify-center cursor-pointer transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/></svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard