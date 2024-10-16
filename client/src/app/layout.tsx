//Libraries
import { PrimeReactProvider } from 'primereact/api'
//Styles
import './globals.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import styles from './layout.module.css'
//Components
import Header from './Organisms/header/header'
import Asaid from './Organisms/asaid/asaid'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <PrimeReactProvider>
          <main className={styles.main_container}>
            <Header className={styles.header_cont} />
            <Asaid className={styles.asaid_cont} />
            <article className={styles.content}>{children}</article>
          </main>
        </PrimeReactProvider>
      </body>
    </html>
  )
}
