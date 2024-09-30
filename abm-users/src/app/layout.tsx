import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './globals.css'
import styles from './layout.module.css'         
import Header from "./Organisms/header/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PrimeReactProvider>
          <Header/>
          <main className={styles.main_container}>
          {children}
          </main>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
