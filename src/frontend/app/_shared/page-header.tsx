interface Props {
    title: string
}

export default function PageHeader({ title }: Props) {
    return <header className="py-4 text-center">
        <h1 className="font-bold text-xl">{title}</h1>
    </header>
}