export default function MarginContent({
    children
  }: {
    children: React.ReactNode
  }) {
   return <main className="mx-16">
    {children}
   </main> 
}