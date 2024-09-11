"use client";


import Image from 'next/image';
import React, { useState } from 'react'

const VideoCard = ({ thumbnail, title, description, videoSrc }: { thumbnail: string, title: string, description: string, videoSrc: string }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  return (
    <div className="max-w-md w-full rounded overflow-hidden shadow-lg hover:shadow-2xl bg-white transition-all duration-300 group">
      {isPlaying ? (
        <div className="relative w-full h-56">
          <video
            src={videoSrc}
            controls
            autoPlay
            className="absolute top-0 left-0 w-full h-full"
          ></video>
        </div>
      ) : (
        <div className="relative w-full h-56 cursor-pointer" onClick={handlePlay}>
          <Image
            src={thumbnail}
            alt="Video Thumbnail"
            fill
            style={{ objectFit: 'cover' }}
          />
          {/* Play Icon */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-white" viewBox="0 0 24 24"><path fill="currentColor" d="M10 16.5v-9l6 4.5M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" /></svg>
          </div>
          {/* Views count */}
          <div className="absolute top-2 left-2 flex items-center gap-2 p-1 rounded-md bg-black/50 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" /></svg>
            <p className="font-light text-[13px]">10,000,000</p>
          </div>
          {/* Duration */}
          <div className="absolute bottom-2 right-2 flex items-center gap-2 p-1 rounded-md bg-black/50 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m4.2 14.2L11 13V7h1.5v5.2l4.5 2.7z" /></svg>
            <p className="text-xs">02:57</p>
          </div>

        </div>
      )}
      <div className="px-6 py-4">
        <div className="flex justify-between">
          <div className="font-bold text-xl mb-2">{title}</div>
        </div>
        <p className="text-gray-700 text-sm line-clamp-3 mt-2">
          {description}
        </p>
        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-300 my-4" />
        <div className="flex justify-between items-center">
          <button className="text-white bg-green-700 hover:bg-green-900 focus:outline-none font-medium rounded-lg text-xs px-3 py-2 text-center inline-flex items-center" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" viewBox="0 0 24 24"><path fill="currentColor" d="M5 4v2h14V4zm0 10h4v6h6v-6h4l-7-7z"/></svg>
            Publier
          </button>
          <div className="flex">
            <div className="flex justify-center items-center w-8 h-8 text-gray-500 rounded-full hover:bg-gray-200 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"/></svg>
            </div>
            <div className="flex justify-center items-center w-8 h-8 text-red-500 rounded-full hover:bg-red-100 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard