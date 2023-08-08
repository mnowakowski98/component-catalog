import Layout from '../_shared/margin-content'
import PageHeader from '../_shared/page-header'

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
    return <Layout>
        <PageHeader title='Components' />
        {children}
    </Layout>
}