import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nuvix Hub | Sistema Operacional Empresarial",
  description: "Centralize financeiro, CRM, Ordens de Serviço, RH, materiais e indicadores em uma única plataforma.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
