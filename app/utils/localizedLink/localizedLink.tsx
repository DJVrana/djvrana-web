import React from 'react';
import { Link, type LinkProps } from 'react-router';
import { getLocale } from '~/paraglide/runtime.js'; 

export function LocalizedLink({ to, children, ...props }: LinkProps) {
  const currentLang = getLocale();
  const defaultLang = 'hr';

  let localizedTo = to as string;

  if (typeof localizedTo === 'string' && localizedTo.startsWith('/')) {
    
    if (currentLang !== defaultLang) {
      
      const hasLangPrefix = localizedTo.startsWith(`/${currentLang}/`) || localizedTo === `/${currentLang}`;
      
      if (!hasLangPrefix) {
        localizedTo = localizedTo === '/' 
          ? `/${currentLang}` 
          : `/${currentLang}${localizedTo}`;
      }
    }
  }

  return (
    <Link to={localizedTo} {...props}>
      {children}
    </Link>
  );
}