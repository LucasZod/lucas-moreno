export const translations = {
  pt: {
    // Menu
    menu: {
      home: 'HOME',
      resume: 'CURRÍCULO',
      patterns: 'PATTERNS',
      contact: 'CONTACT',
      brand: 'LM_ARCHITECT'
    },

    // Home - Title
    home: {
      greeting: 'OLÁ, ME CHAMO',
      name: 'LUCAS MORENO',
      subtitle: 'Desenvolvedor Fullstack especializado em arquitetura de ecossistemas digitais de alto desempenho. Transformando lógica complexa em experiências humanas perfeitas usando React, Vue.js, Next.js, Node.js, NestJS e C# .NET.',
      chips: {
        architecture: 'Architecture First',
        performance: 'Performance Driven',
        experience: 'Developer Experience',
        ui: 'Precision UI'
      }
    },

    // Skills Section
    skills: {
      title: 'STACK TÉCNICA',
      subtitle: 'Tecnologias e práticas que domino para construir sistemas robustos e escaláveis',
      categories: {
        frontend: {
          title: 'FRONTEND',
          skills: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3']
        },
        backend: {
          title: 'BACKEND',
          skills: ['Node.js', 'NestJS', 'C# .NET', 'Express', 'REST APIs', 'GraphQL']
        },
        database: {
          title: 'DATABASE & INFRA',
          skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'GCP Pub/Sub', 'SQL']
        },
        architecture: {
          title: 'ARQUITETURA & BOAS PRÁTICAS',
          skills: ['SOLID', 'DDD', 'DRY', 'KISS', 'Design Patterns', 'Clean Code', 'Microsserviços', 'Event-Driven']
        }
      }
    },

    // About Section
    about: {
      title: 'SOBRE MIM',
      subtitle: 'Desenvolvedor Full Stack com cerca de 7 anos de experiência',
      paragraphs: [
        'Sou desenvolvedor Full Stack com cerca de 7 anos de experiência construindo sistemas escaláveis em ambientes de fintech, logística e gerenciamento eletrônico de documentos (GED).',
        'Minha atuação vai além de desenvolver features — foco em resolver problemas reais de negócio envolvendo consistência de dados, performance em alto volume, integração entre sistemas e segurança de informações sensíveis.',
        'Aplico no dia a dia DDD (Domain Driven Design), SOLID, DRY/KISS, Design Patterns e arquitetura orientada a eventos. Para mim, desenvolvimento é sobre criar soluções sustentáveis que resistem ao tempo e ao crescimento.'
      ],
      highlights: [
        'DDD & SOLID',
        'Sistemas Distribuídos',
        'Event-Driven Architecture',
        'Fintech & GED',
        'Design Patterns',
        'Clean Architecture',
        'Microserviços',
        'High Performance Systems',
        'System Design',
        'Clean Code',
        'TypeScript Expert',
        'React & Next.js Advanced'
      ]
    },

    // Projects Section
    projects: {
      title: 'PROJETOS DE DESTAQUE',
      subtitle: 'Soluções que entreguei e os impactos gerados',
      items: [
        {
          number: '01',
          title: 'MARKETPLACE E AGENDAMENTO PARA CFCs - PILOTAR',
          problem: 'Conflito crítico de agendas e lentidão em consultas causavam problemas operacionais',
          solution: 'Sistema completo com marketplace, geolocalização, agendamento inteligente e painel administrativo. Validações de concorrência e regras de domínio com DDD.',
          stack: ['NestJS', 'Next.js', 'C#/.NET', 'Redis', 'Pub/Sub', 'DDD', 'Vue.js', 'Node.js', 'Firebase/Firestore'],
          impact: 'Redução de ~90% dos conflitos de agenda e ganho de 60-70% de performance',
          architecture: 'DDD com eventos assíncronos e cache Redis para alta performance'
        },
        {
          number: '02',
          title: 'CONTA DIGITAL E PAGAMENTOS - HYPERPAY',
          problem: 'Inconsistência em transações financeiras e instabilidade em integrações externas',
          solution: 'Sistema completo de pagamentos com PIX, boleto e transferências. Integrações com APIs bancárias, Azure (criptografia) e SERPRO.',
          stack: ['React', 'Typescript', 'NestJS', 'Node.js', 'Azure', 'Mensageria', 'DDD', 'PostgreSQL', 'Redis'],
          impact: 'Redução de ~60% de falhas em transações críticas e maior resiliência',
          architecture: 'Event-driven com validação de estados, retry e fallback para integrações'
        },
        {
          number: '03',
          title: 'SISTEMA GED CORPORATIVO - AMPPLI',
          problem: 'Performance ruim em buscas e falta de escalabilidade para grandes volumes',
          solution: 'Sistema completo de GED com upload, versionamento, busca avançada e RBAC. Refatoração de queries e reorganização de dados.',
          stack: ['React', 'Typescript', 'Node.js', 'PostgreSQL', 'Redis', 'DDD', 'SOLID', 'PostgreSQL'],
          impact: 'Ganho de ~80% no tempo de resposta e suporte a grandes volumes de dados',
          architecture: 'DDD com índices estratégicos e controle de acesso baseado em papéis'
        },
        {
          number: '04',
          title: 'CMS + LANDING PAGE SSR - BRT',
          problem: 'Dependência de desenvolvedor para alterações de conteúdo e SEO fraco',
          solution: 'CMS customizado com edição dinâmica de textos e imagens, controle por seções e integração direta com frontend SSR em Next.js.',
          stack: ['Next.js', 'Node.js', 'MySQL', 'Sequelize', 'SSR'],
          impact: 'Autonomia total para negócio e melhor indexação SEO',
          architecture: 'SSR com separação clara entre conteúdo e apresentação, API REST para CMS'
        },
        {
          number: '05',
          title: 'ARQUITETURA BACKEND SIEV - DETRAN',
          problem: 'Alto volume de requisições com necessidade de auditoria e consistência financeira',
          solution: 'Arquitetura distribuída com DDD, event-driven, outbox pattern e workers assíncronos para gestão de ordens e pagamentos.',
          stack: ['NestJS', 'Prisma', 'Redis', 'GCP Pub/Sub', 'Outbox Pattern'],
          impact: 'Sistema altamente escalável com eliminação de inconsistências',
          architecture: 'Event-driven com idempotência Redis, consistência eventual e DLQ para resiliência'
        }
      ]
    },

    // Resume Page
    resume: {
      title: 'CURRÍCULO',
      subtitle: 'Experiência profissional completa',
      download: 'BAIXAR PDF',
      companies: [
        {
          name: 'Pilotar',
          period: '2023 - Atual',
          role: 'Desenvolvedor Full Stack',
          description: 'Sistema completo para CFCs (autoescolas), incluindo marketplace, agendamento e painel de gestão',
          achievements: [
            'Desenvolveu marketplace com geolocalização, busca de autoescolas e contratação de serviços/pacotes',
            'Implementou sistema de agendamento com controle de disponibilidade, regras de conflito e gestão de instrutores',
            'Criou painel administrativo em C#/.NET com gestão operacional completa de autoescolas',
            'Reduziu conflitos de agenda em ~90% através de validações de concorrência e regras de domínio',
            'Melhorou performance em ~60-70% usando cache Redis e modelagem eficiente',
            'Implementou arquitetura event-driven para resolver inconsistências entre pagamento e agendamento',
            'Aplicou DDD e SOLID para desacoplar módulos e aumentar escalabilidade'
          ],
          stack: ['Node.js', 'NestJS', 'React', 'Next.js', 'C#/.NET', 'Redis', 'DDD', 'Mensageria', 'Vue.js', 'Firebase/Firestore']
        },
        {
          name: 'Hyperdev / HyperPay',
          period: '2021 - 2023',
          role: 'Desenvolvedor Full Stack',
          description: 'Conta digital completa com operações financeiras críticas',
          achievements: [
            'Desenvolveu sistema completo de pagamentos (PIX, boleto, transferências internas)',
            'Integrou APIs bancárias, Azure para criptografia e SERPRO',
            'Implementou sistema de notificações via SMS e eventos externos',
            'Reduziu inconsistências em transações em ~60% através de validação de estados e fluxos financeiros',
            'Aumentou resiliência do sistema implementando retry, fallback e desacoplamento de integrações',
            'Garantiu segurança de dados sensíveis com criptografia e validação rigorosa'
          ],
          stack: ['Node.js', 'NestJS', 'Redis', 'Mensageria', 'DDD', 'PIX', 'Azure', 'SERPRO', 'Event-Driven', 'PostgreSQL', 'React', 'Typescript']
        },
        {
          name: 'Amppli',
          period: '2020 - 2021',
          role: 'Desenvolvedor Full Stack',
          description: 'Startup focada em GED (gerenciamento eletrônico de documentos)',
          achievements: [
            'Desenvolveu sistema completo de GED com upload, versionamento, busca avançada e controle de permissões',
            'Integrou com sistemas corporativos existentes',
            'Melhorou performance em buscas em ~80% através de otimização de índices e refatoração de queries',
            'Aumentou escalabilidade para suportar grandes volumes de documentos',
            'Implementou RBAC (role-based access control) para maior segurança'
          ],
          stack: ['Node.js', 'PostgreSQL', 'Redis', 'DDD', 'SOLID', 'React', 'Typescript']
        },
        {
          name: 'Manlog',
          period: '2020',
          role: 'Desenvolvedor Frontend',
          description: 'Sistema logístico integrado com GED',
          achievements: [
            'Otimizou performance de telas em ~50% através de paginação e otimização de render',
            'Automatizou processos manuais aumentando produtividade operacional'
          ],
          stack: ['React', 'Vue.js', 'JavaScript']
        },
        {
          name: 'Grupo Jaime Câmara',
          period: '2016 - 2019',
          role: 'Supervisor GED',
          description: 'Primeiro contato com tecnologia, evolução para liderança',
          achievements: [
            'Identificou e resolveu gargalos operacionais',
            'Implementou padronização de processos',
            'Melhorou rastreabilidade de documentos'
          ],
          stack: ['Gestão de Processos', 'GED']
        }
      ],
      contact: {
        name: 'LUCAS MORENO DUARTE DE SIQUEIRA',
        role: 'Desenvolvedor Full Stack | Node.js, NestJS, React, Next.js, C#/.NET | Sistemas Distribuídos & Fintech',
        email: 'lucasmorenozod@gmail.com',
        phone: '(62) 98163-8156',
        linkedin: 'linkedin.com/in/lucas-mooreno',
        location: 'Brasil (Remoto)'
      },
      skills: {
        title: 'COMPETÊNCIAS TÉCNICAS',
        languages: {
          title: 'Linguagens',
          items: ['JavaScript', 'TypeScript', 'C#']
        },
        frontend: {
          title: 'Frontend',
          items: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS']
        },
        backend: {
          title: 'Backend',
          items: ['Node.js', 'NestJS', '.NET', 'Express']
        },
        database: {
          title: 'Banco de Dados',
          items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Sequelize']
        },
        architecture: {
          title: 'Arquitetura',
          items: ['DDD', 'SOLID', 'Design Patterns', 'Event-Driven', 'Microservices', 'Clean Architecture']
        },
        tools: {
          title: 'Ferramentas',
          items: ['Docker', 'GCP Pub/Sub', 'Git', 'REST APIs', 'GraphQL']
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
            role: 'CTO - Hyperpay',
            phone: '62 9991-1222'
          },
          {
            name: 'Rafael Carola',
            role: 'CEO - Amppli',
            phone: '62 8473-5771'
          }
        ]
      }
    },

    // Patterns Page
    patterns: {
      title: 'DESIGN PATTERNS',
      subtitle: 'Padrões de arquitetura que aplico em projetos reais',
      items: [
        {
          category: 'BACKEND',
          name: 'Repository Pattern',
          problem: 'Acoplamento direto entre lógica de negócio e camada de dados',
          solution: 'Criação de camada de abstração entre domínio e persistência',
          example: `// Interface (contrato independente de implementação)
interface UserRepository {
  findById(id: string): Promise<User | null>
  save(user: User): Promise<void>
}

// Implementação concreta
class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaClient) {}

  async findById(id: string): Promise<User | null> {
    const data = await this.prisma.user.findUnique({ where: { id } })
    return data ? new User(data.id, data.name) : null
  }

  async save(user: User): Promise<void> {
    await this.prisma.user.create({
      data: { id: user.id, name: user.name }
    })
  }
}

// Uso no caso de uso (desacoplado do Prisma)
class GetUserUseCase {
  constructor(private userRepo: UserRepository) {}

  async execute(userId: string): Promise<User | null> {
    return await this.userRepo.findById(userId)
  }
}

// Setup com injeção de dependência
const userRepo = new PrismaUserRepository(new PrismaClient())
const useCase = new GetUserUseCase(userRepo)
const user = await useCase.execute('123')`,
          benefits: ['Testabilidade', 'Desacoplamento', 'Manutenibilidade']
        },
        {
          category: 'BACKEND',
          name: 'Strategy Pattern',
          problem: 'Múltiplas formas de pagamento com lógicas diferentes',
          solution: 'Encapsular algoritmos em classes intercambiáveis',
          example: `// Interface comum
interface PaymentStrategy {
  process(amount: number, data: PaymentData): Promise<PaymentResult>
}

// Estratégias concretas
class PixPayment implements PaymentStrategy {
  async process(amount: number, data: PaymentData): Promise<PaymentResult> {
    const qrCode = await this.generateQRCode(amount, data.pixKey)
    return { success: true, transactionId: 'pix-123', qrCode }
  }

  private async generateQRCode(amount: number, key: string): string {
    return \`qrcode-\${amount}-\${key}\`
  }
}

class CardPayment implements PaymentStrategy {
  async process(amount: number, data: PaymentData): Promise<PaymentResult> {
    if (!this.validateCard(data.cardNumber)) {
      throw new Error('Cartão inválido')
    }
    return { success: true, transactionId: 'card-456' }
  }

  private validateCard(number: string): boolean {
    return number.length === 16
  }
}

// Contexto
class PaymentProcessor {
  constructor(private strategy: PaymentStrategy) {}

  async execute(amount: number, data: PaymentData) {
    return await this.strategy.process(amount, data)
  }
}

// Uso
const processor = new PaymentProcessor(new PixPayment())
await processor.execute(100, { pixKey: 'email@example.com' })

// Trocar estratégia em runtime
processor.setStrategy(new CardPayment())`,
          benefits: ['Flexibilidade', 'Open/Closed Principle', 'Eliminação de If/Else']
        },
        {
          category: 'FRONTEND',
          name: 'Composition Pattern',
          problem: 'Props drilling e componentes acoplados',
          solution: 'Composição de componentes com children explícito',
          example: `// Componente pai aceita children
const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="card">{children}</div>
)

// Subcomponentes anexados (namespace pattern)
Card.Header = ({ children }: { children: React.ReactNode }) => (
  <header className="card-header">{children}</header>
)

Card.Body = ({ children }: { children: React.ReactNode }) => (
  <div className="card-body">{children}</div>
)

Card.Footer = ({ children }: { children: React.ReactNode }) => (
  <footer className="card-footer">{children}</footer>
)

// Uso flexível
<Card>
  <Card.Header>Título</Card.Header>
  <Card.Body>Conteúdo</Card.Body>
  <Card.Footer><Button>Ação</Button></Card.Footer>
</Card>

// Ou apenas header + body
<Card>
  <Card.Header>Título</Card.Header>
  <Card.Body>Conteúdo</Card.Body>
</Card>

// Vantagens: zero prop drilling, flexível, API estável`,
          benefits: ['Zero Prop Drilling', 'Reutilização', 'Flexibilidade']
        },
        {
          category: 'FRONTEND',
          name: 'Custom Hooks',
          problem: 'Lógica duplicada e componentes complexos',
          solution: 'Extração de lógica reutilizável em hooks',
          example: `// Hook reutilizável com estados
function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const refetch = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const res = await fetch(url)
      if (!res.ok) throw new Error('Request failed')
      setData(await res.json())
    } catch (err) {
      setError(err as Error)
    } finally {
      setLoading(false)
    }
  }, [url])

  useEffect(() => {
    refetch()
  }, [refetch])

  return { data, loading, error, refetch }
}

// Uso em componente
function UserList() {
  const { data: users, loading, error } = useApi<User[]>('/api/users')

  if (loading) return <Spinner />
  if (error) return <Error message={error.message} />

  return (
    <div>
      {users?.map(user => <UserCard key={user.id} user={user} />)}
    </div>
  )
}

// Componente focado apenas em apresentação
// Lógica de fetch isolada e reutilizável`,
          benefits: ['Reusabilidade', 'Separação de Responsabilidades', 'Testabilidade']
        },
        {
          category: 'BACKEND',
          name: 'Factory Pattern',
          problem: 'Criação complexa de objetos com múltiplas variações',
          solution: 'Centralizar lógica de criação em factories especializadas',
          example: `// Interface base
interface PaymentMethod {
  process(amount: number): Promise<PaymentResult>
}

// Implementações concretas
class PixPayment implements PaymentMethod {
  constructor(private pixService: PixService) {}

  async process(amount: number): Promise<PaymentResult> {
    const qrCode = await this.pixService.generateQR(amount)
    return { success: true, qrCode }
  }
}

class CardPayment implements PaymentMethod {
  constructor(private gateway: PaymentGateway) {}

  async process(amount: number): Promise<PaymentResult> {
    const charge = await this.gateway.charge(amount)
    return { success: true, chargeId: charge.id }
  }
}

// Factory encapsula criação
class PaymentFactory {
  constructor(
    private pixService: PixService,
    private gateway: PaymentGateway
  ) {}

  create(type: 'pix' | 'card'): PaymentMethod {
    switch(type) {
      case 'pix':
        return new PixPayment(this.pixService)
      case 'card':
        return new CardPayment(this.gateway)
      default:
        throw new Error('Invalid payment type')
    }
  }
}

// Uso
const factory = new PaymentFactory(pixService, gateway)
const payment = factory.create('pix')
await payment.process(100)`,
          benefits: ['Encapsulamento', 'Fácil Extensão', 'Single Responsibility']
        },
        {
          category: 'BACKEND',
          name: 'Singleton Pattern',
          problem: 'Necessidade de instância única compartilhada globalmente',
          solution: 'Garantir uma única instância com acesso global',
          example: `// Singleton com lazy initialization
class Database {
  private static instance: Database | null = null
  private connected: boolean = false

  // Construtor privado
  private constructor(private connectionString: string) {}

  static getInstance(connectionString?: string): Database {
    if (!Database.instance) {
      if (!connectionString) {
        throw new Error('Connection string required')
      }
      Database.instance = new Database(connectionString)
    }
    return Database.instance
  }

  async connect(): Promise<void> {
    if (!this.connected) {
      console.log('Connecting to database...')
      this.connected = true
    }
  }

  async query(sql: string): Promise<any[]> {
    if (!this.connected) await this.connect()
    return [] // Execute query
  }
}

// Uso - sempre mesma instância
const db1 = Database.getInstance('postgres://localhost')
const db2 = Database.getInstance()

console.log(db1 === db2) // true
await db1.query('SELECT * FROM users')`,
          benefits: ['Controle de Instância', 'Acesso Global', 'Lazy Initialization']
        },
        {
          category: 'BACKEND',
          name: 'Adapter Pattern',
          problem: 'Integração com múltiplas APIs externas com interfaces diferentes',
          solution: 'Criar adaptadores que padronizam a interface',
          example: `// Interface padrão do domínio
interface PaymentGateway {
  charge(amount: number): Promise<PaymentResult>
  refund(transactionId: string): Promise<void>
}

// Adapter para Stripe (adapta API externa)
class StripeAdapter implements PaymentGateway {
  constructor(private stripe: StripeSDK) {}

  async charge(amount: number): Promise<PaymentResult> {
    // Adapta: nossa interface -> Stripe API
    const charge = await this.stripe.charges.create({
      amount: amount * 100, // Stripe usa centavos
      currency: 'brl'
    })

    return {
      success: charge.status === 'succeeded',
      transactionId: charge.id
    }
  }

  async refund(transactionId: string): Promise<void> {
    await this.stripe.refunds.create({ charge: transactionId })
  }
}

// Adapter para PayPal (API diferente)
class PayPalAdapter implements PaymentGateway {
  constructor(private paypal: PayPalSDK) {}

  async charge(amount: number): Promise<PaymentResult> {
    const payment = await this.paypal.payment.create({
      amount: { total: amount.toFixed(2) } // PayPal usa string
    })

    return {
      success: payment.state === 'approved',
      transactionId: payment.id
    }
  }

  async refund(transactionId: string): Promise<void> {
    await this.paypal.sale.refund(transactionId)
  }
}

// Uso - trocar gateway sem modificar código
const gateway = new StripeAdapter(stripe)
// ou
const gateway = new PayPalAdapter(paypal)

await gateway.charge(100)`,
          benefits: ['Desacoplamento', 'Reutilização', 'Substituição Transparente']
        },
        {
          category: 'BACKEND',
          name: 'Decorator Pattern',
          problem: 'Adicionar comportamentos dinâmicos sem modificar classes',
          solution: 'Envolver objetos com decoradores que adicionam funcionalidades',
          example: `// Interface base
interface UserService {
  execute(userId: string): Promise<User>
}

// Implementação concreta
class BaseUserService implements UserService {
  async execute(userId: string): Promise<User> {
    return await db.users.findById(userId)
  }
}

// Decorator 1: Logging
class LoggerDecorator implements UserService {
  constructor(private wrapped: UserService) {}

  async execute(userId: string): Promise<User> {
    console.log(\`Fetching user: \${userId}\`)
    const result = await this.wrapped.execute(userId)
    console.log('User fetched successfully')
    return result
  }
}

// Decorator 2: Cache
class CacheDecorator implements UserService {
  private cache = new Map<string, User>()

  constructor(private wrapped: UserService) {}

  async execute(userId: string): Promise<User> {
    if (this.cache.has(userId)) {
      return this.cache.get(userId)!
    }

    const result = await this.wrapped.execute(userId)
    this.cache.set(userId, result)
    return result
  }
}

// Composição de decoradores
const baseService = new BaseUserService()
const withLogging = new LoggerDecorator(baseService)
const withCache = new CacheDecorator(withLogging)

// Usa serviço com cache + logging
await withCache.execute('123')`,
          benefits: ['Open/Closed Principle', 'Composição', 'Modularidade']
        },
        {
          category: 'BACKEND',
          name: 'Observer Pattern',
          problem: 'Notificar múltiplos componentes sobre mudanças de estado',
          solution: 'Implementar sistema de eventos pub/sub',
          example: `// Event Emitter
class EventEmitter {
  private listeners = new Map<string, Function[]>()

  on(event: string, callback: Function): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, [])
    }
    this.listeners.get(event)!.push(callback)
  }

  async emit(event: string, data: any): Promise<void> {
    const callbacks = this.listeners.get(event) || []
    await Promise.all(callbacks.map(cb => cb(data)))
  }
}

// Service que emite eventos
class OrderService {
  constructor(private events: EventEmitter) {}

  async create(order: Order): Promise<void> {
    await this.save(order)
    await this.events.emit('order.created', order)
  }

  private async save(order: Order) {
    // Salvar no banco
  }
}

// Observers que reagem aos eventos
class EmailService {
  constructor(events: EventEmitter) {
    events.on('order.created', (order) => {
      this.sendConfirmation(order)
    })
  }

  private sendConfirmation(order: Order) {
    console.log(\`Email sent for order \${order.id}\`)
  }
}

// Setup
const events = new EventEmitter()
const orderService = new OrderService(events)
const emailService = new EmailService(events)

// Uso - OrderService não conhece EmailService
await orderService.create(order)
// Email enviado automaticamente`,
          benefits: ['Desacoplamento', 'Reatividade', 'Extensibilidade']
        },
        {
          category: 'FRONTEND',
          name: 'Higher Order Component (HOC)',
          problem: 'Reutilizar lógica entre componentes React',
          solution: 'Criar componentes que envolvem outros adicionando funcionalidades',
          example: `// HOC para autenticação
function withAuth<P extends object>(
  Component: React.ComponentType<P>
) {
  return function AuthComponent(props: P) {
    const { user, loading } = useAuth()

    if (loading) return <Spinner />
    if (!user) return <Redirect to="/login" />

    return <Component {...props} user={user} />
  }
}

// HOC para logging
function withTracking<P extends object>(
  Component: React.ComponentType<P>,
  eventName: string
) {
  return function TrackedComponent(props: P) {
    useEffect(() => {
      analytics.track(eventName)
    }, [])

    return <Component {...props} />
  }
}

// Uso
const Dashboard = ({ user }) => <div>Welcome {user.name}</div>

const ProtectedDashboard = withAuth(Dashboard)
const TrackedDashboard = withTracking(ProtectedDashboard, 'Dashboard Viewed')

// Renderizar
<TrackedDashboard />`,
          benefits: ['Reusabilidade', 'Composição', 'Separação de Concerns']
        },
        {
          category: 'FRONTEND',
          name: 'Higher Order Function (HOF)',
          problem: 'Lógica duplicada em funções utilitárias',
          solution: 'Funções que retornam ou recebem outras funções',
          example: `// HOF para Retry
function withRetry<T>(
  fn: (...args: any[]) => Promise<T>,
  maxRetries: number = 3
): (...args: any[]) => Promise<T> {
  return async (...args: any[]): Promise<T> => {
    for (let i = 0; i < maxRetries; i++) {
      try {
        return await fn(...args)
      } catch (error) {
        if (i === maxRetries - 1) throw error
      }
    }
    throw new Error('Max retries exceeded')
  }
}

// HOF para Debounce
function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null

  return (...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

// HOF para Memoize
function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache = new Map()

  return ((...args) => {
    const key = JSON.stringify(args)
    if (cache.has(key)) return cache.get(key)
    const result = fn(...args)
    cache.set(key, result)
    return result
  }) as T
}

// Uso
const fetchUser = async (id: string) => fetch(\`/api/users/\${id}\`)

const fetchWithRetry = withRetry(fetchUser, 3)
await fetchWithRetry('123')

const search = debounce((query: string) => {
  console.log('Searching:', query)
}, 300)`,
          benefits: ['Abstração', 'Reusabilidade', 'Functional Programming']
        },
        {
          category: 'ARCHITECTURE',
          name: 'Clean Architecture',
          problem: 'Acoplamento entre camadas de aplicação',
          solution: 'Separação em camadas com inversão de dependências',
          example: `// Domain (núcleo - regras de negócio)
class User {
  constructor(
    readonly id: string,
    readonly email: string,
    private password: string
  ) {}

  isPasswordValid(pwd: string): boolean {
    return this.password === pwd
  }
}

interface UserRepository {
  findByEmail(email: string): Promise<User | null>
}

// Application (casos de uso)
class AuthenticateUserUseCase {
  constructor(private userRepo: UserRepository) {}

  async execute(email: string, password: string): Promise<string> {
    const user = await this.userRepo.findByEmail(email)
    if (!user || !user.isPasswordValid(password)) {
      throw new Error('Invalid credentials')
    }
    return generateToken(user.id)
  }
}

// Infrastructure (implementação concreta)
class PrismaUserRepository implements UserRepository {
  async findByEmail(email: string): Promise<User | null> {
    const data = await prisma.user.findUnique({ where: { email } })
    return data ? new User(data.id, data.email, data.password) : null
  }
}

// Presentation (controller)
const authUseCase = new AuthenticateUserUseCase(new PrismaUserRepository())
const token = await authUseCase.execute('user@email.com', 'senha123')`,
          benefits: ['Testabilidade', 'Independência de Frameworks', 'Substituibilidade', 'Manutenibilidade']
        },
        {
          category: 'ARCHITECTURE',
          name: 'DDD - Bounded Contexts',
          problem: 'Modelo de domínio monolítico e confuso',
          solution: 'Separar domínio em contextos delimitados com agregados e value objects',
          example: `// Value Object (imutável, sem identidade)
class Money {
  constructor(readonly amount: number, readonly currency: string = 'BRL') {
    if (amount < 0) throw new Error('Amount cannot be negative')
  }

  add(other: Money): Money {
    return new Money(this.amount + other.amount, this.currency)
  }
}

// Aggregate Root (garante invariantes do domínio)
class Order {
  private items: OrderItem[] = []
  private status: 'draft' | 'confirmed' = 'draft'
  private events: DomainEvent[] = []

  constructor(readonly id: string, readonly customerId: string) {}

  addItem(productId: string, quantity: number, price: Money) {
    if (this.status !== 'draft') {
      throw new Error('Cannot modify confirmed order')
    }
    this.items.push(new OrderItem(productId, quantity, price))
  }

  confirm() {
    if (this.items.length === 0) throw new Error('Cannot confirm empty order')
    this.status = 'confirmed'
    this.events.push(new OrderCreatedEvent(this.id, this.calculateTotal()))
  }

  calculateTotal(): Money {
    return this.items.reduce((sum, item) => sum.add(item.getSubtotal()), new Money(0))
  }
}

// Uso
const order = new Order('1', 'customer-123')
order.addItem('product-1', 2, new Money(50))
order.confirm()`,
          benefits: ['Clareza de Domínio', 'Escalabilidade', 'Invariantes Garantidas', 'Autonomia de Times']
        },
        {
          category: 'ARCHITECTURE',
          name: 'SOLID no Frontend',
          problem: 'Componentes com múltiplas responsabilidades e difíceis de manter',
          solution: 'Aplicar princípios SOLID em componentes React',
          example: `// S - Single Responsibility (separar concerns)
const useUser = (id: string) => {
  const [user, setUser] = useState<User | null>(null)
  useEffect(() => {
    fetch(\`/api/users/\${id}\`).then(r => r.json()).then(setUser)
  }, [id])
  return user
}

const UserProfile = ({ id }: { id: string }) => {
  const user = useUser(id)
  return user ? <UserView user={user} /> : <Spinner />
}

// D - Dependency Inversion (depender de abstrações)
interface UserRepository {
  getUsers(): Promise<User[]>
}

class ApiUserRepository implements UserRepository {
  async getUsers(): Promise<User[]> {
    return fetch('/api/users').then(r => r.json())
  }
}

const UserList = ({ repository }: { repository: UserRepository }) => {
  const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    repository.getUsers().then(setUsers)
  }, [repository])
  return <>{users.map(u => <UserCard key={u.id} user={u} />)}</>
}

// Uso (injeção de dependência)
<UserList repository={new ApiUserRepository()} />`,
          benefits: ['Manutenibilidade', 'Testabilidade', 'Baixo Acoplamento', 'Reusabilidade']
        },
        {
          category: 'ARCHITECTURE',
          name: 'Event-Driven Architecture',
          problem: 'Acoplamento síncrono entre serviços',
          solution: 'Comunicação assíncrona via eventos com idempotência',
          example: `// Event Schema
interface OrderCreatedEvent {
  eventId: string
  eventType: 'order.created'
  data: { orderId: string; customerId: string; total: number }
}

// Producer (publica eventos)
class OrderService {
  constructor(private eventBus: EventBus) {}

  async create(order: Order) {
    await this.db.orders.insert(order)

    await this.eventBus.publish({
      eventId: generateId(),
      eventType: 'order.created',
      data: { orderId: order.id, customerId: order.customerId, total: order.total }
    })
  }
}

// Consumer (reage aos eventos com idempotência)
class PaymentService {
  constructor(private redis: Redis) {}

  async handleOrderCreated(event: OrderCreatedEvent) {
    const key = \`processed:\${event.eventId}\`

    // Idempotência: verifica se já processou
    if (await this.redis.get(key)) return

    await this.initiatePayment(event.data.orderId, event.data.total)
    await this.redis.set(key, 'true', 'EX', 604800)
  }
}

// Setup
eventBus.subscribe('order.created', (event) => paymentService.handleOrderCreated(event))`,
          benefits: ['Desacoplamento', 'Escalabilidade', 'Resiliência', 'Idempotência']
        }
      ]
    },

    // Experiences
    experiences: [
      {
        headerTitle: "01 // MARKETPLACE & AGENDAMENTO",
        title: "SISTEMAS PARA CFCs - PILOTAR",
        subtitle: "Sistema completo incluindo marketplace com geolocalização, agendamento inteligente com controle de conflitos e painel administrativo. Redução de 90% dos conflitos de agenda e ganho de 60-70% em performance.",
        chip: ["NESTJS", "NEXT.JS", "C#/.NET", "REDIS", "DDD"],
        iconSrc: '/assets/engf.svg'
      },
      {
        headerTitle: "02 // CONTA DIGITAL & FINTECH",
        title: "SISTEMA DE PAGAMENTOS - HYPERPAY",
        subtitle: "Conta digital completa com PIX, boleto e transferências. Integrações bancárias, Azure, SERPRO. Arquitetura event-driven com mensageria. Redução de 60% de falhas em transações críticas.",
        chip: ["PIX", "NESTJS", "REDIS", "EVENT-DRIVEN", "AZURE"],
        iconSrc: '/assets/finan.svg'
      },
      {
        headerTitle: "03 // GED CORPORATIVO",
        title: "GESTÃO ELETRÔNICA DE DOCUMENTOS - AMPPLI",
        subtitle: "Sistema completo com upload, versionamento, busca avançada e controle de permissões. Ganho de 80% no tempo de resposta em buscas. Integração com sistemas corporativos usando RBAC.",
        chip: ["NODE.JS", "POSTGRESQL", "REDIS", "DDD", "SOLID"],
        iconSrc: '/assets/ged.svg'
      },
      {
        headerTitle: "04 // ARQUITETURA DISTRIBUÍDA",
        title: "EVENT-DRIVEN & MENSAGERIA",
        subtitle: "Construção de serviços backend aplicando DDD, SOLID e arquitetura orientada a eventos. Integrações com GCP Pub/Sub, filas e outbox pattern garantindo consistência eventual e idempotência.",
        chip: ["DDD", "EVENT-DRIVEN", "GCP PUB/SUB", "IDEMPOTÊNCIA"],
        iconSrc: '/assets/back.svg'
      },
      {
        headerTitle: "05 // PERFORMANCE & OTIMIZAÇÃO",
        title: "SISTEMAS DE ALTA PERFORMANCE",
        subtitle: "Otimização de queries e sistemas sob carga. Implementação de cache com Redis, índices estratégicos e modelagem eficiente. Ganhos de 60-80% no tempo de resposta em operações críticas.",
        chip: ["REDIS", "SQL", "CACHE", "INDEXAÇÃO"],
        iconSrc: '/assets/engperf.svg'
      },
      {
        headerTitle: "06 // INTEGRAÇÕES COMPLEXAS",
        title: "APIS & SISTEMAS EXTERNOS",
        subtitle: "Integração com APIs bancárias, Azure, SERPRO, ERPs e sistemas legados. Implementação de retry, fallback e circuit breaker para maior resiliência. Foco em segurança e criptografia de dados sensíveis.",
        chip: ["REST", "AZURE", "SERPRO", "CIRCUIT BREAKER"],
        iconSrc: '/assets/sis.svg'
      },
      {
        headerTitle: "07 // PAINEL GESTOR C# .NET",
        title: "SISTEMA ADMINISTRATIVO - PILOTAR",
        subtitle: "Painel completo em C# .NET para gerenciamento de autoescolas. Gestão de agendamentos, serviços, produtos, candidatos, valores, pacotes de habilitação, relatórios financeiros e controle operacional.",
        chip: ["C# .NET", "ENTITY FRAMEWORK", "SQL SERVER", "MVC"],
        iconSrc: '/assets/engf.svg'
      },
      {
        headerTitle: "08 // CLEAN ARCHITECTURE",
        title: "ARQUITETURA LIMPA & ESCALÁVEL",
        subtitle: "Aplicação de princípios de Clean Architecture em projetos reais. Separação de camadas (Domain, Application, Infrastructure), inversão de dependências e código testável com alta coesão e baixo acoplamento.",
        chip: ["CLEAN ARCHITECTURE", "DOMAIN", "INFRASTRUCTURE", "PORTS & ADAPTERS"],
        iconSrc: '/assets/back.svg'
      },
      {
        headerTitle: "09 // ADVANCED FRONTEND",
        title: "REACT & NEXT.JS AVANÇADO",
        subtitle: "Desenvolvimento de SPAs e aplicações SSR/SSG com React e Next.js. Server Components, Streaming, ISR, composição avançada, custom hooks, HOCs e otimização de bundle. Performance e SEO como prioridade.",
        chip: ["REACT", "NEXT.JS", "SSR", "SSG", "PERFORMANCE"],
        iconSrc: '/assets/engf.svg'
      },
      {
        headerTitle: "10 // SYSTEM DESIGN",
        title: "DESIGN DE SISTEMAS DISTRIBUÍDOS",
        subtitle: "Desenho de arquitetura de sistemas complexos. Load balancing, caching strategies, database sharding, CAP theorem, eventual consistency, message queues e trade-offs arquiteturais para alta disponibilidade.",
        chip: ["SYSTEM DESIGN", "SCALABILITY", "CAP THEOREM", "SHARDING"],
        iconSrc: '/assets/back.svg'
      }
    ]
  },

  en: {
    // Menu
    menu: {
      home: 'HOME',
      resume: 'CURRÍCULO',
      patterns: 'PATTERNS',
      contact: 'CONTACT',
      brand: 'LM_ARCHITECT'
    },

    // Home - Title
    home: {
      greeting: 'HELLO, MY NAME IS',
      name: 'LUCAS MORENO',
      subtitle: 'Fullstack Developer specialized in high-performance digital ecosystem architecture. Transforming complex logic into perfect human experiences using React, Vue.js, Next.js, Node.js, NestJS and C# .NET.',
      chips: {
        architecture: 'Architecture First',
        performance: 'Performance Driven',
        experience: 'Developer Experience',
        ui: 'Precision UI'
      }
    },

    // Skills Section
    skills: {
      title: 'TECH STACK',
      subtitle: 'Technologies and practices I master to build robust and scalable systems',
      categories: {
        frontend: {
          title: 'FRONTEND',
          skills: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3']
        },
        backend: {
          title: 'BACKEND',
          skills: ['Node.js', 'NestJS', 'C# .NET', 'Express', 'REST APIs', 'GraphQL']
        },
        database: {
          title: 'DATABASE & INFRA',
          skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'GCP Pub/Sub', 'SQL']
        },
        architecture: {
          title: 'ARCHITECTURE & BEST PRACTICES',
          skills: ['SOLID', 'DDD', 'DRY', 'KISS', 'Design Patterns', 'Clean Code', 'Microservices', 'Event-Driven']
        }
      }
    },

    // About Section
    about: {
      title: 'ABOUT ME',
      subtitle: 'Full Stack Developer with about 7 years of experience',
      paragraphs: [
        'I am a Full Stack Developer with about 7 years of experience building scalable systems in fintech, logistics, and electronic document management (DMS) environments.',
        'My work goes beyond developing features — I focus on solving real business problems involving data consistency, high-volume performance, system integration, and sensitive information security.',
        'I apply DDD (Domain Driven Design), SOLID, DRY/KISS, Design Patterns, and event-driven architecture daily. For me, development is about creating sustainable solutions that withstand time and growth.'
      ],
      highlights: [
        'DDD & SOLID',
        'Distributed Systems',
        'Event-Driven Architecture',
        'Fintech & DMS',
        'Design Patterns',
        'Clean Architecture',
        'Microservices',
        'High Performance Systems',
        'System Design',
        'Clean Code',
        'TypeScript Expert',
        'React & Next.js Advanced'
      ]
    },

    // Projects Section
    projects: {
      title: 'FEATURED PROJECTS',
      subtitle: 'Solutions I delivered and the impacts generated',
      items: [
        {
          number: '01',
          title: 'MARKETPLACE AND SCHEDULING FOR DRIVING SCHOOLS - PILOTAR',
          problem: 'Critical scheduling conflicts and slow queries caused operational problems',
          solution: 'Complete system with marketplace, geolocation, intelligent scheduling and admin panel. Concurrency validations and domain rules with DDD.',
          stack: ['NestJS', 'Next.js', 'C#/.NET', 'Redis', 'Messaging'],
          impact: '~90% reduction in scheduling conflicts and 60-70% performance gain',
          architecture: 'DDD with asynchronous events and Redis cache for high performance'
        },
        {
          number: '02',
          title: 'DIGITAL ACCOUNT AND PAYMENTS - HYPERPAY',
          problem: 'Inconsistency in financial transactions and instability in external integrations',
          solution: 'Complete payment system with PIX, bank slip and transfers. Integrations with banking APIs, Azure (encryption) and SERPRO.',
          stack: ['NestJS', 'Redis', 'Azure', 'Messaging', 'DDD'],
          impact: '~60% reduction in critical transaction failures and greater resilience',
          architecture: 'Event-driven with state validation, retry and fallback for integrations'
        },
        {
          number: '03',
          title: 'CORPORATE DMS SYSTEM - AMPPLI',
          problem: 'Poor search performance and lack of scalability for large volumes',
          solution: 'Complete DMS system with upload, versioning, advanced search and RBAC. Query refactoring and data reorganization.',
          stack: ['Node.js', 'PostgreSQL', 'Redis', 'DDD', 'SOLID'],
          impact: '~80% improvement in response time and support for large data volumes',
          architecture: 'DDD with strategic indexes and role-based access control'
        },
        {
          number: '04',
          title: 'CMS + SSR LANDING PAGE - BRT',
          problem: 'Developer dependency for content changes and weak SEO',
          solution: 'Custom CMS with dynamic text and image editing, section control and direct integration with Next.js SSR frontend.',
          stack: ['Next.js', 'Node.js', 'MySQL', 'Sequelize', 'SSR'],
          impact: 'Full business autonomy and better SEO indexing',
          architecture: 'SSR with clear separation between content and presentation, REST API for CMS'
        },
        {
          number: '05',
          title: 'SIEV BACKEND ARCHITECTURE - DETRAN',
          problem: 'High request volume with need for audit and financial consistency',
          solution: 'Distributed architecture with DDD, event-driven, outbox pattern and async workers for order and payment management.',
          stack: ['NestJS', 'Prisma', 'Redis', 'GCP Pub/Sub', 'Outbox Pattern'],
          impact: 'Highly scalable system with elimination of inconsistencies',
          architecture: 'Event-driven with Redis idempotency, eventual consistency and DLQ for resilience'
        }
      ]
    },

    // Resume Page
    resume: {
      title: 'RESUME',
      subtitle: 'Complete professional experience',
      download: 'DOWNLOAD PDF',
      companies: [
        {
          name: 'Pilotar',
          period: '2023 - Present',
          role: 'Full Stack Developer',
          description: 'Complete system for driving schools, including marketplace, scheduling and management panel',
          achievements: [
            'Developed marketplace with geolocation, driving school search and service/package contracting',
            'Implemented scheduling system with availability control, conflict rules and instructor management',
            'Created administrative panel in C#/.NET with complete operational management of driving schools',
            'Reduced scheduling conflicts by ~90% through concurrency validations and domain rules',
            'Improved performance by ~60-70% using Redis cache and efficient modeling',
            'Implemented event-driven architecture to solve inconsistencies between payment and scheduling',
            'Applied DDD and SOLID to decouple modules and increase scalability'
          ],
          stack: ['Node.js', 'NestJS', 'React', 'Next.js', 'C#/.NET', 'Redis', 'DDD', 'Messaging', 'Vue.js', 'Firebase/Firestore']
        },
        {
          name: 'Hyperdev / HyperPay',
          period: '2021 - 2023',
          role: 'Full Stack Developer',
          description: 'Complete digital account with critical financial operations',
          achievements: [
            'Developed complete payment system (PIX, bank slip, internal transfers)',
            'Integrated banking APIs, Azure for encryption and SERPRO',
            'Implemented notification system via SMS and external events',
            'Reduced transaction inconsistencies by ~60% through state and financial flow validation',
            'Increased system resilience by implementing retry, fallback and integration decoupling',
            'Ensured sensitive data security with encryption and rigorous validation'
          ],
          stack: ['Node.js', 'NestJS', 'Redis', 'Messaging', 'DDD', 'PIX', 'Azure', 'SERPRO', 'Event-Driven', 'PostgreSQL', 'React', 'Typescript']
        },
        {
          name: 'Amppli',
          period: '2020 - 2021',
          role: 'Full Stack Developer',
          description: 'Startup focused on DMS (electronic document management)',
          achievements: [
            'Developed complete DMS system with upload, versioning, advanced search and permission control',
            'Integrated with existing corporate systems',
            'Improved search performance by ~80% through index optimization and query refactoring',
            'Increased scalability to support large document volumes',
            'Implemented RBAC (role-based access control) for greater security'
          ],
          stack: ['Node.js', 'PostgreSQL', 'Redis', 'DDD', 'SOLID', 'React', 'Typescript']
        },
        {
          name: 'Manlog',
          period: '2020',
          role: 'Frontend Developer',
          description: 'Logistics system integrated with DMS',
          achievements: [
            'Optimized screen performance by ~50% through pagination and render optimization',
            'Automated manual processes increasing operational productivity'
          ],
          stack: ['React', 'Vue.js', 'JavaScript']
        },
        {
          name: 'Grupo Jaime Câmara',
          period: '2016 - 2019',
          role: 'DMS Supervisor',
          description: 'First contact with technology, evolution to leadership',
          achievements: [
            'Identified and resolved operational bottlenecks',
            'Implemented process standardization',
            'Improved document traceability'
          ],
          stack: ['Process Management', 'DMS']
        }
      ],
      contact: {
        name: 'LUCAS MORENO DUARTE DE SIQUEIRA',
        role: 'Full Stack Developer | Node.js, NestJS, React, Next.js, C#/.NET | Distributed Systems & Fintech',
        email: 'lucasmorenozod@gmail.com',
        phone: '(62) 98163-8156',
        linkedin: 'linkedin.com/in/lucas-mooreno',
        location: 'Brazil (Remote)'
      },
      skills: {
        title: 'TECHNICAL SKILLS',
        languages: {
          title: 'Languages',
          items: ['JavaScript', 'TypeScript', 'C#']
        },
        frontend: {
          title: 'Frontend',
          items: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS']
        },
        backend: {
          title: 'Backend',
          items: ['Node.js', 'NestJS', '.NET', 'Express']
        },
        database: {
          title: 'Database',
          items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Sequelize']
        },
        architecture: {
          title: 'Architecture',
          items: ['DDD', 'SOLID', 'Design Patterns', 'Event-Driven', 'Microservices', 'Clean Architecture']
        },
        tools: {
          title: 'Tools',
          items: ['Docker', 'GCP Pub/Sub', 'Git', 'REST APIs', 'GraphQL']
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
            role: 'CTO - Hyperpay',
            phone: '62 9991-1222'
          },
          {
            name: 'Rafael Carola',
            role: 'CEO - Amppli',
            phone: '62 8473-5771'
          }
        ]
      }
    },

    // Patterns Page
    patterns: {
      title: 'DESIGN PATTERNS',
      subtitle: 'Architecture patterns I apply in real projects',
      items: [
        {
          category: 'BACKEND',
          name: 'Repository Pattern',
          problem: 'Direct coupling between business logic and data layer',
          solution: 'Creating abstraction layer between domain and persistence',
          example: `// Repository Interface
interface UserRepository {
  findById(id: string): Promise<User>
  save(user: User): Promise<void>
}

// Implementation
class PrismaUserRepository implements UserRepository {
  async findById(id: string) {
    return this.prisma.user.findUnique({ where: { id } })
  }

  async save(user: User) {
    await this.prisma.user.create({ data: user })
  }
}`,
          benefits: ['Testability', 'Decoupling', 'Maintainability']
        },
        {
          category: 'BACKEND',
          name: 'Strategy Pattern',
          problem: 'Multiple payment methods with different logics',
          solution: 'Encapsulate algorithms in interchangeable classes',
          example: `// Strategy Interface
interface PaymentStrategy {
  process(amount: number): Promise<void>
}

// Concrete Strategies
class PixPayment implements PaymentStrategy {
  async process(amount: number) {
    // PIX logic
  }
}

class CreditCardPayment implements PaymentStrategy {
  async process(amount: number) {
    // Credit Card logic
  }
}

// Usage
const strategy = new PixPayment()
await strategy.process(100)`,
          benefits: ['Flexibility', 'Open/Closed Principle', 'Eliminate If/Else']
        },
        {
          category: 'FRONTEND',
          name: 'Composition Pattern',
          problem: 'Props drilling and coupled components',
          solution: 'Component composition with explicit children',
          example: `// Card Component
const Card = ({ children }) => (
  <div className="card">{children}</div>
)

Card.Header = ({ children }) => (
  <header>{children}</header>
)

Card.Body = ({ children }) => (
  <div>{children}</div>
)

// Usage
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
</Card>`,
          benefits: ['Zero Prop Drilling', 'Reusability', 'Flexibility']
        },
        {
          category: 'FRONTEND',
          name: 'Custom Hooks',
          problem: 'Duplicated logic and complex components',
          solution: 'Extract reusable logic into hooks',
          example: `// Custom Hook
function useApi<T>(url: string) {
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(setData)
      .finally(() => setLoading(false))
  }, [url])

  return { data, loading }
}

// Usage
const { data, loading } = useApi('/api/users')`,
          benefits: ['Reusability', 'Separation of Concerns', 'Testability']
        },
        {
          category: 'BACKEND',
          name: 'Factory Pattern',
          problem: 'Complex object creation with multiple variations',
          solution: 'Centralize creation logic in specialized factories',
          example: `// Payment Factory
class PaymentFactory {
  create(type: 'pix' | 'card' | 'boleto') {
    switch(type) {
      case 'pix': return new PixPayment()
      case 'card': return new CardPayment()
      case 'boleto': return new BoletoPayment()
    }
  }
}

// Usage
const payment = factory.create('pix')
await payment.process(amount)`,
          benefits: ['Encapsulation', 'Easy Extension', 'Single Responsibility']
        },
        {
          category: 'BACKEND',
          name: 'Singleton Pattern',
          problem: 'Need for a single globally shared instance',
          solution: 'Ensure a single instance with global access',
          example: `// Database Connection Singleton
class Database {
  private static instance: Database
  private constructor() {}

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database()
    }
    return Database.instance
  }

  query(sql: string) { /* ... */ }
}

// Usage
const db = Database.getInstance()`,
          benefits: ['Instance Control', 'Global Access', 'Lazy Initialization']
        },
        {
          category: 'BACKEND',
          name: 'Adapter Pattern',
          problem: 'Integration with multiple external APIs with different interfaces',
          solution: 'Create adapters that standardize the interface',
          example: `// Payment Adapter
interface PaymentGateway {
  pay(amount: number): Promise<void>
}

class StripeAdapter implements PaymentGateway {
  async pay(amount: number) {
    // Adapts to Stripe API
    return stripe.charge({ amount: amount * 100 })
  }
}

class PayPalAdapter implements PaymentGateway {
  async pay(amount: number) {
    // Adapts to PayPal API
    return paypal.createPayment({ total: amount })
  }
}`,
          benefits: ['Decoupling', 'Reusability', 'Easy Maintenance']
        },
        {
          category: 'BACKEND',
          name: 'Decorator Pattern',
          problem: 'Add dynamic behaviors without modifying classes',
          solution: 'Wrap objects with decorators that add functionalities',
          example: `// Logging Decorator
class LoggerDecorator {
  constructor(private service: Service) {}

  async execute(data: any) {
    console.log('Before:', data)
    const result = await this.service.execute(data)
    console.log('After:', result)
    return result
  }
}

// Usage
const service = new LoggerDecorator(
  new CacheDecorator(new UserService())
)`,
          benefits: ['Open/Closed Principle', 'Composition', 'Single Responsibility']
        },
        {
          category: 'BACKEND',
          name: 'Observer Pattern',
          problem: 'Notify multiple components about state changes',
          solution: 'Implement pub/sub event system',
          example: `// Event Emitter
class OrderService {
  private listeners: Function[] = []

  subscribe(listener: Function) {
    this.listeners.push(listener)
  }

  async create(order: Order) {
    await this.save(order)
    // Notifies all observers
    this.listeners.forEach(l => l(order))
  }
}

// Usage
orderService.subscribe((order) => {
  emailService.sendConfirmation(order)
})`,
          benefits: ['Decoupling', 'Reactivity', 'Extensibility']
        },
        {
          category: 'FRONTEND',
          name: 'Higher Order Component (HOC)',
          problem: 'Reuse logic between React components',
          solution: 'Create components that wrap others adding functionalities',
          example: `// withAuth HOC
function withAuth<P>(Component: React.FC<P>) {
  return (props: P) => {
    const { user } = useAuth()

    if (!user) return <Redirect to="/login" />

    return <Component {...props} />
  }
}

// Usage
const ProtectedPage = withAuth(Dashboard)`,
          benefits: ['Reusability', 'Composition', 'Separation of Concerns']
        },
        {
          category: 'FRONTEND',
          name: 'Higher Order Function (HOF)',
          problem: 'Duplicated logic in utility functions',
          solution: 'Functions that return or receive other functions',
          example: `// Retry HOF
function withRetry<T>(
  fn: () => Promise<T>,
  maxRetries = 3
) {
  return async (): Promise<T> => {
    for (let i = 0; i < maxRetries; i++) {
      try {
        return await fn()
      } catch (error) {
        if (i === maxRetries - 1) throw error
      }
    }
  }
}

// Usage
const fetchWithRetry = withRetry(() =>
  fetch('/api/data').then(r => r.json())
)`,
          benefits: ['Abstraction', 'Reusability', 'Functional Programming']
        },
        {
          category: 'ARCHITECTURE',
          name: 'Clean Architecture - Layers',
          problem: 'Coupling between application layers',
          solution: 'Layer separation with dependency inversion',
          example: `// Domain Layer
interface UserRepository {
  findById(id: string): Promise<User>
}

// Application Layer
class GetUserUseCase {
  constructor(private repo: UserRepository) {}

  async execute(id: string) {
    return this.repo.findById(id)
  }
}

// Infrastructure Layer
class PrismaUserRepository implements UserRepository {
  async findById(id: string) {
    return prisma.user.findUnique({ where: { id } })
  }
}`,
          benefits: ['Testability', 'Maintainability', 'Independence of Frameworks']
        },
        {
          category: 'ARCHITECTURE',
          name: 'DDD - Bounded Contexts',
          problem: 'Monolithic and confusing domain model',
          solution: 'Separate domain into bounded contexts',
          example: `// Bounded Context: Orders
// orders/domain/Order.ts
class Order {
  constructor(
    private items: OrderItem[],
    private customerId: string
  ) {}

  calculateTotal() {
    return this.items.reduce((sum, item) =>
      sum + item.price, 0
    )
  }
}

// Bounded Context: Payments
// payments/domain/Payment.ts
class Payment {
  constructor(
    private orderId: string,
    private amount: number
  ) {}
}`,
          benefits: ['Domain Clarity', 'Scalability', 'Team Autonomy']
        },
        {
          category: 'ARCHITECTURE',
          name: 'SOLID in Frontend',
          problem: 'Components with multiple responsibilities',
          solution: 'Apply SOLID principles to React components',
          example: `// Single Responsibility
// ❌ Wrong
const UserProfile = () => {
  const [user, setUser] = useState()
  useEffect(() => { fetchUser() }, [])

  return <div>{/* UI + logic mixed */}</div>
}

// ✅ Correct
const useUser = (id) => {
  const [user, setUser] = useState()
  useEffect(() => { fetchUser(id) }, [id])
  return user
}

const UserProfile = ({ id }) => {
  const user = useUser(id)
  return <UserView user={user} />
}`,
          benefits: ['Maintainability', 'Testability', 'Reusability']
        },
        {
          category: 'ARCHITECTURE',
          name: 'Event-Driven Architecture',
          problem: 'Synchronous coupling between services',
          solution: 'Asynchronous communication via events',
          example: `// Order Service
class OrderService {
  async create(order: Order) {
    await this.save(order)

    // Publishes event
    await pubsub.publish('orders.created', {
      orderId: order.id,
      total: order.total
    })
  }
}

// Payment Service (subscriber)
pubsub.subscribe('orders.created', async (data) => {
  await paymentService.initiate(
    data.orderId,
    data.total
  )
})`,
          benefits: ['Decoupling', 'Scalability', 'Resilience']
        }
      ]
    },

    // Experiences
    experiences: [
      {
        headerTitle: "01 // MARKETPLACE & SCHEDULING",
        title: "DRIVING SCHOOL SYSTEMS - PILOTAR",
        subtitle: "Complete system including marketplace with geolocation, intelligent scheduling with conflict control and admin panel. 90% reduction in scheduling conflicts and 60-70% performance gain.",
        chip: ["NESTJS", "NEXT.JS", "C#/.NET", "REDIS", "DDD", "MESSAGING", "GELOCATION", "SCHEDULING"],
        iconSrc: '/assets/engf.svg'
      },
      {
        headerTitle: "02 // DIGITAL ACCOUNT & FINTECH",
        title: "PAYMENT SYSTEM - HYPERPAY",
        subtitle: "Complete digital account with PIX, bank slip and transfers. Banking integrations, Azure, SERPRO. Event-driven architecture with messaging. 60% reduction in critical transaction failures.",
        chip: ["PIX", "NESTJS", "REDIS", "EVENT-DRIVEN", "AZURE", "BANKING INTEGRATIONS", "SERPRO"],
        iconSrc: '/assets/finan.svg'
      },
      {
        headerTitle: "03 // CORPORATE DMS",
        title: "ELECTRONIC DOCUMENT MANAGEMENT - AMPPLI",
        subtitle: "Complete system with upload, versioning, advanced search and permission control. 80% improvement in search response time. Integration with corporate systems using RBAC.",
        chip: ["NODE.JS", "POSTGRESQL", "REDIS", "DDD", "SOLID", "REACTJS", "TYPESCRIPT"],
        iconSrc: '/assets/ged.svg'
      },
      {
        headerTitle: "04 // DISTRIBUTED ARCHITECTURE",
        title: "EVENT-DRIVEN & MESSAGING",
        subtitle: "Backend services construction applying DDD, SOLID and event-driven architecture. Integrations with GCP Pub/Sub, queues and outbox pattern ensuring eventual consistency and idempotency.",
        chip: ["DDD", "EVENT-DRIVEN", "GCP PUB/SUB", "IDEMPOTENCY"],
        iconSrc: '/assets/back.svg'
      },
      {
        headerTitle: "05 // PERFORMANCE & OPTIMIZATION",
        title: "HIGH-PERFORMANCE SYSTEMS",
        subtitle: "Query and system optimization under load. Redis cache implementation, strategic indexes and efficient modeling. 60-80% improvements in critical operation response time.",
        chip: ["REDIS", "SQL", "CACHE", "INDEXING"],
        iconSrc: '/assets/engperf.svg'
      },
      {
        headerTitle: "06 // COMPLEX INTEGRATIONS",
        title: "APIS & EXTERNAL SYSTEMS",
        subtitle: "Integration with banking APIs, Azure, SERPRO, ERPs and legacy systems. Implementation of retry, fallback and circuit breaker for greater resilience. Focus on security and encryption of sensitive data.",
        chip: ["REST", "AZURE", "SERPRO", "CIRCUIT BREAKER"],
        iconSrc: '/assets/sis.svg'
      },
      {
        headerTitle: "07 // ADMIN PANEL C# .NET",
        title: "MANAGEMENT SYSTEM - PILOTAR",
        subtitle: "Complete C# .NET panel for driving school management. Management of schedules, services, products, candidates, pricing, qualification packages, financial reports and operational control.",
        chip: ["C# .NET", "ENTITY FRAMEWORK", "SQL SERVER", "MVC"],
        iconSrc: '/assets/engf.svg'
      },
      {
        headerTitle: "08 // CLEAN ARCHITECTURE",
        title: "CLEAN & SCALABLE ARCHITECTURE",
        subtitle: "Application of Clean Architecture principles in real projects. Layer separation (Domain, Application, Infrastructure), dependency inversion and testable code with high cohesion and low coupling.",
        chip: ["CLEAN ARCHITECTURE", "DOMAIN", "INFRASTRUCTURE", "PORTS & ADAPTERS"],
        iconSrc: '/assets/back.svg'
      },
      {
        headerTitle: "09 // ADVANCED FRONTEND",
        title: "REACT & NEXT.JS ADVANCED",
        subtitle: "Development of SPAs and SSR/SSG applications with React and Next.js. Server Components, Streaming, ISR, advanced composition, custom hooks, HOCs and bundle optimization. Performance and SEO as priority.",
        chip: ["REACT", "NEXT.JS", "SSR", "SSG", "PERFORMANCE"],
        iconSrc: '/assets/engf.svg'
      },
      {
        headerTitle: "10 // SYSTEM DESIGN",
        title: "DISTRIBUTED SYSTEMS DESIGN",
        subtitle: "Complex systems architecture design. Load balancing, caching strategies, database sharding, CAP theorem, eventual consistency, message queues and architectural trade-offs for high availability.",
        chip: ["SYSTEM DESIGN", "SCALABILITY", "CAP THEOREM", "SHARDING"],
        iconSrc: '/assets/back.svg'
      }
    ]
  }
};
