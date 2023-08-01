import Component from './component'
import ComponentCard from './component-card'

async function getComponents() {
    const res = await fetch('http://localhost:5187/components', { cache: 'no-cache' })
    const data = (await res.json()) as Component[]
    return data
}

export default async function Components() {
    const components = await getComponents()
    return <div className='grid grid-cols-8 gap-2'>
        {components.map(component => <ComponentCard key={component.name} component={component} />)}
    </div>
}