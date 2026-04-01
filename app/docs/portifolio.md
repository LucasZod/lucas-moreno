# 🎯 Objetivo

Construir um portfólio profissional completo em Next.js, com foco em:

- SEO forte (ser encontrado por recrutadores e buscas técnicas)
- Apresentação clara de habilidades técnicas e arquitetura
- Demonstração prática de conhecimento (patterns, código real, decisões)
- Estrutura escalável e bem organizada (seguir meu-estilo-react.md)

---

# 🚀 Stack base

- Next.js (SSR + SEO obrigatório)
- TypeScript
- Tailwind CSS
- Estrutura baseada em componentização (seguir meu-estilo-react.md)
- Sem prop drilling
- Uso de children explícito
- Separação clara de responsabilidades

---

# 🧠 Diretrizes principais

- Aplicar SOLID, DRY, KISS em toda estrutura
- Código deve ser legível e escalável
- SEO é prioridade (meta tags, headings, semântica HTML)
- Performance: evitar re-render desnecessário
- Componentes reutilizáveis e bem nomeados

---

# 🌐 Estrutura do site

## 1. Home

### Objetivo:

Apresentar rapidamente quem sou e meu diferencial

### Conteúdo:

- Headline forte (Full Stack focado em sistemas escaláveis)
- Subheadline com stack principal
- Destaque:
  - Fintech
  - GED
  - Sistemas distribuídos
- CTA: "Ver Projetos", "Ver Currículo"

### SEO:

- Palavras-chave:
  - Full Stack Developer Brasil
  - Node.js NestJS React Developer
  - Desenvolvedor Fintech
  - Backend Node.js Senior

---

## 2. Sobre mim

### Conteúdo:

- Minha história (breve)
- Experiência com:
  - Fintech
  - GED
  - Sistemas de alta complexidade
- Filosofia de código:
  - Clean Code
  - SOLID
  - Escalabilidade

---

## 3. Skills (Muito importante para SEO)

### Criar seção com chips (tags)

#### Stack:

- React
- Next.js
- TypeScript
- JavaScript
- Node.js
- NestJS
- Vue.js
- C# .NET

#### Backend & Infra:

- Redis
- GCP Pub/Sub
- Docker
- PostgreSQL
- MongoDB

#### Arquitetura:

- SOLID
- DDD
- DRY
- KISS
- Design Patterns
- Componentização avançada

---

### SEO estratégico:

Cada skill deve aparecer no HTML como texto real (não só visual)

---

## 4. Projetos

### Cada projeto deve conter:

- Nome
- Problema resolvido
- Stack utilizada
- Arquitetura usada
- Decisões técnicas
- Resultado (impacto)

---

## 5. Currículo

### Página dedicada

#### Conteúdo:

- Mesmo conteúdo do PDF (mais detalhado)
- Separar por empresas:
  - Pilotar
  - Hyperdev
  - Amppli
  - Manlog
  - Grupo Jaime Câmara

#### Para cada empresa:

- O que fiz
- Problemas que resolvi
- Tecnologias usadas
- Impacto (números)

---

### Download PDF:

- Botão para baixar currículo em PDF
- Arquivo deve estar hospedado ou gerado

---

### Skills no final:

Adicionar chips com:

- Tecnologias
- Boas práticas
- Arquitetura

---

## 6. Patterns (Diferencial MUITO FORTE)

### Criar página exclusiva:

Para cada pattern:

#### Backend:

- Ex: Strategy, Factory, Repository, Event-driven
- Mostrar:
  - Problema
  - Código
  - Solução

#### Frontend:

- Componentização
- Containers
- Composition pattern
- State management

---

### IMPORTANTE:

- Mostrar prints de código
- Explicar como foi aplicado na prática

---

## 7. SEO (CRÍTICO)

### Implementar:

- `<title>` otimizado por página
- `<meta description>`
- Open Graph (para LinkedIn)
- URLs amigáveis:
  - /skills
  - /projects
  - /patterns
  - /curriculo

---

### Conteúdo indexável:

- Não esconder conteúdo em JS apenas
- Priorizar SSR

---

## 8. Performance

- Evitar uso desnecessário de useEffect
- Lazy loading onde necessário
- Componentes leves

---

## 9. Diferenciais que DEVEM existir

- Explicação de decisões técnicas
- Foco em problemas resolvidos
- Mostrar raciocínio (não só código)

---

# 🧱 Estrutura de pastas sugerida

/src
/app
/components
/sections
/patterns
/projects
/shared

---

# ⚠️ Regras obrigatórias

- Seguir meu-estilo-react.md
- Não usar prop drilling
- Usar children explícito
- Componentes com responsabilidade única
- Código limpo e legível

---

# 🎯 Resultado esperado

Um portfólio que:

- Mostra nível Senior
- Passa autoridade técnica
- Ranqueia no Google
- Impressiona recrutadores
- Demonstra domínio real de arquitetura
