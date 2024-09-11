import React from 'react'
import { UserCard } from '@/components'

const IndexMembers = () => {
  return (
    <div className="flex-1">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Administrateurs</h1>
          <p className="text-gray-500 text-sm">Vue d{`'`}ensemble des administrateurs de l{`'`}application</p>
        </div>
        <div className="flex gap-2">
          <div>
            <input type="text" className="block w-[200px] p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Rechercher..." />
          </div>
          <button data-dropdown-toggle="dropdown" className="text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 me-2 text-gray-700" viewBox="0 0 24 24"><path fill="currentColor" d="M3 13h12v-2H3m0-5v2h18V6M3 18h6v-2H3z"/></svg>
            Trier par:<span className="ml-1 text-gray-700 font-semibold">Nom(A-Z)</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ms-2 text-gray-700" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z" /></svg>
          </button>
          {/* Divider */}
          <div className="w-px bg-gray-200" />
          <button type="button" className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" viewBox="0 0 24 24"><path fill="currentColor" d="M15 14c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4m-9-4V7H4v3H1v2h3v3h2v-3h3v-2m6 2a4 4 0 0 0 4-4a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4"/></svg>
            Ajouter
          </button>
        </div>
      </div>
      
      {/* Users listing */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-8">
        {/* User card */}
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  )
}

export default IndexMembers