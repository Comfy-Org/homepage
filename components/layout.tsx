import React from 'react'
import Head from 'next/head'
import { ThemeModeScript } from 'flowbite-react'
import Header from './Header/Header'
import Container from './common/Container'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import mixpanel from 'mixpanel-browser'

mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN as string, { track_pageview: true, persistence: 'localStorage' })

export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <>
            <Head>
                <title>Comfy Org</title>
                <meta
                    name="description"
                    content="Building the ComfyUI ecosystem."
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="https://storage.googleapis.com/comfy-assets/favicon.ico"
                />
                <ThemeModeScript />
            </Head>
            <Container>
                <Header />
                <main>{children}</main>
            </Container>
            <ToastContainer />
        </>
    )
}
