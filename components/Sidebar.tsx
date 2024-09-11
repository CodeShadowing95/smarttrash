"use client";

import React, { useEffect, useState } from 'react'
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link';
import { list_sidebar_menus } from '@/constants';

const Sidebar = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [selected, setSelected] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [tooltip, setTooltip] = useState("")

  const handleItemClick = (item: string) => {
    setSelected(item);
    localStorage.setItem("selected", item);
  };

  const handleCollapse = () => {
    setIsCollapsed(prevState => {
      const newState = !prevState
      if (typeof window !== 'undefined') {
        localStorage.setItem('isCollapsed', newState.toString())
      }
      return newState
    })
  };

  useEffect(() => {
    if(status === "unauthenticated") {
      router.push("/login")
    }
  }, [router, session, status])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem('isCollapsed') === 'true'
      setIsCollapsed(storedValue)
    }
  }, [])

  useEffect(() => {
    // setSelected(prevState =>  {
    //   if (typeof window !== 'undefined') {
    //     localStorage.setItem("selected", prevState)
    //   }
    //   return prevState || "Home"
    // })
    setSelected(localStorage.getItem("selected") || "Home")
    setIsCollapsed(prevState => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('isCollapsed', prevState.toString())
      }
      return prevState || false
    })
  }, [])
  

  return (
    <div className={`sticky top-0 h-screen max-sm:hidden flex flex-col ${isCollapsed ? "w-16" : "md:w-64 sm:w-16"} transition-all bg-green-200`}>
      <div className="h-full pt-4 flex flex-col justify-between relative">
        {/* Collapse sidebar button */}
        <div className="absolute top-20 right-0 translate-x-1/2 z-10 p-1 border-2 border-gray-300 rounded-full bg-white md:flex hidden items-center justify-center cursor-pointer hover:bg-orange-100" onClick={handleCollapse}>
          {isCollapsed ? (
            <svg xmlns="http://www.w3.org/2000/svg" className='w-3 h-3 text-gray-500 rotate-180 transition-all duration-300' viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6z"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className='w-3 h-3 text-gray-500 transition-all duration-300' viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6z"/></svg>
          )}
        </div>
        
        {/* Liste des modules */}
        <div className="px-4">
          <div className="w-full flex justify-center">
            <Image src="/assets/logo.png" alt="Logo" width={100} height={100} />
          </div>
          <ul className="my-12 space-y-2">
            <li>
              <Link href="/dashboard" className={`relative flex items-center gap-2 p-2 rounded text-sm ${selected === "Home" ? "bg-white font-semibold" : "font-medium hover:bg-orange-50"}`} onClick={() => handleItemClick("Home")} onMouseEnter={() => setTooltip("Dashboard")} onMouseLeave={() => setTooltip("")}>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M13 3v6h8V3m-8 18h8V11h-8M3 21h8v-6H3m0-2h8V3H3z" /></svg>
                <p className={`${isCollapsed ? "hidden" : "hidden md:block"}`}>Dashboard</p>

                {/* Tooltip */}
                <div className={`absolute -right-1 translate-x-full w-fit z-50 inline-block px-3 py-2 text-sm font-medium text-white text-nowrap bg-gray-800 rounded-lg shadow-sm transition-all ${tooltip === "Dashboard" && isCollapsed ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                  Dashboard
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/gestion-bacs" className={`flex items-center gap-2 p-2 text-sm rounded ${selected === "gestion-bacs" ? "bg-white font-semibold" : "font-medium hover:bg-orange-50"}`} onClick={() => handleItemClick("gestion-bacs")} onMouseEnter={() => setTooltip("Infos Locales")} onMouseLeave={() => setTooltip("")}>
                <svg xmlns="http://www.w3.org/2000/svg"  className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>
                <p className={`${isCollapsed ? "hidden" : "hidden md:block"}`}>Gestion des bacs</p>

                {/* Tooltip */}
                <div role="tooltip" className={`absolute -right-1 translate-x-full w-fit z-50 inline-block px-3 py-2 text-sm font-medium text-white text-nowrap bg-gray-800 rounded-lg shadow-sm transition-all ${tooltip === "Infos Locales" && isCollapsed ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                  Gestion des bacs
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/tournees" className={`flex items-center gap-2 p-2 text-sm rounded ${selected === "Tournees" ? "bg-white font-semibold" : "font-medium hover:bg-orange-50"}`} onClick={() => handleItemClick("Tournees")} onMouseEnter={() => setTooltip("Vidéos")} onMouseLeave={() => setTooltip("")}>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M16.5 4v4.25l2.86 1.69l-.75 1.22L15 9V4zm-.5 9c1.36 0 2.54-.5 3.5-1.47c1-.97 1.5-2.14 1.5-3.53c0-1.36-.5-2.54-1.5-3.5c-.96-1-2.14-1.5-3.5-1.5c-1.39 0-2.56.5-3.53 1.5C11.5 5.46 11 6.64 11 8c0 1.39.5 2.56 1.47 3.53S14.61 13 16 13m-2.5 6c.44 0 .8-.16 1.08-.46s.42-.65.42-1.04c0-.42-.14-.77-.42-1.07S13.94 16 13.5 16s-.8.13-1.08.43s-.42.65-.42 1.07c0 .39.14.74.42 1.04s.64.46 1.08.46M3 13h8.11C9.7 11.64 9 10 9 8H3zm1.5 6c.44 0 .8-.16 1.08-.46S6 17.89 6 17.5c0-.42-.14-.77-.42-1.07S4.94 16 4.5 16s-.8.13-1.08.43S3 17.08 3 17.5c0 .39.14.74.42 1.04s.64.46 1.08.46M16 1c1.92 0 3.58.67 4.95 2.05C22.33 4.42 23 6.08 23 8c0 1.77-.56 3.29-1.72 4.59c-1.15 1.29-2.58 2.07-4.28 2.32V18c0 .84-.33 1.58-1 2.2V22c0 .27-.11.5-.3.71c-.2.2-.42.29-.7.29h-1c-.27 0-.5-.09-.71-.29A.98.98 0 0 1 13 22v-1H5v1c0 .27-.09.5-.29.71c-.21.2-.44.29-.71.29H3c-.28 0-.5-.09-.7-.29c-.19-.21-.3-.44-.3-.71v-1.8c-.67-.62-1-1.36-1-2.2V8c0-1.58.67-2.65 2.05-3.2C4.42 4.26 6.41 4 9 4h.61c.28 0 .48.03.61.03C11.63 2 13.55 1 16 1"/></svg>
                <p className={`${isCollapsed ? "hidden" : "hidden md:block"}`}>Tournées</p>

                {/* Tooltip */}
                <div role="tooltip" className={`absolute -right-1 translate-x-full w-fit z-50 inline-block px-3 py-2 text-sm font-medium text-white text-nowrap bg-gray-800 rounded-lg shadow-sm transition-all ${tooltip === "Vidéos" && isCollapsed ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                  Tournées
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/maps" className={`flex items-center gap-2 p-2 text-sm rounded ${selected === "Maps" ? "bg-white font-semibold" : "font-medium hover:bg-orange-50"}`} onClick={() => handleItemClick("Maps")} onMouseEnter={() => setTooltip("Vidéos")} onMouseLeave={() => setTooltip("")}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"/></svg>
                <p className={`${isCollapsed ? "hidden" : "hidden md:block"}`}>Cartes & Géolocalisation</p>

                {/* Tooltip */}
                <div role="tooltip" className={`absolute -right-1 translate-x-full w-fit z-50 inline-block px-3 py-2 text-sm font-medium text-white text-nowrap bg-gray-800 rounded-lg shadow-sm transition-all ${tooltip === "Vidéos" && isCollapsed ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                  Cartes & Géolocalisation
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/alertes" className={`flex items-center gap-2 p-2 text-sm rounded ${selected === "Alertes" ? "bg-white font-semibold" : "font-medium hover:bg-orange-50"}`} onClick={() => handleItemClick("Alertes")} onMouseEnter={() => setTooltip("Services")} onMouseLeave={() => setTooltip("")}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M13 14h-2V9h2m0 9h-2v-2h2M1 21h22L12 2z"/></svg>
                <p className={`${isCollapsed ? "hidden" : "hidden md:block"}`}>Alertes & Incidents</p>

                {/* Tooltip */}
                <div role="tooltip" className={`absolute -right-1 translate-x-full w-fit z-50 inline-block px-3 py-2 text-sm font-medium text-white text-nowrap bg-gray-800 rounded-lg shadow-sm transition-all ${tooltip === "Services" && isCollapsed ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                  Alertes & Incidents
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/analyse-rapport" className={`flex items-center gap-2 p-2 text-sm rounded ${selected === "Analyse" ? "bg-white font-semibold" : "font-medium hover:bg-orange-50"}`} onClick={() => handleItemClick("Analyse")} onMouseEnter={() => setTooltip("Analyse")} onMouseLeave={() => setTooltip("")}>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9A3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42c-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.54 5.54 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13zM0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9c-.59.68-.95 1.62-.95 2.65V20zm24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65c2.56.34 4.45 1.51 4.45 2.9z" /></svg>
                <p className={`${isCollapsed ? "hidden" : "hidden md:block"}`}>Rapports & Analyses</p>

                {/* Tooltip */}
                <div role="tooltip" className={`absolute -right-1 translate-x-full w-fit z-50 inline-block px-3 py-2 text-sm font-medium text-white text-nowrap bg-gray-800 rounded-lg shadow-sm transition-all ${tooltip === "Utilisateurs" && isCollapsed ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                  Rapports & Analyses
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/maintenance" className={`flex items-center gap-2 p-2 text-sm rounded ${selected === "Maintenance" ? "bg-white font-semibold" : "font-medium hover:bg-orange-50"}`} onClick={() => handleItemClick("Maintenance")} onMouseEnter={() => setTooltip("Maintenance")} onMouseLeave={() => setTooltip("")}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M15.9 18.45c1.35 0 2.45-1.1 2.45-2.45s-1.1-2.45-2.45-2.45c-1.36 0-2.45 1.1-2.45 2.45s1.09 2.45 2.45 2.45m5.2-1.77l1.48 1.16c.13.11.17.29.08.45l-1.4 2.42a.35.35 0 0 1-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.27 1.85c-.02.17-.17.3-.34.3h-2.8c-.18 0-.32-.13-.35-.3l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.75.7c-.15.06-.34 0-.42-.15l-1.4-2.42a.35.35 0 0 1 .08-.45l1.48-1.16l-.05-.68l.05-.69l-1.48-1.15a.35.35 0 0 1-.08-.45l1.4-2.42c.08-.16.27-.22.42-.16l1.75.71c.36-.28.75-.52 1.18-.69l.26-1.86c.03-.16.17-.29.35-.29h2.8c.17 0 .32.13.34.29l.27 1.86c.42.17.82.41 1.18.69l1.74-.71c.17-.06.34 0 .43.16l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.15l.05.69zM6.69 8.07c.87 0 1.57-.7 1.57-1.57s-.7-1.58-1.57-1.58A1.58 1.58 0 0 0 5.11 6.5c0 .87.71 1.57 1.58 1.57m3.34-1.13l.97.74c.07.07.09.19.03.29l-.9 1.56c-.05.1-.17.14-.27.1l-1.12-.45l-.74.44l-.19 1.19c-.02.11-.11.19-.22.19h-1.8c-.12 0-.21-.08-.23-.19L5.4 9.62l-.76-.44l-1.14.45c-.09.04-.2 0-.26-.1l-.9-1.56c-.06-.1-.03-.22.05-.29l.95-.74l-.03-.44l.03-.44l-.95-.74a.23.23 0 0 1-.05-.29l.9-1.56c.06-.1.17-.14.26-.1l1.13.45l.77-.44l.16-1.19c.02-.11.11-.19.23-.19h1.8c.11 0 .2.08.22.19L8 3.38l.74.44l1.12-.45c.1-.04.22 0 .27.1l.9 1.56c.06.1.04.22-.03.29l-.97.74l.03.44z"/></svg>
                <p className={`${isCollapsed ? "hidden" : "hidden md:block"}`}>Maintenance</p>

                {/* Tooltip */}
                <div role="tooltip" className={`absolute -right-1 translate-x-full w-fit z-50 inline-block px-3 py-2 text-sm font-medium text-white text-nowrap bg-gray-800 rounded-lg shadow-sm transition-all ${tooltip === "Services" && isCollapsed ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                  Maintenance
                </div>
              </Link>
            </li>
          </ul>
          <p className={`${isCollapsed ? "hidden" : "hidden md:block"} text-sm font-medium text-black/50 px-2 mb-2`}>Paramètres</p>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/dashboard/members" className={`flex items-center gap-2 p-2 text-sm rounded ${selected === "Utilisateurs" ? "bg-white font-semibold" : "font-medium hover:bg-orange-50"}`} onClick={() => handleItemClick("Utilisateurs")} onMouseEnter={() => setTooltip("Utilisateurs")} onMouseLeave={() => setTooltip("")}>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9A3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42c-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.54 5.54 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13zM0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9c-.59.68-.95 1.62-.95 2.65V20zm24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65c2.56.34 4.45 1.51 4.45 2.9z" /></svg>
                <p className={`${isCollapsed ? "hidden" : "hidden md:block"}`}>Utilisateurs</p>

                {/* Tooltip */}
                <div role="tooltip" className={`absolute -right-1 translate-x-full w-fit z-50 inline-block px-3 py-2 text-sm font-medium text-white text-nowrap bg-gray-800 rounded-lg shadow-sm transition-all ${tooltip === "Utilisateurs" && isCollapsed ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                  Utilisateurs
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/report" className="flex items-center gap-2 font-medium p-2 text-sm rounded hover:bg-orange-50" onClick={() => handleItemClick("logs")} onMouseEnter={() => setTooltip("Signaler")} onMouseLeave={() => setTooltip("")}>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M21 0H3C1.9 0 1 .9 1 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2m0 5H3V2h18zM7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/></svg>
                <p className={`${isCollapsed ? "hidden" : "hidden md:block"}`}>Logs d{`'`}activités</p>

                {/* Tooltip */}
                <div role="tooltip" className={`absolute -right-1 translate-x-full w-fit z-50 inline-block px-3 py-2 text-sm font-medium text-white text-nowrap bg-gray-800 rounded-lg shadow-sm transition-all ${tooltip === "Signaler" && isCollapsed ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                  Logs d{`'`}activités
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/preferences" className="flex items-center gap-2 font-medium p-2 text-sm rounded hover:bg-orange-50" onClick={() => handleItemClick("preferences")} onMouseEnter={() => setTooltip("Signaler")} onMouseLeave={() => setTooltip("")}>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64z"/></svg>
                <p className={`${isCollapsed ? "hidden" : "hidden md:block"}`}>Préférences</p>

                {/* Tooltip */}
                <div role="tooltip" className={`absolute -right-1 translate-x-full w-fit z-50 inline-block px-3 py-2 text-sm font-medium text-white text-nowrap bg-gray-800 rounded-lg shadow-sm transition-all ${tooltip === "Signaler" && isCollapsed ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                  Préférences
                </div>
              </Link>
            </li>
          </ul>
        </div>

        {/* Déconnexion */}
        <div className="w-full flex justify-between items-center bg-orange-50 p-4 mt-auto">
          {/* Profile */}
          <span className={`text-sm font-semibold ${isCollapsed ? "hidden" : "hidden md:block"}`}>Déconnexion</span>

          {/* Bouton deconnexion */}
          <button className="flex items-center font-semibold p-2 rounded hover:bg-orange-100" onClick={() => {
            signOut()
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="m17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5M4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z" /></svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar