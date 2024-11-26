This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Description

This is an e-commerce platform built with Next.js 14, TypeScript, and GraphQL. The application provides a modern, responsive interface for browsing and interacting with products.

### Key Features

- **Product Listing**
  - Grid-based product display with images, titles, and pricing
  - Real-time search functionality with dynamic filtering
  - Responsive design for optimal viewing on all devices
  - Effective Caching Strategy

- **Product Details**
  - Detailed product views with comprehensive information
  - Requires Authentication

- **Authentication System**
  - Secure user registration and login
  - Protected routes for authenticated users
  - Token-based authentication with GraphQL
  - Tokens stored in the Context API
  - System logout

- **Search Functionality**
  - Real-time product search
  - Cached Results
  - Search suggestions dropdown
  - Ca

### Technical Stack & Libraries

- **React 19**: 
- **Next.js 14**:
- **Typescript**:
- **Tailwind CSS**:
- **Shadcn**: shadcn/ui
- **API**: GraphQL
- **Data Fetching**: Apollo Client + Next.js 


### Scaffolding
```
better-coach
├── app
│   ├── layout.tsx                    # Root layout with providers
│   ├── page.tsx                      # Homepage (Product listing)
│   ├── globals.css                   # Global styles and Tailwind config
│   ├── login
│   │   └── page.tsx                  # Login form and logic
│   ├── register
│   │   └── page.tsx                  # Registration form and logic
│   └── products
│       └── [slug]
│           └── page.tsx              # Individual product view
│
├── components
│   ├── ui                            # Components added form ShadCn
│   │   ├── card.tsx                 
│   │   ├── form.tsx                 
│   │   ├── typography.tsx           
│   │   ├── sheet.tsx                
│   │   ├── table.tsx                
│   │   └── tabs.tsx                 
│   ├── navigation.tsx               # Main navigation bar
│   ├── product-card.tsx             # Product display card
│   ├── search-bar.tsx               # Search with suggestions
│   └── page-title.tsx               # Page title component
│
├── lib
│   ├── graphql
│   │   ├── generated                # Auto-generated types
│   │   ├── queries                  # GraphQL queries
│   │   │   ├── get-landing-products.ts
│   │   │   └── get-product-by-slug.ts
│   │   ├── mutations                # GraphQL mutations
│   │   │   ├── user-login.ts
│   │   │   └── create-user.ts
│   │   ├── apollo-provider.tsx      # Apollo Client setup
│   │   └── server-client.ts         # Server-side GraphQL client
│   ├── auth-context.tsx             # Authentication context
│   ├── utils.ts                     # Utility functions
│   └── require-authentication.ts     # Auth guard HOC
│
├── public
│   └── better-coach-logo-white.svg  # Site logo
│
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
├── next.config.ts                   # Next.js configuration
├── components.json                  # shadcn/ui configuration
├── codegen.ts                       # GraphQL codegen config
└── tailwind.config.ts              # Tailwind CSS config
```
### Getting Started & Adding New Functionalities

1. First, run the development server:

```bash
npm run dev
```
2. Test the queries and mutations you will use using the Apollo Studio Sandbox

```bash
  https://studio.apollographql.com/sandbox/explorer
```

3. Use this Endpoint
```
  https://api-dev.shopi.co.ke/graphql
```

5. Add the queries and mutations you're going to require in the /graphql folder in a Typescript format

6. Run the codegen for generating the typescript

```bash
npm run codegen
```
