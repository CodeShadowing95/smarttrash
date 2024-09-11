"use client";

import React, { useEffect, useState } from 'react'
import { AddVideoBtn } from '@/components/mobile';

const Tournees = () => {
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
      <AddVideoBtn isMobile={true} label="Nouvelle tournée" />
      {/* Mobile - Add Video ENDS */}

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Planification des tournées</h1>
          <p className="text-gray-500 text-sm">Dépêchez efficacement vos équipes sur le terrain avec notre planning.</p>
        </div>
        <AddVideoBtn isMobile={false} label="Nouvelle tournée" />
      </div>

      <section className="bg-white antialiased mt-4 border">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
              Planning de collecte
            </h2>

            <div className="mt-4">
              <a href="#" title=""
                className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
                Répartition des équipes sur le terrain
                <svg aria-hidden="true" className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
            <div className="-my-4 divide-y divide-gray-200">
              <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right shrink-0">
                  08:00 - 09:00
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">Opening remarks</a>
                </h3>
              </div>

              <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  09:00 - 10:00
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">Bergside LLC: Controlling the video traffic flows</a>
                </h3>
              </div>

              <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  10:00 - 11:00
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">Flowbite - An Open Framework for Forensic Watermarking</a>
                </h3>
              </div>

              <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  11:00 - 12:00
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">Coffee Break</a>
                </h3>
              </div>

              <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  12:00 - 13:00
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">Scaling your brand from €0 to multimillion euros</a>
                </h3>
              </div>

              <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  13:00 - 14:00
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">Updates from the Open Source Multimedia community</a>
                </h3>
              </div>

              <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  14:00 - 15:00
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">Exploring the balance between customer acquisition and retention</a>
                </h3>
              </div>

              <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  15:00 - 16:00
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">Flowbite - An Open Framework for Forensic Watermarking</a>
                </h3>
              </div>

              <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  16:00 - 14:00
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">Scaling your brand from €0 to multimillion euros</a>
                </h3>
              </div>

              <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  17:00 - 14:00
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">Drinks & networking</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tournees