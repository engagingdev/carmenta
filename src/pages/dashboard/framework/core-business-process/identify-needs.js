import { useState, useEffect } from 'react'
import Head from 'next/head'
import classNames from 'classnames'

import AppLayout from '@/components/Layouts/AppLayout'
import Quote from '@/components/Quote'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import ReactPlayer from 'react-player'

const slides = [
    {
        text: <>Clive Meanwell</>,
        img: '/images/thumbnails/c-y.png',
        url: 'https://player.vimeo.com/video/898793864?h=31a3d903ff&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    },
    {
        text: <>Whit Bernard</>,
        img: '/images/thumbnails/w-y.png',
        url: 'https://player.vimeo.com/video/898794478?h=f04d3a065f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    },
    {
        text: <>Shannon Armstrong & Whit Bernard</>,
        img: '/images/thumbnails/s-w-y.png',
        url: 'https://player.vimeo.com/video/898794585?h=fffc6d03f1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    },
    {
        text: <>Steve Marso</>,
        img: '/images/thumbnails/sm-y.png',
        url: 'https://player.vimeo.com/video/914778799?h=13ad0bdf74&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    },
]

const IdentifyNeeds = () => {
    const quote = {
        content: (
            <div className="font-thin">
                <div className="font-medium mb-8 block">
                    Our Process for how we Identify Needs
                </div>
                <p className="mb-8 tracking-wide">
                    We use a process called outcomes driven innovation, which
                    studies the job to be done. Not the profile of the product
                    but the job to be done.
                </p>
                <div className="tracking-wide">
                    What is it that customers need us to help them do better? In
                    this case, live their lives freely, fully, and joyfuly
                    without being overweight.
                </div>
            </div>
        ),
    }
    const [slideIndex, setSlideIndex] = useState(0)
    const [play, setPlay] = useState(false)

    const playVideo = () => {
        setPlay(slides[slideIndex].url)
    }
    const handleArrow = next => {
        let nextSlideIndex =
            (next ? slideIndex + 1 : slideIndex - 1) % slides.length
        if (nextSlideIndex < 0) nextSlideIndex += slides.length
        setSlideIndex(nextSlideIndex)
        setPlay(slides[nextSlideIndex].url)
    }

    useEffect(() => {
        if (play) return
        const interval = setInterval(
            () => setSlideIndex((slideIndex + 1) % slides.length),
            4000,
        )
        return () => clearInterval(interval)
    }, [slideIndex, play])

    return (
        <AppLayout background="bg-mid-green">
            <Head>
                <title>Carmenta - Project</title>
            </Head>

            <Quote
                content={quote.content}
                author={quote.author}
                slides={slides}
                slideIndex={slideIndex}
                setSlideIndex={setSlideIndex}
                color="yellow"
                background="mid"
                rootClassName="xl:pl-80 md:pl-28 px-8"
                quote={false}
                setPlay={playVideo}>
                <div className="relative">
                    <div>
                        <div className="text-white font-sans text-xl xl:mt-48 mt-8 text-center md:text-left sm:-ml-28 -ml-6 md:ml-0">
                            <div className="font-medium">Identify Needs</div>
                            <div className="w-fit mx-auto md:ml-0 mt-2 md:mt-0">
                                {slides.map((slide, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setSlideIndex(index)}
                                        className="font-extralight font-helvetica flex items-center gap-2 cursor-pointer">
                                        <button
                                            className={classNames(
                                                'w-2.5 h-2.5 min-w-[10px] rounded-full border border-white',
                                                slideIndex === index &&
                                                    'bg-white',
                                            )}
                                        />
                                        <div>{slide.text}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Quote>

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
                            onEnded={() => handleArrow(true)}
                        />
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
                    </form>
                </dialog>
            )}
        </AppLayout>
    )
}

export default IdentifyNeeds
