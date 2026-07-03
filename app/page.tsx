
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  Cloud,
  DollarSign,
  FileText,
  HeartPulse,
  Mail,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

const mailLink =
  "mailto:nuvixhub@outlook.com?subject=Solicitação de Demonstração&body=Olá,%20gostaria%20de%20conhecer%20a%20plataforma%20Nuvix%20Hub.";
const appLink = "https://nuvix-os-v2.vercel.app";

const modules = [
  { icon: BarChart3, title: "Dashboard Executivo", text: "Indicadores em tempo real para decisões mais rápidas." },
  { icon: DollarSign, title: "Financeiro", text: "Receitas, despesas, saldo, a pagar e a receber." },
  { icon: HeartPulse, title: "CRM", text: "Clientes e oportunidades conectados à operação." },
  { icon: ClipboardList, title: "Ordens de Serviço", text: "Controle por status, prioridade, cliente e período." },
  { icon: BriefcaseBusiness, title: "Serviços", text: "Organização dos serviços prestados pela empresa." },
  { icon: Boxes, title: "Materiais", text: "Controle de materiais vinculados à operação." },
  { icon: Users, title: "Clientes e RH", text: "Gestão de pessoas, clientes e dados essenciais." },
  { icon: FileText, title: "Relatórios", text: "Análises consistentes para rotina, auditoria e diretoria." },
];

const benefits = [
  ["Centralização", "Um único sistema para dados, rotinas, serviços e gestão."],
  ["Controle operacional", "Acompanhe prazos, ordens, serviços e execução."],
  ["Gestão financeira", "Conecte contas, clientes, custos e previsões."],
  ["Dados em tempo real", "KPIs sempre atualizados para decisões rápidas."],
];

function Header() {
  return (
    <header className="fixed left-0 right-0 top-4 z-50">
      <div className="container nav-blur flex items-center justify-between rounded-[24px] px-5 py-3">
        <a href="#" className="flex items-center gap-3">
          <div className="logo-mark"><Cloud size={22} fill="currentColor" /></div>
          <div className="leading-tight">
            <strong className="block text-[18px] tracking-[-.04em]">Nuvix</strong>
            <span className="block text-[11px] font-black uppercase tracking-[.24em] text-purple-500">Hub</span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-bold text-slate-600 lg:flex">
          <a href="#produto">Produto</a>
          <a href="#modulos">Módulos</a>
          <a href="#servicos">Ordens de Serviço</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="flex items-center gap-3">
          <a className="hidden rounded-2xl border border-slate-200 px-5 py-3 text-sm font-black text-slate-800 md:inline-flex" href={appLink}>
            Login
          </a>
          <a className="btn-primary !px-5 !py-3 text-sm" href={mailLink}>
            Demonstração
          </a>
        </div>
      </div>
    </header>
  );
}

function CloudScene() {
  return (
    <div className="cloud-scene">
      <div className="cloud-wrap">
        <div className="cloud-base" />
        <div className="cloud3d">
          <span className="blob b1" />
          <span className="blob b2" />
          <span className="blob b3" />
          <span className="blob b4" />
          <span className="blob b5" />
        </div>

        <div className="orbit">
          <div className="orbit-card"><strong>Dashboard</strong><span>Tempo real</span></div>
          <div className="orbit-card"><strong>Financeiro</strong><span>Controle total</span></div>
          <div className="orbit-card"><strong>OS</strong><span>Operação</span></div>
          <div className="orbit-card"><strong>RH</strong><span>Pessoas</span></div>
        </div>
      </div>
    </div>
  );
}

