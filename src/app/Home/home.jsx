import React from 'react';
import NavBar from '../Components/Navbar/navbar';
import './home.css'
import Arquivos from '../Components/Arquivos/arquivos';
import {Link} from 'react-router-dom';

function Home(){
    return <div>
        <NavBar />

        <h1 className='titulo'> Bem vindo ao site NAF! </h1>
        <div className='fundo'>
        <h2 className='definicao'> O Núcleo de Apoio Contábil e Fiscal (NAF) é um projeto desenvolvido pela Receita Federal em
        parceria com Instituições de Ensino Superior, cujo objetivo é oferecer serviços contábeis e
        fiscais gratuitos para pessoas físicas e jurídicas de menor poder aquisitivo, não substituindo,
        porém, um escritório de contabilidade.
        O núcleo de apoio contábil fiscal é parte integrante dos cursos de Ciências Contábeis da
        Católica SC em Joinville e Jaraguá do Sul. No NAF, os estudantes aprendem assuntos que
        dificilmente seriam levados para a sala de aula e une as questões de cidadania com a prática
        pedagógica.
        O núcleo oferece atendimento gratuito à comunidade na área fiscal em parceria com a Receita
        Federal. Os serviços são realizados por acadêmicos de diversas fases dos cursos, sob a
        supervisão de professores orientadores. Entre os serviços prestados estão: inscrições e
        informações cadastrais do CPF e CNPJ, agendamento on-line de atendimentos na Receita
        Federal, consulta à situação fiscal, orientações sobre declaração de imposto de renda, entre
        outros.
        </h2>
        </div>

        <h2 className='servicosAtendimento'> Serviços de Atendimento </h2>

        <div className='fundo'>
        <nav class="containerOpcoes">
        <ul>
          <li>
            <a className='opcao1'>Declaração Imposto de Renda (IR)</a>
            <p className='paragrafo1'>O prazo para entregar a declaração de imposto de renda da pessoa física (DIRPF) de 2023 é o último dia útil do mês de maio.</p>
          </li>
          <div className='divisaoBotao1'>
          <Link to="/app/home/anexarArquivo" className='botaoAnexar1'> Anexar Arquivos </Link>
          </div>
          <li>
            <a className='opcao2'>Cadastro de Pessoas Físicas (CPF)</a>
            <p className='paragrafo2'>As alterações e regularizações de CPF levam em média 72 horas para serem atualizadas nos sistemas da Caixa Econômica Federal, para fins de solicitação do Auxílio Emergencial.</p>
            <p>O CPF pode estar em uma das cinco situações cadastrais abaixo:</p>
            <ul>
              <li>REGULAR: não há nenhuma pendência no cadastro do contribuinte</li>
              <li>SUSPENSA: o cadastro do contribuinte está incorreto ou incompleto</li>
              <li>CANCELADA: o CPF foi cancelado em virtude de multiplicidade de inscrições ou por decisão administrativa ou judicial</li>
              <li>TITULAR FALECIDO: foi constatado o falecimento do contribuinte</li>
              <li>NULA: foi constatada fraude na inscrição e o CPF foi anulado</li>
            </ul>
          </li>
          <div className='divisaoBotao2'>
          <Link to="/app/home/anexarArquivo" className='botaoAnexar2'> Anexar Arquivos </Link>
          </div>
          <li>
            <a className='opcao3'>Emissão e Informações sobre CND - Certidões Negativas de Débitos PF e PJ</a>
            <p>As certidões emitidas em conjunto pela Receita Federal (RFB) e pela Procuradoria Geral da
            Fazenda Nacional (PGFN), são prova de regularidade fiscal perante a Fazenda Nacional,
            referente a todos os tributos federais e Dívida Ativa da União (DAU) que estes órgãos
            administram.
            </p>
            <p>As certidões são relativas a um único sujeito. Elas podem ser de:</p>
            <ul>
              <li>Pessoa física (CPF)</li>
              <li>Pessoa jurídica (CNPJ)</li>
              <li>Imóvel rural (NIRF)</li>
              <li>Obra de construção civil (CNO)</li>
            </ul>
          </li>
          <div className='divisaoBotao3'>
          <Link to="/app/home/anexarArquivo" className='botaoAnexar3'> Anexar Arquivos </Link>
          </div>
        </ul>
        </nav>
        </div>
        
    </div>
  }

export default Home;