"use client";

import React, { useEffect, useState } from 'react'
import { VideoCard } from '@/components'
import { AddVideoBtn } from '@/components/mobile';

const Videos = () => {
  // Disposition
  const [isGrid, setIsGrid] = useState(true)
  // Dropdowns
  const [togglePeriodDropdown, setTogglePeriodDropdown] = useState(false)
  const [toggleSortDropdown, setToggleSortDropdown] = useState(false)
  const [toggleSearchTermDropdown, setToggleSearchTermDropdown] = useState(false)
  // Search term
  const [selectedSearchTerm, setSelectedSearchTerm] = useState(1)

  // Close the dropdown when the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (togglePeriodDropdown && !event.target.closest('#dropdownPeriod')) {
        setTogglePeriodDropdown(false)
      }
      if (toggleSortDropdown && !event.target.closest('#dropdownSort')) {
        setToggleSortDropdown(false)
      }
      if (toggleSearchTermDropdown && !event.target.closest('#dropdownSearchTerm')) {
        setToggleSearchTermDropdown(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [togglePeriodDropdown, toggleSortDropdown, toggleSearchTermDropdown])

  return (
    <div className="flex-1 relative">
      {/* Mobile - Add Video STARTS */}
      <AddVideoBtn isMobile={true} />
      {/* Mobile - Add Video ENDS */}

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Nos Vidéos</h1>
          <p className="text-gray-500 text-sm">Gestion des vidéos de votre espace.</p>
        </div>
        <AddVideoBtn isMobile={false} />
      </div>

      {/* Filter Tabs */}
      <div className="flex mt-6 border-b">
        <div className="flex justify-center items-center px-4 py-2 border-b-[3px] border-blue-500 text-blue-500 hover:bg-blue-100 rounded-t-lg text-sm font-bold cursor-pointer">
          Toutes
        </div>
        <div className="flex justify-center items-center px-4 py-2 text-sm font-medium border-b-[3px] border-b-transparent hover:border-b-gray-200 rounded-t-lg cursor-pointer">
          La Télé d{`'`}Index
        </div>
        <div className="flex justify-center items-center px-4 py-2 text-sm font-medium border-b-[3px] border-b-transparent hover:border-b-gray-200 rounded-t-lg cursor-pointer">
          Bien-être
        </div>
        {/* {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex justify-center items-center px-4 py-2 text-sm font-medium border-b-[3px] border-b-transparent hover:border-b-gray-200 rounded-t-lg cursor-pointer">
            Catégorie{` ${index + 1}`} (0)
          </div>
        ))} */}
      </div>

      {/* Options */}
      <div className="flex justify-between max-xl:flex-col items-center gap-4 my-6">
        <div className="flex gap-2 z-20">
          <button id="dropdownPeriod" data-dropdown-toggle="dropdown" className="relative px-3 py-2 text-xs font-medium text-center text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 inline-flex items-center" type="button"
            onClick={() => {
              setTogglePeriodDropdown(!togglePeriodDropdown)
              setToggleSortDropdown(false)
              setToggleSearchTermDropdown(false)
            }}
          >
            Les 7 derniers jours
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1 text-gray-700" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z" /></svg>
            {/* Dropdown Period */}
            <div className={`absolute origin-bottom-left -bottom-2 translate-y-full w-[165px] left-0 p-1 z-10 ${togglePeriodDropdown ? "" : "hidden"} bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <p className="text-xs text-gray-900">Les 7 derniers jours</p>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <p className="text-xs text-gray-900">Depuis 1 mois</p>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <p className="text-xs text-gray-900">Depuis 1 an</p>
              </div>
            </div>
          </button>
          <button id="dropdownSort" data-dropdown-toggle="dropdown" className="relative px-3 py-2 text-xs font-medium text-center text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 inline-flex items-center" type="button"
            onClick={() => {
              setToggleSortDropdown(!toggleSortDropdown)
              setTogglePeriodDropdown(false)
              setToggleSearchTermDropdown(false)
            }}
          >
            Trier par
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1 text-gray-700" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z" /></svg>
            {/* Dropdown Sort */}
            <div className={`absolute origin-bottom-left -bottom-2 translate-y-full w-[165px] left-0 p-1 z-10 ${toggleSortDropdown ? "" : "hidden"} bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <p className="text-xs text-gray-900">Nom (Croissant)</p>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <p className="text-xs text-gray-900">Nom (Décroissant)</p>
              </div>
              <div className="h-px bg-gray-300 my-1"></div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <p className="text-xs text-gray-900">Plus ancien</p>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <p className="text-xs text-gray-900">Plus récent</p>
              </div>
            </div>
          </button>
        </div>
        <div className="flex max-lg:flex-col max-lg:items-center gap-2">
          <form className="max-w-lg mx-auto">
            <div className="flex gap-2 md:flex-row flex-col">
              <button id="dropdown-button" className="relative flex-shrink-0 z-10 inline-flex justify-between items-center py-2 px-4 text-xs font-medium text-center text-gray-600 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none hover:bg-gray-200" type="button"
                onClick={() => {
                  setToggleSearchTermDropdown(!toggleSearchTermDropdown)
                  setTogglePeriodDropdown(false)
                  setToggleSortDropdown(false)
                }}
              >
                Sous-catégories: <span className="font-semibold ml-1">Toutes</span> 
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1 text-gray-700" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z" /></svg>
                {/* Dropdown Search Term */}
                <div className={`absolute origin-bottom-left -bottom-2 translate-y-full w-[200px] left-0 p-1 z-10 ${toggleSearchTermDropdown ? "" : "hidden"} bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                  <div className={`flex items-center gap-2 p-2 rounded ${selectedSearchTerm === 1 ? "bg-gray-200" : "hover:bg-gray-100"} cursor-pointer`} onClick={() => setSelectedSearchTerm(1)}>
                    <p className={`text-xs text-gray-900 ${selectedSearchTerm === 1 ? "font-semibold" : "font-medium"}`}>Toutes</p>
                  </div>
                  {/* Divider */}
                  <div className="h-px bg-gray-300 my-1" />
                  <div className={`flex items-center gap-2 p-2 rounded ${selectedSearchTerm === 2 ? "bg-gray-200" : "hover:bg-gray-100"} cursor-pointer`} onClick={() => setSelectedSearchTerm(2)}>
                    <p className="text-xs font-medium text-gray-900">Vidéos</p>
                  </div>
                </div>
              </button>
              <div className="relative w-full">
                <input type="text" className="block w-[250px] px-3 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Rechercher une video..." />
              </div>
            </div>
          </form>
          {/* Divider */}
          <div className="w-px bg-gray-300 lg:block hidden" />
          <div className="flex gap-2">
            {/* Disposition */}
            <button className="text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg p-2 text-center inline-flex items-center" type="button" onClick={() => setIsGrid(!isGrid)}>
              {isGrid ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-700" viewBox="0 0 24 24"><path fill="currentColor" d="M3 11h8V3H3m0 18h8v-8H3m10 8h8v-8h-8m0-10v8h8V3" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-700" viewBox="0 0 24 24"><path fill="currentColor" d="M7 5h14v2H7zm0 8v-2h14v2zM4 4.5A1.5 1.5 0 0 1 5.5 6A1.5 1.5 0 0 1 4 7.5A1.5 1.5 0 0 1 2.5 6A1.5 1.5 0 0 1 4 4.5m0 6A1.5 1.5 0 0 1 5.5 12A1.5 1.5 0 0 1 4 13.5A1.5 1.5 0 0 1 2.5 12A1.5 1.5 0 0 1 4 10.5M7 19v-2h14v2zm-3-2.5A1.5 1.5 0 0 1 5.5 18A1.5 1.5 0 0 1 4 19.5A1.5 1.5 0 0 1 2.5 18A1.5 1.5 0 0 1 4 16.5" /></svg>
              )}
            </button>
            <button className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-2 text-center inline-flex items-center" type="button">
              Exporter
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" viewBox="0 0 24 24"><path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-1 1.5L18.5 9H13m-4.07 3.22H16v7.07l-2.12-2.12L11.05 20l-2.83-2.83l2.83-2.82" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Videos listing */}
      {isGrid ? (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-6">
          {/* Video item */}
          {Array.from({ length: 8 }).map((_, index) => (
            <VideoCard
              key={index}
              thumbnail="/assets/default_image.png"
              title="Video 1"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere error sit voluptas esse mollitia hic fugit accusantium blanditiis saepe consequuntur iste, cum officia cupiditate aliquid? Quibusdam debitis sapiente error saepe."
              videoSrc="https://www.youtube.com/watch?v=d7cVLE4SaN0"
            />
          ))}
        </div>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Titre
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Durée
                </th>
                <th scope="col" className="px-6 py-3">
                  Vues
                </th>
                <th scope="col" className="px-6 py-3">
                  Lien vidéo
                </th>
                <th scope="col" className="px-6 py-3">
                  Publié
                </th>
                <th scope="col" className="px-6 py-3" />
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }).map((_, index) => (
                <tr key={index} className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Lorem Ipsum Dolor
                  </th>
                  <td className="px-6 py-4 max-w-xs">
                    {"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam iusto a quam, quos dignissimos eaque? Alias sed consectetur, eius facere, saepe perspiciatis cum, pariatur quod suscipit laudantium blanditiis perferendis iusto.".substring(0, 80) + "..."}
                  </td>
                  <td className="px-6 py-4">
                    02:57
                  </td>
                  <td className="px-6 py-4">
                    1000
                  </td>
                  <td className="px-6 py-4">
                    {/* Youtube video link */}
                    <a href="#" className="font-medium text-blue-600 hover:underline max-w-xs">https://www.youtube.com/watch?v=QH2-TGUlwu4</a>
                  </td>
                  <td className="px-6 py-4">
                    Non
                  </td>
                  <td className="flex gap-2 px-6 py-4">
                    <div className="flex justify-center items-center w-8 h-8 text-white bg-green-700 hover:bg-green-900 rounded-lg cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M5 4v2h14V4zm0 10h4v6h6v-6h4l-7-7z"/></svg>
                    </div>
                    <div className="w-px bg-gray-200" />
                    <div className="flex justify-center items-center w-8 h-8 text-gray-500 rounded-lg hover:bg-gray-200 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" /></svg>
                    </div>
                    <div className="flex justify-center items-center w-8 h-8 text-gray-500 rounded-lg hover:bg-gray-200 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z" /></svg>
                    </div>
                    <div className="flex justify-center items-center w-8 h-8 text-gray-500 rounded-lg hover:bg-gray-200 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" /></svg>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Videos