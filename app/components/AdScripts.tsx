"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { COOKIE_CONSENT_KEY, CONSENT_CHANGED_EVENT } from "./CookieConsent";

// Só renderiza os scripts de Google Ads / Meta Pixel depois de consentimento real
// (banner em CookieConsent.tsx) — nunca antes, e reage na hora se a pessoa mudar de
// ideia nas preferências de cookies, sem precisar recarregar a página.
export default function AdScripts({ googleAdsId, metaPixelId }: { googleAdsId?: string; metaPixelId?: string }) {
  const [consentiu, setConsentiu] = useState(false);

  useEffect(() => {
    const checar = () => setConsentiu(localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted");
    checar();
    window.addEventListener(CONSENT_CHANGED_EVENT, checar);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, checar);
  }, []);

  if (!consentiu) return null;

  return (
    <>
      {googleAdsId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`} strategy="afterInteractive" />
          <Script id="google-ads-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAdsId}');
            `}
          </Script>
        </>
      )}

      {metaPixelId && (
        <>
          <Script id="meta-pixel-init" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}
    </>
  );
}
