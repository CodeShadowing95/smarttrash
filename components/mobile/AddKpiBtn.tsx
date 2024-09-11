"use client";

import React, { useState } from 'react'
import { ModalKpi } from '../Modals';

const AddKpiBtn = ({ isMobile } : { isMobile: boolean }) => {
  const [toggleModalKpi, setToggleModalKpi] = useState(false)

  return (
    <>
      {isMobile ? (
        <button type="button"
          className="fixed bottom-8 right-4 w-12 h-12 z-50 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-3 text-center lg:hidden inline-flex items-center justify-center shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
          onClick={() => setToggleModalKpi(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24"><path fill="currentColor" d="M22 5v2h-3v3h-2V7h-3V5h3V2h2v3zm-3 14H5V5h6V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6h-2zm-4-6v4h2v-4zm-4 4h2V9h-2zm-2 0v-6H7v6z" /></svg>
        </button>
      ) : (
        <button type="button" className="px-3 py-2 text-xs font-medium text-center lg:inline-flex hidden items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" onClick={() => setToggleModalKpi(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M22 5v2h-3v3h-2V7h-3V5h3V2h2v3zm-3 14H5V5h6V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6h-2zm-4-6v4h2v-4zm-4 4h2V9h-2zm-2 0v-6H7v6z" /></svg>
          Nouveau KPI
        </button>
      )}

      
      <ModalKpi
        isOpen={toggleModalKpi}
        onToggleModal={setToggleModalKpi}
      />
    </>
  )
}

export default AddKpiBtn