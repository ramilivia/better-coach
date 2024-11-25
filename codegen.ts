import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://api-dev.shopi.co.ke/graphql',
  documents: ['lib/graphql/queries/**/*.ts'],
  generates: {
    './lib/graphql/generated/': {
      preset: 'client',
    }
  }
}

export default config