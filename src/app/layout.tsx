import { montserrat } from '@/fonts'
import '@/styles/globals.css'

export const metadata = {
  title: 'Qiran',
  description: 'Wedding Invitation Website'
}

const RootLayout = ({
  children
}: {
  children: React.ReactNode
}): React.ReactElement => {
  return (
    <html lang='en'>
      <body style={montserrat.style}>{children}</body>
    </html>
  )
}

export default RootLayout
