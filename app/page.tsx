"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle2, Mail, Package, DollarSign, CreditCard, Database,
  ArrowRight, Menu, X,
} from "lucide-react";
import { OPEN_COOKIE_PREFS_EVENT } from "./components/CookieConsent";

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.44 1.27 4.89L2 22l5.25-1.38A9.96 9.96 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.24c-1.6 0-3.13-.43-4.45-1.24l-.32-.19-3.12.82.83-3.04-.21-.32a8.23 8.23 0 0 1-1.26-4.35c0-4.56 3.71-8.27 8.53-8.27 2.28 0 4.42.89 6.03 2.5a8.46 8.46 0 0 1 2.5 6.02c0 4.56-3.72 8.27-8.53 8.27Zm4.67-6.2c-.26-.13-1.53-.75-1.76-.84-.24-.09-.41-.13-.58.13-.17.26-.67.84-.82 1.01-.15.17-.3.19-.56.06-.26-.13-1.09-.4-2.07-1.28-.77-.68-1.29-1.53-1.44-1.79-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.79-1.92-.21-.5-.42-.43-.58-.44h-.5c-.17 0-.45.06-.68.32-.24.26-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.13.17 1.82 2.78 4.41 3.9.62.27 1.1.43 1.47.55.62.2 1.18.17 1.62.1.5-.07 1.53-.62 1.74-1.23.22-.6.22-1.12.15-1.23-.06-.11-.24-.17-.5-.3Z"/>
    </svg>
  );
}

const contactLink = "https://tally.so/r/Bz5ERA";
const whatsappLink = "https://wa.me/5511947460614?text=" + encodeURIComponent("Olá! Vim pelo site da Nuvix e quero saber mais.");

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-11 w-11 overflow-hidden rounded-2xl shadow-lg shadow-purple-200">
        <Image src="/logo.png" alt="Nuvix" width={44} height={44} className="h-full w-full object-cover" />
      </div>
      <div className="leading-none">
        <p className="text-xl font-black tracking-tight text-slate-950">Nuvix</p>
        <p className="mt-1 text-xs font-bold tracking-[0.32em] text-purple-500">HUB</p>
      </div>
    </div>
  );
}

const beneficios = [
  ["01", "Organize", "Centralize vendas, estoque, financeiro e operações."],
  ["02", "Entenda", "Acompanhe faturamento, lucro, custos e margens."],
  ["03", "Decida", "Use informações reais para planejar os próximos passos."],
] as const;

const funcionalidades = [
  [CreditCard, "Vendas", "PDV, pedidos e canais comerciais."],
  [DollarSign, "Financeiro e resultados", "Faturamento, lucro, CMV, margens e fluxo de caixa."],
  [Package, "Estoque", "Produtos, movimentações, lotes e validade."],
  [Database, "Gestão integrada", "Fiscal, CRM, serviços, logística e marketplaces."],
] as const;

const plans = [
  {
    nome: "Essencial", preco: "147", centavos: "90", destaque: false,
    itens: ["Acesso às funcionalidades da plataforma", "Até 50 notas fiscais por mês"],
  },
  {
    nome: "Plus", preco: "199", centavos: "90", destaque: true,
    itens: [
      "Acesso às mesmas funcionalidades",
      "Emissão fiscal sem limite mensal definido comercialmente no plano atual, sujeita às condições contratuais aplicáveis",
    ],
  },
] as const;

