import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { SantekLogo } from './SantekLogo';
import { SectionId } from '../types';

interface NavLinkItem {
  label: string;
  href?: string;
  external?: boolean;
  submenu?: NavLinkItem[];
}

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLinkItem[] = [
    { label: 'Home', href: `#${SectionId.HOME}` },
    { label: 'Sobre', href: `#${SectionId.ABOUT}` },
    { label: 'Serviços', href: `#${SectionId.SERVICES}` },
    { 
      label: 'Suporte', 
      submenu: [
        { label: 'Anydesk', href: 'https://download.anydesk.com/AnyDesk.exe', external: true },
        { label: 'Rustdesk', href: 'https://github.com/rustdesk/rustdesk/releases/download/1.4.4/rustdesk-1.4.4-x86_64.msi', external: true },
        { label: 'WhatsApp', href: 'https://wa.me/5562994534667', external: true }
      ]
    },
    { label: 'Contato', href: `#${SectionId.CONTACT}` },
  ];

  const toggleMobileSubmenu = (label: string) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === label ? null : label);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-gradient-to-b from-black/90 to-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          
          {/* Logo (Always Left) */}
          <div className="flex-shrink-0 z-50">
            <a href="#" className="block" aria-label="Santek Home">
               <SantekLogo className="h-14 md:h-20 w-auto transition-transform hover:scale-105" />
            </a>
          </div>

          {/* Desktop Nav (Center) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" role="navigation">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.submenu ? (
                  <div className="relative">
                    <button 
                      className={`flex items-center gap-1 text-sm lg:text-base font-bold uppercase tracking-wide hover:text-santek-orange transition-colors ${
                        isScrolled ? 'text-gray-800' : 'text-white shadow-black drop-shadow-md'
                      }`}
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Desktop Dropdown */}
                    <div className="absolute top-full left-0 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                        {link.submenu.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            target={subItem.external ? "_blank" : "_self"}
                            rel={subItem.external ? "noopener noreferrer" : ""}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-santek-blue transition-colors font-medium border-b border-gray-50 last:border-0"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a 
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : ""}
                    className={`text-sm lg:text-base font-bold uppercase tracking-wide hover:text-santek-orange transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-santek-orange after:transition-all hover:after:w-full ${
                      isScrolled ? 'text-gray-800' : 'text-white shadow-black drop-shadow-md'
                    }`}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA (Right) */}
          <div className="hidden md:flex items-center">
            <a 
              href="#contact" 
              className="bg-santek-red text-white px-6 py-2.5 rounded-full font-bold hover:bg-red-700 transition shadow-lg shadow-red-900/20 flex items-center gap-2 transform hover:-translate-y-0.5"
              aria-label="Solicitar Orçamento"
            >
              <Phone size={18} aria-hidden="true" /> Orçamento
            </a>
          </div>

          {/* Mobile Menu Toggle (Right) */}
          <button 
            className={`md:hidden p-2 rounded-lg transition-colors z-50 ${isScrolled ? 'text-santek-blue' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={32} aria-hidden="true" /> : <Menu size={32} aria-hidden="true" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 animate-in slide-in-from-top-5 duration-200 h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.submenu ? (
                  // Mobile Submenu Accordion
                  <div className="border-b border-gray-100 last:border-0">
                    <button 
                      onClick={() => toggleMobileSubmenu(link.label)}
                      className="w-full text-gray-800 font-bold py-4 px-4 hover:bg-blue-50 hover:text-santek-blue rounded-lg transition-colors flex justify-between items-center group"
                      aria-expanded={mobileSubmenuOpen === link.label}
                    >
                      {link.label}
                      <ChevronDown className={`w-5 h-5 transition-transform ${mobileSubmenuOpen === link.label ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </button>
                    {mobileSubmenuOpen === link.label && (
                      <div className="bg-gray-50 pl-8 pr-4 py-2 space-y-2 rounded-b-lg">
                        {link.submenu.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            target={subItem.external ? "_blank" : "_self"}
                            rel={subItem.external ? "noopener noreferrer" : ""}
                            className="block py-3 text-sm text-gray-600 font-medium hover:text-santek-blue border-b border-gray-200 last:border-0"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // Regular Mobile Link
                  <a 
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    className="text-gray-800 font-bold py-4 px-4 hover:bg-blue-50 hover:text-santek-blue rounded-lg transition-colors flex justify-between items-center group border-b border-gray-100 last:border-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                    <span className="text-gray-300 group-hover:text-santek-blue" aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            ))}
             <div className="pt-6 mt-2">
               <a 
                  href="#contact"
                  className="bg-santek-red text-white w-full flex justify-center py-4 rounded-lg font-bold shadow-lg active:scale-95 transition-transform items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Pedir Orçamento Agora"
                >
                  <Phone size={20} aria-hidden="true" /> Pedir Orçamento Agora
                </a>
             </div>
          </div>
        </div>
      )}
    </header>
  );
};