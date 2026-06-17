# Avaliação Final – Interação Humano-Computador (IHC)

## Identificação do Estudante

- **Nome:** Caio Barbosa de Lima
- **Matrícula:** *(Preencher conforme necessário)*
- **Curso:** Ciência da Computação
- **Instituição:** Centro Universitário de Brasília (CEUB)
- **Data de Entrega:** 16 de junho de 2026

---

## Descrição Geral

Este repositório reúne as atividades desenvolvidas durante a disciplina de Interação Humano-Computador (IHC), contemplando os desafios das Unidades de Aprendizagem UA1, UA2, UA3 e UA4. Cada desafio aborda conceitos e práticas relevantes em IHC, com o objetivo de demonstrar a aplicação de conhecimentos em cenários práticos e contextos reais.

---

## UA1 – Introdução à IHC e seus benefícios

### Objetivo

Analisar e propor melhorias em uma interface existente, demonstrando compreensão dos benefícios da Interação Humano-Computador na melhoria da usabilidade e experiência do usuário.

### Solução Desenvolvida

Elaboração de um relatório detalhado com as melhorias propostas para a interface do sistema de folha de pagamento, visando aprimorar a navegabilidade e a experiência do usuário. O documento aborda:

- Análise crítica da interface atual
- Identificação de problemas de usabilidade
- Propostas de melhoria baseadas em princípios de IHC
- Benefícios esperados com a implementação das melhorias

### Arquivos Entregues

- `Relatório de Melhorias de Interface para o Sistema de Folha de Pagamento.docx` – Relatório completo com análise e propostas
- `README.MD` – Descrição da atividade

---

## UA2 – Interface, interação e Affordance

### Objetivo

Propor uma interface acessível e definir os equipamentos necessários para um sistema que atenda usuários com deficiência visual, aplicando conceitos de affordance e design inclusivo.

### Solução Desenvolvida

Desenvolvimento de uma proposta detalhada para um gerenciador de cursos internos acessível para funcionários com deficiência visual. O documento explora:

- Seleção do tipo de interface apropriado (interface orientada à fala)
- Equipamentos assistivos essenciais para garantir acessibilidade
- Princípios de affordance aplicados ao design inclusivo
- Estratégias para garantir usabilidade e inclusão

### Arquivos Entregues

- `Proposta de Interface Acessível para Gerenciador de Cursos Internos.docx` – Proposta completa com recomendações técnicas
- `README.MD` – Descrição da atividade

---

## UA3 – Storyboarding e prototipação de interfaces

### Objetivo

Aplicar técnicas de storyboarding e prototipação para desenvolver uma solução assistiva, envolvendo compreensão do usuário, exploração criativa e validação de ideias.

### Solução Desenvolvida

Como integrante da equipe de design da Desenvolve!, elaboração de um documento detalhando o passo a passo do processo de design de interface para uma solução assistiva. O documento aborda as fases de:

- **Compreensão do Usuário:** Utilizando Storytelling, Picture Cards e Jornada do Usuário para entender as necessidades e sentimentos do usuário (Ricardo)
- **Exploração Criativa:** Com o uso de Storyboards para visualizar diferentes cenários e propostas tecnológicas
- **Prototipagem e Validação:** Iniciando com protótipos de baixa fidelidade para validar as ideias diretamente com o usuário

### Ferramentas Utilizadas

- Técnicas de Storyboarding
- Picture Cards
- Jornada do Usuário
- Prototipagem de Baixa Fidelidade

### Arquivos Entregues

- `design_process_professional.docx` – Documento completo do processo de design
- `README.MD` – Descrição da atividade

---

## UA4 – TypeScript

### Objetivo

Desenvolver uma aplicação prática utilizando TypeScript, demonstrando compreensão de tipos, classes, e funcionalidades de programação orientada a objetos.

### Funcionalidades Implementadas

- Criação de estrutura de Produto com atributos (nome, preço, quantidade)
- Implementação de Carrinho de Compras com funcionalidades de gerenciamento
- Cálculo automático do valor total de vendas
- Validação de tipos através do sistema de tipagem do TypeScript

### Tecnologias Utilizadas

- **TypeScript** – Linguagem principal
- **Node.js** – Ambiente de execução
- **Sistema de Tipos TypeScript** – Para segurança de tipos

### Como Executar o Projeto

#### Pré-requisitos

- Node.js (versão 14 ou superior) instalado
- npm ou yarn
- TypeScript instalado globalmente (`npm install -g typescript`)

#### Instalação

```bash
npm install
```

#### Compilação

Para compilar o arquivo TypeScript:

```bash
tsc ecommerce.ts
```

Isso gera um arquivo `ecommerce.js` correspondente.

#### Execução

Para executar o projeto compilado:

```bash
node ecommerce.js
```

**Resultado Esperado:**
```
Total da venda: R$ 1650.00
```

### Exemplos de Uso

O arquivo `ecommerce.ts` demonstra:

```typescript
// Criação de produtos
const produto1 = new Produto("Notebook", 1500.00, 1);
const produto2 = new Produto("Mouse", 150.00, 1);

// Adição ao carrinho
carrinho.adicionarProduto(produto1);
carrinho.adicionarProduto(produto2);

// Cálculo do total
console.log(`Total da venda: R$ ${carrinho.calcularTotal().toFixed(2)}`);
```

### Arquivos Entregues

- `ecommerce.ts` – Código-fonte TypeScript com implementação completa
- `README.MD` – Descrição da atividade

---

## Estrutura do Repositório

```
DESAFIO UAS 01-04/
├── DESAFIO UA1 Introdução a IHC e seus benefícios/
│   ├── README.MD
│   └── Relatório de Melhorias de Interface para o Sistema de Folha de Pagamento.docx
├── DESAFIO UA2 Interface, interação e Affordance/
│   ├── README.MD
│   └── Proposta de Interface Acessível para Gerenciador de Cursos Internos.docx
├── DESAFIO UA3 Storyboarding e prototipação de interfaces/
│   ├── README.MD
│   └── design_process_professional.docx
└── DESAFIO UA4 TypeScript/
    ├── README.MD
    └── ecommerce.ts
```

---

## Considerações Finais

A realização dessas atividades proporcionou uma visão holística sobre Interação Humano-Computador, desde os conceitos fundamentais (UA1) até a aplicação prática em projetos reais. Os principais aprendizados incluem:

- A importância do design centrado no usuário para criar interfaces eficazes
- A necessidade de acessibilidade e inclusão no desenvolvimento de software
- A aplicação prática de técnicas de prototipagem e validação
- O uso de TypeScript para criar aplicações robustas e type-safe

Cada atividade contribuiu para o desenvolvimento de habilidades essenciais em design de interfaces e desenvolvimento de software, reforçando a importância de considerar a experiência do usuário em todas as etapas de um projeto.

---

## Declaração de Autoria

Declaro que este trabalho foi desenvolvido por mim, **Caio Barbosa de Lima**, respeitando as normas acadêmicas e de integridade estabelecidas pela instituição Centro Universitário de Brasília (CEUB).

Todos os materiais apresentados neste repositório são resultado do meu trabalho individual e/ou colaborativo, conforme indicado em cada atividade.

**Nome do Estudante:** Caio Barbosa de Lima

**Data:** 16/06/2026

---

## Contato e Informações Adicionais

- **GitHub:** [CaioB1ima](https://github.com/CaioB1ima)
- **Repositório:** [Desafios-UAS-IHC](https://github.com/CaioB1ima/Desafios-UAS-IHC)
- **Instituição:** Centro Universitário de Brasília (CEUB)
- **Disciplina:** Interação Humano-Computador (IHC)
