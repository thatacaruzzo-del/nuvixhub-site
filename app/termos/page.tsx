import Image from "next/image";
import Link from "next/link";

function LogoSmall() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="h-9 w-9 overflow-hidden rounded-xl shadow-md shadow-purple-200">
        <Image src="/logo.png" alt="Nuvix" width={36} height={36} className="h-full w-full object-cover" />
      </div>
      <div className="leading-none">
        <p className="text-base font-black tracking-tight text-slate-950">Nuvix</p>
        <p className="mt-0.5 text-[10px] font-bold tracking-[0.32em] text-purple-500">HUB</p>
      </div>
    </Link>
  );
}

export const metadata = {
  title: "Termos de Uso | Nuvix Hub",
  description: "Termos de uso da plataforma Nuvix Hub.",
};

export default function Termos() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-12 flex items-center justify-between">
        <LogoSmall />
        <Link href="/" className="text-sm font-semibold text-purple-700">
          Voltar ao site
        </Link>
      </div>

      <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Termos de Uso</h1>
      <p className="mt-3 text-sm text-slate-500">Última atualização: julho de 2026</p>

      <div className="mt-10 space-y-10 leading-7 text-slate-700">
        <section>
          <h2 className="text-lg font-black text-slate-950">1. Quem somos</h2>
          <p className="mt-3">
            A Nuvix Hub (CNPJ 56.948.429/0001-60), aqui chamada de &quot;Nuvix&quot;, oferece uma
            plataforma de gestão empresarial (financeiro, comercial, ordens de serviço e estoque)
            contratada por outras empresas, aqui chamadas de &quot;cliente&quot; ou &quot;contratante&quot;.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-slate-950">2. Aceite destes termos</h2>
          <p className="mt-3">
            Ao criar uma conta ou usar a plataforma, a empresa contratante e seus usuários
            autorizados concordam com estes Termos de Uso e com a nossa{" "}
            <Link href="/privacidade" className="font-semibold text-purple-700">
              Política de Privacidade
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-slate-950">3. O serviço oferecido</h2>
          <p className="mt-3">
            A Nuvix fornece acesso à plataforma via internet (modelo SaaS), mediante assinatura,
            para gestão de rotinas administrativas e operacionais da empresa contratante. Novos
            módulos e funcionalidades podem ser adicionados ao longo do tempo.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-slate-950">4. Cadastro e conta</h2>
          <p className="mt-3">
            A empresa contratante é responsável por manter suas informações de cadastro
            atualizadas e por proteger as credenciais de acesso de seus usuários. Qualquer
            atividade realizada com essas credenciais é de responsabilidade do titular da conta.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-slate-950">5. Assinatura e pagamento</h2>
          <p className="mt-3">
            O acesso à plataforma é vinculado a um plano de assinatura, cobrado com a
            periodicidade combinada no momento da contratação. O não pagamento pode resultar em
            suspensão do acesso após aviso prévio. O cancelamento pode ser solicitado a qualquer
            momento, encerrando as cobranças futuras.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-slate-950">6. Uso permitido</h2>
          <p className="mt-3">
            É proibido usar a plataforma para fins ilícitos, tentar acessar dados de outras
            empresas clientes, comprometer a segurança do sistema ou revender o acesso a
            terceiros sem autorização da Nuvix.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-slate-950">7. Propriedade dos dados</h2>
          <p className="mt-3">
            Os dados inseridos pela empresa contratante na plataforma (cadastros, financeiro,
            clientes dela, entre outros) pertencem à própria empresa contratante. A Nuvix atua
            como responsável técnica pelo armazenamento e processamento desses dados, sem
            utilizá-los para finalidade distinta da prestação do serviço.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-slate-950">8. Disponibilidade e suporte</h2>
          <p className="mt-3">
            A Nuvix se compromete a manter a plataforma operacional, mas não garante
            disponibilidade ininterrupta de 100% do tempo. Manutenções, atualizações ou
            instabilidades de terceiros (provedores de infraestrutura) podem causar
            indisponibilidades pontuais.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-slate-950">9. Limitação de responsabilidade</h2>
          <p className="mt-3">
            A Nuvix não se responsabiliza por decisões de negócio tomadas pela empresa
            contratante com base nas informações apresentadas na plataforma, nem por danos
            indiretos decorrentes de uso indevido do sistema.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-slate-950">10. Alterações nestes termos</h2>
          <p className="mt-3">
            Estes termos podem ser atualizados. Mudanças relevantes serão comunicadas aos
            clientes com antecedência razoável.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-slate-950">11. Legislação aplicável e foro</h2>
          <p className="mt-3">
            Estes termos são regidos pelas leis brasileiras, incluindo o Código de Defesa do
            Consumidor e a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Fica eleito o foro
            da comarca de Guarulhos, SP, para dirimir eventuais controvérsias, com renúncia a
            qualquer outro, por mais privilegiado que seja.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-slate-950">12. Contato</h2>
          <p className="mt-3">
            Dúvidas sobre estes termos podem ser enviadas para{" "}
            <a href="mailto:nuvixhub@outlook.com" className="font-semibold text-purple-700">
              nuvixhub@outlook.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
