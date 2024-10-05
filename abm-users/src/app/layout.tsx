//Libraries
import { PrimeReactProvider } from 'primereact/api'
//Styles
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './globals.css'
import styles from './layout.module.css'
//Components
import Header from './Organisms/header/header'

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
          <Header className={styles.header_cont}/>     
          <aside className={styles.asaid}></aside>     
          <article className={styles.content}>{children}</article>
        </main>
        </PrimeReactProvider>
      </body>
    </html>
  )
}
