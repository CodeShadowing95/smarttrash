import Image from 'next/image'
import React from 'react'

const LocalInfoCard = ({ type }: { type: string }) => {
  return (
    <div className='max-w-md w-full border rounded-xl overflow-hidden relative'>
      {/* Image */}
      <div className="w-full h-28 rounded-t-xl overflow-hidden border relative">
        <Image src="/assets/banner_login.jpg" alt="user" fill style={{ objectFit: 'cover' }} />
        <div className="absolute inset-0 flex justify-end items-end gap-2 bg-gradient-to-b from-transparent to-black/80 text-white p-2">
          <button className="w-6 h-6 flex justify-center items-center border border-white rounded-full hover:bg-white/20 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm2 4v2h10V7H7zm0 4v2h10v-2H7zm0 4v2h7v-2H7z" fill="currentColor"/></svg>
          </button>
          <button className="w-6 h-6 flex justify-center items-center border border-white rounded-full hover:bg-white/20 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24"><path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"/></svg>
          </button>
          <button className="w-6 h-6 flex justify-center items-center border border-white rounded-full hover:bg-white/20 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/></svg>
          </button>
        </div>
      </div>

      <div className="w-full p-4 mt-2">
        <p className="text-xs text-index-500 font-semibold">{type}</p>
        <p className="text-base font-semibold mt-2">Vigilance porte à porte</p>
        <p className="text-xs text-blue-500 font-semibold mt-1">Lyon</p>
        <p className="text-xs text-gray-500 text-balance mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo repudiandae aspernatur voluptas provident culpa iure corporis! Est, eligendi quibusdam. Tempora fuga, atque laboriosam odit magni voluptatem sed minima officia sapiente?</p>
        <p className="text-[10px] text-gray-500 italic mt-4 text-end">Publié le 15.02.2022</p>
      </div>
    </div>
  )
}

export default LocalInfoCard