import { LuMenu, LuX , LuCopyright  } from "react-icons/lu"
import { navItems } from '../data/mockData';
import { useState } from "react";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm shadow-sm border-b border-neutral-100 dark:border-neutral-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-16">

          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-all duration-300 group uppercase tracking-wide"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-neutral-900 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-600"></div>
              <div className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-500"></div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button
              className="relative p-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white focus:outline-none transition-all duration-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="relative w-5 h-5">
                <LuMenu
                  size={20}
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <LuX
                  size={20}
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/98 dark:bg-neutral-900/98 backdrop-blur-md border-t border-neutral-100 dark:border-neutral-800 shadow-lg">
          <div className="px-6 py-8 space-y-6">
            {navItems.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`block group relative py-4 px-6 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white font-medium transition-all duration-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg w-full text-left
                `}>
            
                <div className="flex items-center justify-between">
                  <span className="uppercase tracking-wide text-sm">
                    {link.label}
                  </span>
                  <div className="w-4 h-px bg-neutral-300 dark:bg-neutral-600 group-hover:w-8 group-hover:bg-neutral-900 dark:group-hover:bg-white transition-all duration-300"></div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="px-6 pb-6">
            <div className="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
                  <LuCopyright className="inline mb-0.5" /> 2025 Axel Roubaud. Tous droits réservés.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