function ProductMockup({ type = "dashboard" }: { type?: "dashboard" | "os" | "financeiro" | "rh" }) {
  const isOS = type === "os";
  const isFinance = type === "financeiro";
  const isRh = type === "rh";

  return (
    <div className="product-screen">
      <div className="screen-top">
        <span className="dot" /><span className="dot" /><span className="dot" />
        <span className="ml-2 text-xs font-black text-slate-400">Nuvix Hub</span>
      </div>
      <div className="ui-layout">
        <aside className="sidebar">
          <div className="sidebar-logo"><Cloud fill="currentColor" size={24}/></div>
          {["Dashboard", "Financeiro", "CRM", "Ordens de Serviço", "Serviços", "Materiais", "Clientes", "RH"].map((item) => (
            <div key={item} className={`side-item ${((type==="dashboard" && item==="Dashboard") || (isFinance && item==="Financeiro") || (isOS && item==="Ordens de Serviço") || (isRh && item==="RH")) ? "active" : ""}`}>
              {item}
            </div>
          ))}
        </aside>

        <main className="ui-main">
          {!isOS && !isRh && (
            <div className="hero-strip">
              <p className="text-sm font-black uppercase tracking-[.16em] text-purple-200">{isFinance ? "Controle Financeiro" : "Dashboard Executivo"}</p>
              <h3 className="mt-2 text-3xl font-black tracking-[-.06em]">{isFinance ? "Financeiro" : "CZ Express"}</h3>
              <div className="mt-6 grid max-w-xl grid-cols-3 gap-5 text-white">
                <div><small className="text-purple-200">Receita</small><strong className="block text-2xl">R$ 2.673,00</strong></div>
                <div><small className="text-purple-200">A pagar</small><strong className="block text-2xl">R$ 0,00</strong></div>
                <div><small className="text-purple-200">Clientes</small><strong className="block text-2xl">3</strong></div>
              </div>
            </div>
          )}

          {isOS && (
            <>
              <div className="grid grid-cols-3 gap-3 md:grid-cols-6">
                {["Abertas|2", "Em andamento|0", "Concluídas|0", "Faturamento|R$ 0,00", "Ticket médio|R$ 0,00", "Para hoje|1"].map((item) => {
                  const [label, value] = item.split("|");
                  return <div className="kpi" key={label}><small>{label}</small><strong className="text-purple-600">{value}</strong></div>
                })}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="pill">📋 Todas as OS</span>
                <span className="pill">🔵 Abertas</span>
                <span className="pill">⚡ Em andamento</span>
                <span className="pill">+ Nova OS</span>
              </div>
              <div className="os-list">
                <div className="os-item">
                  <p className="font-black text-purple-600">OS-000003</p>
                  <h4 className="text-xl font-black">Mercado Bom Gosto</h4>
                  <p className="mt-1 text-sm text-slate-500">Vistoria elétrica residencial · Instalação elétrica geral</p>
                  <div className="mt-4 flex gap-4 text-sm font-bold text-slate-700">📅 10/07/2026 💰 R$ 210,00 🕒 03/07/2026</div>
                </div>
                <div className="os-item opacity-75">
                  <p className="font-black text-purple-600">OS-000002</p>
                  <h4 className="text-xl font-black">Teste Ltda</h4>
                  <p className="mt-1 text-sm text-slate-500">Instalação elétrica · Quadro elétrico</p>
                </div>
              </div>
            </>
          )}

          {isRh && (
            <>
              <div className="kpi-row">
                <div className="kpi"><small>Colaboradores ativos</small><strong className="text-purple-600">3</strong></div>
                <div className="kpi"><small>CLT</small><strong>3</strong></div>
                <div className="kpi"><small>Folha bruta</small><strong className="text-emerald-600">R$ 34.000,00</strong></div>
                <div className="kpi"><small>Custo estimado</small><strong className="text-orange-600">R$ 44.370,00</strong></div>
              </div>
              <div className="mt-5 rounded-2xl border border-yellow-200 bg-yellow-50 px-5 py-4 font-bold text-yellow-900">⚠️ Usando parâmetros padrão 2025.</div>
              <div className="mt-5 rounded-3xl bg-white p-6 shadow-card">
                <h4 className="text-xl font-black">Novo colaborador</h4>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 p-4 text-slate-400">Nome do colaborador</div>
                  <div className="rounded-2xl border border-slate-200 p-4 text-slate-400">CPF</div>
                </div>
              </div>
            </>
          )}

          {!isOS && !isRh && (
            <>
              <div className="kpi-row">
                <div className="kpi"><small>Receita total</small><strong>R$ 2.673,00</strong></div>
                <div className="kpi"><small>Recebido</small><strong>R$ 2.673,00</strong></div>
                <div className="kpi"><small>A receber</small><strong>R$ 0,00</strong></div>
                <div className="kpi"><small>Saldo</small><strong>R$ 2.673,00</strong></div>
              </div>
              <div className="mt-5 grid gap-5 md:grid-cols-[1.6fr_.9fr]">
                <div className="rounded-3xl bg-white p-6 shadow-card">
                  <h4 className="font-black">Receita vs Despesa</h4>
                  <div className="mt-8 flex h-44 items-end gap-8 border-b border-slate-100 px-8">
                    <div className="h-20 w-16 rounded-t-2xl bg-purple-500" />
                    <div className="h-32 w-16 rounded-t-2xl bg-red-400" />
                    <div className="h-14 w-16 rounded-t-2xl bg-purple-300" />
                  </div>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-card">
                  <h4 className="font-black">Orçamentos por status</h4>
                  <div className="mx-auto mt-8 h-32 w-32 rounded-full border-[28px] border-purple-500 border-r-purple-200 border-t-purple-300" />
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

function FeatureSection({
  eyebrow,
  title,
  text,
  type,
  bullets,
  reverse,
}: {
  eyebrow: string;
  title: string;
  text: string;
  type: "dashboard" | "os" | "financeiro" | "rh";
  bullets: string[];
  reverse?: boolean;
}) {
  return (
    <section className="py-24">
      <div className={`container grid items-center gap-12 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55 }}>
          <span className="badge">{eyebrow}</span>
          <h2 className="mt-5 text-5xl font-black leading-[.96] tracking-[-.06em] md:text-6xl">{title}</h2>
          <p className="mt-6 text-lg leading-8 text-slate-500">{text}</p>
          <div className="mt-8 grid gap-3">
            {bullets.map((b) => (
              <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-[0_8px_25px_rgba(15,23,42,.04)]" key={b}>
                <CheckCircle2 className="text-purple-500" size={19} />
                <span className="font-bold text-slate-700">{b}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55, delay: .12 }}>
          <ProductMockup type={type} />
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero-grid pt-36">
        <div className="container grid min-h-[820px] items-center gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <span className="badge"><Sparkles size={16} /> Sistema Operacional Empresarial</span>
            <h1 className="mt-7 text-6xl font-black leading-[.9] tracking-[-.075em] md:text-7xl lg:text-8xl">
              O sistema operacional da <span className="text-purple-500">sua empresa.</span>
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-9 text-slate-500">
              Centralize financeiro, CRM, Ordens de Serviço, RH, clientes, materiais e indicadores em uma única plataforma inteligente.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href={mailLink} className="btn-primary">Solicitar Demonstração <ArrowRight size={18}/></a>
              <a href="#produto" className="btn-secondary">Conhecer a Plataforma</a>
            </div>
            <div className="mt-10 flex flex-wrap gap-5 text-sm font-bold text-slate-500">
              <span>☁️ 100% em nuvem</span>
              <span>🛡️ Plataforma segura</span>
              <span>⚡ Operação integrada</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .08 }}>
            <CloudScene />
          </motion.div>
        </div>
      </section>

      <section id="produto" className="py-24">
        <div className="section-title">
          <span className="badge">Produto real</span>
          <h2>Visualize sua operação em tempo real.</h2>
          <p>Dashboards, indicadores e módulos conectados para acompanhar a empresa com clareza.</p>
        </div>
        <div className="container">
          <ProductMockup type="dashboard" />
        </div>
      </section>

      <section id="modulos" className="bg-[#fbfaff] py-24">
        <div className="section-title">
          <span className="badge">Módulos</span>
          <h2>Tudo conectado em um único lugar.</h2>
          <p>Os principais setores da empresa trabalhando juntos, sem planilhas soltas e sem informação perdida.</p>
        </div>
        <div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((m) => {
            const Icon = m.icon;
            return (
              <motion.div key={m.title} className="module-card" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .4 }}>
                <div className="icon-box"><Icon size={22}/></div>
                <h3 className="mt-5 text-xl font-black tracking-[-.04em]">{m.title}</h3>
                <p className="mt-3 leading-7 text-slate-500">{m.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <FeatureSection
        eyebrow="Financeiro"
        title="Controle financeiro claro, visual e integrado."
        text="Acompanhe receitas, despesas, saldo, lançamentos, contas a pagar e contas a receber em uma experiência simples."
        type="financeiro"
        bullets={["Receita total e saldo", "Contas a pagar e a receber", "Fluxo de caixa", "Indicadores financeiros"]}
      />

      <FeatureSection
        eyebrow="Ordens de Serviço"
        title="Cada Ordem de Serviço sob controle."
        text="Organize OS por status, prioridade, cliente e período. Acompanhe a operação sem perder visibilidade do que está acontecendo."
        type="os"
        reverse
        bullets={["Cadastro rápido de OS", "Filtros por status e prioridade", "Controle de clientes", "Indicadores da operação"]}
      />

      <FeatureSection
        eyebrow="Pessoas / RH"
        title="Gestão de pessoas conectada à operação."
        text="Controle colaboradores, folha, custos estimados e informações importantes em um módulo pensado para rotina empresarial."
        type="rh"
        bullets={["Colaboradores ativos", "Folha e custos estimados", "Cadastros organizados", "Visão gerencial"]}
      />

      <section id="beneficios" className="bg-[#fbfaff] py-24">
        <div className="section-title">
          <span className="badge">Benefícios</span>
          <h2>Mais produtividade. Mais controle.</h2>
          <p>A Nuvix conecta as áreas para reduzir retrabalho e dar mais previsibilidade à operação.</p>
        </div>
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map(([title, text]) => (
            <div key={title} className="card p-7">
              <div className="icon-box"><Zap size={20}/></div>
              <h3 className="mt-5 text-xl font-black tracking-[-.04em]">{title}</h3>
              <p className="mt-3 leading-7 text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container cta-gradient p-10 md:p-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_.55fr]">
            <div>
              <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-black">Nuvix Hub</span>
              <h2 className="mt-6 text-5xl font-black leading-[.96] tracking-[-.06em] md:text-6xl">
                Pronto para centralizar toda a operação da sua empresa?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-purple-100">
                Agende uma demonstração e veja como a Nuvix pode simplificar sua gestão.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 font-black text-purple-700 shadow-soft" href={mailLink}>
                Solicitar Demonstração
              </a>
              <a className="inline-flex items-center justify-center rounded-2xl border border-white/25 px-6 py-4 font-black text-white" href={appLink}>
                Entrar na Plataforma
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer id="contato" className="border-t border-slate-100 bg-white py-12">
        <div className="container grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="logo-mark"><Cloud fill="currentColor" size={21}/></div>
              <div>
                <strong className="text-lg">Nuvix</strong>
                <span className="ml-2 text-xs font-black uppercase tracking-[.22em] text-purple-500">Hub</span>
              </div>
            </div>
            <p className="mt-5 max-w-sm leading-7 text-slate-500">
              Plataforma operacional para empresas que precisam de controle, dados e gestão integrada.
            </p>
          </div>
          <div>
            <h4 className="font-black">Contato</h4>
            <a className="mt-4 flex items-center gap-2 text-slate-600" href={mailLink}><Mail size={18}/> nuvixhub@outlook.com</a>
          </div>
          <div>
            <h4 className="font-black">Acesso</h4>
            <a className="mt-4 block text-slate-600" href={appLink}>Login da Plataforma</a>
            <p className="mt-8 text-sm text-slate-400">© 2026 Nuvix Hub. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
