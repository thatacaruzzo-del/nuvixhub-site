"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, RoundedBox, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  BarChart3, BriefcaseBusiness, CheckCircle2, ChevronDown, ClipboardList, Cloud, Database,
  DollarSign, FileText, Mail, Package, ShieldCheck, Users,
  Wrench, ArrowRight, Menu, X, CreditCard, Share2, Sparkles
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

function Cloud3D() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }} className="h-[420px] w-full">
      <ambientLight intensity={1.2} />
      <directionalLight position={[4, 4, 6]} intensity={1.4} />
      <pointLight position={[0, -2, 4]} intensity={2} color="#8b5cf6" />
      <Float speed={1.5} rotationIntensity={0.55} floatIntensity={1.5}>
        <group>
          <Sphere args={[1.05, 32, 32]} position={[-1.35, -0.05, 0]}>
            <meshStandardMaterial color="#ffffff" roughness={0.35} metalness={0.05} />
          </Sphere>
          <Sphere args={[1.35, 32, 32]} position={[-0.25, 0.35, 0]}>
            <meshStandardMaterial color="#ffffff" roughness={0.34} metalness={0.04} />
          </Sphere>
          <Sphere args={[1.1, 32, 32]} position={[1.05, 0.05, 0]}>
            <meshStandardMaterial color="#ffffff" roughness={0.35} metalness={0.05} />
          </Sphere>
          <Sphere args={[0.9, 32, 32]} position={[2.0, -0.2, 0]}>
            <meshStandardMaterial color="#ffffff" roughness={0.35} metalness={0.05} />
          </Sphere>
          <RoundedBox args={[4.3, 1.35, 1.25]} radius={0.6} smoothness={8} position={[0.25, -0.55, 0]}>
            <meshStandardMaterial color="#ffffff" roughness={0.4} />
          </RoundedBox>
        </group>
      </Float>

      <Float speed={2.2} rotationIntensity={1.3} floatIntensity={1.8}>
        <group position={[0, -0.05, 1.1]}>
          {[
            [-0.75, 0.1, 0],
            [0, 0.1, 0],
            [0.75, 0.1, 0],
            [-0.38, -0.6, 0],
            [0.38, -0.6, 0],
          ].map((p, i) => (
            <RoundedBox key={i} args={[0.55, 0.55, 0.55]} radius={0.08} position={p as any}>
              <meshStandardMaterial color={i % 2 ? "#8b5cf6" : "#6d28d9"} roughness={0.25} metalness={0.18} />
            </RoundedBox>
          ))}
        </group>
      </Float>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.2, 0]}>
        <torusGeometry args={[2.7, 0.018, 16, 140]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#7c3aed" emissiveIntensity={0.8} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.2, 0]}>
        <torusGeometry args={[1.8, 0.012, 16, 140]} />
        <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.5} />
      </mesh>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
    </Canvas>
  );
}

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

const modules = [
  ["Painel Executivo", BarChart3],
  ["Financeiro", DollarSign],
  ["Comercial", Users],
  ["Ordens de Serviço", ClipboardList],
  ["Serviços", Wrench],
  ["Materiais", Package],
  ["RH", BriefcaseBusiness],
  ["Relatórios", FileText],
] as const;

const productShots = [
  ["Painel", "/produto/painel.jpg", "Indicadores em tempo real e o resumo do dia, pra decisão rápida sem abrir seis telas."],
  ["Financeiro", "/produto/financeiro.jpg", "Receitas, despesas e fluxo de caixa com filtro por período, sem depender de planilha paralela."],
  ["Ordens de Serviço", "/produto/ordens-de-servico.jpg", "Cadastro, status e prioridade de cada ordem de serviço, do agendamento até a conclusão."],
  ["Comercial", "/produto/comercial.jpg", "Clientes, oportunidades e relacionamento comercial integrados ao resto da operação."],
  ["RH", "/produto/rh.jpg", "Colaboradores, ponto e folha, com acesso restrito por permissão, inclusive autoatendimento de ponto pra equipe operacional."],
  ["Relatórios", "/produto/relatorios.jpg", "Análises consistentes pra rotina, auditoria e diretoria, puxadas do mesmo dado que já está no sistema."],
] as const;

