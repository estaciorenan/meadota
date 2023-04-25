import '../styles/globals.css'
import type { AppProps } from 'next/app';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import {SessionProvider} from 'next-auth/react'
import Navbar from '../components/navbar/navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Navbar/>
      <Component {...pageProps} />
    </SessionProvider>
  )

}
