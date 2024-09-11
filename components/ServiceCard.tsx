import Image from 'next/image'
import React from 'react'

const ServiceCard = ({ service }: any) => {
  return (
    <div className="w-full flex flex-col p-4 border border-gray-300 rounded-xl">
      <div className="flex justify-between items-start">
        <div className="flex gap-2">
          {/* Icon Service */}
          <Image src="/assets/default_image.png" alt="Logo" width={80} height={80} />
          <div className="flex flex-col">
            <p className="font-semibold text-gray-900">{service.nom}</p>
            <p className="text-gray-400 text-xs font-medium">Index.tv</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          {/* Publication status */}
          <span className="bg-green-100 text-green-700 border-2 border-green-600 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5 me-1.5" viewBox="0 0 32 32"><circle cx="16" cy="16" r="8" fill="currentColor"/></svg>
            En ligne
          </span>
          {/* Options */}
          <div className="flex">
            <div className="flex justify-center items-center w-6 h-6 text-gray-500 rounded-full hover:bg-gray-200 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"/></svg>
            </div>
            <div className="flex justify-center items-center w-6 h-6 text-red-500 rounded-full hover:bg-gray-200 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/></svg>
            </div>
          </div>
        </div>
      </div>

      {/* services */}
      <p className="text-gray-500 text-xs line-clamp-3 mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque omnis cupiditate corrupti quis tenetur porro veritatis pariatur sed est eum, dolore fugit numquam quos maxime at! Vel est laboriosam deserunt?</p>
      {/* <div className="flex flex-col gap-2 mt-4">
        {service.services.map((item: any) => (
          <p key={item} className="text-gray-500 text-sm">- {item}</p>
        ))}
      </div> */}
    </div>
  )
}

export default ServiceCard