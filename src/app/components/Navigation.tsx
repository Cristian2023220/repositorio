import { useState } from 'react';
import { Flame, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Formação', href: '#formacao' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-amber-500/20 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Flame className="w-6 h-6 text-amber-500 group-hover:animate-pulse" />
            <span className="font-bold text-amber-500 tracking-wider">DEV ARENA</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-amber-500 transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-amber-500 hover:text-amber-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-amber-500/20 mt-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-300 hover:text-amber-500 hover:bg-amber-900/20 px-4 rounded transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
