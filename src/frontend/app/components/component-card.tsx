import { Component } from '../../lib/_graphql/graphql'

interface Props {
    component: Component
}

export default function ComponentCard(props: Props) {
    const { component } = props
    return <div className='flex flex-row gap-2'>
        <h3>{component.name}</h3>
    </div>
}