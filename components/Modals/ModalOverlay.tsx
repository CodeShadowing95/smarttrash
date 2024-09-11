"use client";

import React, { useEffect, useState } from 'react'

const ModalOverlay = ({ children, isOpen }: { children: React.ReactNode, isOpen: boolean }) => {
  const [toggleContent, setToggleContent] = useState(false)

  // Disable scroll on the modal when it's open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  // Make toggleContent true after 2.5 seconds when isOpen is true
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setToggleContent(true)
      }, 100)
    } else {
      setToggleContent(false)
      setTimeout(() => {
        setToggleContent(false)
      }, 100)
    }
  }, [isOpen])

  return (
    // Overlay
    <div className={`fixed inset-0 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} flex justify-end bg-neutral-900/40 z-50 overflow-hidden transition-all duration-300 ease-in-out p-3`}>
      <div className={`w-full max-w-lg bg-white rounded-lg ease-out transition-transform duration-200 transform ${toggleContent ? 'translate-x-0' : 'translate-x-[150%]'}`}>
        {children}
      </div>
    </div>
  )
}

export default ModalOverlay