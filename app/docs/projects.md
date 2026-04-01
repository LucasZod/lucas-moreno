# 🧪 Projetos em Destaque

---

# 🌐 CMS + Landing Page (BRT)

## 📌 Visão geral

Desenvolvimento de um sistema completo de CMS (Content Management System) integrado a uma landing page altamente otimizada para SEO, permitindo a edição dinâmica de conteúdos sem necessidade de deploy.

O projeto foi pensado para ser:

- altamente performático
- escalável
- amigável para SEO
- simples para usuários não técnicos

---

## 🧩 Problema

Antes do CMS:

- Alterações de conteúdo dependiam de deploy
- Baixa autonomia do time de negócio
- Dificuldade em manter SEO consistente
- Alto custo de manutenção para pequenas mudanças

---

## 🚀 Solução

Criação de um CMS customizado com:

- edição dinâmica de textos e imagens
- controle por seções (hero, SMB, conteúdo institucional, etc.)
- armazenamento estruturado (JSON para conteúdo complexo)
- integração direta com frontend SSR

---

## ⚙️ Arquitetura

### Frontend:

- Next.js (SSR obrigatório)
- React
- Tailwind CSS
- Estrutura baseada em vitrine limpa (componentização)

### Backend:

- Node.js + Express
- MySQL + Sequelize
- API REST

---

## 🧠 Decisões técnicas

- Uso de SSR para SEO real (conteúdo indexável)
- Estrutura por seções (facilita manutenção e edição)
- JSON para conteúdos ricos (ex: botões com label + link)
- Separação clara entre conteúdo e apresentação

---

## 💥 Problemas resolvidos

- 🔴 Dependência de desenvolvedor para conteúdo  
  → solução: CMS com edição dinâmica  
  → impacto: autonomia total para negócio

- ⚡ SEO fraco  
  → solução: SSR + HTML semântico  
  → impacto: melhor indexação

- 🔄 Deploy desnecessário  
  → solução: conteúdo dinâmico via API  
  → impacto: redução de tempo de entrega

---

## 📈 Resultado

- Redução significativa de dependência técnica
- Melhor performance e SEO
- Estrutura reutilizável para novos projetos

---

# 🧠 Arquitetura Backend SIEV (Detran)

## 📌 Visão geral

Projeto de arquitetura de um sistema distribuído para gestão de:

- ordens de serviço
- pagamentos
- validações
- auditoria

Sistema crítico com múltiplos participantes e necessidade de consistência e rastreabilidade.

---

## 🧩 Problema

Sistema precisava lidar com:

- alto volume de requisições
- múltiplos serviços integrados
- necessidade de auditoria completa
- garantia de consistência financeira

---

## 🚀 Solução

Desenho de uma arquitetura baseada em:

- Domain Driven Design (DDD)
- Event-driven architecture
- Consistência eventual
- Idempotência

---

## ⚙️ Arquitetura

- NestJS
- PostgreSQL + Prisma
- Redis (cache + idempotência)
- GCP Pub/Sub (mensageria)
- Outbox pattern
- Workers assíncronos

---

## 🧠 Decisões técnicas

- Uso de eventos para desacoplar serviços
- Outbox pattern para garantir entrega de eventos
- Redis para controle de idempotência
- Separação de bounded contexts

---

## 🔄 Fluxo principal

1. Pedido criado
2. Evento gerado (orders.created)
3. Processamento assíncrono
4. Pagamento iniciado
5. Validação executada
6. Auditoria registrada

---

## 💥 Problemas resolvidos

- 🔴 Processamento duplicado  
  → solução: idempotência com Redis  
  → impacto: eliminação de inconsistências

- ⚡ Gargalos síncronos  
  → solução: arquitetura assíncrona  
  → impacto: maior escalabilidade

- 🔄 Falhas em integrações  
  → solução: retry + DLQ (dead letter queue)  
  → impacto: resiliência do sistema

- 🔐 Auditoria fraca  
  → solução: eventos auditáveis  
  → impacto: rastreabilidade completa

---

## 📈 Resultado

- Arquitetura altamente escalável
- Sistema resiliente a falhas externas
- Base sólida para crescimento
- Clareza na separação de responsabilidades

---

# 🎯 Diferencial desses projetos

Esses projetos demonstram:

- capacidade de pensar arquitetura (não só código)
- domínio de sistemas distribuídos
- preocupação com performance, escalabilidade e consistência
- aplicação real de DDD, SOLID e padrões modernos
