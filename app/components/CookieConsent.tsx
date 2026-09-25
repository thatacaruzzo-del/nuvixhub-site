"use client";

import { useEffect, useState } from "react";

export const COOKIE_CONSENT_KEY = "nuvix_cookie_consent";
export const CONSENT_CHANGED_EVENT = "nuvix-consent-changed";
export const OPEN_COOKIE_PREFS_EVENT = "nuvix-open-cookie-prefs";

// Google Ads e Meta Pixel só carregam depois que a pessoa aceita aqui — sem isso, os
// scripts de publicidade em layout.tsx (via AdScripts) ficariam disparando sem
// autorização, o que a política de privacidade passou a declarar mas o site ainda não
// cumpria de fato. Vercel Analytics não entra nessa trava: não usa cookie nem
// identifica ninguém, por isso a própria política já o trata como agregado/anônimo.
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) setVisible(true);
    const abrir = () => setVisible(true);
    window.addEventListener(OPEN_COOKIE_PREFS_EVENT, abrir);
    return () => window.removeEventListener(OPEN_COOKIE_PREFS_EVENT, abrir);
  }, []);

  function decidir(valor: "accepted" | "rejected") {
    localStorage.setItem(COOKIE_CONSENT_KEY, valor);
    window.dispatchEvent(new Event(CONSENT_CHANGED_EVENT));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-slate-200 bg-white px-6 py-5 shadow-[0_-12px_40px_rgba(16,24,40,0.12)]">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-slate-600">
          Usamos cookies essenciais pro site funcionar e, só com sua permissão, cookies de publicidade (Google Ads e Meta) pra medir o resultado dos nossos anúncios. Veja mais na{" "}
          <a href="/privacidade" className="font-semibold text-purple-700 underline">
            Política de Privacidade
          </a>
          .
        </p>
        <div className="flex flex-shrink-0 gap-2">
          <button
            onClick={() => decidir("rejected")}
            className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-700 hover:border-slate-300"
          >
            Recusar
          </button>
          <button
            onClick={() => decidir("accepted")}
            className="rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-purple-700"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
