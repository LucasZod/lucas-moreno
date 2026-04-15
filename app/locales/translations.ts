export const translations = {
  pt: {
    menu: {
      home: 'HOME',
      resume: 'CURRÍCULO',
      patterns: 'PATTERNS',
      contact: 'CONTATO',
      brand: 'LM_ARCHITECT'
    },

    home: {
      greeting: 'OLÁ, ME CHAMO',
      name: 'LUCAS MORENO',
      subtitle: 'Desenvolvedor Full Stack com 7 anos construindo produtos que escalam. Do marketplace ao sistema financeiro, do frontend ao backend, escrevo código que o time consegue manter e o negócio consegue confiar.',
      chips: {
        architecture: 'Architecture First',
        performance: 'Performance Driven',
        experience: 'Developer Experience',
        ui: 'Precision UI'
      }
    },

    skills: {
      title: 'STACK TÉCNICA',
      subtitle: 'Tecnologias e práticas que aplico no dia a dia para construir sistemas robustos, escaláveis e fáceis de manter',
      categories: {
        frontend: {
          title: 'FRONTEND',
          skills: ['React', 'Next.js (SSR/SSG/ISR)', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3']
        },
        backend: {
          title: 'BACKEND',
          skills: ['Node.js', 'NestJS', 'Express', 'C#/.NET', 'REST APIs', 'GraphQL']
        },
        database: {
          title: 'BANCO DE DADOS & INFRA',
          skills: ['PostgreSQL', 'MongoDB', 'Firestore', 'Redis', 'Docker', 'GCP / Cloud Run', 'Azure', 'GCP Pub/Sub']
        },
        architecture: {
          title: 'ARQUITETURA & BOAS PRÁTICAS',
          skills: ['DDD', 'Arquitetura Hexagonal', 'Clean Architecture', 'SOLID', 'Design Patterns', 'Clean Code', 'TDD', 'Event-Driven', 'Microsserviços']
        }
      }
    },

    about: {
      title: 'SOBRE MIM',
      subtitle: 'Desenvolvedor Full Stack com 7 anos de experiência em produto',
      paragraphs: [
        'Comecei pelo lado operacional da tecnologia, supervisionando sistemas de GED num dos maiores grupos de mídia do Centro-Oeste. Migrei para desenvolvimento porque queria construir, não só operar. Essa trajetória me ensinou a entender o problema antes de abrir o editor.',
        'Ao longo dos anos passei por logística, fintech, software house e SaaS. Contextos bem diferentes que me ensinaram a adaptar a solução ao problema. Hoje trabalho de ponta a ponta: interfaces modernas no front, APIs robustas no back, com foco em performance, segurança e código que o próximo dev consegue entender.',
        'Aplico DDD, Arquitetura Hexagonal, SOLID e Design Patterns porque tornam o produto mais previsível e o trabalho do time mais sustentável. Não como checklist, mas como estratégia de entrega contínua.'
      ],
      highlights: [
        'DDD & Clean Architecture',
        'Arquitetura Hexagonal',
        'Event-Driven Architecture',
        'Fintech & Pagamentos',
        'Design Patterns',
        'SOLID & Clean Code',
        'Microsserviços',
        'Alta Performance',
        'System Design',
        'PostgreSQL Expert',
        'TypeScript Expert',
        'React & Next.js Avançado'
      ]
    },

    projects: {
      title: 'PROJETOS DE DESTAQUE',
      subtitle: 'Problemas reais que resolvi e os impactos gerados',
      labels: {
        problem: 'PROBLEMA',
        solution: 'SOLUÇÃO',
        impact: 'IMPACTO',
        architecture: 'ARQUITETURA'
      },
      items: [
        {
          number: '01',
          title: 'MARKETPLACE E AGENDAMENTO PARA CFCs (PILOTAR)',
          problem: 'Agendamentos duplicados em horários de pico e queries do painel administrativo demorando mais de 3 segundos causavam problemas operacionais graves',
          solution: 'Marketplace completo com geolocalização, sistema de agendamento com pessimistic locking para eliminar conflitos, cache Redis para listagens frequentes e SSR estratégico com Next.js para indexação orgânica.',
          stack: ['NestJS', 'Next.js 14/15', 'C#/.NET', 'PostgreSQL', 'Redis', 'GCP Pub/Sub', 'Firebase', 'DDD'],
          impact: 'Zero conflitos de agendamento após implementação de locking. Queries de 3.2s para 800ms. Cache reduziu 40% das chamadas à API em pico.',
          architecture: 'DDD com eventos assíncronos via GCP Pub/Sub, cache Redis com TTL e pessimistic locking para consistência de agendamentos'
        },
        {
          number: '02',
          title: 'CONTA DIGITAL E PAGAMENTOS (HYPERPAY)',
          problem: 'Transações falhando silenciosamente por instabilidade em serviços externos e latência alta em períodos de pico comprometiam a confiabilidade da plataforma',
          solution: 'Sistema completo de pagamentos com PIX, boleto e cobranças. Retry com backoff exponencial e dead letter queue para resiliência. Integrações com APIs bancárias, Azure (criptografia) e SERPRO (validação facial).',
          stack: ['NestJS', 'Node.js', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Azure', 'SERPRO', 'Event-Driven'],
          impact: 'Taxa de erro em transações abaixo de 0.5%. Latência média mantida abaixo de 1.2s em pico de volume.',
          architecture: 'Event-driven com retry/backoff exponencial, dead letter queue para falhas persistentes e circuit breaker para integrações externas'
        },
        {
          number: '03',
          title: 'LATÊNCIA DE CHECKOUT (PILOTAR)',
          problem: 'Endpoint de checkout demorando 4 segundos porque misturava operações síncronas e assíncronas no mesmo fluxo, causando abandono de compra',
          solution: 'Separação de responsabilidades com worker assíncrono via GCP Pub/Sub. O endpoint processa o pagamento e retorna imediatamente. Notificações, atualizações e registros acontecem em background.',
          stack: ['NestJS', 'GCP Pub/Sub', 'PostgreSQL', 'Node.js', 'Event-Driven'],
          impact: 'Latência do checkout caiu de 4s para menos de 800ms. Padrão adotado em outros fluxos do sistema.',
          architecture: 'Worker com tabela de eventos, retry com backoff e dead letter para garantir que nenhum evento de pagamento seja perdido'
        },
        {
          number: '04',
          title: 'SISTEMA GED CORPORATIVO (AMPPLI)',
          problem: 'Performance ruim em buscas de documentos com grandes volumes e integrações frágeis com sistemas legados de clientes corporativos',
          solution: 'Otimização de queries com índices estratégicos, refatoração de buscas e camadas de adaptação para integração com APIs legadas sem contratos bem definidos.',
          stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'DDD', 'SOLID'],
          impact: 'Ganho de ~80% no tempo de resposta em buscas. Integrações estabilizadas com sistemas corporativos heterogêneos.',
          architecture: 'DDD com índices compostos, RBAC para controle de acesso e adapters para sistemas legados'
        },
        {
          number: '05',
          title: 'SSR & SEO (PILOTAR)',
          problem: 'Páginas de listagem de CFCs renderizadas no client side. Google via página em branco, zero indexação orgânica',
          solution: 'Migração para SSR com Next.js 14. Páginas de listagem com getServerSideProps para dados dinâmicos, ISR nos perfis individuais de CFC com revalidação periódica.',
          stack: ['Next.js 14/15', 'React', 'TypeScript', 'SSR', 'ISR', 'SEO'],
          impact: 'Páginas passaram a aparecer em buscas regionais sem investimento em mídia paga. Crescimento orgânico da plataforma.',
          architecture: 'SSR para listagens dinâmicas, ISR para perfis estáticos com revalidação, CSR para áreas autenticadas'
        }
      ]
    },

    resume: {
      title: 'CURRÍCULO',
      subtitle: 'Experiência profissional completa',
      download: 'BAIXAR PDF',
      achievementsLabel: 'PRINCIPAIS CONQUISTAS',
      highlightsTitle: 'COMPETÊNCIAS & HIGHLIGHTS',
      companies: [
        {
          name: 'Pilotar',
          period: '2023 - Atual',
          role: 'Senior Full Stack Developer',
          description: 'SaaS com mais de 700 CFCs no Brasil. Marketplace completo, agendamentos, geolocalização e painel administrativo.',
          achievements: [
            'Construiu marketplace completo para CFCs com autenticação, pagamentos, geolocalização e mapa interativo',
            'Implementou SSR estratégico com Next.js 14/15. Páginas passaram a ser indexadas organicamente em buscas regionais',
            'Identificou e resolveu gargalo de latência no checkout: de 4s para menos de 800ms separando operações síncronas e assíncronas com GCP Pub/Sub',
            'Otimizou queries do painel administrativo com índices compostos e paginação server-side: de 3.2s para 800ms',
            'Implementou cache Redis para dados de geolocalização, reduzindo 40% das chamadas à API em horários de pico',
            'Zerou agendamentos duplicados com pessimistic locking (SELECT FOR UPDATE) em transação de banco',
            'Aplicou DDD e Arquitetura Hexagonal para desacoplar módulos e facilitar evolução do sistema'
          ],
          stack: ['React', 'Next.js 14/15', 'Node.js', 'NestJS', 'TypeScript', 'C#/.NET', 'PostgreSQL', 'Redis', 'Firebase', 'GCP Pub/Sub', 'Docker']
        },
        {
          name: 'Hyperdev / HyperPay',
          period: '2021 - 2023',
          role: 'Full Stack Developer',
          description: 'Conta digital completa com operações financeiras críticas: PIX, boleto, cobranças e transferências.',
          achievements: [
            'Desenvolveu fluxos completos de pagamento (PIX, boleto, cobranças) com integrações bancárias e validações inteligentes',
            'Implementou retry com backoff exponencial e dead letter queue, reduzindo taxa de erro em transações para abaixo de 0.5%',
            'Manteve latência média das transações abaixo de 1.2s em períodos de pico com análise de bottlenecks e cache estratégico',
            'Integrou Azure para criptografia ponta a ponta e validação facial via SERPRO em fluxos de onboarding',
            'Colaborou em plataforma EAD para formação de condutores e sistema de notificações via SMS'
          ],
          stack: ['Node.js', 'NestJS', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Azure', 'SERPRO', 'Event-Driven']
        },
        {
          name: 'Amppli',
          period: '2020 - 2021',
          role: 'Full Stack Developer',
          description: 'Startup focada em gerenciamento eletrônico de documentos (GED) com clientes corporativos de grande porte.',
          achievements: [
            'Otimizou buscas de documentos com índices estratégicos e refatoração de queries, ganho de ~80% no tempo de resposta',
            'Desenvolveu integrações com sistemas legados corporativos, contornando limitações de APIs mal documentadas com adapters robustos',
            'Implementou RBAC (controle de acesso baseado em papéis) para maior segurança e controle de permissões'
          ],
          stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'DDD', 'SOLID']
        },
        {
          name: 'Manlog',
          period: '2020',
          role: 'Frontend Developer',
          description: 'Empresa de logística com operação intensiva no sistema GED interno.',
          achievements: [
            'Automatizou processos manuais de gestão documental, reduzindo etapas operacionais repetitivas',
            'Criou funcionalidades internas e integrações com sistemas corporativos heterogêneos'
          ],
          stack: ['React', 'Vue.js', 'JavaScript']
        },
        {
          name: 'Grupo Jaime Câmara',
          period: '2016 - 2019',
          role: 'Supervisor de TI / GED',
          description: 'Um dos maiores grupos de mídia do Centro-Oeste. Primeiro contato com tecnologia, evolução para liderança.',
          achievements: [
            'Promovido a supervisor do setor de GED após 2 anos, coordenando rotinas, integrações e melhorias contínuas',
            'Identificou e resolveu gargalos operacionais, implementou padronização de processos e melhorou rastreabilidade de documentos'
          ],
          stack: ['Gestão de Processos', 'GED']
        }
      ],
      contact: {
        name: 'Lucas Moreno',
        role: 'Senior Full Stack Developer | React, Next.js, Vue.js | Node.js, NestJS | TypeScript | PostgreSQL | C#/.NET',
        email: 'lucasmorenozod@gmail.com',
        phone: '(62) 9 8163-8156',
        linkedin: 'linkedin.com/in/lucas-mooreno',
        location: 'Goiânia, GO, Brasil (Remoto)'
      },
      skills: {
        title: 'COMPETÊNCIAS TÉCNICAS',
        languages: {
          title: 'Linguagens',
          items: ['TypeScript', 'JavaScript', 'C#']
        },
        frontend: {
          title: 'Frontend',
          items: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS']
        },
        backend: {
          title: 'Backend',
          items: ['Node.js', 'NestJS', 'Express', 'C#/.NET']
        },
        database: {
          title: 'Banco de Dados',
          items: ['PostgreSQL', 'MongoDB', 'Firestore', 'Redis']
        },
        architecture: {
          title: 'Arquitetura',
          items: ['DDD', 'Arquitetura Hexagonal', 'Clean Architecture', 'SOLID', 'Design Patterns', 'Event-Driven', 'Microsserviços', 'TDD']
        },
        tools: {
          title: 'Ferramentas & Infra',
          items: ['Docker', 'GCP / Cloud Run', 'Azure', 'GCP Pub/Sub', 'Git', 'REST APIs', 'GraphQL']
        }
      },
      education: {
        title: 'FORMAÇÃO',
        institution: 'PUC-GO',
        degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas'
      },
      references: {
        title: 'REFERÊNCIAS',
        items: [
          {
            name: 'Victor Ivens',
            role: 'CTO, HyperPay',
            phone: '(62) 9 9991-1222'
          },
          {
            name: 'Rafael Carola',
            role: 'CEO, Amppli',
            phone: '(62) 9 8473-5771'
          }
        ]
      }
    },

    patterns: {
      title: 'DESIGN PATTERNS',
      subtitle: 'Padrões de arquitetura que aplico em projetos reais com exemplos do meu dia a dia',
      labels: {
        problem: 'PROBLEMA',
        solution: 'SOLUÇÃO',
        example: 'EXEMPLO',
        benefits: 'BENEFÍCIOS',
        viewMore: 'VER EXEMPLO',
        viewLess: 'VER MENOS'
      },
      items: [
        {
          category: 'BACKEND',
          name: 'Repository Pattern',
          problem: 'Acoplamento direto entre lógica de negócio e camada de dados',
          solution: 'Camada de abstração entre domínio e persistência o domínio define o contrato, a infraestrutura implementa',
          example: `// Porta (contrato no domínio não sabe nada de banco)
interface BookingRepository {
  findById(id: string): Promise<Booking | null>
  save(booking: Booking): Promise<void>
}

// Adapter (implementação na infraestrutura)
class PrismaBookingRepository implements BookingRepository {
  constructor(private prisma: PrismaClient) {}

  async findById(id: string): Promise<Booking | null> {
    const data = await this.prisma.booking.findUnique({ where: { id } })
    return data ? new Booking(data) : null
  }

  async save(booking: Booking): Promise<void> {
    await this.prisma.booking.upsert({
      where: { id: booking.id },
      create: booking.toData(),
      update: booking.toData()
    })
  }
}

// Caso de uso, desacoplado do Prisma
class CancelBookingUseCase {
  constructor(private repo: BookingRepository) {}

  async execute(id: string, reason: string): Promise<void> {
    const booking = await this.repo.findById(id)
    if (!booking) throw new Error('Agendamento não encontrado')

    booking.cancel(reason) // regra no domínio
    await this.repo.save(booking)
  }
}`,
          benefits: ['Testabilidade', 'Desacoplamento', 'Substituibilidade de banco sem tocar no domínio']
        },
        {
          category: 'BACKEND',
          name: 'Strategy Pattern',
          problem: 'Múltiplos métodos de pagamento com lógicas completamente diferentes',
          solution: 'Encapsular cada algoritmo em uma estratégia intercambiável, usado na HyperPay com PIX, boleto e cartão',
          example: `interface PaymentStrategy {
  process(amount: number, data: PaymentData): Promise<PaymentResult>
}

class PixStrategy implements PaymentStrategy {
  async process(amount: number, data: PaymentData): Promise<PaymentResult> {
    const qrCode = await this.pixGateway.generateQR(amount, data.pixKey)
    return { success: true, transactionId: qrCode.id, qrCode: qrCode.code }
  }
}

class BoletoStrategy implements PaymentStrategy {
  async process(amount: number, data: PaymentData): Promise<PaymentResult> {
    const boleto = await this.boletoGateway.generate(amount, data.dueDate)
    return { success: true, transactionId: boleto.id, barcode: boleto.barcode }
  }
}

class PaymentProcessor {
  private strategy: PaymentStrategy

  setStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy
  }

  async execute(amount: number, data: PaymentData) {
    return await this.strategy.process(amount, data)
  }
}

// Uso, trocar estratégia em runtime
const processor = new PaymentProcessor()
processor.setStrategy(new PixStrategy())
await processor.execute(150, { pixKey: 'email@exemplo.com' })`,
          benefits: ['Elimina if/else gigante', 'Open/Closed Principle', 'Fácil adicionar novo método de pagamento']
        },
        {
          category: 'FRONTEND',
          name: 'Composition Pattern',
          problem: 'Props drilling e componentes acoplados, padrão que uso no dia a dia no React',
          solution: 'Componente raiz exportado como vitrine, sub-componentes definidos abaixo no mesmo arquivo com responsabilidade única',
          example: `// Componente raiz, exportado, mostra a estrutura
const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-lg border border-gray-200 bg-white p-4">
    {children}
  </div>
)

// Sub-componentes, definidos no mesmo arquivo, SRP
const Header = ({ children }: { children: React.ReactNode }) => (
  <header className="mb-3 border-b pb-2 font-semibold">
    {children}
  </header>
)

const Body = ({ children }: { children: React.ReactNode }) => (
  <div className="text-sm text-gray-600">{children}</div>
)

const Footer = ({ children }: { children: React.ReactNode }) => (
  <footer className="mt-3 border-t pt-2">{children}</footer>
)

// Namespace, API limpa
Card.Header = Header
Card.Body = Body
Card.Footer = Footer

// Uso flexível, sem prop drilling
<Card>
  <Card.Header>Agendamento Confirmado</Card.Header>
  <Card.Body>Instrutor: João Silva, 14h00</Card.Body>
  <Card.Footer>
    <button>Cancelar</button>
  </Card.Footer>
</Card>`,
          benefits: ['Zero prop drilling', 'SRP por sub-componente', 'API flexível e estável']
        },
        {
          category: 'FRONTEND',
          name: 'Custom Hooks',
          problem: 'Lógica de fetch duplicada em vários componentes',
          solution: 'Extrair lógica reutilizável em hooks, useEffect e useMemo só quando necessário',
          example: `// Hook tipado e reutilizável
function useAgendamentos(alunoId: string) {
  const [data, setData] = useState<Agendamento[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const refetch = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const result = await agendamentoService.findByAluno(alunoId)
      setData(result)
    } catch (err) {
      setError(err as Error)
    } finally {
      setLoading(false)
    }
  }, [alunoId])

  useEffect(() => {
    refetch()
  }, [refetch])

  return { data, loading, error, refetch }
}

// Componente focado só em apresentação
const AgendamentoList = ({ alunoId }: { alunoId: string }) => {
  const { data, loading, error, refetch } = useAgendamentos(alunoId)

  if (loading) return <Spinner />
  if (error) return <ErrorMessage message={error.message} />

  return (
    <div>
      {data?.map(a => <AgendamentoCard key={a.id} agendamento={a} />)}
      <button onClick={refetch}>Atualizar</button>
    </div>
  )
}`,
          benefits: ['Reusabilidade', 'Componente focado em apresentação', 'Fácil de testar']
        },
        {
          category: 'BACKEND',
          name: 'Adapter Pattern',
          problem: 'Integração com múltiplas APIs externas com interfaces completamente diferentes, SERPRO, Azure, gateways de pagamento',
          solution: 'Adapters que traduzem a interface externa para o contrato do domínio, trocar gateway sem tocar no domínio',
          example: `// Contrato do domínio, não sabe nada do gateway externo
interface PaymentGateway {
  charge(amount: number, data: ChargeData): Promise<ChargeResult>
  refund(transactionId: string): Promise<void>
}

// Adapter para gateway A
class GatewayAAdapter implements PaymentGateway {
  constructor(private client: GatewayAClient) {}

  async charge(amount: number, data: ChargeData): Promise<ChargeResult> {
    // Adapta: nosso contrato -> API do gateway A
    const response = await this.client.createCharge({
      valor: amount * 100, // gateway A usa centavos
      documento: data.document
    })
    return {
      success: response.status === 'aprovado',
      transactionId: response.codigo
    }
  }

  async refund(transactionId: string): Promise<void> {
    await this.client.estornar({ codigo: transactionId })
  }
}

// Adapter para gateway B (API completamente diferente)
class GatewayBAdapter implements PaymentGateway {
  async charge(amount: number, data: ChargeData): Promise<ChargeResult> {
    const result = await this.client.payment.process({
      amount: amount.toFixed(2), // gateway B usa string
      cpf: data.document
    })
    return {
      success: result.approved,
      transactionId: result.id
    }
  }
}

// Domínio não sabe qual gateway está usando
const paymentService = new PaymentService(new GatewayAAdapter(clientA))`,
          benefits: ['Trocar gateway sem tocar no domínio', 'Desacoplamento', 'Testabilidade com mock']
        },
        {
          category: 'BACKEND',
          name: 'Observer / Event-Driven',
          problem: 'Cancelamento de agendamento precisava disparar SMS, notificar instrutor e processar estorno, tudo acoplado no mesmo método',
          solution: 'Domain Events: o domínio anuncia que algo aconteceu, cada handler reage de forma independente',
          example: `// Evento de domínio, registro imutável do que aconteceu
interface AgendamentoCancelado {
  eventId: string
  agendamentoId: string
  alunoId: string
  instrutorId: string
  motivo: string
  canceladoEm: Date
}

// Domínio publica o evento, não sabe quem vai reagir
class AgendamentoService {
  constructor(private eventBus: EventBus) {}

  async cancelar(id: string, motivo: string): Promise<void> {
    const agendamento = await this.repo.findById(id)
    agendamento.cancelar(motivo)
    await this.repo.save(agendamento)

    // Só anuncia, não chama SMS, não chama financeiro
    await this.eventBus.publish({
      eventId: generateId(),
      agendamentoId: id,
      alunoId: agendamento.alunoId,
      instrutorId: agendamento.instrutorId,
      motivo,
      canceladoEm: new Date()
    })
  }
}

// Handlers independentes, cada um cuida do seu pedaço
class SmsHandler {
  async handle(event: AgendamentoCancelado) {
    await this.sms.enviar(event.alunoId, \`Agendamento cancelado: \${event.motivo}\`)
  }
}

class FinanceiroHandler {
  async handle(event: AgendamentoCancelado) {
    await this.financeiro.processarEstorno(event.agendamentoId)
  }
}

// Nova necessidade? Cria um handler, não toca em nada existente
class RelatorioHandler {
  async handle(event: AgendamentoCancelado) {
    await this.relatorio.registrar(event)
  }
}`,
          benefits: ['Domínio sem dependências externas', 'Adicionar comportamento sem modificar código existente', 'Cada handler testado isoladamente']
        },
        {
          category: 'ARCHITECTURE',
          name: 'Clean Architecture / Hexagonal',
          problem: 'Domínio contaminado com detalhes de banco, framework e APIs externas, difícil de testar e de evoluir',
          solution: 'Domínio no centro, tudo externo se conecta via portas e adapters, o banco não dita as regras de negócio',
          example: `// DOMAIN, zero dependência externa
class Agendamento {
  private status: 'ativo' | 'cancelado' = 'ativo'
  private eventos: DomainEvent[] = []

  cancelar(motivo: string): void {
    if (this.status === 'cancelado')
      throw new DomainError('Agendamento já cancelado')

    this.status = 'cancelado'
    this.eventos.push(new AgendamentoCancelado(this.id, motivo))
  }

  pullEvents(): DomainEvent[] {
    const events = [...this.eventos]
    this.eventos = []
    return events
  }
}

// Porta de saída (interface no domínio)
interface AgendamentoRepository {
  findById(id: string): Promise<Agendamento | null>
  save(agendamento: Agendamento): Promise<void>
}

// APPLICATION, orquestra, não tem regra de negócio
class CancelarAgendamentoUseCase {
  constructor(
    private repo: AgendamentoRepository,
    private eventBus: EventBus
  ) {}

  async execute(id: string, motivo: string): Promise<void> {
    const agendamento = await this.repo.findById(id)
    agendamento.cancelar(motivo) // regra no domínio
    await this.repo.save(agendamento)

    for (const event of agendamento.pullEvents())
      await this.eventBus.publish(event)
  }
}

// INFRASTRUCTURE, adapter de saída (sabe do Prisma)
class PrismaAgendamentoRepository implements AgendamentoRepository {
  async findById(id: string) { /* ... */ }
  async save(a: Agendamento) { /* ... */ }
}

// PRESENTATION, adapter de entrada (sabe do HTTP)
class AgendamentoController {
  async cancelar(req: Request, res: Response) {
    await this.useCase.execute(req.params.id, req.body.motivo)
    res.status(200).json({ message: 'Cancelado com sucesso' })
  }
}`,
          benefits: ['Domínio testável sem banco nem HTTP', 'Trocar Prisma por outro ORM sem tocar no domínio', 'Baixo acoplamento entre camadas']
        },
        {
          category: 'ARCHITECTURE',
          name: 'DDD, Aggregates & Value Objects',
          problem: 'Regras de negócio espalhadas em services e controllers, validação de CPF em 5 lugares diferentes',
          solution: 'Value Objects garantem invariantes, Aggregates protegem consistência interna do domínio',
          example: `// Value Object, imutável, validação própria, igualdade por valor
class Cpf {
  readonly numero: string

  constructor(numero: string) {
    const limpo = numero.replace(/\\D/g, '')
    if (limpo.length !== 11) throw new DomainError('CPF inválido')
    this.numero = limpo
  }

  equals(other: Cpf): boolean {
    return this.numero === other.numero
  }

  format(): string {
    return this.numero.replace(/(\\d{3})(\\d{3})(\\d{3})(\\d{2})/, '$1.$2.$3-$4')
  }
}

// Aggregate Root, ponto de entrada, garante consistência
class Aluno {
  private agendamentos: Agendamento[] = []

  constructor(
    readonly id: string,
    readonly nome: string,
    readonly cpf: Cpf // value object
  ) {}

  realizarAgendamento(horario: SlotHorario, instrutor: Instrutor): Agendamento {
    const conflito = this.agendamentos.find(a =>
      a.horario.conflitaCom(horario)
    )
    if (conflito) throw new DomainError('Aluno já tem agendamento nesse horário')

    const agendamento = new Agendamento(this.id, horario, instrutor)
    this.agendamentos.push(agendamento)
    return agendamento
  }
}

// Impossível criar Aluno com CPF inválido
const aluno = new Aluno('1', 'Lucas', new Cpf('12345678901'))

// Impossível ter agendamento duplicado
aluno.realizarAgendamento(horario1, instrutor) // OK
aluno.realizarAgendamento(horario1, instrutor) // DomainError`,
          benefits: ['Invariantes garantidas pelo domínio', 'Impossível ter estado inválido', 'Regras no lugar certo']
        },
        {
          category: 'ARCHITECTURE',
          name: 'SOLID no Frontend',
          problem: 'Componentes com múltiplas responsabilidades, busca dados, valida, formata e renderiza tudo junto',
          solution: 'Aplicar SRP e DIP no React: custom hook para lógica, componente para apresentação, interface para abstração',
          example: `// S, Single Responsibility
// ❌ Componente faz demais
const AgendamentoPage = () => {
  const [data, setData] = useState([])
  useEffect(() => { fetch('/agendamentos').then(/*...*/) }, [])
  // + validação + formatação + renderização
}

// ✅ Cada um com sua responsabilidade
const useAgendamentos = (alunoId: string) => {
  // só lógica de dados
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([])
  useEffect(() => { agendamentoService.findByAluno(alunoId).then(setAgendamentos) }, [alunoId])
  return agendamentos
}

const AgendamentoCard = ({ agendamento }: { agendamento: Agendamento }) => (
  // só apresentação
  <div>{agendamento.instrutor} -{formatDate(agendamento.data)}</div>
)

const AgendamentoPage = ({ alunoId }: { alunoId: string }) => {
  const agendamentos = useAgendamentos(alunoId) // delega lógica
  return <>{agendamentos.map(a => <AgendamentoCard key={a.id} agendamento={a} />)}</>
}

// D, Dependency Inversion
interface AgendamentoService {
  findByAluno(alunoId: string): Promise<Agendamento[]>
}

// Componente depende da abstração, não da implementação
const AgendamentoList = ({ service }: { service: AgendamentoService }) => {
  // funciona com API real ou mock nos testes
}`,
          benefits: ['Componente testável', 'Lógica reutilizável', 'Fácil de mockar nos testes']
        }
      ]
    },

    experiences: [
      {
        headerTitle: '01 // MARKETPLACE & AGENDAMENTO',
        title: 'SISTEMAS PARA CFCs, PILOTAR',
        subtitle: 'Marketplace completo com geolocalização, agendamento inteligente com locking pessimista para eliminar conflitos e painel administrativo. Latência de checkout de 4s para 800ms. Queries de 3.2s para 800ms. Cache Redis reduziu 40% das chamadas em pico.',
        chip: ['NESTJS', 'NEXT.JS 14/15', 'C#/.NET', 'REDIS', 'DDD', 'GCP PUB/SUB', 'POSTGRESQL'],
        iconSrc: 'codeIcon'
      },
      {
        headerTitle: '02 // CONTA DIGITAL & FINTECH',
        title: 'SISTEMA DE PAGAMENTOS, HYPERPAY',
        subtitle: 'Conta digital completa com PIX, boleto e cobranças. Integrações bancárias, Azure e SERPRO. Retry com backoff exponencial e dead letter queue. Taxa de erro abaixo de 0.5%. Latência média abaixo de 1.2s em pico.',
        chip: ['PIX', 'NESTJS', 'REDIS', 'EVENT-DRIVEN', 'AZURE', 'SERPRO', 'POSTGRESQL'],
        iconSrc: 'finanIcon'
      },
      {
        headerTitle: '03 // GED CORPORATIVO',
        title: 'GESTÃO ELETRÔNICA DE DOCUMENTOS, AMPPLI',
        subtitle: 'Sistema completo com upload, versionamento, busca avançada e RBAC. Ganho de ~80% no tempo de resposta com índices estratégicos. Integrações com sistemas legados corporativos via adapters robustos.',
        chip: ['NODE.JS', 'POSTGRESQL', 'REDIS', 'DDD', 'SOLID', 'REACT', 'TYPESCRIPT'],
        iconSrc: 'gedIcon'
      },
      {
        headerTitle: '04 // ARQUITETURA DISTRIBUÍDA',
        title: 'EVENT-DRIVEN & MENSAGERIA',
        subtitle: 'Workers assíncronos com GCP Pub/Sub, tabela de eventos com retry e backoff exponencial e dead letter queue. Separação de operações síncronas e assíncronas garantindo consistência sem travar o fluxo principal.',
        chip: ['DDD', 'EVENT-DRIVEN', 'GCP PUB/SUB', 'RETRY', 'DEAD LETTER', 'IDEMPOTÊNCIA'],
        iconSrc: 'archIcon'
      },
      {
        headerTitle: '05 // PERFORMANCE & OTIMIZAÇÃO',
        title: 'SISTEMAS DE ALTA PERFORMANCE',
        subtitle: 'Otimização de queries com índices compostos e paginação server-side. Cache Redis com TTL e invalidação estratégica. Locking pessimista para consistência em concorrência. Resultados de 60-80% de melhoria em endpoints críticos.',
        chip: ['REDIS', 'POSTGRESQL', 'ÍNDICES', 'CACHE', 'LOCKING'],
        iconSrc: 'engPerfIcon'
      },
      {
        headerTitle: '06 // INTEGRAÇÕES COMPLEXAS',
        title: 'APIS & SISTEMAS EXTERNOS',
        subtitle: 'Integrações com APIs bancárias, Azure (criptografia e validação facial), SERPRO e sistemas legados. Retry com backoff, circuit breaker e adapters para isolar o domínio de detalhes externos.',
        chip: ['REST', 'AZURE', 'SERPRO', 'CIRCUIT BREAKER', 'ADAPTER PATTERN'],
        iconSrc: 'sisIcon'
      },
      {
        headerTitle: '07 // PAINEL GESTOR C#/.NET',
        title: 'SISTEMA ADMINISTRATIVO, PILOTAR',
        subtitle: 'Painel completo em C#/.NET para gerenciamento de autoescolas. Agendamentos, gestão de alunos, instrutores, serviços, pacotes de habilitação, relatórios financeiros e controle operacional.',
        chip: ['C#/.NET', 'ENTITY FRAMEWORK', 'POSTGRESQL', 'BACKGROUND SERVICES'],
        iconSrc: 'codeIcon'
      },
      {
        headerTitle: '08 // CLEAN ARCHITECTURE',
        title: 'ARQUITETURA HEXAGONAL & DDD',
        subtitle: 'Domain no centro, tudo externo via portas e adapters. Value Objects garantem invariantes, Aggregates protegem consistência, Domain Events desacoplam efeitos colaterais. Domínio testável sem banco nem framework.',
        chip: ['DDD', 'HEXAGONAL', 'PORTS & ADAPTERS', 'DOMAIN EVENTS', 'VALUE OBJECTS'],
        iconSrc: 'archIcon'
      },
      {
        headerTitle: '09 // FRONTEND AVANÇADO',
        title: 'REACT & NEXT.JS AVANÇADO',
        subtitle: 'SSR, SSG e ISR com Next.js 14/15. Composition Pattern com sub-componentes SRP. Custom hooks para separar lógica de apresentação. useMemo e useCallback só quando necessário. SEO técnico e performance como prioridade.',
        chip: ['REACT', 'NEXT.JS 14/15', 'SSR', 'ISR', 'COMPOSITION PATTERN', 'SEO'],
        iconSrc: 'codeIcon'
      },
      {
        headerTitle: '10 // SYSTEM DESIGN',
        title: 'DESIGN DE SISTEMAS DISTRIBUÍDOS',
        subtitle: 'Load balancer com estratégias round robin e least connections. Cache-aside com Redis e TTL. CAP theorem e trade-offs de consistência eventual. Kafka vs RabbitMQ. Blue/green e canary deploy. Observabilidade com logs, métricas e traces.',
        chip: ['SYSTEM DESIGN', 'LOAD BALANCER', 'CAP THEOREM', 'KAFKA', 'OBSERVABILIDADE'],
        iconSrc: 'archIcon'
      }
    ]
  },

  en: {
    menu: {
      home: 'HOME',
      resume: 'RESUME',
      patterns: 'PATTERNS',
      contact: 'CONTACT',
      brand: 'LM_ARCHITECT'
    },

    home: {
      greeting: 'HELLO, MY NAME IS',
      name: 'LUCAS MORENO',
      subtitle: 'Full Stack Developer with 7 years building products that scale. From marketplace to financial systems, frontend to backend, I write code the team can maintain and the business can trust.',
      chips: {
        architecture: 'Architecture First',
        performance: 'Performance Driven',
        experience: 'Developer Experience',
        ui: 'Precision UI'
      }
    },

    skills: {
      title: 'TECH STACK',
      subtitle: 'Technologies and practices I apply daily to build robust, scalable and maintainable systems',
      categories: {
        frontend: {
          title: 'FRONTEND',
          skills: ['React', 'Next.js (SSR/SSG/ISR)', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3']
        },
        backend: {
          title: 'BACKEND',
          skills: ['Node.js', 'NestJS', 'Express', 'C#/.NET', 'REST APIs', 'GraphQL']
        },
        database: {
          title: 'DATABASE & INFRA',
          skills: ['PostgreSQL', 'MongoDB', 'Firestore', 'Redis', 'Docker', 'GCP / Cloud Run', 'Azure', 'GCP Pub/Sub']
        },
        architecture: {
          title: 'ARCHITECTURE & BEST PRACTICES',
          skills: ['DDD', 'Hexagonal Architecture', 'Clean Architecture', 'SOLID', 'Design Patterns', 'Clean Code', 'TDD', 'Event-Driven', 'Microservices']
        }
      }
    },

    about: {
      title: 'ABOUT ME',
      subtitle: 'Full Stack Developer with 7 years of product experience',
      paragraphs: [
        'I started on the operational side of technology, supervising document management systems at one of the largest media groups in Central Brazil. I moved into development because I wanted to build, not just operate. That journey taught me to understand the problem before opening the editor.',
        'Over the years I worked across logistics, fintech, software house and SaaS. Very different contexts that taught me to adapt the solution to the problem. Today I work end-to-end: modern interfaces on the front, robust APIs on the back, focused on performance, security and code the next developer can understand.',
        'I apply DDD, Hexagonal Architecture, SOLID and Design Patterns because they make the product more predictable and the team\'s work more sustainable. Not as a checklist, but as a continuous delivery strategy.'
      ],
      highlights: [
        'DDD & Clean Architecture',
        'Hexagonal Architecture',
        'Event-Driven Architecture',
        'Fintech & Payments',
        'Design Patterns',
        'SOLID & Clean Code',
        'Microservices',
        'High Performance',
        'System Design',
        'PostgreSQL Expert',
        'TypeScript Expert',
        'React & Next.js Advanced'
      ]
    },

    projects: {
      title: 'FEATURED PROJECTS',
      subtitle: 'Real problems I solved and the impacts generated',
      labels: {
        problem: 'PROBLEM',
        solution: 'SOLUTION',
        impact: 'IMPACT',
        architecture: 'ARCHITECTURE'
      },
      items: [
        {
          number: '01',
          title: 'MARKETPLACE AND SCHEDULING FOR DRIVING SCHOOLS, PILOTAR',
          problem: 'Duplicate bookings during peak hours and admin panel queries taking over 3 seconds caused serious operational problems',
          solution: 'Complete marketplace with geolocation, scheduling system with pessimistic locking to eliminate conflicts, Redis cache for frequent listings and strategic SSR with Next.js for organic indexing.',
          stack: ['NestJS', 'Next.js 14/15', 'C#/.NET', 'PostgreSQL', 'Redis', 'GCP Pub/Sub', 'Firebase', 'DDD'],
          impact: 'Zero scheduling conflicts after locking implementation. Queries from 3.2s to 800ms. Cache reduced 40% of API calls at peak.',
          architecture: 'DDD with asynchronous events via GCP Pub/Sub, Redis cache with TTL and pessimistic locking for scheduling consistency'
        },
        {
          number: '02',
          title: 'DIGITAL ACCOUNT AND PAYMENTS, HYPERPAY',
          problem: 'Transactions failing silently due to external service instability and high latency during peak periods compromised platform reliability',
          solution: 'Complete payment system with PIX, bank slip and charges. Retry with exponential backoff and dead letter queue for resilience. Integrations with banking APIs, Azure (encryption) and SERPRO (facial validation).',
          stack: ['NestJS', 'Node.js', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Azure', 'SERPRO', 'Event-Driven'],
          impact: 'Transaction error rate below 0.5%. Average latency kept below 1.2s during peak volume.',
          architecture: 'Event-driven with exponential retry/backoff, dead letter queue for persistent failures and circuit breaker for external integrations'
        },
        {
          number: '03',
          title: 'CHECKOUT LATENCY, PILOTAR',
          problem: 'Checkout endpoint taking 4 seconds because it mixed synchronous and asynchronous operations in the same flow, causing cart abandonment',
          solution: 'Separation of concerns with asynchronous worker via GCP Pub/Sub. The endpoint processes payment and returns immediately. Notifications, updates and logs happen in background.',
          stack: ['NestJS', 'GCP Pub/Sub', 'PostgreSQL', 'Node.js', 'Event-Driven'],
          impact: 'Checkout latency dropped from 4s to under 800ms. Pattern adopted in other system flows.',
          architecture: 'Worker with events table, retry with backoff and dead letter to ensure no payment event is lost'
        },
        {
          number: '04',
          title: 'CORPORATE DMS SYSTEM, AMPPLI',
          problem: 'Poor document search performance with large volumes and fragile integrations with legacy systems from corporate clients',
          solution: 'Query optimization with strategic indexes, search refactoring and adapter layers for integration with legacy APIs without well-defined contracts.',
          stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'DDD', 'SOLID'],
          impact: '~80% improvement in search response time. Integrations stabilized with heterogeneous corporate systems.',
          architecture: 'DDD with composite indexes, RBAC for access control and adapters for legacy systems'
        },
        {
          number: '05',
          title: 'SSR & SEO, PILOTAR',
          problem: 'Driving school listing pages rendered client-side, Google saw a blank page, zero organic indexing',
          solution: 'Migration to SSR with Next.js 14. Listing pages with getServerSideProps for dynamic data, ISR on individual CFC profiles with periodic revalidation.',
          stack: ['Next.js 14/15', 'React', 'TypeScript', 'SSR', 'ISR', 'SEO'],
          impact: 'Pages started appearing in regional searches without paid media investment. Organic platform growth.',
          architecture: 'SSR for dynamic listings, ISR for static profiles with revalidation, CSR for authenticated areas'
        }
      ]
    },

    resume: {
      title: 'RESUME',
      subtitle: 'Full professional experience',
      download: 'DOWNLOAD PDF',
      achievementsLabel: 'KEY ACHIEVEMENTS',
      highlightsTitle: 'SKILLS & HIGHLIGHTS',
      companies: [
        {
          name: 'Pilotar',
          period: '2023, Present',
          role: 'Senior Full Stack Developer',
          description: 'SaaS with over 700 driving schools across Brazil. Complete marketplace, scheduling, geolocation and admin panel.',
          achievements: [
            'Built complete marketplace for driving schools with authentication, payments, geolocation and interactive map',
            'Implemented strategic SSR with Next.js 14/15, pages started being organically indexed in regional searches',
            'Identified and resolved checkout latency bottleneck: from 4s to under 800ms by separating sync and async operations with GCP Pub/Sub',
            'Optimized admin panel queries with composite indexes and server-side pagination: from 3.2s to 800ms',
            'Implemented Redis cache for geolocation data, reducing 40% of API calls during peak hours',
            'Eliminated duplicate bookings with pessimistic locking (SELECT FOR UPDATE) in database transaction',
            'Applied DDD and Hexagonal Architecture to decouple modules and facilitate system evolution'
          ],
          stack: ['React', 'Next.js 14/15', 'Node.js', 'NestJS', 'TypeScript', 'C#/.NET', 'PostgreSQL', 'Redis', 'Firebase', 'GCP Pub/Sub', 'Docker']
        },
        {
          name: 'Hyperdev / HyperPay',
          period: '2021, 2023',
          role: 'Full Stack Developer',
          description: 'Complete digital account with critical financial operations, PIX, bank slip, charges and transfers.',
          achievements: [
            'Developed complete payment flows (PIX, bank slip, charges) with banking integrations and intelligent validations',
            'Implemented retry with exponential backoff and dead letter queue, reducing transaction error rate to below 0.5%',
            'Maintained average transaction latency below 1.2s during peak periods through bottleneck analysis and strategic caching',
            'Integrated Azure for end-to-end encryption and facial validation via SERPRO in onboarding flows',
            'Collaborated on e-learning platform for driver training and SMS notification system'
          ],
          stack: ['Node.js', 'NestJS', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Azure', 'SERPRO', 'Event-Driven']
        },
        {
          name: 'Amppli',
          period: '2020, 2021',
          role: 'Full Stack Developer',
          description: 'Startup focused on electronic document management (DMS) with large corporate clients.',
          achievements: [
            'Optimized document searches with strategic indexes and query refactoring ~80% improvement in response time',
            'Developed integrations with corporate legacy systems, working around poorly documented APIs with robust adapters',
            'Implemented RBAC (role-based access control) for greater security and permission management'
          ],
          stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'DDD', 'SOLID']
        },
        {
          name: 'Manlog',
          period: '2020',
          role: 'Frontend Developer',
          description: 'Logistics company with intensive operation in the internal DMS system.',
          achievements: [
            'Automated manual document management processes, reducing repetitive operational steps',
            'Created internal features and integrations with heterogeneous corporate systems'
          ],
          stack: ['React', 'Vue.js', 'JavaScript']
        },
        {
          name: 'Grupo Jaime Câmara',
          period: '2016, 2019',
          role: 'IT / DMS Supervisor',
          description: 'One of the largest media groups in Central Brazil. First contact with technology, evolution to leadership.',
          achievements: [
            'Promoted to DMS sector supervisor after 2 years, coordinating routines, integrations and continuous improvements',
            'Identified and resolved operational bottlenecks, implemented process standardization and improved document traceability'
          ],
          stack: ['Process Management', 'DMS']
        }
      ],
      contact: {
        name: 'Lucas Moreno',
        role: 'Senior Full Stack Developer | React, Next.js, Vue.js | Node.js, NestJS | TypeScript | PostgreSQL | C#/.NET',
        email: 'lucasmorenozod@gmail.com',
        phone: '+55 (62) 9 8163-8156',
        linkedin: 'linkedin.com/in/lucas-mooreno',
        location: 'Goiânia, Brazil (Remote)'
      },
      skills: {
        title: 'TECHNICAL SKILLS',
        languages: {
          title: 'Languages',
          items: ['TypeScript', 'JavaScript', 'C#']
        },
        frontend: {
          title: 'Frontend',
          items: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS']
        },
        backend: {
          title: 'Backend',
          items: ['Node.js', 'NestJS', 'Express', 'C#/.NET']
        },
        database: {
          title: 'Database',
          items: ['PostgreSQL', 'MongoDB', 'Firestore', 'Redis']
        },
        architecture: {
          title: 'Architecture',
          items: ['DDD', 'Hexagonal Architecture', 'Clean Architecture', 'SOLID', 'Design Patterns', 'Event-Driven', 'Microservices', 'TDD']
        },
        tools: {
          title: 'Tools & Infra',
          items: ['Docker', 'GCP / Cloud Run', 'Azure', 'GCP Pub/Sub', 'Git', 'REST APIs', 'GraphQL']
        }
      },
      education: {
        title: 'EDUCATION',
        institution: 'PUC-GO',
        degree: 'Associate Degree in Systems Analysis and Development'
      },
      references: {
        title: 'REFERENCES',
        items: [
          {
            name: 'Victor Ivens',
            role: 'CTO, HyperPay',
            phone: '+55 (62) 9 9991-1222'
          },
          {
            name: 'Rafael Carola',
            role: 'CEO, Amppli',
            phone: '+55 (62) 9 8473-5771'
          }
        ]
      }
    },

    patterns: {
      title: 'DESIGN PATTERNS',
      subtitle: 'Architecture patterns I apply in real projects, with examples from my daily work',
      labels: {
        problem: 'PROBLEM',
        solution: 'SOLUTION',
        example: 'EXAMPLE',
        benefits: 'BENEFITS',
        viewMore: 'VIEW EXAMPLE',
        viewLess: 'VIEW LESS'
      },
      items: [
        {
          category: 'BACKEND',
          name: 'Repository Pattern',
          problem: 'Direct coupling between business logic and data layer',
          solution: 'Abstraction layer between domain and persistence, domain defines the contract, infrastructure implements it',
          example: `// Port (contract in domain, knows nothing about the database)
interface AgendamentoRepository {
  findById(id: string): Promise<Agendamento | null>
  save(agendamento: Agendamento): Promise<void>
}

// Adapter (infrastructure implementation)
class PrismaAgendamentoRepository implements AgendamentoRepository {
  async findById(id: string): Promise<Agendamento | null> {
    const data = await this.prisma.agendamento.findUnique({ where: { id } })
    return data ? new Agendamento(data) : null
  }

  async save(agendamento: Agendamento): Promise<void> {
    await this.prisma.agendamento.upsert({
      where: { id: agendamento.id },
      create: agendamento.toData(),
      update: agendamento.toData()
    })
  }
}

// Use case, decoupled from Prisma
class CancelBookingUseCase {
  constructor(private repo: AgendamentoRepository) {}

  async execute(id: string, reason: string): Promise<void> {
    const agendamento = await this.repo.findById(id)
    if (!agendamento) throw new Error('Booking not found')

    agendamento.cancel(reason) // rule in the domain
    await this.repo.save(agendamento)
  }
}`,
          benefits: ['Testability', 'Decoupling', 'Swap database without touching domain']
        },
        {
          category: 'BACKEND',
          name: 'Strategy Pattern',
          problem: 'Multiple payment methods with completely different logic',
          solution: 'Encapsulate each algorithm in an interchangeable strategy, used at HyperPay with PIX, bank slip and card',
          example: `interface PaymentStrategy {
  process(amount: number, data: PaymentData): Promise<PaymentResult>
}

class PixStrategy implements PaymentStrategy {
  async process(amount: number, data: PaymentData): Promise<PaymentResult> {
    const qrCode = await this.pixGateway.generateQR(amount, data.pixKey)
    return { success: true, transactionId: qrCode.id, qrCode: qrCode.code }
  }
}

class BoletoStrategy implements PaymentStrategy {
  async process(amount: number, data: PaymentData): Promise<PaymentResult> {
    const boleto = await this.boletoGateway.generate(amount, data.dueDate)
    return { success: true, transactionId: boleto.id, barcode: boleto.barcode }
  }
}

class PaymentProcessor {
  private strategy: PaymentStrategy

  setStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy
  }

  async execute(amount: number, data: PaymentData) {
    return await this.strategy.process(amount, data)
  }
}

const processor = new PaymentProcessor()
processor.setStrategy(new PixStrategy())
await processor.execute(150, { pixKey: 'email@example.com' })`,
          benefits: ['Eliminates giant if/else', 'Open/Closed Principle', 'Easy to add new payment method']
        },
        {
          category: 'FRONTEND',
          name: 'Composition Pattern',
          problem: 'Props drilling and coupled components',
          solution: 'Root component as showcase, sub-components defined below in same file with single responsibility',
          example: `const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-lg border border-gray-200 bg-white p-4">
    {children}
  </div>
)

const Header = ({ children }: { children: React.ReactNode }) => (
  <header className="mb-3 border-b pb-2 font-semibold">{children}</header>
)

const Body = ({ children }: { children: React.ReactNode }) => (
  <div className="text-sm text-gray-600">{children}</div>
)

const Footer = ({ children }: { children: React.ReactNode }) => (
  <footer className="mt-3 border-t pt-2">{children}</footer>
)

Card.Header = Header
Card.Body = Body
Card.Footer = Footer

<Card>
  <Card.Header>Booking Confirmed</Card.Header>
  <Card.Body>Instructor: John Silva, 2:00 PM</Card.Body>
  <Card.Footer>
    <button>Cancel</button>
  </Card.Footer>
</Card>`,
          benefits: ['Zero prop drilling', 'SRP per sub-component', 'Flexible and stable API']
        },
        {
          category: 'FRONTEND',
          name: 'Custom Hooks',
          problem: 'Duplicated fetch logic across multiple components',
          solution: 'Extract reusable logic into hooks, useEffect and useMemo only when necessary',
          example: `function useBookings(studentId: string) {
  const [data, setData] = useState<Booking[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const refetch = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const result = await bookingService.findByStudent(studentId)
      setData(result)
    } catch (err) {
      setError(err as Error)
    } finally {
      setLoading(false)
    }
  }, [studentId])

  useEffect(() => { refetch() }, [refetch])

  return { data, loading, error, refetch }
}

const BookingList = ({ studentId }: { studentId: string }) => {
  const { data, loading, error } = useBookings(studentId)

  if (loading) return <Spinner />
  if (error) return <ErrorMessage message={error.message} />

  return <>{data?.map(b => <BookingCard key={b.id} booking={b} />)}</>
}`,
          benefits: ['Reusability', 'Component focused on presentation', 'Easy to test']
        },
        {
          category: 'BACKEND',
          name: 'Adapter Pattern',
          problem: 'Integration with multiple external APIs with completely different interfaces, SERPRO, Azure, payment gateways',
          solution: 'Adapters translate external interface to domain contract, swap gateway without touching domain',
          example: `interface PaymentGateway {
  charge(amount: number, data: ChargeData): Promise<ChargeResult>
  refund(transactionId: string): Promise<void>
}

class GatewayAAdapter implements PaymentGateway {
  async charge(amount: number, data: ChargeData): Promise<ChargeResult> {
    const response = await this.client.createCharge({
      valor: amount * 100,
      documento: data.document
    })
    return {
      success: response.status === 'approved',
      transactionId: response.code
    }
  }
}

class GatewayBAdapter implements PaymentGateway {
  async charge(amount: number, data: ChargeData): Promise<ChargeResult> {
    const result = await this.client.payment.process({
      amount: amount.toFixed(2),
      cpf: data.document
    })
    return { success: result.approved, transactionId: result.id }
  }
}

// Domain doesn't know which gateway it's using
const paymentService = new PaymentService(new GatewayAAdapter(clientA))`,
          benefits: ['Swap gateway without touching domain', 'Decoupling', 'Testability with mock']
        },
        {
          category: 'BACKEND',
          name: 'Observer / Event-Driven',
          problem: 'Booking cancellation needed to send SMS, notify instructor and process refund, all coupled in the same method',
          solution: 'Domain Events: domain announces what happened, each handler reacts independently',
          example: `interface BookingCancelled {
  eventId: string
  bookingId: string
  studentId: string
  instructorId: string
  reason: string
  cancelledAt: Date
}

class BookingService {
  async cancel(id: string, reason: string): Promise<void> {
    const booking = await this.repo.findById(id)
    booking.cancel(reason)
    await this.repo.save(booking)

    await this.eventBus.publish({
      eventId: generateId(),
      bookingId: id,
      studentId: booking.studentId,
      instructorId: booking.instructorId,
      reason,
      cancelledAt: new Date()
    })
  }
}

class SmsHandler {
  async handle(event: BookingCancelled) {
    await this.sms.send(event.studentId, \`Booking cancelled: \${event.reason}\`)
  }
}

class FinancialHandler {
  async handle(event: BookingCancelled) {
    await this.financial.processRefund(event.bookingId)
  }
}`,
          benefits: ['Domain without external dependencies', 'Add behavior without modifying existing code', 'Each handler tested in isolation']
        },
        {
          category: 'ARCHITECTURE',
          name: 'Clean Architecture / Hexagonal',
          problem: 'Domain contaminated with database, framework and external API details, hard to test and evolve',
          solution: 'Domain at the center, everything external connects via ports and adapters, the database doesn\'t dictate business rules',
          example: `// DOMAIN, zero external dependency
class Booking {
  private status: 'active' | 'cancelled' = 'active'
  private events: DomainEvent[] = []

  cancel(reason: string): void {
    if (this.status === 'cancelled')
      throw new DomainError('Booking already cancelled')

    this.status = 'cancelled'
    this.events.push(new BookingCancelled(this.id, reason))
  }

  pullEvents(): DomainEvent[] {
    const events = [...this.events]
    this.events = []
    return events
  }
}

// Output Port (interface in domain)
interface BookingRepository {
  findById(id: string): Promise<Booking | null>
  save(booking: Booking): Promise<void>
}

// APPLICATION, orchestrates, no business rules
class CancelBookingUseCase {
  constructor(private repo: BookingRepository, private eventBus: EventBus) {}

  async execute(id: string, reason: string): Promise<void> {
    const booking = await this.repo.findById(id)
    booking.cancel(reason) // rule in domain
    await this.repo.save(booking)

    for (const event of booking.pullEvents())
      await this.eventBus.publish(event)
  }
}

// INFRASTRUCTURE, output adapter (knows Prisma)
class PrismaBookingRepository implements BookingRepository { /* ... */ }

// PRESENTATION, input adapter (knows HTTP)
class BookingController {
  async cancel(req: Request, res: Response) {
    await this.useCase.execute(req.params.id, req.body.reason)
    res.status(200).json({ message: 'Cancelled successfully' })
  }
}`,
          benefits: ['Domain testable without database or HTTP', 'Swap ORM without touching domain', 'Low coupling between layers']
        },
        {
          category: 'ARCHITECTURE',
          name: 'DDD, Aggregates & Value Objects',
          problem: 'Business rules scattered across services and controllers, CPF validation in 5 different places',
          solution: 'Value Objects guarantee invariants, Aggregates protect internal domain consistency',
          example: `// Value Object, immutable, own validation, equality by value
class Cpf {
  readonly number: string

  constructor(number: string) {
    const clean = number.replace(/\\D/g, '')
    if (clean.length !== 11) throw new DomainError('Invalid CPF')
    this.number = clean
  }

  equals(other: Cpf): boolean {
    return this.number === other.number
  }
}

// Aggregate Root, entry point, guarantees consistency
class Student {
  private bookings: Booking[] = []

  constructor(
    readonly id: string,
    readonly name: string,
    readonly cpf: Cpf // value object
  ) {}

  book(slot: TimeSlot, instructor: Instructor): Booking {
    const conflict = this.bookings.find(b => b.slot.conflictsWith(slot))
    if (conflict) throw new DomainError('Student already has a booking at this time')

    const booking = new Booking(this.id, slot, instructor)
    this.bookings.push(booking)
    return booking
  }
}

// Impossible to create Student with invalid CPF
const student = new Student('1', 'Lucas', new Cpf('12345678901'))

// Impossible to have duplicate booking
student.book(slot1, instructor) // OK
student.book(slot1, instructor) // DomainError`,
          benefits: ['Invariants guaranteed by domain', 'Impossible to have invalid state', 'Rules in the right place']
        },
        {
          category: 'ARCHITECTURE',
          name: 'SOLID in Frontend',
          problem: 'Components with multiple responsibilities, fetches, validates, formats and renders all together',
          solution: 'Apply SRP and DIP in React: custom hook for logic, component for presentation, interface for abstraction',
          example: `// S, Single Responsibility
// ❌ Component does too much
const BookingPage = () => {
  const [data, setData] = useState([])
  useEffect(() => { fetch('/bookings').then(/*...*/) }, [])
  // + validation + formatting + rendering
}

// ✅ Each with its responsibility
const useBookings = (studentId: string) => {
  const [bookings, setBookings] = useState<Booking[]>([])
  useEffect(() => {
    bookingService.findByStudent(studentId).then(setBookings)
  }, [studentId])
  return bookings
}

const BookingCard = ({ booking }: { booking: Booking }) => (
  <div>{booking.instructor} -{formatDate(booking.date)}</div>
)

const BookingPage = ({ studentId }: { studentId: string }) => {
  const bookings = useBookings(studentId)
  return <>{bookings.map(b => <BookingCard key={b.id} booking={b} />)}</>
}

// D, Dependency Inversion
interface BookingService {
  findByStudent(studentId: string): Promise<Booking[]>
}

const BookingList = ({ service }: { service: BookingService }) => {
  // works with real API or mock in tests
}`,
          benefits: ['Testable component', 'Reusable logic', 'Easy to mock in tests']
        }
      ]
    },

    experiences: [
      {
        headerTitle: '01 // MARKETPLACE & SCHEDULING',
        title: 'DRIVING SCHOOL SYSTEMS, PILOTAR',
        subtitle: 'Complete marketplace with geolocation, intelligent scheduling with pessimistic locking to eliminate conflicts and admin panel. Checkout latency from 4s to 800ms. Queries from 3.2s to 800ms. Redis cache reduced 40% of API calls at peak.',
        chip: ['NESTJS', 'NEXT.JS 14/15', 'C#/.NET', 'REDIS', 'DDD', 'GCP PUB/SUB', 'POSTGRESQL'],
        iconSrc: 'codeIcon'
      },
      {
        headerTitle: '02 // DIGITAL ACCOUNT & FINTECH',
        title: 'PAYMENT SYSTEM, HYPERPAY',
        subtitle: 'Complete digital account with PIX, bank slip and charges. Banking integrations, Azure and SERPRO. Retry with exponential backoff and dead letter queue. Error rate below 0.5%. Average latency below 1.2s at peak.',
        chip: ['PIX', 'NESTJS', 'REDIS', 'EVENT-DRIVEN', 'AZURE', 'SERPRO', 'POSTGRESQL'],
        iconSrc: 'finanIcon'
      },
      {
        headerTitle: '03 // CORPORATE DMS',
        title: 'ELECTRONIC DOCUMENT MANAGEMENT, AMPPLI',
        subtitle: 'Complete system with upload, versioning, advanced search and RBAC. ~80% improvement in response time with strategic indexes. Integrations with corporate legacy systems via robust adapters.',
        chip: ['NODE.JS', 'POSTGRESQL', 'REDIS', 'DDD', 'SOLID', 'REACT', 'TYPESCRIPT'],
        iconSrc: 'gedIcon'
      },
      {
        headerTitle: '04 // DISTRIBUTED ARCHITECTURE',
        title: 'EVENT-DRIVEN & MESSAGING',
        subtitle: 'Async workers with GCP Pub/Sub, events table with retry and exponential backoff and dead letter queue. Separation of sync and async operations ensuring consistency without blocking the main flow.',
        chip: ['DDD', 'EVENT-DRIVEN', 'GCP PUB/SUB', 'RETRY', 'DEAD LETTER', 'IDEMPOTENCY'],
        iconSrc: 'archIcon'
      },
      {
        headerTitle: '05 // PERFORMANCE & OPTIMIZATION',
        title: 'HIGH-PERFORMANCE SYSTEMS',
        subtitle: 'Query optimization with composite indexes and server-side pagination. Redis cache with TTL and strategic invalidation. Pessimistic locking for concurrency consistency. 60-80% improvement in critical endpoints.',
        chip: ['REDIS', 'POSTGRESQL', 'INDEXES', 'CACHE', 'LOCKING'],
        iconSrc: 'engPerfIcon'
      },
      {
        headerTitle: '06 // COMPLEX INTEGRATIONS',
        title: 'APIS & EXTERNAL SYSTEMS',
        subtitle: 'Integrations with banking APIs, Azure (encryption and facial validation), SERPRO and legacy systems. Retry with backoff, circuit breaker and adapters to isolate the domain from external details.',
        chip: ['REST', 'AZURE', 'SERPRO', 'CIRCUIT BREAKER', 'ADAPTER PATTERN'],
        iconSrc: 'sisIcon'
      },
      {
        headerTitle: '07 // ADMIN PANEL C#/.NET',
        title: 'MANAGEMENT SYSTEM, PILOTAR',
        subtitle: 'Complete C#/.NET panel for driving school management. Scheduling, student and instructor management, services, license packages, financial reports and operational control.',
        chip: ['C#/.NET', 'ENTITY FRAMEWORK', 'POSTGRESQL', 'BACKGROUND SERVICES'],
        iconSrc: 'codeIcon'
      },
      {
        headerTitle: '08 // CLEAN ARCHITECTURE',
        title: 'HEXAGONAL ARCHITECTURE & DDD',
        subtitle: 'Domain at the center, everything external via ports and adapters. Value Objects guarantee invariants, Aggregates protect consistency, Domain Events decouple side effects. Domain testable without database or framework.',
        chip: ['DDD', 'HEXAGONAL', 'PORTS & ADAPTERS', 'DOMAIN EVENTS', 'VALUE OBJECTS'],
        iconSrc: 'archIcon'
      },
      {
        headerTitle: '09 // ADVANCED FRONTEND',
        title: 'REACT & NEXT.JS ADVANCED',
        subtitle: 'SSR, SSG and ISR with Next.js 14/15. Composition Pattern with SRP sub-components. Custom hooks to separate logic from presentation. useMemo and useCallback only when necessary. Technical SEO and performance as priority.',
        chip: ['REACT', 'NEXT.JS 14/15', 'SSR', 'ISR', 'COMPOSITION PATTERN', 'SEO'],
        iconSrc: 'codeIcon'
      },
      {
        headerTitle: '10 // SYSTEM DESIGN',
        title: 'DISTRIBUTED SYSTEMS DESIGN',
        subtitle: 'Load balancer with round robin and least connections strategies. Cache-aside with Redis and TTL. CAP theorem and eventual consistency trade-offs. Kafka vs RabbitMQ. Blue/green and canary deploy. Observability with logs, metrics and traces.',
        chip: ['SYSTEM DESIGN', 'LOAD BALANCER', 'CAP THEOREM', 'KAFKA', 'OBSERVABILITY'],
        iconSrc: 'archIcon'
      }
    ]
  }
}