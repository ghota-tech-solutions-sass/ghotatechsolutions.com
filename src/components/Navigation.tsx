'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X } from '@phosphor-icons/react';
import SocialLinks from '@/components/SocialLinks';
import { CONTACT_LABEL } from '@/lib/content';

const navigation = [
  { name: 'Projets', href: '/#projets' },
  { name: 'Offres', href: '/services' },
  { name: 'À propos', href: '/a-propos' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) => !href.includes('#') && pathname.replace(/\/$/, '') === href;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-[1.05rem] font-semibold tracking-tight text-foreground" aria-label="Ghota Tech Solutions - Accueil">
            Ghota Tech
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground ${
                  isActive(item.href) ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <SocialLinks className="ml-2 border-l border-border pl-4" />
            <Link
              href="/#contact"
              className="ml-4 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:bg-primary active:translate-y-px"
            >
              {CONTACT_LABEL}
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-md p-2 text-foreground md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMenuOpen ? <X size={24} aria-hidden="true" /> : <List size={24} aria-hidden="true" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden md:hidden"
            >
              <div className="space-y-1 pb-6 pt-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <SocialLinks className="px-3 py-2" withLabels />
                <Link
                  href="/#contact"
                  className="mt-3 block rounded-full bg-foreground px-3 py-3 text-center text-base font-semibold text-background"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {CONTACT_LABEL}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
