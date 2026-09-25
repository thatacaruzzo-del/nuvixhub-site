import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nuvix Hub | Sistema Operacional Empresarial",
  description:
    "Centralize financeiro, CRM, Ordens de Serviço, RH e indicadores. Pra quem vende produto: PDV, estoque, nota fiscal automática e integração com Mercado Livre, Nuvemshop, Shopee e PedidoOK.",
  openGraph: {
    title: "Nuvix Hub | Sistema Operacional Empresarial",
    description:
      "Centralize sua operação num só lugar. Financeiro, CRM, PDV, estoque, nota fiscal automática e marketplace conectado.",
    url: "https://www.nuvixhub.com.br",
    siteName: "Nuvix Hub",
    locale: "pt_BR",
    type: "website",
  },
};

// IDs reais entram por variável de ambiente na Vercel (NEXT_PUBLIC_GOOGLE_ADS_ID e
// NEXT_PUBLIC_META_PIXEL_ID) — nunca hardcoded aqui, pra dar pra trocar sem deploy
// de código e pra nunca subir um ID de teste/errado sem querer. Enquanto a
// variável não estiver configurada, a tag simplesmente não é renderizada (sem
// erro, sem pixel "quebrado" disparando pra um ID vazio).
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Analytics />

        {GOOGLE_ADS_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`} strategy="afterInteractive" />
            <Script id="google-ads-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GOOGLE_ADS_ID}');
              `}
            </Script>
          </>
        )}

        {META_PIXEL_ID && (
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
                fbq('init', '${META_PIXEL_ID}');
                fbq('track', 'PageView');
              `}
            </Script>
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
      </body>
    </html>
  );
}
