import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useParams,
} from "react-router";

import type { Route } from "./+types/root";
import "./styles.css";

import { setLocale, baseLocale, locales } from "~/paraglide/runtime.js";
import * as m from '~/paraglide/messages.js';
import { useEffect, useState } from "react";

export function meta({ params }: Route.MetaArgs) {
  const ogLocale = params.locale === 'en' ? 'en_US' : 'hr_HR';

  return [
    { title: m.app_meta_title() },
    { name: "description", content: m.app_meta_desc() },
    { name: "theme-color", content: "#0a0a0a" },
    { name: "author", content: "Ivan Vraneša" },
    
    { property: "og:site_name", content: "DJ Vrana" },
    { property: "og:locale", content: ogLocale },
    { property: "og:type", content: "website" },
    
    { property: "og:title", content: m.app_meta_title() },
    { property: "og:description", content: m.app_meta_desc() },
    
    { name: "twitter:card", content: "summary_large_image" },
    { name: "apple-mobile-web-app-title", content: "DJ Vrana" },
  ];
}

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  
  { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  { rel: "shortcut icon", href: "/favicon.ico" },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  { rel: "manifest", href: "/site.webmanifest" },
];

export function HydrateFallback() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#111111] text-white p-8 text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#d4af37]"></div>
      <p className="mt-4 text-lg">Loading...</p>
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    const urlLocale = window.location.pathname.split('/')[1];
    
    // @ts-ignore
    const locale: "hr" | "en" = locales.includes(urlLocale) ? urlLocale : baseLocale;
    setLocale(locale);
    
    setMounted(true);
  }, [params]);

  if (!mounted) {
    return (
      <html lang={baseLocale}>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Links />
        </head>
        <body className="bg-[#0a0a0a] text-white">
          <HydrateFallback />
          <Scripts />
        </body>
      </html>
    );
  }

  return (
    // @ts-ignore
    <html lang={locales.includes(params.locale) ? params.locale : baseLocale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-[#0a0a0a] text-white selection:bg-[#d4af37]/30 selection:text-[#d4af37]">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404 - Page Not Found" : `Error ${error.status}`;
    details =
      error.status === 404
        ? "Sorry, the page you are looking for does not exist or has been moved."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#0a0a0a] text-white font-sans text-center">
      <h1 className="text-[4rem] md:text-[6rem] font-bold bg-gradient-to-br from-[#d4af37] to-white bg-clip-text text-transparent mb-4">
        {message}
      </h1>
      <p className="text-xl text-[#a0a0a0] mb-8 max-w-lg">{details}</p>
      
      {(isRouteErrorResponse(error) && error.status === 404) || !import.meta.env.DEV ? (
        <Link 
          to="/" 
          className="inline-block px-8 py-4 bg-[#d4af37] text-[#0a0a0a] font-bold rounded-full hover:bg-[#c9a227] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
        >
          Return to Homepage
        </Link>
      ) : null}

      {stack && (
        <pre className="w-full max-w-3xl p-6 mt-12 overflow-x-auto bg-[#111] border border-red-900/50 rounded-xl text-left text-sm text-red-400 shadow-2xl">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}