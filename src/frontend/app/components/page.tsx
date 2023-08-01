import Link from 'next/link'
import Component from './component'
import ComponentCard from './component-card'

async function getComponents() {
    try {
        const res = await fetch(`${process.env.API_HOST}/component`, { cache: 'no-cache' })
        const data = (await res.json()) as Component[]
        data.forEach((component, index) => {
            const remove = () => data.splice(index, 1)
            if (component.name === undefined) remove()
        })
        return data
    } catch { }
    return null
}

export default async function Components() {
    const components = await getComponents()
    return <div>
        <div className='grid grid-cols-8 gap-2'>
            {components?.map(component => <ComponentCard key={component.name} component={component} />)}
        </div>
        <Link href="/components/new">New</Link>
    </div>
}