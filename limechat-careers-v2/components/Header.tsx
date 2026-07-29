'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Careers Home' },
    { href: '/roles', label: 'Open Roles', badge: 'Hiring' },
    { href: '/life', label: 'Life at LimeChat' },
    { href: '/press', label: 'Press & Media' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-pure-white/90 backdrop-blur-xl border-b border-outline-variant/20 shadow-[0_1px_12px_rgba(0,0,0,0.03)]">
      <div className="h-20 max-w-[1440px] mx-auto px-4 md:px-margin-desktop flex items-center justify-between">
        
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXYqquwxWPKnapnRMC6C47_DSiTl3wI8UbQS7F9c6JuvdhHwhP5vhzjLWqNWW-ddQc4bYST4_lRpCPZ2LXRhLy2c11BqKHwV_-hX290GQehAZXJ5tZiqYt06fzK37lflN0EnYzBSUY4Ckx16gcwbzGhz9kWPwlnAWOSndDPv_qsDx7-TjaYMqXaUbL3jCWSzDqU7RdyD7gm197d6j2ISAEFWPHiay9iSJQXX6vPHWBXP787LvcYW4NIf0Otn-aHJR6IA"
            alt="LimeChat Logo"
            width={130}
            height={34}
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
          <span className="hidden sm:inline-block font-label-sm text-[11px] uppercase tracking-wider text-surface-deep bg-accent-lime/40 px-2 py-0.5 rounded-full font-semibold">
            Careers Portal
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-label-md text-label-md transition-all flex items-center gap-1.5 py-1 ${
                  isActive
                    ? 'text-primary font-bold border-b-2 border-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {link.label}
                {link.badge && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-forest animate-ping" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.limechat.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors px-3 py-1.5"
          >
            Main Site <span className="material-symbols-outlined text-[14px]">north_east</span>
          </a>
          <Link
            href="/roles"
            className="bg-accent-lime text-surface-deep px-5 py-2.5 rounded-full font-label-md text-label-md font-bold shadow-sm hover:shadow-md hover:bg-pure-white border border-accent-lime transition-all"
          >
            View Open Roles
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-on-surface hover:bg-surface-container rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-pure-white border-b border-outline-variant/30 px-6 py-6 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-headline-sm text-lg py-2 flex items-center justify-between border-b border-surface-container ${
                pathname === link.href ? 'text-primary font-bold' : 'text-on-surface-variant'
              }`}
            >
              {link.label}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://www.limechat.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center font-label-md text-sm text-on-surface-variant py-2"
            >
              Visit Official LimeChat Website ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
