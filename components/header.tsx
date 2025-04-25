"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, LogIn } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-dark/90 backdrop-blur-md shadow-md" : "bg-dark/70 backdrop-blur"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="#" className="flex items-center gap-2 text-xl font-extrabold text-light">
          {/* Imagem: public/images/logo.png */}
          <Image src="/images/logo.png" alt="CFT Logo" width={80} height={40} className="h-10 w-auto" />
          CFT DROP
        </Link>

        <nav
          className={`
          ${
            isMobileMenuOpen
              ? "fixed inset-0 bg-dark/95 flex flex-col items-center justify-center z-50"
              : "hidden md:flex items-center"
          }
        `}
        >
          {isMobileMenuOpen && (
            <button className="absolute top-4 right-4 text-light" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          )}

          <ul
            className={`
            ${isMobileMenuOpen ? "flex flex-col items-center gap-6 text-xl" : "flex gap-5 mr-4"}
          `}
          >
            <li>
              <Link href="#" className="nav-link active" onClick={() => setIsMobileMenuOpen(false)}>
                Início
              </Link>
            </li>
            <li>
              <Link href="#features" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                Vantagens
              </Link>
            </li>
            <li>
              <Link href="#how-it-works" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                Como Funciona
              </Link>
            </li>
            <li>
              <Link href="#upseller" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                Integração Upseller
              </Link>
            </li>
            <li>
              <Link href="#tiktokshop" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                TikTok Shop Brasil
              </Link>
            </li>
            <li>
              <Link href="#ecommerce" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                Plataformas
              </Link>
            </li>
            <li>
              <Link href="#produtos" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                Produtos
              </Link>
            </li>
            <li>
              <Link href="#contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                Contato
              </Link>
            </li>
            <li>
              <Link href="/faq" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                FAQ
              </Link>
            </li>
          </ul>

          {!isMobileMenuOpen && (
            <Link
              href="https://cftdropshipping.com.br/login"
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogIn size={18} />
              <span>Fazer Login</span>
            </Link>
          )}
        </nav>

        {/* Botão de login para mobile */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            href="https://cftdropshipping.com.br/login"
            className="bg-primary hover:bg-primary-dark text-white font-semibold py-1.5 px-3 rounded-md transition-all duration-300 flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogIn size={16} />
            <span className="text-sm">Login</span>
          </Link>

          <button className="text-light" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}
