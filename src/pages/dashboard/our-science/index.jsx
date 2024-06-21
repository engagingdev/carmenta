import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import classNames from 'classnames'

import Quote from '@/components/Quote'
import AppLayout from '@/components/Layouts/AppLayout'
import Accordion from '@/components/Accordion'
import Video from '@/components/Video'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import ReactPlayer from 'react-player'

const quote = {
    content: (
        <>
            Nothing in life is to be feared, it is only to be understood. Now is
            the time to understand more, so that we may fear less.
        </>
    ),
    author: 'Marie Curie',
}

const slides = [
    {
        text: (
            <>
                Narrowing the gap of understanding
                <div className="text-secondary text-lg font-extralight">
                    Steve Marso
                </div>
            </>
        ),
        img: '/images/thumbnails/sm-o.png',
        url: 'https://player.vimeo.com/video/914778541?h=ff276eb0c1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    },
    {
        text: (
            <>
                We’re built hungry – raising gut hormones reduces appetite
                <div className="text-secondary text-lg font-extralight">
                    Steve Bloom
                </div>
            </>
        ),
        img: '/images/thumbnails/sb-o.png',
        url: 'https://player.vimeo.com/video/914779968?h=7a05750c6b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    },
    {
        text: (
            <>
                Weight loss without gastric distress and queasiness
                <div className="text-secondary text-lg font-extralight">
                    Steve Bloom
                </div>
            </>
        ),
        img: '/images/thumbnails/sb-o.png',
        url: 'https://player.vimeo.com/video/914780038?h=cf36b3f4e6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    },
    {
        text: (
            <>
                Our Innovation Center will speed up every process
                <div className="text-secondary text-lg font-extralight">
                    James Minnion
                </div>
            </>
        ),
        img: '/images/thumbnails/j-o.png',
        url: 'https://player.vimeo.com/video/914780038?h=cf36b3f4e6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    },
]

const OurScience = () => {
    const router = useRouter()

    const [slideIndex, setSlideIndex] = useState(0)
    const [open, setOpen] = useState()
    const [play, setPlay] = useState(false)
    const [isSlider, setSlider] = useState(false)

    const handleOpen = index => {
        if (index == open)
            router.push(`/dashboard/our-science`, undefined, {
                scroll: false,
            })
        else
            router.push(`/dashboard/our-science?tab=${index}`, undefined, {
                scroll: false,
            })
    }

    const playVideo = (link, slider) => {
        setPlay(link)
        setSlider(slider)
    }
    const handleArrow = next => {
        let nextSlideIndex =
            (next ? slideIndex + 1 : slideIndex - 1) % slides.length
        if (nextSlideIndex < 0) nextSlideIndex += slides.length
        setSlideIndex(nextSlideIndex)
        playVideo(slides[nextSlideIndex].url, true)
    }

    useEffect(() => {
        const tab = router.query.tab
        setOpen(tab || 0)
        if (tab !== undefined) {
            const tabToDivId = {
                0: 'presentations',
                1: 'publications',
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

    useEffect(() => {
        if (play) return
        const interval = setInterval(
            () => setSlideIndex((slideIndex + 1) % slides.length),
            4000,
        )
        return () => clearInterval(interval)
    }, [slideIndex, play])

    return (
        <AppLayout>
            <Head>
                <title>Carmenta - Our Science</title>
            </Head>

            <Quote
                content={quote.content}
                author={quote.author}
                color="orange"
                slides={slides}
                slideIndex={slideIndex}
                setSlideIndex={setSlideIndex}
                sliderLeftClassName="2xl:-ml-[1.4rem] ml-6"
                relative={false}
                setPlay={() => playVideo(slides[slideIndex].url, true)}>
                <div className="relative">
                    <div>
                        <div className="text-white font-sans text-xl xl:mt-24 mt-8 text-center md:text-left sm:-ml-28 -ml-6 md:ml-0">
                            {/* <div className="font-medium">Our Science</div> */}
                            <div className="w-fit mx-auto md:ml-0 mt-2 md:mt-0 mx-4 sm:mx-0">
                                {slides.map((slide, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setSlideIndex(index)}
                                        className="font-extralight font-helvetica flex gap-2 cursor-pointer">
                                        <button
                                            className={classNames(
                                                'w-2.5 h-2.5 min-w-[10px] rounded-full border border-white mt-2 min-w-[10px]',
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
                    {/* <Link to="view" smooth={true} className="hidden sm:block">
                        <div className="w-fit xl:mt-12 mt-10 cursor-pointer mx-auto xl:ml-0 sm:pr-28">
                            <div className="text-xl">Scroll Down</div>
                            <ChevronDownIcon className="w-4 h-4 mx-auto" />
                        </div>
                    </Link> */}
                </div>
            </Quote>

            <div
                id="view"
                className="max-w-5xl mx-auto grid grid-cols-4 sm:grid-cols-5 px-3 sm:mt-44">
                <div className="text-xl col-span-5">Our Science</div>
                <hr className="my-2 col-span-4" />
                <div className="sm:text-5xl text-3xl !leading-snug mt-4 col-span-4 font-thin">
                    “We need to take a broader view; in caring for people, it’s
                    not one place, one time, it’s a journey over a person’s
                    life.”{' '}
                    <span className="text-[#afb2b2]">
                        -Steve Marso, Chief Medical Officer
                    </span>
                </div>

                <div id="presentations" className="col-span-5 mt-24">
                    <Accordion
                        title="Our Presentations"
                        className="font-bold"
                        open={open == 0}
                        setOpen={() => handleOpen(0)}
                        root
                        color="orange">
                        <div className="my-2">
                            <Accordion
                                details
                                title="Science"
                                name="pre-2023-1"
                                color="orange">
                                <div className="grid grid-cols-5">
                                    <div className="sm:col-span-4 col-span-5 bg-white border-x border-orange border-b gap-4">
                                        <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                            <div>
                                                <Video
                                                    size="sm"
                                                    img="/images/thumbnails/sb-y.png"
                                                    playVideo={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/914779949?h=1afa079f85&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div
                                                className="cursor-pointer"
                                                onClick={() =>
                                                    playVideo(
                                                        'https://player.vimeo.com/video/914779949?h=1afa079f85&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                    )
                                                }>
                                                <div className="font-bold">
                                                    Engineering medicine
                                                </div>
                                                <div className="font-thin">
                                                    Steve Bloom
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                            <div>
                                                <Video
                                                    size="sm"
                                                    img="/images/thumbnails/sm-y.png"
                                                    playVideo={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/914778565?h=28a7b50560&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div
                                                className="cursor-pointer"
                                                onClick={() =>
                                                    playVideo(
                                                        'https://player.vimeo.com/video/914778565?h=28a7b50560&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                    )
                                                }>
                                                <div className="font-bold">
                                                    The problem with obesity
                                                </div>
                                                <div className="font-thin">
                                                    Steve Marso
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                            <div>
                                                <Video
                                                    size="sm"
                                                    img="/images/thumbnails/j-y.png"
                                                    playVideo={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/914779789?h=364a6b60fc&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div
                                                className="cursor-pointer"
                                                onClick={() =>
                                                    playVideo(
                                                        'https://player.vimeo.com/video/914779789?h=364a6b60fc&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                    )
                                                }>
                                                <div className="font-bold">
                                                    Metsera’s innovation center
                                                    will be an accelerant
                                                </div>
                                                <div className="font-thin">
                                                    James Minnion
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                            <div>
                                                <Video
                                                    size="sm"
                                                    img="/images/thumbnails/ch-y.png"
                                                    playVideo={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/914779839?h=3d466866fe&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div
                                                className="cursor-pointer"
                                                onClick={() =>
                                                    playVideo(
                                                        'https://player.vimeo.com/video/914779839?h=3d466866fe&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                    )
                                                }>
                                                <div className="font-bold">
                                                    We are leaders in our field
                                                </div>
                                                <div className="font-thin">
                                                    Charlotte Hinds
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                            <div>
                                                <Video
                                                    size="sm"
                                                    img="/images/thumbnails/rm-y.png"
                                                    playVideo={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/914779867?h=93c604e338&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div
                                                className="cursor-pointer"
                                                onClick={() =>
                                                    playVideo(
                                                        'https://player.vimeo.com/video/914779867?h=93c604e338&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                    )
                                                }>
                                                <div className="font-bold">
                                                    What is SAD and MAD?
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
                            <Accordion
                                details
                                title="Regulatory"
                                name="pre-2023-2"
                                color="orange">
                                <div className="grid grid-cols-5">
                                    <div className="sm:col-span-4 col-span-5 bg-white border-x border-orange border-b gap-4">
                                        <div className="flex items-center gap-4 bg-mid-green text-white p-4">
                                            <div>
                                                <Video
                                                    size="sm"
                                                    img="/images/thumbnails/m-y.png"
                                                    playVideo={() =>
                                                        playVideo(
                                                            'https://player.vimeo.com/video/914778584?h=727c1b0c4e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div
                                                className="cursor-pointer"
                                                onClick={() =>
                                                    playVideo(
                                                        'https://player.vimeo.com/video/914778584?h=727c1b0c4e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                    )
                                                }>
                                                <div className="font-bold">
                                                    History of the FDA
                                                </div>
                                                <div className="font-thin">
                                                    Meena Rao
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
                                                            'https://player.vimeo.com/video/914778615?h=211940b473&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div
                                                className="cursor-pointer"
                                                onClick={() =>
                                                    playVideo(
                                                        'https://player.vimeo.com/video/914778615?h=211940b473&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                                                    )
                                                }>
                                                <div className="font-bold">
                                                    Regulatory at Metsera is
                                                    highly collaborative
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

                        <div className="my-2">
                            <Accordion
                                details
                                title="Manufacturing"
                                name="pre-2023-3"
                                color="orange">
                                <div className="grid grid-cols-5">
                                    <div className="sm:col-span-4 col-span-5 bg-white border-x border-orange border-b gap-4">
                                        <div className="flex justify-center items-center gap-4 bg-white text-dark-grey pb-4 text-xl">
                                            Coming Soon
                                        </div>
                                    </div>
                                </div>
                            </Accordion>
                        </div>
                    </Accordion>

                    <div id="publications" className="mt-8">
                        <Accordion
                            title="Our Publications"
                            className="font-bold"
                            open={open == 1}
                            setOpen={() => handleOpen(1)}
                            root
                            color="orange">
                            <div className="my-2">
                                <Accordion
                                    details
                                    title="2023"
                                    name="pub-2023"
                                    color="orange">
                                    <div className="grid grid-cols-5">
                                        <div className="sm:col-span-4 col-span-5 bg-white border-x border-orange border-b">
                                            <div className="flex p-6 gap-6">
                                                <div className="text-2xl text-orange font-bold">
                                                    2023
                                                </div>
                                                <div className="text-light-grey ml-12 text-xl">
                                                    Coming soon
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Accordion>
                            </div>
                        </Accordion>
                    </div>
                </div>
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
                            onEnded={() => {
                                if (isSlider) handleArrow(true)
                            }}
                            controls
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

export default OurScience
