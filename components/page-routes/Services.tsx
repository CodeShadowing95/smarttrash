"use client";

import React, { useState } from 'react'
import { ServiceCard } from '@/components';
import { list_services } from '@/constants';

const Services = () => {
  const [isGrid, setIsGrid] = useState(true)
  const [selectedService, setSelectedService] = useState("Tous")
  const [servicesList, setServicesList] = useState([...list_services])

  const handleService = (name: string) => {
    setSelectedService(name)
    if (name === "Tous") {
      setServicesList([...list_services])
      return
    }

    if (name === "Service") {
      setServicesList([...list_services.filter((service) => service.categorie === "service")])
    } else {
      setServicesList([...list_services.filter((service) => service.categorie === "santé")])
    }
  }

  return (
    <div className="flex-1">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Nos Services</h1>
          <p className="text-gray-500 text-sm">Gestion des services proposés aux utilisateurs.</p>
        </div>
        <div className="flex gap-2">
          {/* Add video button */}
          <button type="button" className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"/></svg>
            Nouveau Service
          </button>
        </div>
      </div>

      <div className="w-full flex justify-between items-center mt-8">
        <div className="flex gap-2 p-1 bg-gray-200 rounded-lg shadow">
          <button data-dropdown-toggle="dropdown" className={`text-gray-900 ${selectedService === "Tous" ? "bg-white" : "hover:bg-gray-100"} focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-xs px-5 py-2 text-center inline-flex items-center`} type="button" onClick={() => handleService("Tous")}>Tous les services</button>
          <button data-dropdown-toggle="dropdown" className={`text-gray-900  ${selectedService === "Service" ? "bg-white" : "hover:bg-gray-100"} focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-xs px-5 py-2 text-center inline-flex items-center`} type="button" onClick={() => handleService("Service")}>Conciergerie Service</button>
          <button data-dropdown-toggle="dropdown" className={`text-gray-900  ${selectedService === "Santé" ? "bg-white" : "hover:bg-gray-100"} focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-xs px-5 py-2 text-center inline-flex items-center`} type="button" onClick={() => handleService("Santé")}>Conciergerie Santé</button>
        </div>
        <div className="flex gap-2">
          {/* Search bar */}
          <input type="text" className="block w-[200px] p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Rechercher un service..." />
          {/* Disposition */}
          <button className="text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center" type="button" onClick={() => setIsGrid(!isGrid)}>
            {isGrid ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" viewBox="0 0 24 24"><path fill="currentColor" d="M3 11h8V3H3m0 18h8v-8H3m10 8h8v-8h-8m0-10v8h8V3" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" viewBox="0 0 24 24"><path fill="currentColor" d="M7 5h14v2H7zm0 8v-2h14v2zM4 4.5A1.5 1.5 0 0 1 5.5 6A1.5 1.5 0 0 1 4 7.5A1.5 1.5 0 0 1 2.5 6A1.5 1.5 0 0 1 4 4.5m0 6A1.5 1.5 0 0 1 5.5 12A1.5 1.5 0 0 1 4 13.5A1.5 1.5 0 0 1 2.5 12A1.5 1.5 0 0 1 4 10.5M7 19v-2h14v2zm-3-2.5A1.5 1.5 0 0 1 5.5 18A1.5 1.5 0 0 1 4 19.5A1.5 1.5 0 0 1 2.5 18A1.5 1.5 0 0 1 4 16.5"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Services listing */}
      {isGrid ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
          {/* {Array(10).fill(0).map((_, index) => (
            <ServiceCard key={index} />
          ))} */}
          {servicesList.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nom Service
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  État
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 8 }).map((_, index) => (
                <tr key={index} className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Lorem Ipsum Dolor
                  </th>
                  <td className="px-6 py-4 max-w-xs">
                    {"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam iusto a quam, quos dignissimos eaque? Alias sed consectetur, eius facere, saepe perspiciatis cum, pariatur quod suscipit laudantium blanditiis perferendis iusto.".substring(0, 80) + "..."}
                  </td>
                  <td className="px-6 py-4">
                    En ligne
                  </td>
                  <td className="flex gap-2 px-6 py-4">
                    <div className="flex justify-center items-center w-8 h-8 text-gray-500 rounded-full hover:bg-gray-200 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"/></svg>
                    </div>
                    <div className="flex justify-center items-center w-8 h-8 text-gray-500 rounded-full hover:bg-gray-200 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/></svg>
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

export default Services