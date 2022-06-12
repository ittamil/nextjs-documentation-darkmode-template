import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/solid'

function Topnav() {
  const [isOpen, setIsOpen] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null
    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className="w-6 h-6 text-orange-500"
          role="button"
          onClick={() => setTheme('light')}
        />
      )
    } else {
      return (
        <MoonIcon
          className="w-6 h-6"
          role="button"
          onClick={() => setTheme('dark')}
        />
      )
    }
  }
  return (
    <div>
      <div className="bg-white dark:bg-black  w-full flex items-center justify-end  py-6 px-8 space-x-6 fixed z-50 border-b dark:border-none">
        <a
          href="/"
          className="text-black dark:text-white font-bold mr-auto text-xl md:px-14"
        >
          Optcoder
        </a>
        <div className="hidden md:block font-bold text-black dark:text-white">
          <Link
            href="/"
            className="px-3 py-2 transition rounded-3xl duration-400 ease-in"
          >
            Home
          </Link>
        </div>
        {renderThemeChanger()}
        {isOpen ? (
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="md:hidden inline-flex items-center justify-center text-black dark:text-white transition duration-400 ease-in"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        ) : (
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="md:hidden inline-flex items-center justify-center text-black dark:text-white transition duration-400 ease-in"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
        )}
      </div>
      {isOpen ? (
        <div className="md:hidden bg-white dark:bg-black w-full py-6 fixed z-50 mt-14 transition duration-400 ease-in">
          <div className="font-bold text-black dark:text-white text-center pb-2">
            <Link
              href="/"
              className="px-3 py-2 transition rounded-3xl duration-400 ease-in"
            >
              Home
            </Link>
          </div>
          <div className="font-bold text-black dark:text-white text-center py-2">
            <Link
              href="/feedback"
              className="px-3 py-2 transition rounded-3xl duration-400 ease-in"
            >
              Feedback
            </Link>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Topnav