function ProductTour() {
  const [active, setActive] = useState(0);
  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="flex flex-wrap justify-center gap-2">
        {productShots.map(([label], i) => (
          <button
            key={label}
            onClick={() => setActive(i)}
            className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
              active === i
                ? "border-purple-600 bg-purple-600 text-white"
                : "border-slate-200 bg-white text-slate-600 hover:border-purple-300"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="relative mt-6 overflow-hidden rounded-[28px] border border-purple-100 bg-white shadow-soft">
        <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
        </div>
        <Image
          src={productShots[active][1]}
          alt={`Tela real de ${productShots[active][0]} no sistema Nuvix`}
          width={1600}
          height={680}
          className="w-full"
        />
      </div>
      <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-6 text-slate-500">
        {productShots[active][2]}
      </p>
    </div>
  );
}

// Quem já vende produto (loja física, e-commerce ou os dois) não usa OS/Serviços,
// usa PDV, estoque e nota fiscal. Renderizado como chips compactos (não cards
// longos) pra caber no orçamento de altura do mobile.
const varejo = [
  ["Caixa / PDV com NFC-e", CreditCard, "A partir do Pro"],
  ["Estoque em tempo real", Package, "A partir do Pro"],
  ["Nota fiscal automática", FileText, "A partir do Pro"],
  ["Marketplace conectado", Share2, "Exclusivo do Plus"],
] as const;

const plans = [
  {
    nome: "Start", preco: "97", centavos: "90", destaque: false,
    desc: "Pra quem ainda organiza tudo na planilha.",
    itens: ["Painel executivo", "Financeiro completo", "Contas a pagar e receber", "Relatórios e usuários"],
  },
  {
    nome: "Pro", preco: "147", centavos: "90", destaque: false,
    desc: "Pra quem já vende e precisa de operação completa.",
    itens: ["Tudo do Start", "Caixa/PDV, estoque e comercial (CRM)", "Nota fiscal automática (NFC-e e NF-e)", "Módulos do seu segmento"],
  },
  {
    nome: "Plus", preco: "190", centavos: "00", destaque: true,
    desc: "Pra quem quer a operação inteira automatizada.",
    itens: ["Tudo do Pro", "Nota fiscal sem limite mensal", "Marketplaces conectados", "RH, ponto e folha completos", "Inteligência Nuvix"],
  },
] as const;

function SectionTitle({ eyebrow, title, subtitle, dark }: { eyebrow: string; title: string; subtitle: string; dark?: boolean }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className={`text-sm font-black uppercase tracking-[0.28em] ${dark ? "text-purple-400" : "text-purple-500"}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-black tracking-tight md:text-5xl ${dark ? "text-white" : "text-slate-950"}`}>{title}</h2>
      <p className={`mt-4 text-base leading-7 md:text-lg md:leading-8 ${dark ? "text-slate-300" : "text-slate-600"}`}>{subtitle}</p>
    </div>
  );
}

function PlanCard({ p }: { p: (typeof plans)[number] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={p.destaque
      ? "relative rounded-[28px] border-2 border-purple-600 bg-white p-6 shadow-2xl shadow-purple-200 md:p-8 md:scale-105"
      : "card-hover rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"}>
      {p.destaque && (
        <span className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-purple-600 px-4 py-1.5 text-xs font-black uppercase tracking-wide text-white shadow-lg">
          <Sparkles size={12} /> Mais completo
        </span>
      )}
      <p className={`text-sm font-black uppercase tracking-wider ${p.destaque ? "text-purple-600" : "text-slate-500"}`}>{p.nome}</p>
      <p className="mt-3 flex items-baseline gap-1">
        <span className="text-4xl font-black text-slate-950 md:text-5xl">R$ {p.preco}</span>
        <span className="text-lg font-bold text-slate-500">,{p.centavos}</span>
        <span className="ml-1 text-sm font-semibold text-slate-400">/mês por CNPJ</span>
      </p>
      <p className="mt-2 text-sm text-slate-500">{p.desc}</p>
      <a href={contactLink} className={p.destaque
        ? "mt-5 block rounded-2xl bg-purple-600 px-6 py-3.5 text-center font-black text-white shadow-lg shadow-purple-200 hover:bg-purple-700"
        : "mt-5 block rounded-2xl border border-slate-200 px-6 py-3.5 text-center font-black text-slate-800 hover:border-purple-300"}>
        Começar grátis
      </a>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-5 flex w-full items-center justify-center gap-1.5 border-t border-slate-100 pt-5 text-sm font-bold text-purple-600"
      >
        {open ? "Ocultar o que inclui" : "Ver o que inclui"}
        <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="mt-4 grid gap-3">
          {p.itens.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 size={20} className={`mt-0.5 flex-shrink-0 ${p.destaque ? "text-purple-600" : "text-emerald-500"}`} />
              <span className="text-sm font-medium text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      )}
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
            <a href="https://nuvix-os-v2.vercel.app" className="hidden rounded-2xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 hover:border-purple-300 md:inline-flex">
              Entrar
            </a>
            <a href={contactLink} className="rounded-2xl bg-purple-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-purple-200 hover:bg-purple-700">
              Demonstração
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 text-slate-700 md:hidden"
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
                  className="rounded-xl px-3 py-3 hover:bg-purple-50 hover:text-purple-600"
                >
                  {label}
                </a>
              ))}
              <a
                href="https://nuvix-os-v2.vercel.app"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 hover:bg-purple-50 hover:text-purple-600"
              >
                Entrar na plataforma
              </a>
            </div>
          </nav>
        )}
      </header>

      <section className="noise pt-28 md:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 md:min-h-[760px] md:grid-cols-2 md:py-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-purple-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-purple-500" /> Pra quem vende produto ou presta serviço
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:mt-8 md:text-7xl">
              Entenda sua empresa em <span className="gradient-text">30 segundos.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600 md:mt-7 md:text-xl md:leading-9">
              Chega de planilha e achismo. A Nuvix não automatiza sua decisão por você. Mostra o dado real e a sugestão, e quem decide continua sendo você.
            </p>

            <div className="mt-5 max-w-md rounded-2xl border border-slate-100 bg-white p-4 shadow-soft md:mt-7">
              <p className="text-[11px] font-black uppercase tracking-[0.14em] text-purple-500">Inteligência Nuvix · exclusivo do Plus</p>
              <div className="mt-2 flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                <p className="text-sm leading-6 text-slate-800">
                  <b className="font-bold">Despesas em Combustível subiram 18% este mês.</b> Foi a categoria que mais cresceu em relação ao mês anterior.
                </p>
              </div>
              <p className="mt-3 border-t border-slate-100 pt-3 text-[11px] text-slate-400">Confiança: alta · calculado com dados confirmados</p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-9 md:gap-4">
              <a href={contactLink} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-purple-600 px-7 py-4 font-black text-white shadow-xl shadow-purple-200 hover:bg-purple-700">
                Solicitar demonstração <ArrowRight size={18} />
              </a>
              <a href="#produto" className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-4 font-black text-slate-800 hover:border-purple-300">
                Conhecer a plataforma
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-bold text-slate-500 md:mt-8 md:gap-5">
              <span className="inline-flex items-center gap-2"><Cloud size={16} className="text-purple-500" /> 100% em nuvem</span>
              <span className="inline-flex items-center gap-2"><Database size={16} className="text-purple-500" /> Tudo conectado</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck size={16} className="text-purple-500" /> Dados isolados por empresa</span>
            </div>
          </motion.div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 rounded-full bg-purple-200 blur-3xl opacity-50" />
            <Cloud3D />
            <div className="absolute left-6 top-8 float rounded-3xl border border-purple-100 bg-white/85 p-4 shadow-soft backdrop-blur">
              <p className="text-xs font-black uppercase text-slate-500">Módulos</p>
              <p className="mt-1 text-2xl font-black text-purple-600">8+</p>
            </div>
            <div className="absolute bottom-8 right-4 float-delay rounded-3xl border border-purple-100 bg-white/90 p-4 shadow-soft backdrop-blur">
              <p className="text-sm font-black text-slate-950">Operação conectada</p>
              <p className="text-xs text-slate-500">Comercial → OS → Financeiro</p>
            </div>
          </div>
        </div>
      </section>

      <section id="produto" className="bg-slate-50 px-6 py-14 md:py-24">
        <SectionTitle eyebrow="Plataforma" title="Tudo que sua empresa precisa, num sistema só." subtitle="Clique e veja a tela real de cada área. Dados de exemplo aqui, na Nuvix de verdade são sempre os seus." />
        <ProductTour />

        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2 md:mt-14">
          {modules.map(([title, Icon]) => (
            <span key={title} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
              <Icon size={16} className="text-purple-500" /> {title}
            </span>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-4xl">
          <p className="mb-4 text-center text-sm font-bold uppercase tracking-wide text-purple-600">Pra quem vende produto</p>
          <div className="flex flex-wrap justify-center gap-2">
            {varejo.map(([title, Icon, plano]) => (
              <span key={title} className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50/60 px-4 py-2 text-sm font-bold text-purple-800">
                <Icon size={16} className="text-purple-600" /> {title}
                <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-black uppercase tracking-wide text-purple-500">{plano}</span>
              </span>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-7 text-slate-500">
          Nota fiscal direto na venda pra SEFAZ, estoque sincronizado sozinho com o marketplace, ponto e folha de RH no mesmo sistema. Já rodando com dinheiro de cliente de verdade, não é promessa de roadmap.
        </p>
      </section>

      <section id="precos" className="px-6 py-14 md:py-24">
        <SectionTitle eyebrow="Planos" title="Um plano pra cada estágio da sua operação." subtitle="Comece simples, cresça sem trocar de sistema. Todo plano começa com teste grátis, sem cartão e sem compromisso." />
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3 md:items-end md:gap-6">
          {plans.map((p) => (
            <PlanCard key={p.nome} p={p} />
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-slate-400">Ordens de Serviço, Serviços, Materiais e PDV/Estoque entram conforme o segmento contratado. No plano Pro a nota fiscal automática tem limite mensal, no Plus é ilimitada. Cada CNPJ é uma assinatura separada, condições especiais pra múltiplos CNPJs.</p>
      </section>

      <section className="bg-[#1b0b3a] px-6 py-14 md:py-24">
        <SectionTitle dark eyebrow="Prova social" title="Não é promessa, é operação rodando." subtitle="Isso não é uma projeção de vendas. É o que já acontece hoje, com dinheiro e nota fiscal de cliente de verdade." />
        <div className="mx-auto mb-8 flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-3 md:mb-10">
          {["Caruzzo Express", "CZ Sunglass", "Yup Presentes Criativos"].map((nome) => (
            <span key={nome} className="text-lg font-black tracking-tight text-white/70">{nome}</span>
          ))}
        </div>
        <p className="mx-auto max-w-3xl text-center text-base leading-7 text-slate-300 md:text-lg md:leading-8">
          2 lojas da rede Yup rodam o PDV, o estoque e a nota fiscal pela Nuvix todos os dias: NFC-e emitida direto pra SEFAZ a cada venda, e o estoque sincroniza sozinho com o Mercado Livre, sem digitar nada duas vezes.
        </p>
      </section>

      <section className="px-6 py-14 md:py-24">
        <SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes." subtitle="O que empresas costumam perguntar antes de trocar de sistema." />
        <div className="mx-auto max-w-3xl divide-y divide-slate-100 rounded-[32px] border border-slate-100">
          {[
            ["A Nuvix funciona por CNPJ ou posso usar em várias empresas com uma assinatura só?", "Cada assinatura é vinculada a um CNPJ. Se você tem mais de uma loja ou filial com CNPJ próprio, cada uma entra como uma assinatura, com condições especiais para múltiplos CNPJs, fale com a gente."],
            ["Preciso instalar algum programa?", "Não. A Nuvix é 100% web: você acessa pelo navegador, do computador ou do celular, sem instalar nada e sem depender de servidor próprio."],
            ["A emissão de nota fiscal é de verdade, direto pra SEFAZ?", "Sim. NFC-e e NF-e são emitidas e autorizadas pela SEFAZ direto na venda, sem exportar planilha nem depender de outro sistema para faturar."],
            ["Funciona com Mercado Livre e outros marketplaces?", "Sim. Mercado Livre, Nuvemshop, Shopee e PedidoOK ficam conectados, venda feita no marketplace baixa o estoque na Nuvix automaticamente."],
            ["Tem teste grátis? Preciso de cartão de crédito?", "Sim, todo plano começa com teste grátis, sem cartão e sem compromisso."],
          ].map(([q, a]) => (
            <details key={q} className="group px-6 py-5 open:bg-slate-50 md:px-8 md:py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-950">
                {q}
                <span className="flex-shrink-0 text-2xl font-black text-purple-600 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 leading-7 text-slate-600">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contato" className="px-6 pb-14 md:pb-24">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-gradient-to-r from-[#240B55] to-[#7C3AED] p-8 text-white shadow-soft md:rounded-[40px] md:p-16">
          <div className="grid gap-6 md:grid-cols-[1.4fr_.6fr] md:items-center md:gap-8">
            <div>
              <h2 className="text-3xl font-black tracking-tight md:text-5xl">Pronto para centralizar toda a operação da sua empresa?</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-purple-100 md:mt-5 md:text-lg md:leading-8">
                Solicite uma demonstração e veja como a Nuvix pode simplificar sua gestão.
              </p>
            </div>
            <a href={contactLink} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-5 font-black text-purple-700 hover:bg-purple-50">
              Solicitar demonstração <Mail size={20} />
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
