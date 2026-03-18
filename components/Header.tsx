'use client'

import { useState } from 'react'

const LOGO_URL = '/assets/logo-anden.svg'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-content px-4 lg:px-0">
      <div className="flex items-center justify-between rounded-lg bg-cream/70 px-4 py-2 backdrop-blur-[10px]">
        <a href="#" aria-label="Andén home">
          <img src={LOGO_URL} alt="Andén" className="h-[23px] w-[102px]" />
        </a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg bg-[#d9d9d9] px-4 py-2.5 font-body text-lg text-brown-dark transition-colors hover:bg-[#ccc]"
          style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
        >
          Menú
        </button>
      </div>
    </header>
  )
}
