import { Link } from "wouter";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#E8E3DE] py-12 mt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div>
            <img src="/images/logo-icon.png" alt="Fair Park Bible Fellowship" className="w-12 h-12 mb-3" />
            <h3 className="font-serif font-bold text-white mb-2">Fair Park Bible Fellowship</h3>
            <p className="text-sm italic text-[#C4BFBA]">A Light of Hope for All People</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#6F4E37] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#6F4E37] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/beliefs" className="hover:text-[#6F4E37] transition-colors">
                  What We Believe
                </Link>
              </li>
              <li>
                <Link href="/sermons" className="hover:text-[#6F4E37] transition-colors">
                  Sermons
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[#6F4E37]" />
                <span>1321 Rowan Ave<br />Dallas, TX 75223</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0 text-[#6F4E37]" />
                <a href="tel:+12143124700" className="hover:text-[#6F4E37] transition-colors">
                  (214) 312-4700
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0 text-[#6F4E37]" />
                <a href="mailto:info@fairparkbiblefellowship.org" className="hover:text-[#6F4E37] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="font-serif font-bold text-white mb-4">Service Times</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-medium">Sunday Service</span>
                <p className="text-[#C4BFBA]">10:30 AM</p>
              </li>
              <li>
                <span className="font-medium">Wednesday Bible Study</span>
                <p className="text-[#C4BFBA]">7:00 PM</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#3A3A38] py-6">
          <p className="text-center text-sm text-[#A39B92]">
            © 2025 Fair Park Bible Fellowship. All rights reserved. | Built with reverence to God's Word
          </p>
        </div>
      </div>
    </footer>
  );
}
