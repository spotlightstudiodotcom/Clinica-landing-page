"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, Twitter,ArrowRight } from "lucide-react";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Inicio", "Sobre", "Consultas", "Contato"];
  
  return (
    <header className="absolute top-0 left-0 right-0 z-10 bg-transparent">
      <nav className="mx-auto max-w-[52.5rem] p-6 lg:max-w-[78rem]">
        <div className="relative flex items-center gap-x-4">
          <div className="order-1 flex grow basis-0">
            <a href="#" className="order-1">
              <svg fill="none" viewBox="0 0 28 28" height="28" width="28">
                <path className="fill-blue-600" d="M2.333 0A2.333 2.333 0 0 0 0 2.333V14c0 7.732 6.268 14 14 14 1.059 0 2.09-.117 3.082-.34.965-.217 1.585-1.118 1.585-2.107v-2.22a4.667 4.667 0 0 1 4.666-4.666h2.334A2.333 2.333 0 0 0 28 16.333v-14A2.333 2.333 0 0 0 25.667 0H21a2.333 2.333 0 0 0-2.333 2.333V14a4.667 4.667 0 0 1-9.334 0V2.333A2.333 2.333 0 0 0 7 0H2.333Z"/>
              </svg>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex order-2 items-center justify-center w-fit gap-4">
            {menuItems.map((item, index) => (
              <a key={index} href="#" className="text-white text-sm font-medium px-2 relative group w-fit">
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
                {item}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="order-4 flex items-center group peer lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-transparent hover:bg-gray-50/10 rounded-lg p-2 cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 256 256" className={`fill-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
                <path d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12ZM40 76h176a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24Zm176 104H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24Z"/>
              </svg>
              <svg width="16" height="16" viewBox="0 0 256 256" className={`absolute top-2 left-2 fill-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
                <path d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128 47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"/>
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="order-3 absolute top-11 left-0 w-full flex flex-col gap-2 bg-blue-400 ring-1 ring-inset ring-blue-300 shadow-md rounded-lg px-6 py-4 lg:hidden"
              >
                <div className="flex group flex-col gap-2 *:flex *:items-center *:gap-x-1.5 *:py-1.5 *:text-sm *:text-white *:font-medium">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                  
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
                <div className="flex justify-center gap-4 mt-4">
                  <Facebook className="text-white" size={20} />
                  <Instagram className="text-white" size={20} />
                  <Twitter className="text-white" size={20} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* CTA Button */}
          <div className="order-2 inline-flex items-center lg:order-3">
            <a href="#" className="border border-blue-700 hover:bg-blue-700 text-white rounded-lg px-3 py-3.5 text-sm font-medium transition duration-[250ms] ease-in-out">
              Agendar Consulta
              <ArrowRight className="inline-block ml-2" size={16} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}