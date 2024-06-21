import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useState, useEffect } from 'react'
import classNames from 'classnames'
import { Link as ScrollLink } from 'react-scroll'

import AppLayout from '@/components/Layouts/AppLayout'
import Quote from '@/components/Quote'
import Accordion from '@/components/Accordion'
import LinkView from '@/components/LinkView'
import Video from '@/components/Video'
import {
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from '@heroicons/react/24/solid'
import ReactPlayer from 'react-player'

const slides = [
    {
        text: (
            <>
                Designing a framework of the journey before you start
                {/* <div className="text-secondary text-lg font-extralight">
                    Clive Meanwell & Nancye Green
                </div> */}
            </>
        ),
        img: '/images/thumbnails/c-n-y.png',
        url: 'https://player.vimeo.com/video/898794230?h=343beb0cae&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    },
    {
        text: (
            <div className="gap-2">
                Our Framework creates empowerment, and it’s not optional
                <div className="text-secondary text-lg font-extralight">
                    Clive Meanwell & Nancye Green
                </div>
                {/* <div className="text-light-grey">(continued)</div> */}
            </div>
        ),
        img: '/images/thumbnails/c-n-y.png',
        url: 'https://player.vimeo.com/video/898794247?h=7981c04f1d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    },
]

const Framework = () => {
    const router = useRouter()
    const quote = {
        content: (
            <>
                Leaders need to rely on the power of clear mission... to achieve
                outstanding results
            </>
        ),
        author: 'Jacob Bronowski',
    }

    const [slideIndex, setSlideIndex] = useState(0)
    const [play, setPlay] = useState(false)
    const [open, setOpen] = useState()
    const [sectionOpen, setSectionOpen] = useState()
    const [accordions, setAccordions] = useState([])
    const [sections, setSections] = useState([])
    const [isSlider, setSlider] = useState(true)

    const playVideo = (link, slider = false) => {
        setPlay(link)
        setSlider(slider)
    }

    const handleSectionOpen = tab => {
        const index = sections.findIndex(v => v === tab)
        if (index > -1) {
            const currentSections = sections
            currentSections.splice(index, 1)
            setSections([...currentSections])
        } else {
            setSections([...sections, tab])
        }
    }

    const handleOpen = index => {
        const currentIndex = accordions.findIndex(v => v === index)
        if (currentIndex > -1) {
            const currentAccordions = accordions
            currentAccordions.splice(currentIndex, 1)
            setAccordions([...currentAccordions])
        } else {
            setAccordions([...accordions, index])
        }
    }

    const handleArrow = next => {
        let nextSlideIndex =
            (next ? slideIndex + 1 : slideIndex - 1) % slides.length
        if (nextSlideIndex < 0) nextSlideIndex += slides.length
        setSlideIndex(nextSlideIndex)
        setPlay(slides[nextSlideIndex].url, true)
    }

    // useEffect(() => {
    //     if (play) return
    //     const interval = setInterval(
    //         () => setSlideIndex((slideIndex + 1) % slides.length),
    //         4000,
    //     )
    //     return () => clearInterval(interval)
    // }, [slideIndex, play])

    useEffect(() => {
        const tab = router.query.tab
        setOpen(tab || 0)
        setAccordions([Number(tab || 0)])
        if (tab !== undefined) {
            const tabToDivId = {
                0: 'view',
                1: 'ideation',
                2: 'core_business_process',
                3: 'strategy',
                4: 'competitive_strategy',
                5: 'human_strategy',
                6: 'financial_strategy',
                7: 'communications_strategy',
            }

            const targetDivId = tabToDivId[tab]

            if (targetDivId) {
                const targetDiv = document.getElementById(targetDivId)
                if (targetDiv) {
                    targetDiv.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    })
                }
            }
        }
    }, [router.query.tab])

    return (
        <AppLayout>
            <Head>
                <title>Carmenta - Project</title>
            </Head>

            <Quote
                content={quote.content}
                author={quote.author}
                color="yellow"
                slides={slides}
                slideIndex={slideIndex}
                setSlideIndex={setSlideIndex}
                sliderLeftClassName="2xl:-ml-[1.4rem] ml-6"
                relative={false}
                setPlay={() => playVideo(slides[slideIndex].url, true)}>
                <div className="relative">
                    <div>
                        <div className="text-white font-sans text-xl xl:mt-40 mt-8 text-center md:text-left sm:-ml-28 -ml-6 md:ml-0">
                            {/* <div className="font-medium">
                                Using the Innovation Framework as a Foundation
                            </div> */}
                            <div className="w-fit mx-auto md:ml-0 mt-2 md:mt-0 mx-4 sm:mx-0">
                                {slides.map((slide, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setSlideIndex(index)}
                                        className="font-extralight font-helvetica flex gap-2 cursor-pointer">
                                        <button
                                            className={classNames(
                                                'w-2.5 h-2.5 min-w-[10px] rounded-full border border-white mt-2',
                                                slideIndex === index &&
                                                    'bg-white',
                                            )}
                                        />
                                        <div className="font-medium text-left">
                                            {slide.text}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <ScrollLink
                        to="view"
                        smooth={true}
                        className="hidden sm:block">
                        <div className="w-fit xl:mt-[132px] mt-10 cursor-pointer mx-auto xl:ml-0 sm:pr-28">
                            <div className="text-xl">Scroll Down</div>
                            <ChevronDownIcon className="w-4 h-4 mx-auto" />
                        </div>
                    </ScrollLink>
                </div>
            </Quote>

            <div
                id="view"
                className="max-w-5xl mx-auto grid grid-cols-4 sm:grid-cols-5 px-3 mt-44">
                <div className="text-xl col-span-5">Innovation Framework</div>
                <hr className="my-2 col-span-4" />
                <div className="sm:text-5xl text-3xl !leading-snug mt-4 col-span-4 font-thin">
                    We believe there is an alchemy that leads to success:
                    <span className="font-bold"> clear purpose</span>,{' '}
                    <span className="font-bold">shared mindset</span>, and{' '}
                    <span className="font-bold">tools</span> that lead to deep
                    understanding and multidisciplinary collaboration.
                </div>
                <div className="sm:col-span-4 col-span-5">
                    <div className="sm:flex mt-4 gap-2">
                        <p className="text-lg leading-relaxed mb-4">
                            We understand that unlocking value in important
                            assets is not only a matter of technology and
                            process – it relies, substantially, on the
                            purposefulness, capability, and motivation of our
                            people. We are committed to efficient product
                            development using our codified frameworks, methods,
                            and tools. Our success depends on the efficient
                            transfer of knowledge and experience in support of
                            our leadership teams.
                        </p>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="mt-6">
                        <img
                            src="/images/Metsera_InnovationFramework_240503_02_Portal.jpg"
                            className="w-full"
                        />
                    </div>
                </div>
                <div className="pl-12 mt-8 sm:block hidden">
                    <LinkView
                        download
                        content="Download the Innovation Framework one-sheet"
                    />
                </div>

                <div id="ideation" className="col-span-5 mt-8">
                    <Accordion
                        title="Ideation"
                        className="font-bold"
                        open={open == 1}
                        sectionOpen={() => handleOpen(1)}
                        root
                        color="orange">
                        <div className="my-2">
                            <Accordion
                                details
                                title="The general situation"
                                color="orange">
                                <div className="grid grid-cols-5">
                                    <div className="sm:col-span-4 col-span-5 bg-white border-x border-orange border-b">
                                        <div className="flex justify-between px-6 pb-12">
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div>
                                                    <div className="text-2xl text-orange font-bold mt-4 mb-2">
                                                        The circumstances the
                                                        world is in
                                                    </div>
                                                    <ul className="text-light-grey text-xl font-thin list-disc pl-4 space-y-4">
                                                        <li>
                                                            Obesity is a growing
                                                            driver of colossal
                                                            health & economic
                                                            burden globally
                                                        </li>
                                                        <li>
                                                            Current remedies
                                                            ineffective, too
                                                            expensive,
                                                            inaccessible
                                                        </li>
                                                        <li>
                                                            Discovery of
                                                            GLP-1RAs has opened
                                                            new opportunities
                                                        </li>
                                                    </ul>
                                                </div>

                                                <ul className="text-light-grey text-xl font-thin list-disc pl-4 space-y-4">
                                                    <li>
                                                        Current market is
                                                        dominated by a duopoly
                                                        at the high-end
                                                    </li>
                                                    <li>
                                                        Disruptive innovation is
                                                        an attractive
                                                        opportunity
                                                    </li>
                                                </ul>
                                            </div>
                                            <img
                                                src="/images/PHP_Portal_ID_231128_33-12.jpg"
                                                width={160}
                                                className="shadow-lg h-fit sm:block hidden ml-4"
                                            />
                                        </div>

                                        <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                            <div>
                                                <Video
                                                    size="sm"
                                                    color="yellow"
                                                    img="/images/thumbnails/c-y.png"
                                                    playVideo={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/898793821?h=8e33a67ba8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div
                                                className="cursor-pointer"
                                                onClick={() =>
                                                    playVideo(
                                                        'https://player.vimeo.com/video/898793821?h=8e33a67ba8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                    )
                                                }>
                                                <div className="font-bold">
                                                    Our strategy deploys
                                                    disruptive innovation
                                                </div>
                                                <div className="font-thin">
                                                    Clive Meanwell
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                            <div>
                                                <Video
                                                    size="sm"
                                                    color="yellow"
                                                    img="/images/thumbnails/sm-y.png"
                                                    playVideo={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/914642610?h=f64d6436e7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div
                                                className="cursor-pointer"
                                                onClick={() =>
                                                    playVideo(
                                                        'https://player.vimeo.com/video/914642610?h=f64d6436e7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                    )
                                                }>
                                                <div className="font-bold">
                                                    We have changed as a
                                                    society, and it’s moving in
                                                    the wrong direction
                                                </div>
                                                <div className="font-thin">
                                                    Steve Marso
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Accordion>
                        </div>
                        <div className="my-2">
                            <Accordion details title="Purpose" color="orange">
                                <div className="grid grid-cols-5">
                                    <div className="sm:col-span-4 col-span-5 bg-white border-x border-orange border-b">
                                        <div className="flex justify-between px-6 pb-12">
                                            <div>
                                                <div className="text-2xl text-orange font-bold mt-4 mb-2">
                                                    Why are we doing this?
                                                </div>
                                                <div className="text-light-grey font-thin text-xl">
                                                    Reduce the physical,
                                                    emotional & economic burdens
                                                    of obesity — thereby
                                                    creating value for all
                                                    stakeholders
                                                </div>
                                            </div>
                                            <img
                                                src="/images/PHP_Portal_ID_231128_33-13.jpg"
                                                width={160}
                                                className="shadow-lg h-fit sm:block hidden"
                                            />
                                        </div>

                                        <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                            <div>
                                                <Video
                                                    size="sm"
                                                    color="yellow"
                                                    img="/images/thumbnails/c-y.png"
                                                    playVideo={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/898793837?h=9dc505896b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div
                                                className="cursor-pointer"
                                                onClick={() =>
                                                    playVideo(
                                                        'https://player.vimeo.com/video/898793837?h=9dc505896b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                    )
                                                }>
                                                <div className="font-bold">
                                                    The ideas we believe in
                                                </div>
                                                <div className="font-thin">
                                                    Clive Meanwell
                                                </div>
                                            </div>
                                        </div>
                                        <hr />

                                        <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                            <div>
                                                <Video
                                                    size="sm"
                                                    color="yellow"
                                                    img="/images/thumbnails/s-t-y.png"
                                                    playVideo={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/914770742?h=a58e1ac448&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div
                                                className="cursor-pointer"
                                                onClick={() =>
                                                    playVideo(
                                                        'https://player.vimeo.com/video/914770742?h=a58e1ac448&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                    )
                                                }>
                                                <div className="font-bold">
                                                    What excites you about the
                                                    future?
                                                </div>
                                                <div className="font-thin">
                                                    Steve Bloom & Tamsin Berry
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Accordion>
                        </div>
                        <div className="my-2">
                            <Accordion details title="Vision" color="orange">
                                <div className="grid grid-cols-5">
                                    <div className="sm:col-span-4 col-span-5 bg-white border-x border-orange border-b">
                                        <div className="flex justify-between px-6 pb-12">
                                            <div>
                                                <div className="text-2xl text-orange font-bold mt-4 mb-2">
                                                    What does the future look
                                                    like?
                                                </div>
                                                <div className="text-light-grey font-thin text-xl">
                                                    Consumers – particularly
                                                    those with health risk from
                                                    obesity – have
                                                    <br />a great experience
                                                    losing weight, sustaining it
                                                    and improving their lives
                                                    <br />
                                                    at aﬀordable cost long term
                                                </div>
                                            </div>
                                            <img
                                                src="/images/PHP_Portal_ID_231128_33-14.jpg"
                                                width={160}
                                                className="shadow-lg h-fit sm:block hidden"
                                            />
                                        </div>
                                        <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                            <div>
                                                <Video
                                                    size="sm"
                                                    color="yellow"
                                                    img="/images/thumbnails/c-y.png"
                                                    playVideo={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/898793851?h=2736f57a4d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div
                                                className="cursor-pointer"
                                                onClick={() =>
                                                    playVideo(
                                                        'https://player.vimeo.com/video/898793851?h=2736f57a4d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                    )
                                                }>
                                                <div className="font-bold">
                                                    Trust equals competency,
                                                    consistency, transparency,
                                                    and mutuality
                                                </div>
                                                <div className="font-thin">
                                                    Clive Meanwell
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Accordion>
                        </div>
                        <div className="my-2">
                            <Accordion
                                details
                                title="Goals by 2050"
                                color="orange">
                                <div className="grid grid-cols-5">
                                    <div className="sm:col-span-4 col-span-5 bg-white border-x border-orange border-b">
                                        <div className="flex justify-between px-6 pb-12">
                                            <div>
                                                <div className="text-2xl text-orange font-bold my-4">
                                                    How will we know we got
                                                    there?
                                                </div>
                                                <div className="text-light-grey ml-6 text-xl">
                                                    <ul className="list-disc space-y-4 font-thin text-xl">
                                                        <li>
                                                            Reverse or prevent
                                                            5M cases of T2DM
                                                        </li>
                                                        <li>
                                                            Reduce 25 million
                                                            life years lost per
                                                            year
                                                        </li>
                                                        <li>
                                                            Reduce direct health
                                                            costs by $100B
                                                        </li>
                                                        <li>
                                                            While generating
                                                            $50B shareholder
                                                            value
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <img
                                                src="/images/PHP_Portal_ID_231128_33-15.jpg"
                                                width={160}
                                                className="shadow-lg h-fit sm:block hidden"
                                            />
                                        </div>

                                        <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                            <div>
                                                <Video
                                                    size="sm"
                                                    color="yellow"
                                                    img="/images/thumbnails/p-y.png"
                                                    playVideo={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/914771766?h=ff3342b5e4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div
                                                className="cursor-pointer"
                                                onClick={() =>
                                                    playVideo(
                                                        'https://player.vimeo.com/video/914771766?h=ff3342b5e4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                    )
                                                }>
                                                <div className="font-bold">
                                                    Our goal is to reduce the
                                                    burden of obesity
                                                </div>
                                                <div className="font-thin">
                                                    Peter Wijngaard
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Accordion>
                        </div>
                        <div className="my-2">
                            <Accordion
                                details
                                title="Capabilities that matter"
                                color="orange">
                                <div className="grid grid-cols-5">
                                    <div className="sm:col-span-4 col-span-5 bg-white border-x border-orange border-b">
                                        <div className="flex justify-between px-6 pb-12">
                                            <div>
                                                <div className="text-2xl text-orange font-bold my-4">
                                                    What do we need to be really
                                                    good at?
                                                </div>
                                                <div className="text-light-grey ml-6 text-xl">
                                                    <ul className="list-disc font-thin space-y-4">
                                                        <li>
                                                            Disruptive
                                                            innovation
                                                        </li>
                                                        <li>
                                                            Efficient,
                                                            multidisciplinary
                                                            evidence generation
                                                        </li>
                                                        <li>
                                                            Low-cost high-scale
                                                            manufacturing
                                                        </li>
                                                        <li>
                                                            Delivering great
                                                            consumer experiences
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <img
                                                src="/images/PHP_Portal_ID_231128_33-16.jpg"
                                                width={160}
                                                className="shadow-lg h-fit sm:block hidden"
                                            />
                                        </div>

                                        <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                            <div>
                                                <Video
                                                    size="sm"
                                                    color="yellow"
                                                    img="/images/thumbnails/p-y.png"
                                                    playVideo={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/914778768?h=e711d60778&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div
                                                className="cursor-pointer"
                                                onClick={() =>
                                                    playVideo(
                                                        'https://player.vimeo.com/video/914778768?h=e711d60778&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                    )
                                                }>
                                                <div className="font-bold">
                                                    Organizing teams around
                                                    projects
                                                </div>
                                                <div className="font-thin">
                                                    Peter Wijngaard
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                            <div>
                                                <Video
                                                    size="sm"
                                                    color="yellow"
                                                    img="/images/thumbnails/rm-y.png"
                                                    playVideo={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/914779891?h=74ed48409d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div
                                                className="cursor-pointer"
                                                onClick={() =>
                                                    playVideo(
                                                        'https://player.vimeo.com/video/914779891?h=74ed48409d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                    )
                                                }>
                                                <div className="font-bold">
                                                    We have the products, and we
                                                    have the resources
                                                </div>
                                                <div className="font-thin">
                                                    Reshma Malviya
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Accordion>
                        </div>
                        <div className="my-2">
                            <Accordion details title="Quality" color="orange">
                                <div className="grid grid-cols-5">
                                    <div className="sm:col-span-4 col-span-5 bg-white border-x border-orange border-b">
                                        <div className="flex justify-between px-6 pb-12">
                                            <div>
                                                <div className="text-2xl text-orange font-bold mt-4 mb-2">
                                                    How do we show we care?
                                                </div>
                                                <div className="text-light-grey text-xl font-thin">
                                                    We care & our stakeholders &
                                                    partners experience that
                                                    caring
                                                </div>
                                            </div>
                                            <img
                                                src="/images/PHP_Portal_ID_231128_33-17.jpg"
                                                width={160}
                                                className="shadow-lg h-fit sm:block hidden"
                                            />
                                        </div>

                                        <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                            <div>
                                                <Video
                                                    size="sm"
                                                    color="yellow"
                                                    img="/images/thumbnails/c-y.png"
                                                    playVideo={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/898793914?h=88ee01382c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div
                                                className="cursor-pointer"
                                                onClick={() =>
                                                    playVideo(
                                                        'https://player.vimeo.com/video/898793914?h=88ee01382c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                    )
                                                }>
                                                <div className="font-bold">
                                                    Quality is caring
                                                </div>
                                                <div className="font-thin">
                                                    Clive Meanwell
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Accordion>
                        </div>
                        <div className="my-2">
                            <Accordion details title="Identity" color="orange">
                                <div className="grid grid-cols-5">
                                    <div className="sm:col-span-4 col-span-5 bg-white border-x border-orange border-b">
                                        <div className="flex justify-between px-6 pb-12">
                                            <div>
                                                <div className="text-2xl text-orange font-bold mt-4 mb-2">
                                                    What makes us Metsera, not
                                                    another?
                                                </div>
                                                <div className="text-light-grey ml-6 text-xl">
                                                    <ul className="list-disc font-thin space-y-4">
                                                        <li>
                                                            We are empathetic,
                                                            data-driven,
                                                            disruptive &
                                                            trustworthy
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <img
                                                src="/images/PHP_Portal_ID_231128_33-18.jpg"
                                                width={160}
                                                className="shadow-lg h-fit sm:block hidden"
                                            />
                                        </div>

                                        <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                            <div>
                                                <Video
                                                    size="sm"
                                                    color="yellow"
                                                    img="/images/thumbnails/w-y.png"
                                                    playVideo={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/898794534?h=bf0a28f3b5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div
                                                className="cursor-pointer"
                                                onClick={() =>
                                                    playVideo(
                                                        'https://player.vimeo.com/video/898794534?h=bf0a28f3b5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                    )
                                                }>
                                                <div className="font-bold">
                                                    We’re biased to do things
                                                    differently
                                                </div>
                                                <div className="font-thin">
                                                    Whit Bernard
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                            <div>
                                                <Video
                                                    size="sm"
                                                    color="yellow"
                                                    img="/images/thumbnails/t-n-y.png"
                                                    playVideo={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/914778782?h=140a9e5f13&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div
                                                className="cursor-pointer"
                                                onClick={() =>
                                                    playVideo(
                                                        'https://player.vimeo.com/video/914778782?h=140a9e5f13&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                    )
                                                }>
                                                <div className="font-bold">
                                                    We aspire to be empathetic
                                                    and trustworthy
                                                </div>
                                                <div className="font-thin">
                                                    Tamsin Berry & Nancye Green
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Accordion>
                        </div>
                    </Accordion>

                    <div id="core_business_process" className="mt-8">
                        <Accordion
                            title="Core Business Process"
                            className="bg-yellow font-bold"
                            open={open == 2}
                            sectionOpen={() => handleOpen(2)}
                            root
                            color="yellow"
                            videos={[
                                'https://player.vimeo.com/video/898794464?h=a0e180663b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                'https://player.vimeo.com/video/898794576?h=d572d75532&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                'https://player.vimeo.com/video/898794585?h=fffc6d03f1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                            ]}
                            videoTitles={[
                                'Disruptive innovation',
                                'Introduction to the core business process',
                                'Continuation of the core business process',
                            ]}
                            videoDescriptions={[
                                'Whit Bernard',
                                'Shannon Armstrong & Whit Bernard',
                                'Shannon Armstrong & Whit Bernard',
                            ]}
                            thumbnails={[
                                '/images/thumbnails/w-y.png',
                                '/images/thumbnails/s-w-y.png',
                                '/images/thumbnails/s-w-y.png',
                            ]}
                            playVideo={playVideo}>
                            <div className="my-2">
                                <Accordion
                                    details
                                    title="Identify Needs"
                                    color="yellow"
                                    sectionOpen={() => handleSectionOpen(1)}>
                                    <div className="grid grid-cols-5">
                                        <div className="sm:col-span-4 col-span-5 bg-white border-x border-yellow border-b gap-4">
                                            <div className="flex justify-between px-6 pb-12">
                                                <div>
                                                    <div className="grid sm:grid-cols-2 gap-4">
                                                        <div>
                                                            <div className="text-xl text-orange font-bold my-2">
                                                                A) What is the
                                                                job to be done?
                                                            </div>
                                                            <div className="text-light-grey ml-6 text-xl">
                                                                <ul className="list-disc font-thin space-y-2">
                                                                    <li>
                                                                        Reduce
                                                                        obesity-inducing
                                                                        intake
                                                                    </li>
                                                                    <li>
                                                                        Change
                                                                        life-long
                                                                        behaviors
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="text-xl text-orange font-bold mt-6 sm:mt-2 my-2">
                                                                B) What are the
                                                                specific
                                                                innovation
                                                                opportunities?
                                                            </div>
                                                            <div className="text-light-grey ml-6 text-xl">
                                                                <ul className="list-disc font-thin space-y-2">
                                                                    <li>
                                                                        Reduced
                                                                        disutility
                                                                    </li>
                                                                    <li>
                                                                        Scaling
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="text-xl text-orange font-bold my-2">
                                                                C) What is the
                                                                customer
                                                                (including
                                                                consumer) value
                                                                proposition?
                                                            </div>
                                                            <div className="text-light-grey ml-6 text-xl">
                                                                <ul className="list-disc font-thin space-y-2">
                                                                    <li>
                                                                        Better
                                                                        life
                                                                        (tbd)
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-80 sm:block hidden">
                                                    <img
                                                        src="/images/PHP_Portal_ID_231128_33-20.jpg"
                                                        width={160}
                                                        className="shadow-lg h-fit"
                                                    />
                                                    <Link href="/dashboard/framework/core-business-process/identify-needs">
                                                        <div className="bg-mid-green hover:bg-green w-full rounded-full py-1 text-white font-medium text-sm mt-8 w-full text-center">
                                                            Learn More
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                                <div>
                                                    <Video
                                                        size="sm"
                                                        color="yellow"
                                                        img="/images/thumbnails/c-y.png"
                                                        playVideo={() =>
                                                            playVideo(
                                                                'https://player.vimeo.com/video/898793864?h=31a3d903ff&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className="cursor-pointer"
                                                    onClick={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/898793864?h=31a3d903ff&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }>
                                                    <div className="font-bold">
                                                        We create value in three
                                                        steps
                                                    </div>
                                                    <div className="font-thin">
                                                        Clive Meanwell
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                                <div>
                                                    <Video
                                                        size="sm"
                                                        color="yellow"
                                                        img="/images/thumbnails/w-y.png"
                                                        playVideo={() =>
                                                            playVideo(
                                                                'https://player.vimeo.com/video/898794478?h=f04d3a065f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className="cursor-pointer"
                                                    onClick={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/898794478?h=f04d3a065f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }>
                                                    <div className="font-bold">
                                                        Experience real and
                                                        satisfying change
                                                    </div>
                                                    <div className="font-thin">
                                                        Whit Bernard
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                                <div>
                                                    <Video
                                                        size="sm"
                                                        color="yellow"
                                                        img="/images/thumbnails/s-w-y.png"
                                                        playVideo={() =>
                                                            playVideo(
                                                                'https://player.vimeo.com/video/898794601?h=b0cf8f4568&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className="cursor-pointer"
                                                    onClick={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/898794601?h=b0cf8f4568&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }>
                                                    <div className="font-bold">
                                                        How we demonstrate value
                                                    </div>
                                                    <div className="font-thin">
                                                        Shannon Armstrong & Whit
                                                        Bernard
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                                <div>
                                                    <Video
                                                        size="sm"
                                                        color="yellow"
                                                        img="/images/thumbnails/sm-y.png"
                                                        playVideo={() =>
                                                            playVideo(
                                                                'https://player.vimeo.com/video/914778799?h=13ad0bdf74&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className="cursor-pointer"
                                                    onClick={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/914778799?h=13ad0bdf74&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }>
                                                    <div className="font-bold">
                                                        Weight loss therapies,
                                                        currently, are not
                                                        sustainable
                                                    </div>
                                                    <div className="font-thin">
                                                        Steve Marso
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Accordion>
                            </div>

                            <div className="my-2">
                                <Accordion
                                    details
                                    title="Develop Solutions"
                                    color="yellow"
                                    sectionOpen={() => handleSectionOpen(2)}>
                                    <div className="grid grid-cols-5">
                                        <div className="sm:col-span-4 col-span-5 bg-white border-x border-yellow border-b gap-4">
                                            <div className="flex justify-between px-6 pb-12">
                                                <div>
                                                    <div className="grid sm:grid-cols-2 gap-2">
                                                        <div className="mb-4">
                                                            <div className="text-xl text-orange font-bold my-2">
                                                                A) Target profle
                                                                of solution?
                                                            </div>
                                                            <div className="text-light-grey ml-6 text-xl">
                                                                <ul className="list-disc font-thin space-y-2">
                                                                    <li>
                                                                        Easier
                                                                        to use
                                                                    </li>
                                                                    <li>
                                                                        More
                                                                        tolerable
                                                                    </li>
                                                                    <li>
                                                                        Just as
                                                                        or more
                                                                        effective
                                                                    </li>
                                                                    <li>
                                                                        Lower
                                                                        cost
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="text-xl text-orange font-bold sm:mt-2 mt-6 my-2">
                                                                B) Search for &
                                                                secure
                                                                technology?
                                                            </div>
                                                            <div className="text-light-grey ml-6 text-xl">
                                                                <ul className="list-disc font-thin space-y-2">
                                                                    <li>
                                                                        GLP-1RA
                                                                        &
                                                                        combinations
                                                                    </li>
                                                                    <li>
                                                                        Long acting
                                                                    </li>
                                                                    <li>
                                                                        Oral
                                                                        delivery
                                                                    </li>
                                                                    <li>
                                                                        Lowest
                                                                        possible
                                                                        COGs
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="text-xl text-orange font-bold my-2">
                                                                C) Generate
                                                                evidence with
                                                                customers &
                                                                consumers &
                                                                other
                                                                stakeholders
                                                            </div>
                                                            <div className="text-light-grey ml-6 text-xl">
                                                                <ul className="list-disc font-thin space-y-2">
                                                                    <li>
                                                                        Efficient
                                                                        data
                                                                        generation
                                                                    </li>
                                                                    <li>
                                                                        Stakeholder
                                                                        participation
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-80 sm:block hidden">
                                                    <img
                                                        src="/images/PHP_Portal_ID__240507_33-21.png"
                                                        width={160}
                                                        className="shadow-lg h-fit"
                                                    />
                                                    <Link href="/dashboard/framework/core-business-process/develop-solutions">
                                                        <div className="bg-mid-green hover:bg-green w-full rounded-full py-1 text-white font-medium text-sm mt-8 w-full text-center">
                                                            Learn More
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                                <div>
                                                    <Video
                                                        size="sm"
                                                        color="yellow"
                                                        img="/images/thumbnails/p-y.png"
                                                        playVideo={() =>
                                                            playVideo(
                                                                'https://player.vimeo.com/video/914778820?h=fd08425661&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className="cursor-pointer"
                                                    onClick={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/914778820?h=fd08425661&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }>
                                                    <div className="font-bold">
                                                        Easier to use, more
                                                        tolerable, and better
                                                    </div>
                                                    <div className="font-thin">
                                                        Peter Wijngaard
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                                <div>
                                                    <Video
                                                        size="sm"
                                                        color="yellow"
                                                        img="/images/thumbnails/s-w-y.png"
                                                        playVideo={() =>
                                                            playVideo(
                                                                'https://player.vimeo.com/video/898794668?h=c751ef3d31&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className="cursor-pointer"
                                                    onClick={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/898794668?h=c751ef3d31&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }>
                                                    <div className="font-bold">
                                                        A solution for a real
                                                        problem
                                                    </div>
                                                    <div className="font-thin">
                                                        Shannon Armstrong & Whit
                                                        Bernard
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                                <div>
                                                    <Video
                                                        size="sm"
                                                        color="yellow"
                                                        img="/images/thumbnails/j-y.png"
                                                        playVideo={() =>
                                                            playVideo(
                                                                'https://player.vimeo.com/video/914779920?h=335bb832a6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className="cursor-pointer"
                                                    onClick={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/914779920?h=335bb832a6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }>
                                                    <div className="font-bold">
                                                        Changing the lives of
                                                        millions of people
                                                    </div>
                                                    <div className="font-thin">
                                                        James Minnion
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Accordion>
                            </div>

                            <div className="my-2">
                                <Accordion
                                    details
                                    title="Manage Change"
                                    color="yellow"
                                    sectionOpen={() => handleSectionOpen(3)}>
                                    <div className="grid grid-cols-5">
                                        <div className="sm:col-span-4 col-span-5 bg-white border-x border-yellow border-b gap-4">
                                            <div className="flex justify-between px-6 pb-12 gap-4">
                                                <div>
                                                    <div className="grid sm:grid-cols-2 gap-4">
                                                        <div className="text-xl text-orange font-bold w-full sm:mt-0 mt-4">
                                                            A) Implement
                                                            solution with
                                                            customers, consumers
                                                            & other stakeholders
                                                        </div>
                                                        <div className="text-xl text-orange font-bold w-full">
                                                            B) Measure impact
                                                            with customers
                                                        </div>
                                                        <div className="text-xl text-orange font-bold w-full">
                                                            C) Iterate core
                                                            business process
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-80 sm:block hidden">
                                                    <img
                                                        src="/images/PHP_Portal_ID_231128_33-22.jpg"
                                                        width={160}
                                                        className="shadow-lg h-fit"
                                                    />
                                                    <Link href="/dashboard/framework/core-business-process/manage-change">
                                                        <div className="bg-mid-green hover:bg-green w-full rounded-full py-1 text-white font-medium text-sm mt-8 w-full text-center">
                                                            Learn More
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                                <div>
                                                    <Video
                                                        size="sm"
                                                        color="yellow"
                                                        img="/images/thumbnails/w-y.png"
                                                        playVideo={() =>
                                                            playVideo(
                                                                'https://player.vimeo.com/video/898794510?h=e3608b2820&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className="cursor-pointer"
                                                    onClick={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/898794510?h=e3608b2820&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }>
                                                    <div className="font-bold">
                                                        Differentiating in a
                                                        crowded marketplace
                                                    </div>
                                                    <div className="font-thin">
                                                        Whit Bernard
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                                <div>
                                                    <Video
                                                        size="sm"
                                                        color="yellow"
                                                        img="/images/thumbnails/s-w-y.png"
                                                        playVideo={() =>
                                                            playVideo(
                                                                'https://player.vimeo.com/video/898794648?h=247c583e0f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className="cursor-pointer"
                                                    onClick={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/898794648?h=247c583e0f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }>
                                                    <div className="font-bold">
                                                        Change Management
                                                        challenge around
                                                        sustained weight loss
                                                    </div>
                                                    <div className="font-thin">
                                                        Shannon Armstrong & Whit
                                                        Bernard
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                                <div>
                                                    <Video
                                                        size="sm"
                                                        color="yellow"
                                                        img="/images/thumbnails/m-y.png"
                                                        playVideo={() =>
                                                            playVideo(
                                                                'https://player.vimeo.com/video/914778828?h=a1432557e0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className="cursor-pointer"
                                                    onClick={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/914778828?h=a1432557e0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }>
                                                    <div className="font-bold">
                                                        Creating partnerships to
                                                        navigate complex
                                                        regulations
                                                    </div>
                                                    <div className="font-thin">
                                                        Meena Rao
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Accordion>
                            </div>
                        </Accordion>
                    </div>

                    <div id="strategy" className="mt-8">
                        <Accordion
                            title="Strategy"
                            className="bg-green font-bold"
                            open={open > 2}
                            sectionOpen={() => handleOpen(3)}
                            root
                            videos={[
                                'https://player.vimeo.com/video/898793890?h=f74d51a2ce&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                            ]}
                            videoTitles={['Strategies About Choices']}
                            videoDescriptions={['Clive Meanwell']}
                            thumbnails={['/images/thumbnails/c-y.png']}
                            videoContainer={
                                accordions.includes(2) && !sections.length
                                    ? 'mt-48'
                                    : ''
                            }
                            playVideo={playVideo}>
                            <div id="competitive_strategy" className="my-2">
                                <Accordion
                                    details
                                    title="Competitive Strategy"
                                    color="green"
                                    open={open == 4}>
                                    <div className="grid grid-cols-5">
                                        <div className="sm:col-span-4 col-span-5 bg-white border-x border-yellow border-b gap-4">
                                            <div className="flex justify-between px-6 pb-12">
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    <div>
                                                        <div className="text-xl text-orange font-bold my-2">
                                                            Specific situation
                                                        </div>
                                                        <div className="text-light-grey ml-6 text-xl">
                                                            <ul className="list-disc font-thin space-y-2">
                                                                <li>
                                                                    Massive
                                                                    global
                                                                    market
                                                                </li>
                                                                <li>
                                                                    Growing
                                                                    Wegovy /
                                                                    Mounjaro
                                                                </li>
                                                                <li>
                                                                    Scale & cost
                                                                    of goods
                                                                    matter
                                                                </li>
                                                                <li>
                                                                    Duopoly
                                                                    (others
                                                                    entering)
                                                                </li>
                                                                <li>
                                                                    Activated
                                                                    consumers
                                                                </li>
                                                                <li>
                                                                    Defensive
                                                                    payers
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="text-xl text-orange font-bold my-2">
                                                            Main choices
                                                        </div>
                                                        <div className="text-light-grey ml-6 text-xl">
                                                            <ul className="list-disc font-thin space-y-2">
                                                                <li>
                                                                    Develop
                                                                    multiple
                                                                    products
                                                                </li>
                                                                <li>
                                                                    Super-efficient
                                                                    evidence
                                                                    generation.
                                                                </li>
                                                                <li>
                                                                    Manufacture
                                                                    via partners
                                                                </li>
                                                                <li>
                                                                    Attack
                                                                    disutility
                                                                </li>
                                                                <li>
                                                                    Execute
                                                                    consumer
                                                                    launch
                                                                </li>
                                                                <li>
                                                                    Engage
                                                                    payers
                                                                    up-front
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="text-xl text-orange font-bold my-2">
                                                            Action plans
                                                        </div>
                                                        <div className="text-light-grey ml-6 text-xl">
                                                            <ul className="list-disc font-thin space-y-2">
                                                                <li>
                                                                    Global
                                                                    strategy
                                                                    day-1
                                                                </li>
                                                                <li>
                                                                    Benchmark
                                                                    everything
                                                                </li>
                                                                <li>
                                                                    Low PPE
                                                                    investment
                                                                </li>
                                                                <li>
                                                                    Disruptive
                                                                    innovation
                                                                </li>
                                                                <li>
                                                                    Engage
                                                                    consumers
                                                                </li>
                                                                <li>
                                                                    Partner with
                                                                    payers
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img
                                                    src="/images/PHP_Portal_ID_231128_33-24.jpg"
                                                    width={120}
                                                    className="shadow-lg h-fit sm:block hidden"
                                                />
                                            </div>

                                            <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                                <div>
                                                    <Video
                                                        size="sm"
                                                        color="yellow"
                                                        img="/images/thumbnails/c-y.png"
                                                        playVideo={() =>
                                                            playVideo(
                                                                'https://player.vimeo.com/video/898793899?h=e51ce2bd5b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className="cursor-pointer"
                                                    onClick={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/898793899?h=e51ce2bd5b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }>
                                                    <div className="font-bold">
                                                        Our competitive analysis
                                                    </div>
                                                    <div className="font-thin">
                                                        Clive Meanwell
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                                <div>
                                                    <Video
                                                        size="sm"
                                                        color="yellow"
                                                        img="/images/thumbnails/sm-y.png"
                                                        playVideo={() =>
                                                            playVideo(
                                                                'https://player.vimeo.com/video/914778449?h=68dfe54021&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className="cursor-pointer"
                                                    onClick={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/914778449?h=68dfe54021&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }>
                                                    <div className="font-bold">
                                                        Benefits are clear… it’s
                                                        a new era
                                                    </div>
                                                    <div className="font-thin">
                                                        Steve Marso
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Accordion>
                            </div>
                            <div id="human_strategy" className="my-2">
                                <Accordion
                                    details
                                    title="Human Strategy"
                                    color="green"
                                    open={open == 5}>
                                    <div className="grid grid-cols-5">
                                        <div className="sm:col-span-4 col-span-5 bg-white border-x border-yellow border-b gap-4">
                                            <div className="flex justify-between px-6 pb-12">
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    <div>
                                                        <div className="text-xl text-orange font-bold my-2">
                                                            Specific situation
                                                        </div>
                                                        <div className="text-light-grey ml-6 text-xl">
                                                            <ul className="list-disc font-thin space-y-2">
                                                                <li>
                                                                    Biopharma +
                                                                    consumerism
                                                                </li>
                                                                <li>
                                                                    Lifelong
                                                                    consumer
                                                                    quest
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="text-xl text-orange font-bold my-2">
                                                            Main choices
                                                        </div>
                                                        <div className="text-light-grey ml-6 text-xl">
                                                            <ul className="list-disc font-thin space-y-2">
                                                                <li>
                                                                    Multidisciplinary
                                                                    talent
                                                                </li>
                                                                <li>
                                                                    Provide
                                                                    lifelong
                                                                    engagement
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="text-xl text-orange font-bold my-2">
                                                            Action plans
                                                        </div>
                                                        <div className="text-light-grey ml-6 text-xl">
                                                            <ul className="list-disc font-thin space-y-2">
                                                                <li>
                                                                    Recruit &
                                                                    empower
                                                                    diversity
                                                                </li>
                                                                <li>
                                                                    Create
                                                                    compelling
                                                                    experience
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img
                                                    src="/images/PHP_Portal_ID_231128_33-25.jpg"
                                                    width={120}
                                                    className="shadow-lg h-fit sm:block hidden"
                                                />
                                            </div>
                                            <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                                <div>
                                                    <Video
                                                        size="sm"
                                                        color="yellow"
                                                        img="/images/thumbnails/r-y.png"
                                                        playVideo={() =>
                                                            playVideo(
                                                                'https://player.vimeo.com/video/914789146?h=2a0b884dd8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className="cursor-pointer"
                                                    onClick={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/914789146?h=2a0b884dd8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }>
                                                    <div className="font-bold">
                                                        Solving problems from a
                                                        human perspective
                                                    </div>
                                                    <div className="font-thin">
                                                        Rich Fires
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                                <div>
                                                    <Video
                                                        size="sm"
                                                        color="yellow"
                                                        img="/images/thumbnails/sm-y.png"
                                                        playVideo={() =>
                                                            playVideo(
                                                                'https://player.vimeo.com/video/914778475?h=2a469ef610&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className="cursor-pointer"
                                                    onClick={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/914778475?h=2a469ef610&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }>
                                                    <div className="font-bold">
                                                        Affecting the health of
                                                        thousands, one person at
                                                        a time
                                                    </div>
                                                    <div className="font-thin">
                                                        Steve Marso
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Accordion>
                            </div>
                            <div id="financial_strategy" className="my-2">
                                <Accordion
                                    details
                                    title="Financial Strategy"
                                    color="green"
                                    open={open == 6}>
                                    <div className="grid grid-cols-5">
                                        <div className="sm:col-span-4 col-span-5 bg-white border-x border-yellow border-b gap-4">
                                            <div className="flex justify-between px-6 pb-12">
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    <div>
                                                        <div className="text-xl text-orange font-bold my-2">
                                                            Specific situation
                                                        </div>
                                                        <div className="text-light-grey ml-6 text-xl">
                                                            <ul className="list-disc font-thin space-y-2">
                                                                <li>
                                                                    Capital
                                                                    intensity
                                                                </li>
                                                                <li>
                                                                    Risk of
                                                                    dilution
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="text-xl text-orange font-bold my-2">
                                                            Main choices
                                                        </div>
                                                        <div className="text-light-grey ml-6 text-xl">
                                                            <ul className="list-disc font-thin space-y-2">
                                                                <li>
                                                                    Build
                                                                    leading
                                                                    syndicates
                                                                </li>
                                                                <li>
                                                                    Tranche with
                                                                    value
                                                                    step-ups
                                                                </li>
                                                                <li>
                                                                    Access
                                                                    public
                                                                    markets
                                                                    early
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="text-xl text-orange font-bold my-2">
                                                            Action plans
                                                        </div>
                                                        <div className="text-light-grey ml-6 text-xl">
                                                            <ul className="list-disc font-thin space-y-2">
                                                                <li>
                                                                    Active
                                                                    constant
                                                                    engagement
                                                                </li>
                                                                <li>
                                                                    Just-in-time
                                                                    financing
                                                                </li>
                                                                <li>
                                                                    Run it like
                                                                    its already
                                                                    public
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img
                                                    src="/images/PHP_Portal_ID_231128_33-26.jpg"
                                                    width={120}
                                                    className="shadow-lg h-fit sm:block hidden"
                                                />
                                            </div>

                                            <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                                <div>
                                                    <Video
                                                        size="sm"
                                                        color="yellow"
                                                        img="/images/thumbnails/cc-y.png"
                                                        playVideo={() =>
                                                            playVideo(
                                                                'https://player.vimeo.com/video/914778507?h=dd3dd784de&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className="cursor-pointer"
                                                    onClick={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/914778507?h=dd3dd784de&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }>
                                                    <div className="font-bold">
                                                        Develop strategy and
                                                        articulate value to
                                                        shareholders
                                                    </div>
                                                    <div className="font-thin">
                                                        Chris Cox
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Accordion>
                            </div>
                            <div id="communications_strategy" className="my-2">
                                <Accordion
                                    details
                                    title="Communications Strategy"
                                    color="green"
                                    open={open == 7}>
                                    <div className="grid grid-cols-5">
                                        <div className="sm:col-span-4 col-span-5 bg-white border-x border-yellow border-b gap-4">
                                            <div className="flex justify-between px-6 pb-12">
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    <div>
                                                        <div className="text-xl text-orange font-bold my-2">
                                                            Specific situation
                                                        </div>
                                                        <div className="text-light-grey ml-6 text-xl">
                                                            <ul className="list-disc font-thin space-y-2">
                                                                <li>
                                                                High-volume major current
                                                                coverage
                                                                </li>
                                                                <li>
                                                                Early days
                                                                </li>
                                                                <li>
                                                                Crowded pipeline
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="text-xl text-orange font-bold my-2">
                                                            Main choices
                                                        </div>
                                                        <div className="text-light-grey ml-6 text-xl">
                                                            <ul className="list-disc font-thin space-y-2">
                                                                <li>
                                                                Measured messages until PoC
                                                                </li>
                                                                <li>
                                                                Diﬀerentiated identity
                                                                </li>
                                                                <li>
                                                                Highly selective engagement
with curated audiences
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="text-xl text-orange font-bold my-2">
                                                            Action plans
                                                        </div>
                                                        <div className="text-light-grey ml-6 text-xl">
                                                            <ul className="list-disc font-thin space-y-2">
                                                                <li>
                                                                Audience-driven approach
                                                                </li>
                                                                <li>
                                                                Focus on investors
                                                                </li>
                                                                <li>
                                                                Coming out of stealth 24’ Q1
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img
                                                    src="/images/PHP_Portal_ID_231128_33-28.png"
                                                    width={120}
                                                    className="shadow-lg h-fit sm:block hidden"
                                                />
                                            </div>

                                            <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                                <div>
                                                    <Video
                                                        size="sm"
                                                        color="yellow"
                                                        img="/images/thumbnails/t-n-y.png"
                                                        playVideo={() =>
                                                            playVideo(
                                                                'https://player.vimeo.com/video/914778523?h=9fa231fcda&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className="cursor-pointer"
                                                    onClick={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/914778523?h=9fa231fcda&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }>
                                                    <div className="font-bold">
                                                        Understanding our
                                                        audiences
                                                    </div>
                                                    <div className="font-thin">
                                                        Tamsin Berry & Nancye
                                                        Green
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                                <div>
                                                    <Video
                                                        size="sm"
                                                        color="yellow"
                                                        img="/images/thumbnails/ch-y.png"
                                                        playVideo={() =>
                                                            playVideo(
                                                                'https://player.vimeo.com/video/914779937?h=6d5efdda19&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className="cursor-pointer"
                                                    onClick={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/914779937?h=6d5efdda19&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }>
                                                    <div className="font-bold">
                                                        A scientist in every
                                                        other company is just a
                                                        scientist
                                                    </div>
                                                    <div className="font-thin">
                                                        Charlotte Hinds
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Accordion>
                            </div>
                        </Accordion>
                    </div>
                </div>
                <div className="col-span-1"></div>
            </div>

            {play && (
                <dialog
                    className="dui-modal bg-black z-[9999]"
                    open={play}
                    onClick={() => setPlay(false)}>
                    <form method="dialog" className="modal-box relative">
                        <button
                            onClick={() => setPlay(false)}
                            className="dui-btn dui-btn-circle dui-btn-outline text-white bg-black absolute sm:-right-6 left-1/2 sm:left-auto -translate-x-1/2 sm:translate-x-0 -top-6 hover:bg-black hover:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <ReactPlayer
                            url={play}
                            className="!w-full sm:!w-[80vw] sm:!h-[45vw]"
                            playing
                            controls
                            onEnded={() => {
                                if (isSlider) handleArrow(true)
                            }}
                        />
                        {isSlider && (
                            <>
                                <ChevronRightIcon
                                    onClick={e => {
                                        e.stopPropagation()
                                        handleArrow(true)
                                    }}
                                    className="text-white w-16 h-16 cursor-pointer absolute right-0 top-1/2 -translate-y-1/2"
                                />
                                <ChevronLeftIcon
                                    onClick={e => {
                                        e.stopPropagation
                                        handleArrow(false)
                                    }}
                                    className="text-white w-16 h-16 cursor-pointer absolute left-0 top-1/2 -translate-y-1/2"
                                />
                            </>
                        )}
                    </form>
                </dialog>
            )}
        </AppLayout>
    )
}

export default Framework
