import React from 'react'
import Head from 'next/head'
import { ThemeModeScript } from 'flowbite-react'
import Header from './Header/Header'
import Container from './common/Container'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import mixpanel from 'mixpanel-browser'

mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN as string)

export default function Layout({ children }: React.PropsWithChildren) {


    return (
        <>
            <Head>
                <title>ComfyUI Registry</title>
                <meta
                    name="description"
                    content="Discover and install ComfyUI custom nodes."
                />
                <ThemeModeScript />
            </Head>
            <Container>

                <Header
                    title={'Your Nodes'}
                />
                <main>{children}</main>
            </Container>
            <ToastContainer />
        </>
    )
}
