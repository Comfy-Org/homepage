import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import FlowBiteThemeProvider from '../components/flowbite-theme'

export default function App({ Component, pageProps }: AppProps) {
    return (

        <FlowBiteThemeProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </FlowBiteThemeProvider>
    )
}
