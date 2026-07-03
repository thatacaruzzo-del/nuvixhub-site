
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nuvix Hub | Sistema Operacional Empresarial",
  description:
    "Centralize financeiro, CRM, Ordens de Serviço, RH, clientes, materiais e indicadores em uma única plataforma.",
  openGraph: {
    title: "Nuvix Hub",
    description: "O sistema operacional da sua empresa.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
