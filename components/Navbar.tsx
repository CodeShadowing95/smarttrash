"use client";

import React, { useEffect, useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const [userDropdown, setUserDropdown] = useState(false)
  const [toggleSidebar, setToggleSidebar] = useState(false)
  const [toggleContent, setToggleContent] = useState(false)
  const [selected, setSelected] = useState("Home");

  const handleItemClick = (item: string) => {
    setSelected(item);
    localStorage.setItem("selected", item);
    setToggleSidebar(false);
  };

  useEffect(() => {
    setSelected(localStorage.getItem("selected") || "Home")
  }, [])

  // Make toggleContent true after 2.5 seconds when isOpen is true
  useEffect(() => {
    if (toggleSidebar) {
      setTimeout(() => {
        setToggleContent(true)
      }, 100)
    } else {
      setToggleContent(false)
      setTimeout(() => {
        setToggleContent(false)
      }, 50)
    }
  }, [toggleSidebar])

  return (
    <div className="flex justify-between items-center border-b px-8 py-2 shadow sticky top-0 z-40 bg-white">
      <div className="flex items-center gap-1">
        {/* Mobile - Menu STARTS */}
        <div className="sm:hidden flex w-10 h-10 justify-center items-center rounded-lg bg-white hover:bg-gray-100" onClick={() => setToggleSidebar(!toggleSidebar)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500" viewBox="0 0 24 24"><path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/></svg>
        </div>
        {/* Mobile - Menu ENDS */}
        <form>
          <label htmlFor='search' className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="search" className="block w-full max-w-[30rem] p-4 ps-10 text-sm text-gray-900 outline-none border-gray-300 sm:max-w-[40rem] md:max-w-[50rem] lg:max-w-[60rem]" placeholder="Rechercher..." required />
          </div>
        </form>
      </div>

      <div className="flex items-center gap-2">
        <div className="lg:flex hidden items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M9 10v2H7v-2zm4 0v2h-2v-2zm4 0v2h-2v-2zm2-7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1V1h2v2h8V1h2v2zm0 16V8H5v11zM9 14v2H7v-2zm4 0v2h-2v-2zm4 0v2h-2v-2z" /></svg>
          <p className="text-gray-500 text-sm font-medium">
            {new Date().toLocaleString('fr-FR', {
              weekday: 'short',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </p>
        </div>
        {/* Divider */}
        <div className="lg:flex hidden w-[1px] h-6 mx-1 bg-gray-300" />
        {/* Bouton Notifications */}
        <button className="md:flex hidden items-center font-semibold p-2 rounded hover:bg-orange-100 relative">
          <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 text-gray-700' viewBox="0 0 24 24"><path fill="currentColor" d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6zm-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2" /></svg>
          <div className="absolute inline-flex items-center justify-center border-2 border-white rounded-full top-1 end-1">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 bg-red-500 rounded-full absolute top-0 left-0 animate-ping"></div>
            <div className="w-2 h-2 bg-red-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
          </div>
        </button>
        {/* Bouton Aide */}
        <button className="md:flex hidden items-center font-semibold p-2 rounded hover:bg-orange-100 relative">
          <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 text-gray-700' viewBox="0 0 24 24"><path fill="currentColor" d="m15.07 11.25l-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 0 0-2-2a2 2 0 0 0-2 2H8a4 4 0 0 1 4-4a4 4 0 0 1 4 4a3.2 3.2 0 0 1-.93 2.25M13 19h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10" /></svg>
        </button>
        {/* Divider */}
        <div className="md:inline-block hidden w-[1px] h-6 mx-1 bg-gray-300" />
        {/* Avatar */}
        <div className="relative flex items-center cursor-pointer">
          <div className="flex items-center gap-2 py-2" onClick={() => setUserDropdown(!userDropdown)}>
            {session?.user?.image && <Image src={session?.user?.image} width={25} height={25} className='rounded-full' alt="profile" />}
            {session?.user?.name && <span className="font-semibold sm:block hidden">{session?.user?.name?.split(" ")[0]}</span>}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z" /></svg>
          </div>
          {/* Menu */}
          <div className={`${userDropdown ? "block" : "hidden"} absolute -bottom-1 translate-y-full right-0 w-[300px] max-w-[300px] bg-white border border-gray-200 rounded-lg shadow-lg p-4 m-2`}>
            <div className="w-full flex flex-col justify-center items-center">
              {session?.user?.image && <Image src={session?.user?.image} width={80} height={80} className='rounded-full' alt="profile" />}
              <p className="text-gray-700 font-semibold mt-2">{session?.user?.name}</p>
              <p className="text-gray-500 text-xs font-medium mt-1">{session?.user?.email}</p>
              {/* Divider */}
              <div className="w-full h-[1px] bg-gray-300 my-2" />
              <div className="w-full flex justify-between">
                <ul className="w-full flex flex-col">
                  <li>
                    <Link href="/profile" className="flex items-center gap-1 text-gray-700 text-sm font-medium p-2 rounded hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg>
                      Profil
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center gap-1 text-gray-700 text-sm font-medium p-2 rounded hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6zm-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2" /></svg>
                      Notifications
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center gap-1 text-gray-700 text-sm font-medium p-2 rounded hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 text-gray-700' viewBox="0 0 24 24"><path fill="currentColor" d="m15.07 11.25l-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 0 0-2-2a2 2 0 0 0-2 2H8a4 4 0 0 1 4-4a4 4 0 0 1 4 4a3.2 3.2 0 0 1-.93 2.25M13 19h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10" /></svg>
                      Aide
                    </Link>
                  </li>
                  <div className="w-full h-[1px] bg-gray-300 my-2" />
                  <li>
                    <div className="flex items-center gap-1 text-gray-700 text-sm font-medium p-2 rounded hover:bg-gray-100"
                      onClick={() => {
                        localStorage.setItem("selected", "");
                        signOut()
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="m17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5M4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z" /></svg>
                      Déconnexion
                    </div>
                  </li>
                </ul>
                {/* <Link href="/profile" className="text-gray-500 hover:text-gray-700 font-semibold p-2 rounded hover:bg-gray-100">Profil</Link>
                <button className="text-red-500 font-semibold hover:text-red-700 p-2 rounded hover:bg-red-100"
                  onClick={() => {
                    localStorage.setItem("selected", "");
                    signOut()
                  }}
                >Deconnexion</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      

      {/* Mobile */}
      <div className={`fixed inset-0 ${toggleSidebar ? "opacity-100 visible sm:opacity-0 sm:invisible" : "opacity-0 invisible"} flex justify-start bg-neutral-900/40 z-50 overflow-hidden transition-all duration-300 ease-in-out`}>
        <div className={`relative w-full h-full flex flex-col justify-between pt-4 max-w-[250px] bg-[#de7665] rounded-e-lg transition-transform ease-in-out duration-200 transform ${toggleContent ? 'translate-x-0' : '-translate-x-full'}`}>
          {/* Close button */}
          <div className="absolute top-4 right-4 cursor-pointer" onClick={() => setToggleSidebar(!toggleSidebar)}>
            <div className="w-5 h-5 flex justify-center items-center border border-gray-900 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className='w-3 h-3' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} onClick={() => setToggleSidebar(!toggleSidebar)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          {/* Menus */}
          <div className="px-4">
            <div className="w-full flex justify-center">
              <Image src="/assets/logo-index-ok.png" alt="Logo" width={100} height={100} />
            </div>
            <ul className="my-12 space-y-2">
              <li>
                <Link href="/dashboard" className={`relative flex items-center gap-2 p-2 rounded text-sm ${selected === "Home" ? "bg-white font-semibold" : "font-medium hover:bg-orange-50"}`} onClick={() => handleItemClick("Home")}>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M13 3v6h8V3m-8 18h8V11h-8M3 21h8v-6H3m0-2h8V3H3z" /></svg>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/dashboard/local-infos" className={`relative flex items-center gap-2 p-2 rounded text-sm ${selected === "LocalInfos" ? "bg-white font-semibold" : "font-medium hover:bg-orange-50"}`} onClick={() => handleItemClick("LocalInfos")}>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M20 3H4c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2M5 7h5v6H5zm14 10H5v-2h14zm0-4h-7v-2h7zm0-4h-7V7h7z" /></svg>
                  Infos Locales
                </Link>
              </li>
              <li>
                <Link href="/dashboard/videos" className={`flex items-center gap-2 p-2 text-sm rounded ${selected === "Videos" ? "bg-white font-semibold" : "font-medium hover:bg-orange-50"}`} onClick={() => handleItemClick("Videos")}>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M4 2h10v2H4v10H2V4c0-1.11.89-2 2-2m4 4h10v2H8v10H6V8c0-1.11.89-2 2-2m4 4h8c1.11 0 2 .89 2 2v8c0 1.11-.89 2-2 2h-8c-1.11 0-2-.89-2-2v-8c0-1.11.89-2 2-2m2 2v8l6-4z" /></svg>
                  Vidéos
                </Link>
              </li>
              <li>
                <Link href="/dashboard/audios" className={`flex items-center gap-2 p-2 text-sm rounded pointer-events-none`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 text-black/50' viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M7.76 16.24l-1.41 1.41A7.9 7.9 0 0 1 4 12c0-2.05.78-4.1 2.34-5.66l1.41 1.41A6.05 6.05 0 0 0 6 12c0 1.54.59 3.07 1.76 4.24M12 16a4 4 0 0 1-4-4a4 4 0 0 1 4-4a4 4 0 0 1 4 4a4 4 0 0 1-4 4m5.66 1.66l-1.41-1.41A6.05 6.05 0 0 0 18 12c0-1.54-.59-3.07-1.76-4.24l1.41-1.41A7.9 7.9 0 0 1 20 12c0 2.05-.78 4.1-2.34 5.66M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"/></svg>
                  Audios (À venir)
                </Link>
              </li>
              <li>
                <Link href="/dashboard/services-index" className={`flex items-center gap-2 p-2 text-sm rounded ${selected === "Services" ? "bg-white font-semibold" : "font-medium hover:bg-orange-50"}`} onClick={() => handleItemClick("Services")}>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"/></svg>
                  Services
                </Link>
              </li>
            </ul>
            <p className={`text-sm font-medium text-black/50 px-2 mb-2`}>Paramètres</p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/dashboard/members" className={`flex items-center gap-2 p-2 text-sm rounded ${selected === "Utilisateurs" ? "bg-white font-semibold" : "font-medium hover:bg-orange-50"}`} onClick={() => handleItemClick("Utilisateurs")}>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9A3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42c-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.54 5.54 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13zM0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9c-.59.68-.95 1.62-.95 2.65V20zm24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65c2.56.34 4.45 1.51 4.45 2.9z" /></svg>
                  Administrateurs
                </Link>
              </li>
              <li>
                <Link href="/dashboard/report" className="flex items-center gap-2 font-medium p-2 text-sm rounded hover:bg-orange-50" onClick={() => handleItemClick("logs")}>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M21 0H3C1.9 0 1 .9 1 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2m0 5H3V2h18zM7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/></svg>
                  Logs d{`'`}activités
                </Link>
              </li>
              <li>
                <Link href="/dashboard/preferences" className="flex items-center gap-2 font-medium p-2 text-sm rounded hover:bg-orange-50" onClick={() => handleItemClick("preferences")}>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64z"/></svg>
                  Préférences
                </Link>
              </li>
            </ul>
          </div>

          {/* Déconnexion */}
          <div className="w-full flex justify-between items-center bg-orange-50 p-4 mt-auto">
            {/* Profile */}
            <span className={`text-sm font-semibold`}>Déconnexion</span>

            {/* Bouton deconnexion */}
            <button className="flex items-center font-semibold p-2 rounded hover:bg-orange-100" onClick={() => {
              signOut()
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="m17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5M4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar