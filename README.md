# CaçaPlantão Web

A modern web platform connecting healthcare professionals with shift work opportunities.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/caca-plantao/cacaplantao-web.git

# Navigate to project directory
cd cacaplantao-web

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the application.

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Authentication:** Keycloak (coming soon)
- **State Management:** React Context + Hooks
- **Forms:** React Hook Form (planned)
- **Testing:** Jest + React Testing Library (planned)

## 📁 Project Structure

```
src/
├── app/                  # Next.js app router pages
│   ├── (auth)/          # Authentication routes
│   ├── (dashboard)/     # Protected dashboard routes
│   └── layout.tsx       # Root layout
├── components/          # Reusable components
├── contexts/           # React contexts
├── hooks/              # Custom hooks
├── lib/                # Utility functions
├── styles/            # Global styles
└── types/             # TypeScript types
```

## 🔑 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_KEYCLOAK_URL=http://localhost:8081
NEXT_PUBLIC_KEYCLOAK_REALM=cacaplantao
NEXT_PUBLIC_KEYCLOAK_CLIENT_ID=web
```

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run e2e tests
npm run test:e2e

# Run tests with coverage
npm run test:coverage
```

## 📦 Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, semicolons, etc)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

### Branch Naming Convention

- `feature/*` - New features
- `fix/*` - Bug fixes
- `docs/*` - Documentation updates
- `refactor/*` - Code refactoring
- `test/*` - Test updates

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔄 Changelog

See [CHANGELOG.md](CHANGELOG.md) for all notable changes.
