import { MainLayout } from '@/widgets/layouts/main/components/main-layout/main-layout'
import './globals.css'
import '@/application/styles/index.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  )
}
