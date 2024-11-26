This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Description

This is an e-commerce platform built with Next.js 14, TypeScript, and GraphQL. The application provides a modern, responsive interface for browsing and interacting with products.

### Key Features

- **Product Listing**
  - Grid-based product display with images, titles, and pricing
  - Real-time search functionality with dynamic filtering
  - Responsive design for optimal viewing on all devices
  - Mobile First Design
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
  - Search Terms debouncing for triggering less requests to the server

### Technical Stack & Libraries

- **React 19**
- **Next.js 14**
- **Typescript**:
- **Tailwind CSS**
- **Shadcn**: shadcn/ui
- **API**: GraphQL
- **Data Fetching**: Apollo Client (Browser) + Next.js (Server Components)


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
3. Use this Endpoint for testing
```
  https://api-dev.shopi.co.ke/graphql
```
5. Add the queries and mutations you're going to require in the /graphql folder in a Typescript format
6. Run the codegen for generating the typescript files for your queries & mutations
```bash
npm run codegen
```
7. Add ShadCn components under /components/ui and custom components under /components
8. Determine if your new page it's gonna be server side or client side
   - In case your component it's client side please use Apollo Client
   - In case your component it's server side please use the Server Fetcher that leverages the caching functionality of Next.js
9. If your new page requires auththentication please use the Auth Context & and the High Order Compoment for Protecting the route

### Deployments

This repository it's connected to Vercel, you will find here the live environment:

```bash
https://better-coach-xxuf.vercel.app/
```

### Considerations
Why not using Apollo Client also in the server ?

There is a experimental library, that we wouldn't like to introduce in a enterprise level solution.

The experimental Apollo Client library for App Router was created to solve three main problems:

** Cache Synchronization **
Regular Apollo Client has no way to properly synchronize its cache between server and client in the App Router
The experimental version introduces special cache mechanisms (NextSSRInMemoryCache) that can be serialized and transferred from server to client correctly

** RSC Compatibility **
Standard Apollo Client uses React Context which doesn't work in Server Components
The experimental version provides getClient() that works directly in Server Components without Context
This allows for proper data fetching in the server-first approach of App Router

** Hydration Mismatch **
Regular Apollo Client struggles with Next.js 13+'s streaming and partial hydration
The experimental version handles the hydration process specifically for App Router's architecture
It ensures the server-rendered content matches what the client expects during hydration
In essence, it's an attempt to bridge the architectural gap between Apollo Client's traditional client-side focused approach and Next.js App Router's server-first paradigm.

