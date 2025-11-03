"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  // ===== NAVIGATION LINKS =====
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/profile", label: "Firm Profile" },
    { href: "/clients", label: "Clients" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }, // ✅ halaman baru
  ];

  return (
    <>
      {/* ===== FIXED NAVBAR DI ATAS ===== */}
      <div className="fixed top-0 left-0 w-full bg-darkbg/70 backdrop-blur-md 
                      text-softwhite z-50 border-b border-gold/30">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
          {/* ===== LOGO ===== */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Law Office Logo"
              width={65}
              height={65}
              priority
              className="hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* ===== LINK NAVIGASI ===== */}
          <ul className="flex gap-6 sm:gap-10 text-sm sm:text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`hover:text-goldLight transition ${
                    pathname === link.href ? "text-gold font-semibold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}