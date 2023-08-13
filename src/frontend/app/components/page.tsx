import ComponentCard from './component-card'
import apolloClient from '@/lib/apollo-client'
import { gql } from '@apollo/client'
import { Query as ComponentList } from '@/lib/_graphql/graphql'

const COMPONENTS = gql(`
    query GetComponents {
        components {
            name
        }
    }
`)

export default async function Components() {
    const { loading, error, data } = await apolloClient().query<ComponentList>({ query: COMPONENTS })
    return <div>
        { loading && <span>Loading...</span> }
        { error && <span>Something dun goofed</span> }
        { data &&
            <div className='grid grid-cols-8 gap-2'>
                {data.components.map(component => <ComponentCard key={component.name} component={component} />)}
            </div>
        }
    </div>
}