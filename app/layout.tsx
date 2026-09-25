import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import CookieConsent from "./components/CookieConsent";
import AdScripts from "./components/AdScripts";
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
        <CookieConsent />
        <AdScripts googleAdsId={GOOGLE_ADS_ID} metaPixelId={META_PIXEL_ID} />
      </body>
    </html>
  );
}
