"use client";

import React, { useEffect, useState } from 'react'
import { ModalCategory, ModalVideo } from '../Modals';

const AddVideoBtn = ({ isMobile, label }: { isMobile: boolean, label: string }) => {
  const [isOpen, setIsOpen] = useState(false)
  // Dropdowns
  const [toggleAddDropdown, setToggleAddDropdown] = useState(false)
  // Modals
  const [toggleModalCategory, setToggleModalCategory] = useState(false)
  const [toggleModalVideo, setToggleModalVideo] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (toggleAddDropdown && !event.target.closest('#dropdown-category-video')) {
        setToggleAddDropdown(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [toggleAddDropdown])

  return (
    <>
      {isMobile ? (
        <div className="fixed bottom-24 right-4 w-12 h-12 z-50 lg:hidden">
          <div className="w-full h-full relative md:hidden">
            <button type="button" className="w-12 h-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-3 text-center inline-flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24"><path fill="currentColor" d="M12 19c0 .34.03.67.08 1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1l2 4h3L8 4h2l2 4h3l-2-4h2l2 4h3l-2-4h4v8.68A6.995 6.995 0 0 0 12 19m11.8 1.4c.1 0 .1.1 0 .2l-1 1.7c-.1.1-.2.1-.3.1l-1.2-.4c-.3.2-.5.3-.8.5l-.2 1.3c0 .1-.1.2-.2.2h-2c-.1 0-.2-.1-.3-.2l-.2-1.3c-.3-.1-.6-.3-.8-.5l-1.2.5c-.1 0-.2 0-.3-.1l-1-1.7c-.1-.1 0-.2.1-.3l1.1-.8v-1l-1.1-.8c-.1-.1-.1-.2-.1-.3l1-1.7c.1-.1.2-.1.3-.1l1.2.5c.3-.2.5-.3.8-.5l.2-1.3c0-.1.1-.2.3-.2h2c.1 0 .2.1.2.2l.2 1.3c.3.1.6.3.9.5l1.2-.5c.1 0 .3 0 .3.1l1 1.7c.1.1 0 .2-.1.3l-1.1.8v1zM20.5 19c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5" /></svg>
            </button>
            {/* Absolutes buttons */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 -z-10 ${isOpen ? '-translate-y-[calc(100%+10px)]' : 'translate-y-0'} transition-all duration-300 delay-100`}>
              <button className="w-10 h-10 flex justify-center items-center bg-white rounded-full border border-gray-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]" onClick={() => setToggleModalCategory(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-900" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" /></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="md:flex hidden gap-1">
          {/* More options */}
          <button className="text-gray-500 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" viewBox="0 0 24 24"><path fill="currentColor" d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2" /></svg>
          </button>
          {/* Add Video Button & Dropdown */}
          <div className="inline-flex rounded-md shadow-sm relative" role="group">
            <button type="button" id='addButton' className="px-4 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-s-lg hover:bg-blue-800 outline-none" onClick={() => setToggleModalVideo(true)}>
              {label}
            </button>
            <button type="button" id="dropdown-category-video" className="p-2 border-s border-s-gray-300 text-sm font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-e-lg hover:bg-blue-800 outline-none" onClick={() => setToggleAddDropdown(!toggleAddDropdown)}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 ${toggleAddDropdown ? "rotate-180" : ""} transition-all`} viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z" /></svg>
            </button>
            {/* Dropdown */}
            <div className={`absolute right-0 w-48 p-2 -bottom-2 translate-y-full origin-bottom-right z-10 ${toggleAddDropdown ? "" : "hidden"} bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
              <button className="w-full flex items-center gap-2 p-2 rounded hover:bg-gray-100" onClick={() => setToggleModalCategory(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-900" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" /></svg>
                <p className="text-sm text-gray-900">Nouvelle catégorie</p>
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Modals */}
      <ModalCategory
        isOpen={toggleModalCategory}
        onToggleModal={setToggleModalCategory}
      />

      <ModalVideo
        isOpen={toggleModalVideo}
        onToggleModal={setToggleModalVideo}
      />
    </>
  )
}

export default AddVideoBtn