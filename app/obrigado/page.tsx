"use client";

import { useEffect } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

// Página de destino depois que alguém envia o formulário de demonstração no Tally.
// Precisa configurar isso no painel do Tally: Settings → After submission → Redirect
// to a URL → https://www.nuvixhub.com.br/obrigado (ou o domínio real em produção).
//
// Rastrear a conversão AQUI (só quando o formulário foi enviado de verdade) é bem
// mais confiável do que marcar conversão no clique do botão "Solicitar demonstração"
// lá no hero: o clique só mostra que alguém ABRIU o formulário, não que preencheu e
// enviou. Sem essa página, Google Ads/Meta aprendem a otimizar pra quem só clica,
// não pra quem realmente vira lead.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export default function Obrigado() {
  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
      });
    }
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead");
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <div className="h-14 w-14 overflow-hidden rounded-2xl shadow-lg shadow-purple-200">
        <Image src="/logo.png" alt="Nuvix" width={56} height={56} className="h-full w-full object-cover" />
      </div>
      <div className="mt-8 grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-emerald-500">
        <CheckCircle2 size={32} />
      </div>
      <h1 className="mt-6 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">Recebemos sua solicitação.</h1>
      <p className="mt-4 max-w-md text-lg leading-8 text-slate-600">
        Nosso time entra em contato em breve pra agendar sua demonstração. Enquanto isso, dá uma olhada em como a Nuvix funciona na prática.
      </p>
      <a
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-2xl bg-purple-600 px-7 py-4 font-black text-white shadow-lg shadow-purple-200 hover:bg-purple-700"
      >
        Voltar pro site
      </a>
    </main>
  );
}
