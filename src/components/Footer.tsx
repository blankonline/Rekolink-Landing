import { motion } from 'motion/react';
import { Linkedin, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/top_bar_logo.png';

// X (Twitter) Logo Component
const XLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/rekolink', label: 'LinkedIn' },
    { icon: XLogo, href: 'https://x.com/rekolink', label: 'X' },
    { icon: Instagram, href: 'https://www.instagram.com/rekolinkapp', label: 'Instagram' },
    { icon: Mail, href: 'mailto:contact@rekolink.com', label: 'Email' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#F9FCFA] to-white border-t border-[#E8E8E8]">
      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          {/* Brand Section - Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={logo} 
                alt="Rekolink" 
                className="h-5 w-auto mb-3"
                style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(13%) saturate(806%) hue-rotate(82deg) brightness(94%) contrast(88%)' }}
              />
              <p className="text-[#6A6A6A] max-w-xs" style={{ fontSize: '13px', lineHeight: '145%' }}>
                Building trust through verified skills. <span className="text-[#8CA58F] whitespace-nowrap" style={{ fontWeight: 600 }}>Real Trust. Real Recognition.</span>
              </p>
            </motion.div>
          </div>

          {/* Social Links - Center */}
          <motion.div
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-8 h-8 rounded-full bg-[#E5E9E6] flex items-center justify-center text-[#47634A] hover:bg-[#8CA58F] hover:text-white transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-3.5 h-3.5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Links & Copyright Section - Right */}
          <motion.div
            className="flex flex-col items-start md:items-end gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link
                to="/privacy"
                className="text-[#6A6A6A] hover:text-[#8CA58F] transition-colors"
                style={{ fontSize: '14px' }}
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-[#6A6A6A] hover:text-[#8CA58F] transition-colors"
                style={{ fontSize: '14px' }}
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-[#6A6A6A] hover:text-[#8CA58F] transition-colors"
                style={{ fontSize: '14px' }}
              >
                Cookie Policy
              </Link>
              <Link
                to="/moderation"
                className="text-[#6A6A6A] hover:text-[#8CA58F] transition-colors"
                style={{ fontSize: '14px' }}
              >
                Moderation
              </Link>
              <Link
                to="/legal"
                className="text-[#6A6A6A] hover:text-[#8CA58F] transition-colors"
                style={{ fontSize: '14px' }}
              >
                Legal
              </Link>
            </div>
            
            {/* Copyright integrated */}
            <p className="text-[#6A6A6A]" style={{ fontSize: '12px' }}>
              © {new Date().getFullYear()} Rekolink. All rights reserved.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8CA58F] to-transparent opacity-50" />
    </footer>
  );
}