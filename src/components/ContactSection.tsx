'use client';

import { useState } from 'react';
import { CONTACT_EMAIL, LINKEDIN_URL, MALT_URL, mailto } from '@/lib/content';

type ContactSectionProps = {
  title?: string;
  intro?: string;
};

export default function ContactSection({
  title = 'Parlons de votre projet',
  intro = 'Décrivez-moi en deux ou trois phrases ce que vous voulez faire. Je réponds moi-même, avec un avis franc, même si la réponse est « ce n’est pas un sujet pour l’IA ».',
}: ContactSectionProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border" aria-labelledby="contact-title">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 md:grid-cols-[1.1fr_1fr] lg:px-8">
        <div className="min-w-0">
          <p className="text-sm font-medium text-primary">Contact</p>
          <h2 id="contact-title" className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
          <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3"><span className="text-primary" aria-hidden="true">→</span>Premier échange de 30 minutes, gratuit et sans engagement.</li>
            <li className="flex gap-3"><span className="text-primary" aria-hidden="true">→</span>Missions en régie ou au forfait, à Lyon ou à distance.</li>
            <li className="flex gap-3"><span className="text-primary" aria-hidden="true">→</span>Facturation par ma société, Ghota Tech Solutions (EURL).</li>
          </ul>
        </div>

        <div className="min-w-0 rounded-xl border border-border bg-card p-6 md:p-8">
          <a
            href={mailto('Projet : ')}
            className="flex w-full items-center justify-center rounded-md bg-primary px-5 py-3.5 text-base font-semibold text-primary-foreground transition hover:brightness-110 active:translate-y-px"
          >
            Écrire un email
          </a>

          <div className="mt-4 flex items-center justify-between gap-3 rounded-md border border-border px-4 py-3">
            <span className="truncate font-mono text-sm text-foreground">{CONTACT_EMAIL}</span>
            <button
              type="button"
              onClick={copyEmail}
              className="shrink-0 rounded px-2 py-1 text-sm font-medium text-primary transition hover:bg-white/5"
              aria-live="polite"
            >
              {copied ? 'Copié' : 'Copier'}
            </button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">Ou passez par :</p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border px-4 py-3 text-center text-sm font-medium text-foreground transition hover:border-white/20 hover:bg-white/[0.03]"
            >
              LinkedIn
            </a>
            <a
              href={MALT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border px-4 py-3 text-center text-sm font-medium text-foreground transition hover:border-white/20 hover:bg-white/[0.03]"
            >
              Malt
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
