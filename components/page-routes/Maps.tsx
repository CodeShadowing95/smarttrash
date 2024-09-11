"use client";

import React, { useEffect, useState } from 'react'

const Maps = () => {
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
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">SmartMap</h1>
          <p className="text-gray-500 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>

    </div>
  )
}

export default Maps