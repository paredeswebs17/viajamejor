import React from 'react';
import { ExternalLink } from 'lucide-react';
import { trackAffiliateClick } from '../utils/analytics';

interface AffiliateLinkProps {
  href: string;
  platform: string;
  productName: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}

const AffiliateLink: React.FC<AffiliateLinkProps> = ({
  href,
  platform,
  productName,
  children,
  className = '',
  showIcon = true
}) => {
  const handleClick = () => {
    trackAffiliateClick(platform, productName, href);
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`inline-flex items-center hover:text-sky-600 transition-colors ${className}`}
      aria-label={`Enlace de afiliado a ${productName} en ${platform}`}
    >
      {children}
      {showIcon && <ExternalLink className="h-4 w-4 ml-1 flex-shrink-0" />}
    </a>
  );
};

export default AffiliateLink;