"use client";

import React, { useState } from 'react'
import { ModalLocalInfo } from '../Modals'

const AddLocalInfo = ({ isMobile }: { isMobile: boolean }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [toggleModalInfo, setToggleModalInfo] = useState(false)

  return (
    <>
    {isMobile ? (
      <div className="fixed bottom-10 right-4 w-12 h-12 z-50 lg:hidden">
        <div className="w-full h-full md:hidden">
          <button type="button" className="w-12 h-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-3 text-center inline-flex items-center justify-center"
            onClick={() => setToggleModalInfo(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24"><path fill="currentColor" d="M14 2H6c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h7.81c-.53-.91-.81-1.95-.81-3c0-.33.03-.67.08-1H6v-2h7.81c.46-.8 1.1-1.5 1.87-2H6v-2h12v1.08c.33-.05.67-.08 1-.08s.67.03 1 .08V8zm-1 7V3.5L18.5 9zm5 6v3h-3v2h3v3h2v-3h3v-2h-3v-3z"/></svg>
          </button>
        </div>
      </div>
    ) : (
      <div className="md:flex hidden gap-2">
        <button type="button" className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" onClick={() => setToggleModalInfo(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1 text-white" viewBox="0 0 24 24"><path fill="currentColor" d="M14 2H6c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h7.81c-.53-.91-.81-1.95-.81-3c0-.33.03-.67.08-1H6v-2h7.81c.46-.8 1.1-1.5 1.87-2H6v-2h12v1.08c.33-.05.67-.08 1-.08s.67.03 1 .08V8zm-1 7V3.5L18.5 9zm5 6v3h-3v2h3v3h2v-3h3v-2h-3v-3z"/></svg>
          Nouvelle IL
        </button>
      </div>
    )}

    <ModalLocalInfo
      onToggleModal={setToggleModalInfo}
      isOpen={toggleModalInfo}
    />
    </>
  )
}

export default AddLocalInfo