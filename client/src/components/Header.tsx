import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Beliefs", href: "/beliefs" },
    { label: "Sermons", href: "/sermons" },
    { label: "Visit", href: "/visit" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E8E3DE] shadow-sm">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src="/images/logo-icon.png" alt="Fair Park Bible Fellowship" className="w-12 h-12" />
          <span className="hidden sm:block font-serif font-bold text-[#6F4E37] text-sm leading-tight">
            Fair Park<br />
            <span className="text-xs font-normal">Bible Fellowship</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#1A1A1A] hover:text-[#6F4E37] transition-colors duration-200 border-b-2 border-transparent hover:border-[#6F4E37]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+12143124700"
            className="px-4 py-2 text-sm font-medium text-[#6F4E37] border-2 border-[#6F4E37] rounded hover:bg-[#6F4E37] hover:text-white transition-all duration-200"
          >
            Call Us
          </a>
          <button className="px-4 py-2 text-sm font-medium bg-[#6F4E37] text-white rounded hover:bg-[#5A3F2F] transition-colors duration-200">
            Donate
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-[#6F4E37]"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#FAFAF8] border-t border-[#E8E3DE] py-4">
          <div className="container flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-[#1A1A1A] hover:text-[#6F4E37] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2 border-t border-[#E8E3DE]">
              <a
                href="tel:+12143124700"
                className="flex-1 px-3 py-2 text-sm font-medium text-[#6F4E37] border-2 border-[#6F4E37] rounded text-center"
              >
                Call
              </a>
              <button className="flex-1 px-3 py-2 text-sm font-medium bg-[#6F4E37] text-white rounded">
                Donate
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
