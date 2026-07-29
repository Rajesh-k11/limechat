import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-pure-white py-16 border-t border-outline-variant/30">
      <div className="max-w-[1440px] mx-auto px-4 md:px-margin-desktop">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand & Logo */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXYqquwxWPKnapnRMC6C47_DSiTl3wI8UbQS7F9c6JuvdhHwhP5vhzjLWqNWW-ddQc4bYST4_lRpCPZ2LXRhLy2c11BqKHwV_-hX290GQehAZXJ5tZiqYt06fzK37lflN0EnYzBSUY4Ckx16gcwbzGhz9kWPwlnAWOSndDPv_qsDx7-TjaYMqXaUbL3jCWSzDqU7RdyD7gm197d6j2ISAEFWPHiay9iSJQXX6vPHWBXP787LvcYW4NIf0Otn-aHJR6IA"
                alt="LimeChat Logo"
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="font-body-sm text-sm text-on-surface-variant max-w-[220px] leading-relaxed">
              Next-gen conversational commerce powered by Level 4 AI for global D2C brands.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-label-sm text-xs text-outline mb-4 uppercase tracking-wider font-bold">
              Careers Portal
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/" className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors">
                  Careers Home
                </Link>
              </li>
              <li>
                <Link href="/roles" className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5">
                  Open Roles
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-forest"></span>
                </Link>
              </li>
              <li>
                <Link href="/life" className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors">
                  Life at LimeChat
                </Link>
              </li>
              <li>
                <Link href="/press" className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors">
                  Press &amp; Media
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-label-sm text-xs text-outline mb-4 uppercase tracking-wider font-bold">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="https://www.limechat.ai/" target="_blank" rel="noreferrer" className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors">
                  About Us ↗
                </a>
              </li>
              <li>
                <a href="https://www.limechat.ai/" target="_blank" rel="noreferrer" className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors">
                  Case Studies ↗
                </a>
              </li>
              <li>
                <a href="https://www.limechat.ai/" target="_blank" rel="noreferrer" className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors">
                  Integrations ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-label-sm text-xs text-outline mb-4 uppercase tracking-wider font-bold">
              Resources
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li className="font-body-sm text-sm text-on-surface-variant hover:text-primary cursor-pointer">Blog &amp; Guides</li>
              <li className="font-body-sm text-sm text-on-surface-variant hover:text-primary cursor-pointer">Help Center</li>
              <li className="font-body-sm text-sm text-on-surface-variant hover:text-primary cursor-pointer">API Documentation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-label-sm text-xs text-outline mb-4 uppercase tracking-wider font-bold">
              Social Media
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="https://www.linkedin.com/company/limechat/" target="_blank" rel="noreferrer" className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href="https://twitter.com/limechat_ai" target="_blank" rel="noreferrer" className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
                  Twitter / X ↗
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/limechat.ai/" target="_blank" rel="noreferrer" className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
                  Instagram ↗
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-outline-variant/20 gap-4">
          <span className="font-body-sm text-xs text-on-surface-variant">
            © 2026 LimeChat Technologies Inc. All rights reserved. Intelligence at scale.
          </span>
          <div className="flex items-center gap-4 text-xs font-label-md text-on-surface-variant">
            <span className="hover:text-primary cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-primary cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-primary cursor-pointer">Cookie Preferences</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
