import { LinkedinLogo, XLogo } from '@phosphor-icons/react/dist/ssr';
import { LINKEDIN_URL, X_URL } from '@/lib/content';

type SocialLinksProps = { className?: string; withLabels?: boolean };

export default function SocialLinks({ className = '', withLabels = false }: SocialLinksProps) {
  const item =
    'inline-flex min-h-10 items-center gap-2 rounded-md text-muted-foreground transition-colors hover:text-foreground';
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a href={X_URL} target="_blank" rel="noopener noreferrer" className={item} aria-label="Mickaël Villers sur X">
        <XLogo size={18} aria-hidden="true" />
        {withLabels && <span className="text-sm font-medium">@MickaelV79228</span>}
      </a>
      <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={item} aria-label="Mickaël Villers sur LinkedIn">
        <LinkedinLogo size={19} aria-hidden="true" />
        {withLabels && <span className="text-sm font-medium">LinkedIn</span>}
      </a>
    </div>
  );
}
