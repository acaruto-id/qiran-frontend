import Footer from '@/components/Footer'

export const metadata = {
  title: 'Qiran',
  description: 'Wedding Invitation Website'
}

const TemplateLayout = ({
  children
}: {
  children: React.ReactNode
}): React.ReactElement => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default TemplateLayout
