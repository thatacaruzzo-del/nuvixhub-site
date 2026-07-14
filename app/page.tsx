"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, RoundedBox, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  BarChart3, BriefcaseBusiness, CheckCircle2, ClipboardList, Cloud, Cog, Compass, Database,
  DollarSign, FileText, Layers3, Mail, Package, ShieldCheck, Users,
  Wrench, ArrowRight
} from "lucide-react";

const contactLink = "https://tally.so/r/Bz5ERA";

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
  ["Dashboard Executivo", "Indicadores em tempo real para decisões mais rápidas.", BarChart3],
  ["Financeiro", "Receitas, despesas, fluxo de caixa e controle completo.", DollarSign],
  ["CRM", "Clientes, oportunidades e relacionamento comercial integrados.", Users],
  ["Ordens de Serviço", "Cadastro, status, prioridades e acompanhamento operacional.", ClipboardList],
  ["Serviços", "Organização dos serviços prestados e rotinas da operação.", Wrench],
  ["Materiais", "Controle de materiais vinculados à operação.", Package],
  ["RH", "Colaboradores, folha, ponto, férias e rescisões.", BriefcaseBusiness],
  ["Relatórios", "Análises para gestão, auditoria e acompanhamento.", FileText],
];

const pains = [
  ["Retrabalho", "Equipes repetem lançamentos por falta de uma base única."],
  ["Planilhas", "Controles paralelos quebram processos e tornam os indicadores frágeis."],
  ["Falta de controle", "Gestores só enxergam problemas depois que eles impactam a operação."],
  ["Informações descentralizadas", "Dados importantes ficam presos em departamentos e conversas."],
];

function MiniDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-3xl rounded-[32px] border border-purple-100 bg-white p-4 shadow-soft">
      <div className="rounded-[24px] bg-gradient-to-br from-[#240B55] to-[#8845F4] p-7 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-purple-200">Boa tarde · Nuvix</p>
            <h3 className="mt-3 text-3xl font-black">Dashboard Executivo</h3>
            <p className="mt-2 text-purple-100">Prestação de Serviço · Visão geral</p>
          </div>
          <div className="float rounded-3xl bg-white/20 px-5 py-4 backdrop-blur">
            <Cloud size={22} />
          </div>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4">
          {[
            ["Caixa disponível", "R$ 12.400"],
            ["Clientes ativos", "18"],
            ["OS abertas", "6"],
          ].map(([lbl, val]) => (
            <div key={lbl} className="rounded-2xl bg-white/14 p-4 backdrop-blur">
              <p className="text-sm font-bold">{val}</p>
              <p className="mt-1 text-xs text-purple-100">{lbl}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-4 p-5 md:grid-cols-3">
        {["Financeiro", "Ordens de Serviço", "Relatórios"].map((label, i) => (
          <div key={label} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
            <div className="mb-4 h-3 w-20 rounded-full bg-purple-200" />
            <p className="font-bold text-slate-950">{label}</p>
            <div className="mt-5 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-violet-400 opacity-80" />
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="text-sm font-black uppercase tracking-[0.28em] text-purple-500">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-slate-600">{subtitle}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a href="#produto" className="hover:text-purple-600">Produto</a>
            <a href="#modulos" className="hover:text-purple-600">Módulos</a>
            <a href="#solucoes" className="hover:text-purple-600">Soluções</a>
            <a href="#contato" className="hover:text-purple-600">Contato</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://nuvix-os-v2.vercel.app" className="hidden rounded-2xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 hover:border-purple-300 md:inline-flex">
              Login
            </a>
            <a href={contactLink} className="rounded-2xl bg-purple-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-purple-200 hover:bg-purple-700">
              Demonstração
            </a>
          </div>
        </div>
      </header>

      <section className="noise pt-32">
        <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-purple-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-purple-500" /> Feito pra pequenos negócios de serviço
            </div>
            <h1 className="mt-8 text-5xl font-black tracking-tight text-slate-950 md:text-7xl">
              Entenda sua empresa em <span className="gradient-text">30 segundos.</span>
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-9 text-slate-600">
              Chega de planilha e achismo. A Nuvix não automatiza sua decisão por você. Mostra o dado real e a sugestão, e quem decide continua sendo você.
            </p>

            <div className="mt-7 max-w-md rounded-2xl border border-slate-100 bg-white p-4 shadow-soft">
              <p className="text-[11px] font-black uppercase tracking-[0.14em] text-purple-500">Inteligência Nuvix</p>
              <div className="mt-2 flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                <p className="text-sm leading-6 text-slate-800">
                  <b className="font-bold">Despesas em Combustível subiram 18% este mês.</b> Foi a categoria que mais cresceu em relação ao mês anterior.
                </p>
              </div>
              <p className="mt-3 border-t border-slate-100 pt-3 text-[11px] text-slate-400">Confiança: alta · calculado com dados confirmados</p>
            </div>

            {/* Segundo exemplo: mostra o outro lado da mesma promessa do subtítulo — quando
                não há dado suficiente, o sistema avisa em vez de arriscar um número. Sem selo
                de confiança nenhum aqui, de propósito. */}
            <div className="mt-3 max-w-md rounded-2xl border border-slate-100 bg-white p-4 shadow-soft">
              <p className="text-[11px] font-black uppercase tracking-[0.14em] text-purple-500">Inteligência Nuvix</p>
              <div className="mt-2 flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                <p className="text-sm leading-6 text-slate-800">
                  <b className="font-bold">Ainda reunindo dados sobre Folha de Pagamento.</b> Faltam lançamentos confirmados pra um diagnóstico confiável.
                </p>
              </div>
              <p className="mt-3 border-t border-slate-100 pt-3 text-[11px] text-slate-400">Sem confiança suficiente pra opinar ainda</p>
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href={contactLink} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-purple-600 px-7 py-4 font-black text-white shadow-xl shadow-purple-200 hover:bg-purple-700">
                Solicitar demonstração <ArrowRight size={18} />
              </a>
              <a href="#modulos" className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-4 font-black text-slate-800 hover:border-purple-300">
                Conhecer a plataforma
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-5 text-sm font-bold text-slate-500">
              <span className="inline-flex items-center gap-2"><Cloud size={16} className="text-purple-500" /> 100% em nuvem</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck size={16} className="text-purple-500" /> Diagnóstico honesto</span>
              <span className="inline-flex items-center gap-2"><Database size={16} className="text-purple-500" /> Tudo conectado</span>
              <span className="inline-flex items-center gap-2"><Compass size={16} className="text-purple-500" /> Copiloto, não piloto automático</span>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-purple-200 blur-3xl opacity-50" />
            <Cloud3D />
            <div className="absolute left-6 top-8 float rounded-3xl border border-purple-100 bg-white/85 p-4 shadow-soft backdrop-blur">
              <p className="text-xs font-black uppercase text-slate-500">Módulos</p>
              <p className="mt-1 text-2xl font-black text-purple-600">8+</p>
            </div>
            <div className="absolute bottom-8 right-4 float-delay rounded-3xl border border-purple-100 bg-white/90 p-4 shadow-soft backdrop-blur">
              <p className="text-sm font-black text-slate-950">Operação conectada</p>
              <p className="text-xs text-slate-500">CRM → OS → Financeiro</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <SectionTitle eyebrow="Problema" title="Sua operação está espalhada em vários sistemas?" subtitle="Quando cada área trabalha em uma ferramenta diferente, a gestão perde velocidade, contexto e previsibilidade." />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {pains.map(([title, desc], i) => (
            <div key={title} className="card-hover rounded-[28px] border border-slate-100 bg-white p-7 shadow-sm">
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-purple-50 text-purple-600">
                <Layers3 size={22} />
              </div>
              <h3 className="text-xl font-black text-slate-950">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="produto" className="bg-slate-50 px-6 py-24">
        <SectionTitle eyebrow="Plataforma" title="Tudo conectado em tempo real." subtitle="A Nuvix une os módulos essenciais da operação para transformar dados em gestão." />
        <MiniDashboard />
        <p className="mx-auto mt-4 max-w-3xl text-center text-xs text-slate-400">Tela ilustrativa, com dados de exemplo. Na Nuvix de verdade, os números são sempre os seus.</p>
      </section>

      <section id="modulos" className="px-6 py-24">
        <SectionTitle eyebrow="Módulos" title="Uma plataforma para toda a empresa." subtitle="Cada área trabalha melhor quando as informações conversam entre si." />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {modules.map(([title, desc, Icon]: any) => (
            <div key={title} className="card-hover rounded-[28px] border border-slate-100 bg-white p-7 shadow-sm">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-purple-50 text-purple-600">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-black text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="solucoes" className="bg-gradient-to-b from-white to-purple-50 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-purple-500">Fluxo operacional</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Do cliente ao financeiro, sem perder informação no caminho.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              A Nuvix conecta CRM, Ordens de Serviço, materiais, financeiro, RH e relatórios para que a gestão tenha clareza do que está acontecendo.
            </p>
            <div className="mt-8 grid gap-4">
              {["Cliente cadastrado", "Ordem de Serviço criada", "Materiais vinculados", "Financeiro atualizado", "Indicadores em tempo real"].map((step) => (
                <div key={step} className="flex items-center gap-4 rounded-2xl border border-purple-100 bg-white p-4 shadow-sm">
                  <CheckCircle2 className="text-purple-600" />
                  <span className="font-bold text-slate-800">{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[36px] border border-purple-100 bg-white p-6 shadow-soft">
            <div className="rounded-[28px] bg-slate-50 p-6">
              {["CRM", "Ordens de Serviço", "Materiais", "Financeiro", "Dashboard"].map((item, i) => (
                <div key={item} className="relative mb-5 flex items-center gap-4 last:mb-0">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-purple-600 font-black text-white">{i + 1}</div>
                  <div className="flex-1 rounded-2xl bg-white p-4 font-black text-slate-900 shadow-sm">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <SectionTitle eyebrow="Benefícios" title="Mais produtividade. Mais controle." subtitle="Uma operação conectada reduz retrabalho e melhora a qualidade das decisões." />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            ["Centralização", "Um único sistema para dados, rotinas, aprovações e gestão."],
            ["Controle operacional", "Acompanhe prazos, ordens e execução em tempo real."],
            ["Gestão financeira", "Conecte contas, clientes, custos e previsões à operação."],
            ["CRM integrado", "O relacionamento comercial conversa com entregas e faturamento."],
            ["Indicadores", "KPIs executivos sempre atualizados para decisões rápidas."],
            ["Relatórios", "Análises consistentes para rotina, auditoria e diretoria."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-[28px] border border-slate-100 bg-slate-50 p-8">
              <h3 className="text-2xl font-black text-slate-950">{title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contato" className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-gradient-to-r from-[#240B55] to-[#7C3AED] p-10 text-white shadow-soft md:p-16">
          <div className="grid gap-8 md:grid-cols-[1.4fr_.6fr] md:items-center">
            <div>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">Pronto para centralizar toda a operação da sua empresa?</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-purple-100">
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
              <a href="#modulos">Módulos</a>
              <a href="#solucoes">Soluções</a>
            </div>
          </div>
          <div>
            <p className="font-black text-slate-950">Empresa</p>
            <div className="mt-4 grid gap-3 text-slate-600">
              <a href={contactLink}>Contato</a>
              <a href="https://nuvix-os-v2.vercel.app">Login da Plataforma</a>
            </div>
          </div>
          <div>
            <p className="font-black text-slate-950">Contato</p>
            <p className="mt-4 text-slate-600">nuvixhub@outlook.com</p>
            <p className="mt-8 text-sm text-slate-400">© 2026 Nuvix Hub. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}