import React from 'react'
import Image from 'next/image'
import {
    Badge,
    Button,
    Navbar,
    NavbarCollapse,
    NavbarToggle,
} from 'flowbite-react'
import { FaDiscord } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

interface HeaderProps {

}

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <FaGithub {...props} className="text-xl" />
)

const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <FaTwitter {...props} className="text-xl" />
)

const DiscordIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <FaDiscord {...props} className="text-xl" />
)

const Header: React.FC<HeaderProps> = ({ }) => {
    return (
        <Navbar
            fluid
            className="mx-auto p-8"
            style={{
                backgroundColor: 'rgb(17 24 39)',
                paddingLeft: 0,
                paddingRight: 0,
            }}
        >
            <Navbar.Brand href="/">
                <div className="flex gap-1">
                    <Image
                        alt="Comfy Logo"
                        src="https://storage.googleapis.com/comfy-assets/logo.png"
                        width={36}
                        height={36}
                        className="h-6 mr-3 sm:h-9"
                    />
                    <span className="self-center text-xl font-semibold text-white whitespace-nowrap">
                        Comfy Org
                    </span>
                </div>
            </Navbar.Brand>
            {/* <div className="flex items-center gap-2 bg-gray-900 md:order-2">

                <Badge
                    icon={DiscordIcon}
                    color="gray"
                    className="p-3"
                    href="/discord"
                ></Badge>
                <Badge
                    icon={GithubIcon}
                    color="gray"
                    className="p-3"
                    href="https://github.com/comfyanonymous/ComfyUI"
                ></Badge>
                <Badge
                    icon={TwitterIcon}
                    color="gray"
                    className="p-3"
                    href="/twitter"
                ></Badge>


            </div> */}
            <NavbarToggle theme={{ icon: 'h-5 w-5 shrink-0' }} />
            <NavbarCollapse>
                <div className="flex flex-col gap-4 md:flex-row md:gap-2">
                    <div className="flex items-center gap-2 bg-gray-900 md:order-1 self-center">
                        <Badge
                            icon={DiscordIcon}
                            color="gray"
                            className="p-3"
                            href="/discord"
                        ></Badge>
                        <Badge
                            icon={GithubIcon}
                            color="gray"
                            className="p-3"
                            href="https://github.com/comfy-org"
                        ></Badge>
                        <Badge
                            icon={TwitterIcon}
                            color="gray"
                            className="p-3"
                            href="/twitter"
                        ></Badge>
                    </div>
                    <Button
                        href="https://registry.comfy.org"
                        className="bg-gray-800 border-none outline-none"
                    >
                        Registry
                    </Button>
                    <Button
                        href="https://docs.comfy.org"
                        className="bg-gray-800 border-none outline-none"
                    >
                        Docs
                    </Button>
                    <Button
                        href="https://ci.comfy.org"
                        className="bg-gray-800 border-none outline-none"
                    >
                        CI
                    </Button>
                    <Button
                        href="https://blog.comfy.org"
                        className="bg-gray-800 border-none outline-none"
                    >
                        Blog
                    </Button>
                </div>
            </NavbarCollapse>
        </Navbar>
    )
}

export default Header
