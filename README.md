# Caça Plantão - Website

Esta é a landing page e aplicação web do serviço Caça Plantão, uma plataforma que conecta médicos a oportunidades de plantão.

## Tecnologias Utilizadas

- [Next.js 15](https://nextjs.org/) - Framework React com suporte a SSR, SSG, e mais
- [TypeScript](https://www.typescriptlang.org/) - JavaScript tipado
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Prisma](https://www.prisma.io/) - ORM para Node.js e TypeScript
- [NextAuth.js](https://next-auth.js.org/) - Autenticação para Next.js
- [Stripe](https://stripe.com/) - Processamento de pagamentos

## Pré-requisitos

- Node.js 20.x ou superior
- PostgreSQL (local ou hospedado)
- Conta Stripe (para processamento de pagamentos)

## Instalação

1. Clone o repositório
```bash
git clone https://github.com/cacaplantao/website.git
cd website
```

2. Instale as dependências
```bash
npm install
```

3. Configure as variáveis de ambiente
```bash
cp .env.example .env
```

4. Edite o arquivo `.env` com suas configurações:
```bash
# Database
DATABASE_URL="postgresql://usuario:senha@localhost:5432/cacaplantao"

# NextAuth
NEXTAUTH_SECRET="chave-secreta-aleatoria" # Em produção, use um valor aleatório seguro
NEXTAUTH_URL="http://localhost:3000"

# Stripe
STRIPE_SECRET_KEY="sk_test_sua_chave"
STRIPE_PUBLISHABLE_KEY="pk_test_sua_chave"
STRIPE_WEBHOOK_SECRET="whsec_sua_chave"

# URLs
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_API_URL="http://localhost:3000/api"

# SEO e Analytics (opcional)
NEXT_PUBLIC_GOOGLE_ANALYTICS="G-XXXXXXXX"
```

5. Execute as migrações do Prisma para criar o banco de dados
```bash
npx prisma migrate dev
```

6. Inicialize o servidor de desenvolvimento
```bash
npm run dev
```

7. Acesse a aplicação em [http://localhost:3000](http://localhost:3000)

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com Turbopack
- `npm run build` - Compila a aplicação para produção
- `npm run start` - Inicia a aplicação compilada
- `npm run lint` - Executa o linter

## Estrutura do Projeto

```
src/
├── app/           # Rotas da aplicação Next.js
├── components/    # Componentes React reutilizáveis
├── data/          # Dados mock, constantes e configurações
├── generated/     # Arquivos gerados pelo Prisma
├── hooks/         # Custom React hooks
├── lib/           # Bibliotecas e inicialização
└── utils/         # Funções utilitárias
```

## Deploy

A aplicação está configurada para ser facilmente implantada na Vercel:

```bash
npm run build
vercel --prod
```

Para outros provedores, consulte a [documentação de implantação do Next.js](https://nextjs.org/docs/deployment).

## Contribuição

1. Faça um fork do projeto
2. Crie sua feature branch (`git checkout -b feature/amazing-feature`)
3. Commit suas mudanças (`git commit -m 'feat: add some amazing feature'`)
4. Push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

## Licença

Este projeto é protegido por direitos autorais e propriedade da Caça Plantão.
