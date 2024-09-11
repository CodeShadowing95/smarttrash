"use client";

import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { AddKpiBtn } from '@/components/mobile';

const Dashboard = () => {
  const { data: session } = useSession()

  // Dropdowns & Menus
  const [togglePeriod, setTogglePeriod] = useState(false)
  const [selectedPeriod, setSelectedPeriod] = useState("Semaine")
  const [parameter, setParameter] = useState("Général")

  // Close the dropdown when the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (togglePeriod && !event.target.closest('#dropdown-period')) {
        setTogglePeriod(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [togglePeriod])



  return (
    <div className="relative">
      {/* Mobile - Add Kpi STARTS */}
      <AddKpiBtn isMobile={true} />
      {/* Mobile - Add Kpi ENDS */}

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Welcome Back, {session?.user?.name ? session?.user?.name.split(" ")[0] : "User Indextv"} 👋</h1>
          <p className="text-gray-500 text-sm">Présentation générale de vos activités et gestion de votre espace.</p>
        </div>
        <AddKpiBtn isMobile={false} />
      </div>
      {/* Options */}
      <div className="w-full flex sm:flex-row flex-col gap-4 justify-between items-center mt-10">
        <div className="flex gap-2 p-1 bg-gray-200 rounded-lg shadow">
          <button data-dropdown-toggle="dropdown" className={`text-gray-900 ${parameter === "Général" ? "bg-white" : "hover:bg-gray-100"} focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-xs px-5 py-2 text-center inline-flex items-center`} type="button" onClick={() => setParameter("Général")}>Général</button>
          <button data-dropdown-toggle="dropdown" className={`text-gray-900  ${parameter === "Tracking" ? "bg-white" : "hover:bg-gray-100"} focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-xs px-5 py-2 text-center inline-flex items-center`} type="button" onClick={() => setParameter("Tracking")}>Tracking</button>
        </div>
        <div className="flex gap-2">
          <div className='relative'>
            <button data-dropdown-toggle="dropdown" id='dropdown-period' className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-xs px-5 py-2 text-center inline-flex items-center shadow" type="button" onClick={() => setTogglePeriod(!togglePeriod)}>
              Semaine
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z" /></svg>
            </button>
            {/* Dropdown menu */}
            <div className={`absolute left-0 p-2 -bottom-2 translate-y-full origin-bottom-left w-32 z-10 ${togglePeriod ? "" : "hidden"} bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
              <button className={`w-full flex items-center gap-2 p-2 rounded ${selectedPeriod === "Jour" ? "bg-gray-200" : "hover:bg-gray-100"} text-sm text-gray-900`} onClick={() => setSelectedPeriod("Jour")}>Jour</button>
              <button className={`w-full flex items-center gap-2 p-2 rounded ${selectedPeriod === "Semaine" ? "bg-gray-200" : "hover:bg-gray-100"} text-sm text-gray-900`} onClick={() => setSelectedPeriod("Semaine")}>Semaine</button>
              <button className={`w-full flex items-center gap-2 p-2 rounded ${selectedPeriod === "Mois" ? "bg-gray-200" : "hover:bg-gray-100"} text-sm text-gray-900`} onClick={() => setSelectedPeriod("Mois")}>Mois</button>
              <button className={`w-full flex items-center gap-2 p-2 rounded ${selectedPeriod === "Année" ? "bg-gray-200" : "hover:bg-gray-100"} text-sm text-gray-900`} onClick={() => setSelectedPeriod("Année")}>Année</button>
            </div>
          </div>
          <button data-dropdown-toggle="dropdown" className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-5 py-2 text-center inline-flex items-center shadow" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-1 1.5L18.5 9H13m-4.07 3.22H16v7.07l-2.12-2.12L11.05 20l-2.83-2.83l2.83-2.82" /></svg>
            Exporter
          </button>
        </div>
      </div>
      {/* <div className="h-[1px] bg-gray-200 my-6" /> */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
        {/* Card "Nombre de visiteurs" */}
        <div className="p-1 rounded-lg shadow-lg relative overflow-hidden">
          {/* Overlay & content */}
          <div className="absolute inset-0 bg-gray-700 overflow-hidden -z-10">
            <div className="absolute -top-12 -right-12 w-52 h-52">
              <svg xmlns="http://www.w3.org/2000/svg" className='w-full h-full opacity-10' viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>
            </div>
          </div>
          <div className="w-full p-4">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* Image */}
                <div className="flex justify-center items-center p-2 bg-white/30 rounded-lg overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 text-white' viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>
                </div>
                {/* Texte */}
                <p className="text-[15px] leading-5 font-medium text-white">Bacs à ordures</p>
              </div>
              <div className="flex justify-center items-center p-2 hover:bg-white/10 rounded-full cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 text-white' viewBox="0 0 24 24"><path fill="currentColor" d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-5xl text-white mt-6">2.5K</p>
              <div className="px-2 py-1 bg-white rounded-full text-gray-900 font-medium text-xs text-center">
                +10%
                <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 inline ml-1 text-green-600' viewBox="0 0 24 24"><path fill="currentColor" d="m16 6l2.29 2.29l-4.88 4.88l-4-4L2 16.59L3.41 18l6-6l4 4l6.3-6.29L22 12V6z"/></svg>
              </div>
            </div>
            <p className="text-[13px] leading-5 text-white mt-4">
              {selectedPeriod === "Jour" && "Dernier checking il y a 24 heures"}
              {selectedPeriod === "Semaine" && "Dernier checking il y a 7 jours"}
              {selectedPeriod === "Mois" && "Dernier checking il y a 1 mois"}
              {selectedPeriod === "Année" && "Dernier checking il y a 1 an"}
            </p>
          </div>
        </div>
        <div className="p-1 rounded-lg shadow-lg relative overflow-hidden">
          {/* Overlay & content */}
          <div className="absolute inset-0 bg-red-700 overflow-hidden -z-10">
            <div className="absolute -top-12 -right-12 w-52 h-52">
              <svg xmlns="http://www.w3.org/2000/svg" className='w-full h-full opacity-10' viewBox="0 0 24 24"><path fill="currentColor" d="M16.5 4v4.25l2.86 1.69l-.75 1.22L15 9V4zm-.5 9c1.36 0 2.54-.5 3.5-1.47c1-.97 1.5-2.14 1.5-3.53c0-1.36-.5-2.54-1.5-3.5c-.96-1-2.14-1.5-3.5-1.5c-1.39 0-2.56.5-3.53 1.5C11.5 5.46 11 6.64 11 8c0 1.39.5 2.56 1.47 3.53S14.61 13 16 13m-2.5 6c.44 0 .8-.16 1.08-.46s.42-.65.42-1.04c0-.42-.14-.77-.42-1.07S13.94 16 13.5 16s-.8.13-1.08.43s-.42.65-.42 1.07c0 .39.14.74.42 1.04s.64.46 1.08.46M3 13h8.11C9.7 11.64 9 10 9 8H3zm1.5 6c.44 0 .8-.16 1.08-.46S6 17.89 6 17.5c0-.42-.14-.77-.42-1.07S4.94 16 4.5 16s-.8.13-1.08.43S3 17.08 3 17.5c0 .39.14.74.42 1.04s.64.46 1.08.46M16 1c1.92 0 3.58.67 4.95 2.05C22.33 4.42 23 6.08 23 8c0 1.77-.56 3.29-1.72 4.59c-1.15 1.29-2.58 2.07-4.28 2.32V18c0 .84-.33 1.58-1 2.2V22c0 .27-.11.5-.3.71c-.2.2-.42.29-.7.29h-1c-.27 0-.5-.09-.71-.29A.98.98 0 0 1 13 22v-1H5v1c0 .27-.09.5-.29.71c-.21.2-.44.29-.71.29H3c-.28 0-.5-.09-.7-.29c-.19-.21-.3-.44-.3-.71v-1.8c-.67-.62-1-1.36-1-2.2V8c0-1.58.67-2.65 2.05-3.2C4.42 4.26 6.41 4 9 4h.61c.28 0 .48.03.61.03C11.63 2 13.55 1 16 1"/></svg>
            </div>
          </div>
          <div className="w-full z-10 p-4">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* Image */}
                <div className="flex justify-center items-center p-2 bg-white/30 rounded-lg overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 text-white' viewBox="0 0 24 24"><path fill="currentColor" d="M16.5 4v4.25l2.86 1.69l-.75 1.22L15 9V4zm-.5 9c1.36 0 2.54-.5 3.5-1.47c1-.97 1.5-2.14 1.5-3.53c0-1.36-.5-2.54-1.5-3.5c-.96-1-2.14-1.5-3.5-1.5c-1.39 0-2.56.5-3.53 1.5C11.5 5.46 11 6.64 11 8c0 1.39.5 2.56 1.47 3.53S14.61 13 16 13m-2.5 6c.44 0 .8-.16 1.08-.46s.42-.65.42-1.04c0-.42-.14-.77-.42-1.07S13.94 16 13.5 16s-.8.13-1.08.43s-.42.65-.42 1.07c0 .39.14.74.42 1.04s.64.46 1.08.46M3 13h8.11C9.7 11.64 9 10 9 8H3zm1.5 6c.44 0 .8-.16 1.08-.46S6 17.89 6 17.5c0-.42-.14-.77-.42-1.07S4.94 16 4.5 16s-.8.13-1.08.43S3 17.08 3 17.5c0 .39.14.74.42 1.04s.64.46 1.08.46M16 1c1.92 0 3.58.67 4.95 2.05C22.33 4.42 23 6.08 23 8c0 1.77-.56 3.29-1.72 4.59c-1.15 1.29-2.58 2.07-4.28 2.32V18c0 .84-.33 1.58-1 2.2V22c0 .27-.11.5-.3.71c-.2.2-.42.29-.7.29h-1c-.27 0-.5-.09-.71-.29A.98.98 0 0 1 13 22v-1H5v1c0 .27-.09.5-.29.71c-.21.2-.44.29-.71.29H3c-.28 0-.5-.09-.7-.29c-.19-.21-.3-.44-.3-.71v-1.8c-.67-.62-1-1.36-1-2.2V8c0-1.58.67-2.65 2.05-3.2C4.42 4.26 6.41 4 9 4h.61c.28 0 .48.03.61.03C11.63 2 13.55 1 16 1"/></svg>
                </div>
                {/* Texte */}
                <p className="text-[15px] leading-5 font-medium text-white">Tournées effectuées</p>
              </div>
              <div className="flex justify-center items-center p-2 hover:bg-white/10 rounded-full cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 text-white' viewBox="0 0 24 24"><path fill="currentColor" d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-5xl text-white mt-6">65</p>
              <div className="px-2 py-1 bg-white rounded-full text-gray-900 font-medium text-xs text-center">
                constant
                <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 ml-1 inline text-blue-600' viewBox="0 0 24 24"><path fill="currentColor" d="m22 12l-4-4v3H3v2h15v3z"/></svg>
              </div>
            </div>
            <p className="text-[13px] leading-5 text-white mt-4">
              {selectedPeriod === "Jour" && "Dernier checking il y a 24 heures"}
              {selectedPeriod === "Semaine" && "Dernier checking il y a 7 jours"}
              {selectedPeriod === "Mois" && "Dernier checking il y a 1 mois"}
              {selectedPeriod === "Année" && "Dernier checking il y a 1 an"}
            </p>
          </div>
        </div>
        <div className="p-1 rounded-lg shadow-lg relative overflow-hidden">
          {/* Overlay & content */}
          <div className="absolute inset-0 bg-teal-700 overflow-hidden -z-10">
            <div className="absolute -top-12 -right-12 w-52 h-52">
              <svg xmlns="http://www.w3.org/2000/svg" className='w-full h-full opacity-10' viewBox="0 0 24 24"><path fill="currentColor" d="M20 6v12H4V6zm0-2H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m-9 6H6v4h5z"/></svg>
            </div>
          </div>
          <div className="w-full z-10 p-4">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* Image */}
                <div className="flex justify-center items-center p-2 bg-white/30 rounded-lg overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 text-white' viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2M10 14H5v-4h5z"/></svg>
                </div>
                {/* Texte */}
                <p className="text-[15px] leading-5 font-medium text-white">Revenus & Aides</p>
              </div>
              <div className="flex justify-center items-center p-2 hover:bg-white/10 rounded-full cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 text-white' viewBox="0 0 24 24"><path fill="currentColor" d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-5xl text-white mt-6">€ 43K</p>
              <div className="px-2 py-1 bg-white rounded-full text-gray-900 font-medium text-xs text-center">
                +5%
                <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 inline ml-1 text-green-600' viewBox="0 0 24 24"><path fill="currentColor" d="m16 6l2.29 2.29l-4.88 4.88l-4-4L2 16.59L3.41 18l6-6l4 4l6.3-6.29L22 12V6z"/></svg>
              </div>
            </div>
            <p className="text-[13px] leading-5 text-white mt-4">
              {selectedPeriod === "Jour" && "Dernier checking il y a 24 heures"}
              {selectedPeriod === "Semaine" && "Dernier checking il y a 7 jours"}
              {selectedPeriod === "Mois" && "Dernier checking il y a 1 mois"}
              {selectedPeriod === "Année" && "Dernier checking il y a 1 an"}
            </p>
          </div>
        </div>
        <div className="p-1 rounded-lg shadow-lg relative overflow-hidden">
          {/* Overlay & content */}
          <div className="absolute inset-0 bg-amber-700 overflow-hidden -z-10">
            <div className="absolute -top-12 -right-12 w-52 h-52">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-10" viewBox="0 0 24 24"><path fill="currentColor" d="M20 5H9c-1.1 0-2 .9-2 2v14l4-4h9c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 10h-9.8L9 16.2V7h11zM3 7c-.6 0-1 .4-1 1s.4 1 1 1h2V7zm-1 4c-.6 0-1 .4-1 1s.4 1 1 1h3v-2zm-1 4c-.6 0-1 .4-1 1s.4 1 1 1h4v-2z"/></svg>
            </div>
          </div>
          <div className="w-full z-10 p-4">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* Image */}
                <div className="flex justify-center items-center p-2 bg-white/30 rounded-lg overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24"><path fill="currentColor" d="M3 7c-.6 0-1 .4-1 1s.4 1 1 1h2V7zm-1 4c-.6 0-1 .4-1 1s.4 1 1 1h3v-2zm-1 4c-.6 0-1 .4-1 1s.4 1 1 1h4v-2zM20 5H9c-1.1 0-2 .9-2 2v14l4-4h9c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2"/></svg>
                </div>
                {/* Texte */}
                <p className="text-[15px] leading-5 font-medium text-white">Feedbacks</p>
              </div>
              <div className="flex justify-center items-center p-2 hover:bg-white/10 rounded-full cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 text-white' viewBox="0 0 24 24"><path fill="currentColor" d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-5xl text-white mt-6">23</p>
              <div className="px-2 py-1 bg-white rounded-full text-gray-900 font-medium text-xs text-center">
                -7%
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline ml-1 text-red-600" viewBox="0 0 24 24"><path fill="currentColor" d="m16 18l2.29-2.29l-4.88-4.88l-4 4L2 7.41L3.41 6l6 6l4-4l6.3 6.29L22 12v6z"/></svg>
              </div>
            </div>
            <p className="text-[13px] leading-5 text-white mt-4">
              {selectedPeriod === "Jour" && "Dernier checking il y a 24 heures"}
              {selectedPeriod === "Semaine" && "Dernier checking il y a 7 jours"}
              {selectedPeriod === "Mois" && "Dernier checking il y a 1 mois"}
              {selectedPeriod === "Année" && "Dernier checking il y a 1 an"}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[300px] mt-8 bg-gray-300 animate-pulse"></div>
      <div className="w-full grid grid-cols-3 gap-4 mt-8">
        <div className="w-full h-[300px] bg-gray-300 animate-pulse"></div>
        <div className="w-full h-[300px] bg-gray-300 animate-pulse"></div>
        <div className="w-full h-[300px] bg-gray-300 animate-pulse"></div>
      </div>
      <div className="w-full flex gap-4 mt-8">
        <div className="w-3/5 max-w-3/5 h-[300px] mx-auto bg-gray-300 animate-pulse"></div>
        <div className="w-2/5 max-w-2/5 h-[300px] mx-auto bg-gray-300 animate-pulse"></div>
      </div>
      <div className="w-full h-[300px] mt-8 bg-gray-300 animate-pulse"></div>
      <div className="w-full flex gap-4 mt-8">
        <div className="w-1/5 max-w-1/5 h-[300px] mx-auto bg-gray-300 animate-pulse"></div>
        <div className="w-2/5 max-w-2/5 h-[300px] mx-auto bg-gray-300 animate-pulse"></div>
        <div className="w-2/5 max-w-2/5 h-[300px] mx-auto bg-gray-300 animate-pulse"></div>
      </div>
    </div>
  )
}

export default Dashboard