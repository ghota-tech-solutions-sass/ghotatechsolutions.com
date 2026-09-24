'use client';

import { useState } from 'react';
import { CONTACT_EMAIL, CONTACT_LABEL, LINKEDIN_URL, MALT_URL, X_URL, mailto } from '@/lib/content';

type ContactSectionProps = {
  title?: string;
};

export default function ContactSection({ title = 'Un projet d’IA ou d’infra cloud ?' }: ContactSectionProps) {
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

  const secondary =
    'text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline';

  return (
    <section id="contact" className="scroll-mt-16 border-t border-border bg-card" aria-labelledby="contact-title">
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 md:py-32">
        <h2 id="contact-title" className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Décrivez-moi le besoin en quelques lignes. Je réponds moi-même, et je vous dis franchement si l’IA est
          la bonne réponse.
        </p>

        <div className="mt-10 flex flex-col items-center gap-5">
          <a
            href={mailto('Projet : ')}
            className="rounded-full bg-foreground px-8 py-4 text-base font-semibold text-background transition hover:bg-primary active:translate-y-px"
          >
            {CONTACT_LABEL}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="rounded-md px-2 py-1 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
            aria-live="polite"
          >
            {copied ? 'Adresse copiée' : CONTACT_EMAIL}
          </button>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={secondary}>LinkedIn</a>
          <a href={MALT_URL} target="_blank" rel="noopener noreferrer" className={secondary}>Malt</a>
          <a href={X_URL} target="_blank" rel="noopener noreferrer" className={secondary}>X</a>
        </div>
      </div>
    </section>
  );
}
