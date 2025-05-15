'use client'

import Link from 'next/link'
import { FiPlus, FiDownload } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { RiTelegram2Fill } from "react-icons/ri"
import Button from './Button'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-800">
              My Projects
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex gap-3">
            <Button 
              variant="icon" 
              icon={<RiTelegram2Fill className="w-5 h-5" />} 
            />
            <Button 
              variant="icon" 
              icon={<FaLinkedinIn className="w-5 h-5" />} 
            />
            <Button 
              icon={<FiDownload className="w-5 h-5" />}
            >
              Скачать резюме
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
} 