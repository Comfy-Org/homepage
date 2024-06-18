import FAQContainer from '@/components/FAQ/FAQContainer'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

const TwitterSVG = () => (
    <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path
            fillRule="evenodd"
            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
            clipRule="evenodd"
        />
    </svg>
)

const GitHubSVG = () => (
    <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
        />
    </svg>
)

const LinkedInSVG = () => (
    <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path
            fillRule="evenodd"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            clipRule="evenodd"
        />
    </svg>
)

const YouTubeSVG = () => (
    <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path
            fillRule="evenodd"
            d="M23.25 6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v10.5a2.25 2.25 0 002.25 2.25h17.25a2.25 2.25 0 002.25-2.25V6.75zm-12 8.25V9.75l5.25 2.625-5.25 2.625z"
            clipRule="evenodd"
        />
    </svg>
)

const RedditSVG = () => (
    <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path
            fillRule="evenodd"
            d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"
            clipRule="evenodd"
        />
    </svg>
)




function Page() {

    return (
        <>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col justify-center items-center">
                    <Image priority width='500' height='500' src='/images/ComfyUI_00000.png' alt="The first image generated with ComfyUI"
                    ></Image>
                    <span className="text-sm text-gray-500 mt-2">
                        The first image generated with ComfyUI
                    </span>
                </div>
                <h1 className="text-[20px] font-bold text-white mt-10">
                    About Us
                </h1>
                <p className="text-[18px] pt-2 text-gray-300">
                    We are a team dedicated to iterate and improve <a className="underline" href="https://github.com/comfyanonymous/ComfyUI">ComfyUI</a>, support the ComfyUI ecosystem with tools like <a className="underline" target="_blank" rel="noreferrer" href="https://github.com/ltdrdata/ComfyUI-Manager">node manager</a>, <a className="underline" target="_blank" rel="noreferrer" href="https://www.comfyregistry.org">node registry</a>, <a className="underline" target="_blank" rel="noreferrer" href="https://github.com/Comfy-Org/comfy-cli">cli</a>, <a className="underline" target="_blank" rel="noreferrer" href="https://comfyci.org">automated testing</a>, and <a className="underline" href="https://comfydocs.org" target="_blank" rel="noreferrer">public documentation</a>.
                </p>
                <h1 className="text-[20px] font-bold text-white">
                    The Vision
                </h1>
                <p className="text-[18px] pt-2 text-gray-300">
                    Open source AI model will win over the long run against closed models and we are at the beginning of it.
                    Yet if open source models can only be utilized by a handful of cloud providers or closed sourced tools, is AI truly democratized?
                    Our core mission is to advance and democratize AI tooling. We believe that the future of AI tooling is open-source and community-driven.
                </p>
                <h1 className="text-[20px] font-bold text-white">
                    The Team
                </h1>
                <div className="text-gray-300">
                    <div className="flex mb-4">
                        <img
                            src="https://github.com/comfyanonymous.png"
                            alt="comfyanonymous"
                            className="w-20 h-20 rounded-full mr-4"
                        />
                        <div>
                            <div className="text-xl font-bold flex items-center">
                                comfyanonymous
                                <div className="ml-2 flex flex-row">
                                    <a
                                        href="https://github.com/comfyanonymous"
                                        className="ml-2"
                                    >
                                        <GitHubSVG />
                                    </a>
                                </div>
                            </div>
                            <p>
                                Comfyanonymous is the creator of ComfyUI and a cofounder of Comfy Org.
                            </p>
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <img
                            src="https://github.com/mcmonkey4eva.png"
                            alt="mcmonkey4eva"
                            className="w-20 h-20 rounded-full mr-4"
                        />
                        <div>
                            <div className="text-xl font-bold flex items-center">
                                mcmonkey4eva
                                <div className="ml-2 flex flex-row">
                                    <a
                                        href="https://github.com/mcmonkey4eva"
                                        className="ml-2"
                                    >
                                        <GitHubSVG />
                                    </a>
                                    <a
                                        href="https://www.reddit.com/user/mcmonkey4eva/submitted/"
                                        className="ml-2"
                                    >
                                        <RedditSVG />
                                    </a>
                                </div>
                            </div>
                            <p>
                                Alex &quot;mcmonkey&quot; Goodwin is the creator of StableSwarmUI.
                                Prior to Comfy Org, Alex was an ML Engineer at Stability AI.
                            </p>
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <img
                            src="https://github.com/ltdrdata.png"
                            alt="Dr.Lt.Data"
                            className="w-20 h-20 rounded-full mr-4"
                        />
                        <div>
                            <div className="text-xl font-bold flex items-center">
                                Dr.Lt.Data
                                <div className="ml-2 flex flex-row">
                                    <a
                                        href="https://github.com/ltdrdata"
                                        className="ml-2"
                                    >
                                        <GitHubSVG />
                                    </a>
                                    <a
                                        href="https://www.youtube.com/@drltdata"
                                        className="ml-2"
                                    >
                                        <YouTubeSVG />
                                    </a>
                                </div>
                            </div>
                            <p>
                                Dr.Lt.Data is the creator and maintainer of the ComfyUI-Manager and the Impact/Inspire Pack.
                                His main areas of interest are ecosystems and applications that effectively utilize ComfyUI.
                            </p>
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <img
                            src="https://github.com/pythongosssss.png"
                            alt="pythongosssss"
                            className="w-20 h-20 rounded-full mr-4"
                        />
                        <div>
                            <div className="text-xl font-bold flex items-center">
                                pythongosssss
                                <div className="ml-2 flex flex-row">
                                    <a
                                        href="https://github.com/pythongosssss"
                                        className="ml-2"
                                    >
                                        <GitHubSVG />
                                    </a>
                                </div>
                            </div>
                            <p>
                                pythongosssss is a major contributor to ComfyUI and the creator of ComfyUI-Custom-Scripts.
                            </p>
                        </div>
                    </div>

                    <div className="flex mb-4">
                        <img
                            src="https://github.com/robinjhuang.png"
                            alt="robinjhuang"
                            className="w-20 h-20 rounded-full mr-4"
                        />
                        <div>
                            <div className="text-xl font-bold flex items-center">
                                robinken
                                <div className="ml-2 flex flex-row">
                                    <a
                                        href="https://github.com/robinjhuang"
                                        className="ml-2"
                                    >
                                        <GitHubSVG />
                                    </a>
                                    <a
                                        href="https://twitter.com/RobinJHuang"
                                        className="ml-2"
                                    >
                                        <TwitterSVG />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/robinjhuang/"
                                        className="ml-2"
                                    >
                                        <LinkedInSVG />
                                    </a>
                                </div>
                            </div>
                            <p>
                                Robin is the creator and maintainer of comfy registry, and really cares about good node standards. Prior to Comfy Org, he was building virtual agents at Google Cloud.
                            </p>
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <img
                            src="https://github.com/yoland68.png"
                            alt="yoland68"
                            className="w-20 h-20 rounded-full mr-4"
                        />
                        <div>
                            <div className="text-xl font-bold flex items-center">
                                yoland68
                                <div className="ml-2 flex flex-row">
                                    <a
                                        href="https://github.com/yoland68"
                                        className="ml-2"
                                    >
                                        <GitHubSVG />
                                    </a>
                                    <a
                                        href="https://twitter.com/yoland_yan"
                                        className="ml-2"
                                    >
                                        <TwitterSVG />
                                    </a>
                                    <a
                                        href="https://www.reddit.com/user/crystal_alpine/submitted/"
                                        className="ml-2"
                                    >
                                        <RedditSVG />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/yolandyan/"
                                        className="ml-2"
                                    >
                                        <LinkedInSVG />
                                    </a>
                                </div>
                            </div>
                            <p>
                                Yoland is the creator of ComfyCLI and maintainer of ComfyCI.
                                Prior to Comfy Org, he was a Search ML engineer at Google and he was a Chromium committer.
                            </p>
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <img
                            src="https://github.com/james03160927.png"
                            alt="james kwon"
                            className="w-20 h-20 rounded-full mr-4"
                        />
                        <div>
                            <div className="text-xl font-bold flex items-center">
                                hongil0316
                                <div className="ml-2 flex flex-row">
                                    <a
                                        href="https://github.com/hongil0316"
                                        className="ml-2"
                                    >
                                        <GitHubSVG />
                                    </a>
                                </div>
                            </div>
                            <p>
                                James is the maintainer of Comfy Registry and works closely w/ @Dr.Lt.Data on improving CLI, Registry and ComfyUI Manager intergration.
                            </p>
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <img
                            src="https://github.com/haohaocreates.png"
                            alt="haohao"
                            className="w-20 h-20 rounded-full mr-4"
                        />
                        <div>
                            <div className="text-xl font-bold flex items-center">
                                haohaocreates
                                <div className="ml-2 flex flex-row">
                                    <a
                                        href="https://github.com/haohaocreates"
                                        className="ml-2"
                                    >
                                        <GitHubSVG />
                                    </a>
                                </div>
                            </div>
                            <p>
                                HaoHao is passionate about connecting w/ creatives and developers in Comfy ecosystem. Prior to Comfy, he ran software conferences and founded an ed-tech startup.
                                He loves dressing up as a &quot;banana man&quot;.
                            </p>
                        </div>
                    </div>
                </div>

                <h1 className="text-[20px] font-bold text-white">
                    Contact Us
                </h1>
                <div className="inline">
                    <span className="text-[18px] pt-2 text-gray-300">
                        You can reach us on:
                    </span>
                    {' '}
                    <span>
                        <Link href="/discord">
                            <a className="text-[18px] text-gray-300 underline hover:text-gray-400">Discord</a>
                        </Link>

                    </span>
                    {' '}
                    <span>
                        <Link href="/matrix">
                            <a className="text-[18px] text-gray-300 underline hover:text-gray-400">Matrix</a>
                        </Link>
                    </span>
                    {' '}
                    <span>
                        <Link href="/twitter">
                            <a className="text-[18px] text-gray-300 underline hover:text-gray-400">Twitter</a>
                        </Link>
                    </span>
                    {' '}
                    <span>
                        <Link href="/blog">
                            <a className="text-[18px] text-gray-300 underline hover:text-gray-400">Blog</a>
                        </Link>
                    </span>
                    {' '}
                    <span>
                        <Link href="mailto:hello@comfy.org">
                            <a className="text-[18px] text-gray-300 underline hover:text-gray-400">Email</a>
                        </Link>
                    </span>

                </div>
                <FAQContainer questions={[{
                    question: "What are your future plans?",
                    answer: "Comfy will continue to adopt state of the art models to stay on the bleeding edge. We also aim to review PRs and address Github issues faster. There is also a need to improve the user experience and developer experience for custom node authors. While we are still iterating on the exact model, we plan share future improvements under Projects on Github. All major changes will begin as a Github Discussion, which will be shared on our Discord and Matrix servers. Once we reach a final design we will add the implementation to a public roadmap. Please follow our twitter, discord or matrix servers for updates."
                },
                {
                    question: "How do you sustain the project?",
                    answer: "We currently do not make any money. We are backed by supporters and investors who are aligned with our vision for developing open-source AI tooling, if you are one, please reach out to us at hello@comfy.org. We do intend to make money in the future."
                },
                {
                    question: "How do you make money?",
                    answer: "We don't yet. We plan to make money through consulting and enterprise support. It's a proven model (e.g. RedHat). If you can build amazing OSS software that's widely adopted as the industry standard, you can finance the core development while empowering an entire ecosystem. We will never hide/close source features behind a paywall or license."
                },
                {
                    question: "How will you address the recent security concerns with ComfyUI?",
                    answer: "Nodes on the registry are semantically versioned and scanned for malicious behavior. While we can't catch everything, we will soon add checks to see if nodes include custom pip wheels, execute arbitrary sys calls or call outside APIs. A human will review flagged nodes. More importantly, when a security concern is found we will ban the node and notify any users who have installed it. This process will be improved over time."
                },
                {
                    question: "What other projects are you working on?",
                    answer: "ComfyUI is an application, a backend, and a developer platform. We invest in tools to make using ComfyUI safe and reliable. We host Comfy Registry, the repository hosting custom nodes. Nodes on the registry are semantically versioned and scanned for malicious behavior. While we can't catch everything, we will soon add checks to see if nodes include custom pip wheels, execute arbitrary sys calls or call outside APIs. We also host a Continuous Integration Testing Suite that tests new commits in Comfy against workflows on various operating systems and GPUs to make Comfy more reliable to use."
                },
                {
                    question: "What are your core principles?",
                    answer: "1. Transparency and communication. 2. Open-source and community-driven. 3. Democratizing AI."
                },
                {
                    question: "What about foundation models?",
                    answer: "Despite the recent turmoil in OSS AI commmunity, there are huge amount of advancement in OSS AI models. We are working closely with OSS model builders to bring the best models to ComfyUI. We also plan to put more resources into AI models in the future."
                },
                {
                    question: "How can I contribute to ComfyUI?",
                    answer: "You can voice your feedback and participate in our discord/matrix channel. If you can also help submitting a bug report or feature request, please create an issue on Github. Many issues are tagged #good-first-issue , which are good for new contributors to Comfy. Otherwise please submit a PR and we will review it. In the near future, we will also introduce a governance structure similar to other OSS projects."
                },
                {
                    question: "How can I stay up to date with Comfy?",
                    answer: "You can follow us on Twitter, join our Discord or Matrix channel."
                }
                ]} />
            </div>
        </>
    )
}

export default Page
