import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: 'http://localhost:4000',
    documents: ['./**/*.tsx'],
    generates: {
        './lib/_graphql/': {
            preset: 'client'
        }
    }
}

export default config