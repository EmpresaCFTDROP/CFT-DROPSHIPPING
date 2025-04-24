import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-dark text-light-dim pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-primary px-3 py-1 text-sm font-bold text-primary-foreground rounded-lg mb-4">
            PERGUNTAS FREQUENTES
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-light">Dúvidas Frequentes</h1>
          <p className="text-light-dim text-lg">
            Encontre respostas para as perguntas mais comuns sobre a CFT DROP e nosso programa de dropshipping.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray/10 backdrop-blur-md border border-white/5 rounded-xl p-6 md:p-8 shadow-lg">
          <Accordion type="single" collapsible className="space-y-4">
            {/* Informações Gerais */}
            <AccordionItem value="what-is-cft">
              <AccordionTrigger className="text-light text-lg font-semibold">
                O que é a CFT Dropshipping?
              </AccordionTrigger>
              <AccordionContent className="text-light-dim">
                A CFT Dropshipping é uma plataforma especializada em dropshipping de calçados, que permite que
                revendedores comercializem produtos sem precisar manter estoque físico. Nós cuidamos de todo o processo
                logístico, desde o armazenamento até o envio para o cliente final.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="how-works">
              <AccordionTrigger className="text-light text-lg font-semibold">
                Como funciona o dropshipping?
              </AccordionTrigger>
              <AccordionContent className="text-light-dim">
                O dropshipping é um modelo de negócio onde você vende produtos sem precisar comprá-los antecipadamente
                ou gerenciar estoque. Quando um cliente compra um produto de sua loja, você repassa o pedido para nós, e
                nós enviamos o produto diretamente para seu cliente.
              </AccordionContent>
            </AccordionItem>

            {/* Processo de Trabalho */}
            <AccordionItem value="process">
              <AccordionTrigger className="text-light text-lg font-semibold">
                Qual é o passo a passo do processo?
              </AccordionTrigger>
              <AccordionContent className="text-light-dim">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Cadastro: Faça seu cadastro na nossa plataforma</li>
                  <li>
                    Acesso ao catálogo: Tenha acesso ao nosso catálogo completo de calçados com preços para revendedores
                  </li>
                  <li>Divulgação: Divulgue os produtos em suas redes sociais, site ou marketplace</li>
                  <li>Venda: Quando realizar uma venda, repasse o pedido para nós</li>
                  <li>Envio: Nós separamos o produto, embalamos e enviamos diretamente para seu cliente</li>
                  <li>
                    Lucro: Você fica com a diferença entre o preço que vendeu e o valor do produto em nosso catálogo
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            {/* Regras do Programa */}
            <AccordionItem value="rules">
              <AccordionTrigger className="text-light text-lg font-semibold">
                Quais são as regras do programa?
              </AccordionTrigger>
              <AccordionContent className="text-light-dim">
                <ul className="list-disc pl-5 space-y-2">
                  <li>É proibido utilizar o nome "CFT" em suas páginas, anúncios ou descrições de produtos</li>
                  <li>É proibido anunciar preços abaixo do mínimo estabelecido</li>
                  <li>É proibido utilizar imagens da nossa loja física ou de nossos colaboradores</li>
                  <li>É proibido se apresentar como dono ou representante da marca</li>
                  <li>É proibido divulgar links diretos para o nosso catálogo</li>
                  <li>É proibido divulgar informações de contato direto da CFT para seus clientes</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Preços e Pagamentos */}
            <AccordionItem value="pricing">
              <AccordionTrigger className="text-light text-lg font-semibold">
                Como funcionam os preços e margens?
              </AccordionTrigger>
              <AccordionContent className="text-light-dim">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Os preços no catálogo já são os valores para revendedores</li>
                  <li>Você deve adicionar sua margem de lucro ao vender os produtos</li>
                  <li>Há um preço mínimo sugerido para cada produto que deve ser respeitado</li>
                  <li>A margem média de lucro recomendada é de 30% a 70% sobre o valor do produto</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="payments">
              <AccordionTrigger className="text-light text-lg font-semibold">
                Como funcionam os pagamentos?
              </AccordionTrigger>
              <AccordionContent className="text-light-dim">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Pagamentos dos pedidos devem ser realizados antecipadamente</li>
                  <li>Aceitamos PIX, boleto bancário e cartão de crédito</li>
                  <li>O pedido só é processado após confirmação do pagamento</li>
                  <li>Não trabalhamos com sistema de consignação</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Mais perguntas podem ser adicionadas seguindo o mesmo padrão */}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-light-dim mb-6">
            Não encontrou o que procurava? Entre em contato conosco para mais informações.
          </p>
          <Link
            href="#contact"
            className="bg-gradient-to-r from-primary to-primary-dark hover:shadow-glow-lg transition-all duration-300 text-white font-bold py-3 px-8 rounded-md"
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </main>
  )
}
