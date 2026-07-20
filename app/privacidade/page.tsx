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
  title: "Política de Privacidade | Nuvix Hub",
  description: "Política de privacidade da plataforma Nuvix Hub.",
};

export default function Privacidade() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-12 flex items-center justify-between">
        <LogoSmall />
        <Link href="/" className="text-sm font-semibold text-purple-700">
          Voltar ao site
        </Link>
      </div>

      <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Política de Privacidade</h1>
      <p className="mt-3 text-sm text-slate-500">Última atualização: julho de 2026</p>

      <div className="mt-10 space-y-10 leading-7 text-slate-700">
        <section>
          <h2 className="text-lg font-black text-slate-950">1. Quem somos</h2>
          <p className="mt-3">
            A Nuvix Hub (CNPJ 56.948.429/0001-60) é a responsável pelo tratamento dos dados
            pessoais descritos nesta política, na condição de controladora, nos termos da Lei
            Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-slate-950">2. Quais dados coletamos</h2>
          <p className="mt-3">Coletamos dados relacionados ao uso da plataforma, como:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Dados de cadastro: nome, e-mail e empresa dos usuários que acessam o sistema.</li>
            <li>Dados de uso: páginas acessadas, ações realizadas e horários de acesso, usados para segurança e para os indicadores do painel.</li>
            <li>Dados de navegação do site institucional, coletados de forma agregada e anônima via Vercel Analytics.</li>
          </ul>
          <p className="mt-3">
            Esta política não cobre os dados que a empresa contratante insere na plataforma sobre
            os clientes dela (ex: cadastro de clientes, financeiro) — esse tratamento é de
            responsabilidade da própria empresa contratante, conforme os{" "}
            <Link href="/termos" className="font-semibold text-purple-700">
              Termos de Uso
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-slate-950">3. Para que usamos os dados</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Viabilizar o acesso e o funcionamento da plataforma.</li>
            <li>Gerar os alertas e indicadores do Painel Inteligente.</li>
            <li>Prevenir uso indevido e garantir a segurança das contas.</li>
            <li>Dar suporte aos usuários quando solicitado.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-black text-slate-950">4. Compartilhamento com terceiros</h2>
          <p className="mt-3">
            Não vendemos nem compartilhamos dados pessoais com terceiros para fins comerciais.
            Utilizamos os seguintes prestadores de serviço para operar a plataforma, que têm
            acesso técnico aos dados apenas na medida necessária para prestar o serviço:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Supabase — armazenamento do banco de dados e autenticação.</li>
            <li>Vercel — hospedagem do site e da plataforma.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-black text-slate-950">5. Segurança e isolamento dos dados</h2>
          <p className="mt-3">
            Cada empresa cliente só tem acesso aos próprios dados, isolados por controles de
            acesso no banco de dados que impedem que uma empresa visualize informações de outra.
            O acesso à plataforma é protegido por autenticação individual de cada usuário.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-slate-950">6. Por quanto tempo guardamos os dados</h2>
          <p className="mt-3">
            Os dados são mantidos enquanto durar a relação contratual com a empresa cliente. Após
            o encerramento, os dados podem ser mantidos pelo prazo exigido por obrigação legal ou
            fiscal, sendo excluídos ou anonimizados em seguida.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-slate-950">7. Seus direitos</h2>
          <p className="mt-3">Nos termos da LGPD, o titular dos dados pode solicitar, a qualquer momento:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Confirmação de que seus dados são tratados e acesso a eles.</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários.</li>
            <li>Portabilidade dos dados a outro fornecedor.</li>
            <li>Informação sobre com quem os dados são compartilhados.</li>
          </ul>
          <p className="mt-3">
            Solicitações podem ser feitas pelo contato abaixo e serão respondidas dentro do prazo
            legal.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-slate-950">8. Alterações nesta política</h2>
          <p className="mt-3">
            Esta política pode ser atualizada para refletir mudanças no serviço ou na legislação.
            A data da última atualização está sempre indicada no topo desta página.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black text-slate-950">9. Encarregado de Dados (DPO)</h2>
          <p className="mt-3">
            O Encarregado pelo Tratamento de Dados Pessoais (DPO), nos termos do art. 41 da LGPD,
            é <strong className="text-slate-950">Thiago de Almeida Caruzzo</strong>. Dúvidas ou
            solicitações sobre seus dados podem ser enviadas para{" "}
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
