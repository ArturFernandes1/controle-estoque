import React from "react";
import "./comp-help.scss";

export default function HelpPage() {
  return (
    <div className="container help-container">
      <h1 className="text-center">Ajuda – Controle de Produtos</h1>

      {/* INTRODUÇÃO */}
      <section>
        <p>
          Bem-vindo à <strong>Central de Suporte do Controle de Produtos</strong>.
          Este espaço foi criado para auxiliar você a utilizar todas as
          funcionalidades do sistema de forma prática, segura e eficiente.
        </p>
        <p>
          Aqui você encontrará orientações, boas práticas e respostas para as
          dúvidas mais comuns relacionadas ao gerenciamento de produtos e ao
          controle de estoque.
        </p>
      </section>

      {/* VISÃO GERAL */}
      <section>
        <h3>Visão Geral do Sistema</h3>
        <p>
          O <strong>Controle de Produtos</strong> é uma plataforma desenvolvida
          para simplificar o gerenciamento de estoque, permitindo o cadastro,
          edição, organização e acompanhamento de produtos em tempo real.
        </p>
        <p>
          O sistema foi pensado para atender desde pequenas operações até
          ambientes com grande volume de produtos, oferecendo controle, agilidade
          e confiabilidade das informações.
        </p>
      </section>

      {/* FUNCIONALIDADES */}
      <section>
        <h3>Funcionalidades Principais</h3>
        <ul>
          <li>
            <strong>Cadastro de Produtos:</strong> Permite adicionar novos
            produtos informando dados essenciais como nome, categoria,
            quantidade, preço e código de identificação.
          </li>
          <li>
            <strong>Edição e Atualização:</strong> Atualize preços, quantidades,
            categorias e demais informações de produtos já cadastrados de forma
            rápida e segura.
          </li>
          <li>
            <strong>Consulta de Produtos:</strong> Utilize filtros e campos de
            busca para localizar produtos por nome, categoria ou código.
          </li>
          <li>
            <strong>Controle de Estoque:</strong> Acompanhe em tempo real as
            quantidades disponíveis e identifique produtos com estoque baixo.
          </li>
          <li>
            <strong>Relatórios:</strong> Gere relatórios detalhados de estoque e
            movimentações para apoiar a tomada de decisões.
          </li>
        </ul>
      </section>

      {/* DICAS */}
      <section>
        <h3>Dicas de Uso</h3>
        <ul>
          <li>Revise as informações antes de cadastrar um produto para evitar duplicidades.</li>
          <li>Utilize filtros de busca para encontrar produtos com mais rapidez.</li>
          <li>Mantenha o estoque sempre atualizado para garantir dados confiáveis.</li>
          <li>Faça revisões periódicas nos cadastros para manter a base organizada.</li>
        </ul>
      </section>

      {/* FAQ */}
      <section>
        <h3>Perguntas Frequentes</h3>
        <ul>
          <li>
            <strong>Não consigo encontrar um produto cadastrado:</strong> Verifique
            os filtros de busca ou tente pesquisar pelo código do produto.
          </li>
          <li>
            <strong>O estoque está incorreto:</strong> Confirme se todas as
            entradas e saídas foram registradas corretamente.
          </li>
          <li>
            <strong>Posso editar um produto depois de cadastrado?</strong> Sim,
            todos os produtos podem ser editados a qualquer momento.
          </li>
        </ul>
      </section>

      {/* SUPORTE */}
      <section>
        <h3>Suporte Técnico</h3>
        <p>
          Caso encontre dificuldades, erros no sistema ou tenha dúvidas
          adicionais, entre em contato com nossa equipe de suporte técnico.
        </p>
        <p>
          📧 E-mail:&nbsp;
          <a
            className="contact-link"
            href="mailto:suporte@controleprodutos.com"
          >
            suporte@controleprodutos.com
          </a>
        </p>
        <p>
          Ao entrar em contato, descreva o problema com o máximo de detalhes
          possível para agilizar o atendimento.
        </p>
      </section>
    </div>
  );
}
