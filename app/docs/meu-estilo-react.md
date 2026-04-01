# 🚀 Meu Estilo React — Lucas Moreno

Este documento define os padrões obrigatórios para desenvolvimento em React / Next.js, com foco em:

- Escalabilidade
- Legibilidade
- Manutenibilidade
- Performance
- Arquitetura limpa

---

# 🧠 PRINCÍPIOS BASE

- SOLID
- DRY (Don't Repeat Yourself)
- KISS (Keep It Simple, Stupid)
- Clean Code
- Separação de responsabilidades
- Componentização explícita

---

# 🧱 PADRÃO DE VITRINE LIMPA (OBRIGATÓRIO)

## Regra principal:
O `export default` deve mostrar apenas a estrutura da página.

### ❌ ERRADO:
```tsx
export default function Page() {
  return <div>conteúdo misturado</div>
}
```

### ✅ CORRETO:
```tsx
export default function Page() {
  return (
    <Container>
      <Menu />
      <Layout>
        <Hero />
        <Features />
        <Footer />
      </Layout>
    </Container>
  )
}
```

---

# 🧩 PADRÃO DE COMPONENTIZAÇÃO

## Regras:

- Cada bloco é um componente
- Todos os subcomponentes ficam no mesmo arquivo
- SRP (Single Responsibility Principle)

---

## Exemplo:

```tsx
const Hero = () => (
  <HeroContainer>
    <HeroLayout>
      <HeroTitle />
      <HeroSubtitle />
      <HeroCTA />
    </HeroLayout>
  </HeroContainer>
)
```

---

# 👶 CHILDREN EXPLÍCITO (OBRIGATÓRIO)

- Sempre usar children para composição
- Evitar chamadas internas ocultas

### Exemplo:

```tsx
<TextContent>
  <Heading />
  <Description />
  <CTAButtons />
</TextContent>
```
