import mixpanel from 'mixpanel-browser'
import Head from 'next/head'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './Header/Header'
import Container from './common/Container'

mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN as string, { track_pageview: true, persistence: 'localStorage' })


export default function Layout({ children }: React.PropsWithChildren) {
    useEffect(()=>{
        if(typeof window === 'undefined') return; // skip ssr
        mixpanel.track('homepage-browse-event', {pathname: location.pathname})
    },[])
    return (
        <>
            <Head>
                <title>Comfy Org</title>
                <meta
                    name="description"
                    content="Creators of ComfyUI. We are a team dedicated to iterate and improve ComfyUI, support the ComfyUI ecosystem with tools like node manager, node registry, cli, automated testing, and public documentation."
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="https://storage.googleapis.com/comfy-assets/favicon.ico"
                />
                <meta property="og:title" content="Comfy Org" />
                <meta property="og:description" content="Creators of ComfyUI. We are a team dedicated to iterate and improve ComfyUI, support the ComfyUI ecosystem with tools like node manager, node registry, cli, automated testing, and public documentation." />
                <meta property="og:image" content="/images/comfyui_screenshot.png" />
                <meta property="og:image:alt" content="Comfy Org Banner" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://comfy.org" />
                <meta property="og:site_name" content="Comfy Org" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Comfy Org" />
                <meta name="twitter:description" content="Creators of ComfyUI. We are a team dedicated to iterate and improve ComfyUI, support the ComfyUI ecosystem with tools like node manager, node registry, cli, automated testing, and public documentation." />
                <meta name="twitter:image" content="/images/comfyui_screenshot.png" />
                <meta name="twitter:image:alt" content="Comfy Org Banner" />
            </Head>
            <Container>
                <Header />
                <main>{children}</main>
            </Container>
            <ToastContainer />
        </>
    )
}
