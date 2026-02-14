# 🥩 SaaS Açougue API

Backend SaaS para gestão de açougues desenvolvido utilizando **Arquitetura Hexagonal (Ports and Adapters)**, com foco em escalabilidade, desacoplamento e evolução incremental.

---

## 📌 Sobre o Projeto

O SaaS Açougue API é uma plataforma backend projetada para resolver problemas reais da gestão de açougues, incluindo controle de produtos, estoque e processos específicos como desossa e cálculo de rendimento.

O objetivo é construir um sistema modular, testável e escalável seguindo boas práticas de engenharia de software.

---

## 🎯 Objetivos do Sistema

- Gestão de produtos e cortes
- Controle de estoque por lote
- Processo de desossa (transformação de peças)
- Cálculo de custo e margem
- Estrutura multi-tenant (SaaS)

---

## 🧱 Arquitetura

Este projeto utiliza **Hexagonal Architecture (Ports and Adapters)** para manter o core do sistema independente de frameworks e infraestrutura.

## 📁 Estrutura do Projeto

src/
├── domain # Entidades e regras de negócio
├── application # Use cases e portas (interfaces)
├── adapters # Implementações externas
└── infrastructure # Configuração e execução

## ⚙️ Stack Tecnológica

- Node.js
- TypeScript
- ESM Modules
- Arquitetura Hexagonal

## ▶️ Como executar

```bash
npm install
npx tsx src/infrastructure/scripts/run-create-product.ts



---

## ✅ 4️⃣ Estado Atual (isso é MUITO profissional)

Mostra evolução.

```md
## 🚧 Estado Atual

- ✅ Core domain implementado
- ✅ Use cases isolados
- ✅ Adapter em memória
- 🔜 API HTTP
- 🔜 Persistência em banco


## 📈 Roadmap

- [ ] Testes unitários
- [ ] Adapter HTTP
- [ ] Banco de dados
- [ ] Autenticação