function PlanCard({ p }: { p: (typeof plans)[number] }) {
  return (
    <div className={p.destaque
      ? "rounded-2xl border-2 border-purple-600 bg-white p-5 md:p-6"
      : "rounded-2xl border border-slate-200 bg-white p-5 md:p-6"}>
      <p className="text-sm font-black uppercase tracking-wider text-slate-500">{p.nome}</p>
      <p className="mt-2 flex items-baseline gap-1">
        <span className="text-3xl font-black text-slate-950 md:text-4xl">R$ {p.preco}</span>
        <span className="text-base font-bold text-slate-500">,{p.centavos}</span>
        <span className="ml-1 text-sm font-semibold text-slate-400">/mês</span>
      </p>
      <div className="mt-4 grid gap-2.5">
        {p.itens.map((item) => (
          <div key={item} className="flex items-start gap-2.5">
            <CheckCircle2 size={17} className="mt-0.5 flex-shrink-0 text-purple-600" />
            <span className="text-sm leading-6 text-slate-600">{item}</span>
          </div>
        ))}
      </div>
      <a
        href={contactLink}
        className={p.destaque
          ? "mt-5 block rounded-xl bg-purple-700 px-6 py-3.5 text-center font-bold text-white hover:bg-[#1b0b3a]"
          : "mt-5 block rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-center font-bold text-slate-800 hover:border-purple-600 hover:text-purple-700"}
      >
        Escolher {p.nome}
      </a>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    ["#produto", "Plataforma"],
    ["#precos", "Preços"],
    ["#contato", "Contato"],
  ] as const;

  return (
    <main className="overflow-hidden bg-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            {navLinks.map(([href, label]) => (
              <a key={href} href={href} className="hover:text-purple-600">{label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://nuvix-os-v2.vercel.app" className="hidden rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 hover:border-purple-600 md:inline-flex">
              Entrar
            </a>
            <a href={contactLink} className="rounded-xl bg-purple-700 px-5 py-3 text-sm font-bold text-white hover:bg-[#1b0b3a]">
              Demonstração
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-slate-700 md:hidden"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-slate-100 bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-1 text-base font-semibold text-slate-700">
              {navLinks.map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-3 hover:bg-purple-50 hover:text-purple-700"
                >
                  {label}
                </a>
              ))}
              <a
                href="https://nuvix-os-v2.vercel.app"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 hover:bg-purple-50 hover:text-purple-700"
              >
                Entrar na plataforma
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* SEÇÃO 1 — HERO */}
      <section className="noise pt-24 md:pt-32">
        <div className="mx-auto max-w-3xl px-6 py-9 md:py-14">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-600">Organize. Entenda. Decida.</p>
            <h1 className="mt-3 text-[28px] font-black leading-[1.15] tracking-tight text-slate-950 md:mt-4 md:text-6xl">
              Entenda seus números. Tenha controle do seu negócio.
            </h1>
            <p className="mt-3 max-w-xl text-base leading-7 text-slate-600 md:mt-4 md:text-xl md:leading-8">
              Vendas, financeiro, estoque e resultados em uma só plataforma.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5 md:mt-7">
              <a href={contactLink} className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-purple-700 px-6 py-3 text-sm font-bold text-white hover:bg-[#1b0b3a]">
                Agendar demonstração <ArrowRight size={16} />
              </a>
              <a href="#produto" className="inline-flex min-h-[46px] items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-800 hover:border-purple-600 hover:text-purple-700">
                Conhecer a plataforma
              </a>
            </div>

            <a
              href="/produto/painel.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block overflow-hidden rounded-2xl border border-purple-100 shadow-soft md:mt-8"
            >
              <Image
                src="/produto/painel.jpg"
                alt="Painel de indicadores do NuvixHub"
                width={1600}
                height={900}
                priority
                className="h-[190px] w-full object-cover object-top sm:h-[280px] md:h-auto md:object-contain"
              />
            </a>
            <p className="mt-2 text-center text-xs text-slate-400">Painel de indicadores reais do NuvixHub — toque para ver completo</p>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO 2 — BENEFÍCIOS */}
      <section className="px-6 py-10 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-6 max-w-lg text-center md:mb-8">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-600">Benefícios</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">Mais clareza para administrar sua empresa.</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {beneficios.map(([num, title, desc]) => (
              <div key={num} className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5">
                <p className="text-xs font-black tracking-wide text-purple-600">{num}</p>
                <p className="mt-1.5 text-base font-black text-slate-950">{title}</p>
                <p className="mt-1.5 text-sm text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 — FUNCIONALIDADES */}
      <section id="produto" className="bg-slate-50 px-6 py-10 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 max-w-lg md:mb-8">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-600">Funcionalidades</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">Tudo o que você precisa para uma gestão conectada.</h2>
          </div>
          <div className="grid gap-2.5 md:grid-cols-2">
            {funcionalidades.map(([Icon, title, desc]) => (
              <div key={title} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-3.5">
                <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-purple-50 text-purple-600">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-950">{title}</p>
                  <p className="mt-0.5 text-xs leading-5 text-slate-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#produto" className="mt-4 inline-block text-sm font-bold text-purple-700 hover:underline">Ver todas as funcionalidades →</a>
        </div>
      </section>

      {/* SEÇÃO 4 — CONFIANÇA E DEMONSTRAÇÃO */}
      <section className="px-6 py-10 md:py-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-purple-100 bg-purple-50/50 p-5 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-600">Na prática</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">Conheça a NuvixHub na prática.</h2>
          <p className="mt-2 max-w-lg text-sm leading-6 text-slate-600 md:text-base">
            Veja como as informações da sua empresa se conectam e ajudam você a acompanhar seus resultados.
          </p>
          <a
            href="/produto/financeiro.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block overflow-hidden rounded-xl border border-purple-100"
          >
            <Image
              src="/produto/financeiro.jpg"
              alt="Painel financeiro do NuvixHub"
              width={1600}
              height={900}
              className="h-[210px] w-full object-cover object-top sm:h-[320px] md:h-auto md:object-contain"
            />
          </a>
          <a href={contactLink} className="mt-4 inline-block text-sm font-bold text-purple-700 hover:underline">Solicitar demonstração →</a>
        </div>
      </section>

      {/* SEÇÃO 5 — PLANOS */}
      <section id="precos" className="px-6 py-10 md:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 text-center md:mb-8">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-600">Planos</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">Gestão completa. Planos simples.</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {plans.map((p) => (
              <PlanCard key={p.nome} p={p} />
            ))}
          </div>
          <div className="mt-8 text-center md:mt-10">
            <p className="mx-auto max-w-xs text-base font-bold text-slate-950 md:max-w-sm md:text-lg">
              Sua empresa gera informações todos os dias. Comece a utilizá-las para administrar melhor.
            </p>
            <a id="contato" href={contactLink} className="mt-4 inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-purple-700 px-7 py-3.5 text-sm font-bold text-white hover:bg-[#1b0b3a]">
              Agendar demonstração <Mail size={16} />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-100 px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-5 leading-7 text-slate-600">Plataforma operacional para empresas que precisam de mais controle, integração e velocidade.</p>
          </div>
          <div>
            <p className="font-black text-slate-950">Produto</p>
            <div className="mt-4 grid gap-3 text-slate-600">
              <a href="#produto">Plataforma</a>
              <a href="#precos">Preços</a>
            </div>
          </div>
          <div>
            <p className="font-black text-slate-950">Empresa</p>
            <div className="mt-4 grid gap-3 text-slate-600">
              <a href={contactLink}>Contato</a>
              <a href="https://nuvix-os-v2.vercel.app">Entrar na Plataforma</a>
            </div>
          </div>
          <div>
            <p className="font-black text-slate-950">Contato</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 font-bold text-slate-700 hover:text-emerald-600">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-500 text-white">
                <WhatsAppIcon size={17} />
              </span>
              Fale no WhatsApp
            </a>
            <p className="mt-3 text-slate-600">thamirescaruzzo@nuvixhub.com.br</p>
            <div className="mt-5 grid gap-2 text-sm text-slate-500">
              <a href="/termos">Termos de Uso</a>
              <a href="/privacidade">Política de Privacidade</a>
              <button
                onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_PREFS_EVENT))}
                className="text-left hover:text-purple-600"
              >
                Preferências de cookies
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-slate-100 pt-6 text-sm text-slate-400">
          <p>Nuvix Hub · CNPJ 69.406.137/0001-47</p>
          <p className="mt-1">© 2026 Nuvix Hub. Todos os direitos reservados.</p>
        </div>
      </footer>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/30 hover:bg-emerald-600"
      >
        <WhatsAppIcon size={28} />
      </a>
    </main>
  );
}
