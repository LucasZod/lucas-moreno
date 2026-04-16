---
name: portfolio-design
description: Sistema de design e padrões do portfolio do Lucas Moreno em Next.js.
  Usar sempre que criar ou editar componentes, páginas ou estilos do portfolio.
---

## Stack

- Next.js 14 App Router
- Tailwind CSS v3
- Framer Motion (animações)
- Fontes: Plus Jakarta Sans (corpo) + JetBrains Mono (labels/código)

## Identidade visual

- Tom: limpo, profissional, legível. Sem neon, sem gradientes decorativos.
- Acento único: verde (#639922 / green-700 no Tailwind)
- Background: off-white (#F8F7F4) ou neutros do Tailwind slate

## Hierarquia tipográfica

- h1: text-4xl font-semibold, Plus Jakarta Sans
- Labels de seção: font-mono text-xs uppercase tracking-widest text-slate-400, prefixo //
- Body: text-base text-slate-600, leading-relaxed
- Tags de tech: font-mono text-xs, badge outline

## Padrões de componente

- Cards de projeto: bg-slate-50 border border-slate-200 rounded-xl p-5
- Sem box-shadow decorativo, só border sutil
- Espaçamento de seções: py-16 mobile, py-24 desktop

## Animações (Framer Motion)

### Variantes base — usar em todo componente animado

```ts
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } },
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
```

### Regras de uso

- Títulos (h1, h2): `fadeUp`, entram primeiro
- Subtítulos e parágrafos: `fadeUp` com delay leve após o título
- Grids de cards: `staggerContainer` no wrapper, `fadeUp` em cada card filho
- Nunca usar `spring` em fade — somente `ease` customizado ou `easeOut`
- `viewport={{ once: true, amount: 0.2 }}` em todas as seções abaixo do hero
- Hero anima no mount (`initial/animate`), demais seções usam `whileInView`

### Padrão de seção animada

```tsx
<motion.section
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  <motion.h2 variants={fadeUp}>// projetos</motion.h2>
  <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-4">
    {projects.map((p) => (
      <motion.div key={p.id} variants={fadeUp}>
        <ProjectCard {...p} />
      </motion.div>
    ))}
  </motion.div>
</motion.section>
```

### Cards — conteúdo interno

Estrutura limpa e harmônica, nesta ordem:

1. Label de contexto: `font-mono text-[10px] uppercase tracking-widest text-slate-400`
2. Título do projeto: `text-[15px] font-medium text-slate-800 mt-1`
3. Descrição: `text-[13px] text-slate-500 leading-relaxed mt-2` — máx 2 linhas
4. Tags: `flex gap-1.5 mt-4`, cada tag `font-mono text-[11px] px-2 py-0.5 rounded border border-slate-200 text-slate-400`
   Sem ícones decorativos, sem métricas inventadas, sem separadores desnecessários.

## O que evitar

- Gradientes em texto (era o estilo anterior)
- Múltiplas cores de acento
- Animações com `spring` em fade ou entrada de texto
- `duration` acima de 0.6s em qualquer elemento
- Animar a mesma seção mais de uma vez (sempre `once: true`)
- `whileHover` com scale acima de 1.02

## Estilo de código (seguir obrigatoriamente)

### Padrões gerais
- Arrow functions sempre
- `interface` por padrão, `type` só se necessário
- Tailwind para todo styling, sem CSS externo
- Sem semicolons, singleQuote
- Sem `any` — tipagem sempre explícita e legível
- `useEffect` só quando realmente necessário
- `useMemo` só quando necessário
- Custom hooks extraídos quando a lógica do componente cresce
- Estrutura de pasta conforme o projeto: verificar necessidade de `'use server'`
  em pasta separada; caso contrário, tudo no mesmo arquivo com `'use client'`

### Pattern Composição/Vitrine (obrigatório em todos os componentes)
O componente raiz exportado funciona como vitrine — mostra a estrutura completa
de forma legível, como um mapa visual do que existe na tela.
Sub-componentes são definidos abaixo no mesmo arquivo como `const` internos,
cada um com responsabilidade única (SOLID).
Props desestruturadas diretamente no parâmetro.

Componentes reutilizáveis em outros contextos → pasta `/components`.
Componentes de página → mesmo arquivo, `'use client'` no topo.

```tsx
'use client'

export const HeroSection = () => {
  return (
    <Container>
      <Content>
        <Tag />
        <Heading />
        <Role />
        <Actions />
      </Content>
    </Container>
  )
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <section className="flex min-h-screen items-center justify-center px-6">
    {children}
  </section>
)

const Content = ({ children }: { children: React.ReactNode }) => (
  <div className="flex max-w-2xl flex-col gap-y-6">
    {children}
  </div>
)

const Tag = () => (
  <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
    disponível para projetos
  </span>
)

const Heading = () => (
  <motion.h1 variants={fadeUp} className="text-4xl font-semibold text-slate-800">
    Lucas Moreno
  </motion.h1>
)

const Role = () => (
  <motion.p variants={fadeUp} className="text-base text-slate-500 leading-relaxed">
    Senior Full Stack Developer
    <span className="font-mono text-sm text-slate-400"> // React · Next.js · Node.js</span>
  </motion.p>
)

const Actions = () => (
  <motion.div variants={fadeUp} className="flex gap-3">
    <button className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white">
      Ver projetos
    </button>
    <button className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-600">
      Contato
    </button>
  </motion.div>
)
```

### Observações estruturais e reaproveitamento

Dentro da vitrine em um componente montando com outros sub-componentes, não deverá ter tags HTML soltas — toda estrutura deve ser encapsulada em sub-componentes, mesmo que sejam simples. Isso mantém a hierarquia visual clara e o código organizado.

Caso tenha uma tag que se repita no código muitas vezes, crie um componente específico para ela, mesmo que seja algo simples como um `<span>` com uma classe. Isso evita repetição e mantém a consistência visual.

Todos componentes devem ser únicos e ter apenas uma responsabilidade. Uma vitrine de componente core igual 'HeroSection' deve ser composta por sub-componentes como 'Tag', 'Heading', 'Role' e 'Actions', cada um responsável por uma parte específica da UI. Nunca colocar tags HTML soltas dentro do componente principal, isso quebra a estrutura limpa e legível.


```tsx
export const HeroSection = () => {
  return (
    <Container>
      <span>Titulo</span> {/* Tag de contexto, isso não pode ocorrer */}
      <Content>
        <Tag />
        <Heading />
        <Role />
        <Actions />
      </Content>
    </Container>
  )
}

// Correto: toda tag HTML está dentro de um sub-componente, mantendo a estrutura limpa e legível
const Title = ({children}: {children: React.ReactNode}) => (
  <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
    {children}
  </span>
)

const Text = ({children}: {children: React.ReactNode}) => (
  <p className="text-base text-slate-500 leading-relaxed">
    {children}
  </p>
)

const Button = ({children}: {children: React.ReactNode}) => (
  <button className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-600">
    {children}
  </button>
)

// Exemplo de reaproveitamento: se o `Text` for usado em várias seções, ele pode ser extraído para um componente separado e reutilizado, mantendo a consistência visual e evitando repetição de código.

const Tag = () => (
  <Text>
    disponível para projetos
  </Text>
)

const Actions = () => (
  <motion.div variants={fadeUp} className="flex gap-3">
    <Button>
      Ver projetos
    </Button>
    <Button>
      Contato
    </Button>
  </motion.div>
)

// Exemplo de componente específico para uma tag repetida: se houver várias tags de contexto em diferentes seções, criar um componente `ContextTag` para encapsular a estilização e evitar repetição.

const CompanyCard = ({ company, index }: { company: Company; index: number }) => {
  const { language } = useI18nStore()
  const t = translations[language].resume
  const numberFormatted = index.toString().padStart(2, '0')

  return (
    <motion.div variants={fadeUp} className="bg-slate-50 border border-green-accent/20 rounded-xl p-6 space-y-6">
      <CompanyHeader>
        <span className="text-primary text-4xl md:text-5xl font-bold">{numberFormatted}</span>
        <CompanyInfo>
          <h3 className="text-slate-800 text-xl md:text-2xl font-semibold">{company.name}</h3>
          <span className="text-slate-500 text-sm">{company.period}</span>
        </CompanyInfo>
      </CompanyHeader>

      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-slate-800">{company.role}</h4>
        <p className="text-sm text-slate-600 leading-relaxed">{company.description}</p>
      </div>

      <AchievementsContainer>
        <h5 className="font-mono text-xs uppercase tracking-widest text-primary">{t.achievementsLabel}</h5>
        <AchievementsList>
          {company.achievements.map((achievement, i) => (
            <AchievementItem key={i}>{achievement}</AchievementItem>
          ))}
        </AchievementsList>
      </AchievementsContainer>

      <StackContainer>
        {company.stack.map((tech) => (
          <StackChip key={tech}>{tech}</StackChip>
        ))}
      </StackContainer>
    </motion.div>
  )
}

// Componentes internos para estruturação do card, mantendo a vitrine limpa e legível, esses seriam os componentes únicos responsáveis por cada parte do card, facilitando a leitura e manutenção do código, diferente do que está nesse component CompanyCard onde as tags HTML estão soltas e misturadas, quebrando a estrutura limpa e legível.
const CompanyNumber = ({ number }: { number: string }) => (
  <span className="text-primary text-4xl md:text-5xl font-bold">{number}</span>
)

const CompanyName = ({children}: {children: React.ReactNode}) => (
  <h3 className="text-slate-800 text-xl md:text-2xl font-semibold">
    {children}
  </h3>
)

const CompanyPeriod = ({children}: {children: React.ReactNode}) => (
  <span className="text-slate-500 text-sm">
    {children}
  </span>
)

const CompanyRoleDescription = ({children}: {children: React.ReactNode}) => (
  <div className="space-y-3">
    {children}
  </div>
)

const RoleTitle = ({children}: {children: React.ReactNode}) => (
  <h4 className="text-lg font-semibold text-slate-800">
    {children}
  </h4>
)

const RoleDescription = ({children}: {children: React.ReactNode}) => (
  <p className="text-sm text-slate-600 leading-relaxed">
    {children}
  </p>
)

const AchievementText = ({children}: {children: React.ReactNode}) => (
  <h5 className="font-mono text-xs uppercase tracking-widest text-primary">
    {children}
  </h5>
)

```