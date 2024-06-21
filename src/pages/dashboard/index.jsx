import Head from 'next/head'
import { useState } from 'react'
import classNames from 'classnames'
import { Link } from 'react-scroll'

import AppLayout from '@/components/Layouts/AppLayout'
import Quote from '@/components/Quote'
import NewsSection from '@/components/NewsSection'

import {
    ArrowDownTrayIcon,
    ArrowTopRightOnSquareIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from '@heroicons/react/24/solid'
import ReactPlayer from 'react-player'

const slides = [
    {
        text: (
            <>
                By 2035 4 billion people will be living with obesity
                {/* <div className="text-secondary text-lg font-extralight">
                    Clive Meanwell
                </div> */}
            </>
        ),
        img: '/images/thumbnails/c-o.png',
        url: 'https://player.vimeo.com/video/898793788?h=434dd8906e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1',
    },
    {
        text: (
            <div className="gap-2">
                A classic set-up for disruption
                <div className="text-secondary text-lg font-extralight">
                    Clive Meanwell
                </div>
                {/* <div className="text-light-grey">(continued)</div> */}
            </div>
        ),
        img: '/images/thumbnails/c-o.png',
        url: 'https://player.vimeo.com/video/898793799?h=299e96409a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1',
    },
]

const Dashboard = () => {
    const quote = {
        content: (
            <>
                Our Purpose:
                <br />
                Reduce the physical, emotional & economic burdens of obesity
                <br />— thereby creating value for all stakeholders
            </>
        ),
    }
    const [slideIndex, setSlideIndex] = useState(0)
    const [newsOpen, setNewsOpen] = useState(true)
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
    const handleOpen = link => {
        window.open(link, '_blank')
    }
    const handleDownload = download => {
        const a = document.createElement('a')
        a.href = download
        a.download = download.split('/').pop()
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }

    // useEffect(() => {
    //     if (play) return
    //     const interval = setInterval(
    //         () => setSlideIndex((slideIndex + 1) % slides.length),
    //         4000,
    //     )
    //     return () => clearInterval(interval)
    // }, [slideIndex, play])

    return (
        <AppLayout>
            <Head>
                <title>Carmenta - Dashboard</title>
            </Head>

            <Quote
                content={quote.content}
                author={quote.author}
                slides={slides}
                slideIndex={slideIndex}
                setSlideIndex={setSlideIndex}
                relative={false}
                setPlay={playVideo}
                carousel>
                <div className="relative">
                    <div>
                        <div className="text-white font-sans text-xl xl:mt-32 mt-8 text-center md:text-left sm:-ml-28 -ml-6 md:-ml-2">
                            {/* <div className="font-medium">
                                Our Shared Experience
                            </div> */}
                            <div className="w-fit mx-auto md:ml-0 mt-2 md:mt-0 mx-4 sm:mx-0">
                                {slides.map((slide, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setSlideIndex(index)}
                                        className="font-extralight font-helvetica flex gap-2 cursor-pointer">
                                        <button
                                            className={classNames(
                                                'min-w-[10px] w-2.5 h-2.5 rounded-full border border-white mt-2',
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

                            <Link
                                to="view"
                                smooth={true}
                                className="hidden sm:block">
                                <div className="w-fit xl:mt-[120px] mt-10 cursor-pointer mx-auto xl:ml-0 sm:pr-28">
                                    <div className="text-xl">Scroll Down</div>
                                    <ChevronDownIcon className="w-4 h-4 mx-auto" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </Quote>

            {/* <FrameworkDescription /> */}
            <div id="view" className="sm:mt-40 px-2">
                <NewsSection
                    open={newsOpen}
                    setOpen={setNewsOpen}
                    content={
                        <>
                            <div
                                onClick={() =>
                                    handleDownload(
                                        '/pdfs/reports/Metsera Launch Press Release 4.18.2024.pdf',
                                    )
                                }
                                className="px-4 py-2 flex items-center gap-3 cursor-pointer">
                                <ArrowDownTrayIcon className="w-6 h-6 min-w-[24px] cursor-pointer" />
                                Metsera Launches to Lead the Next Generation of Medicines for...
                            </div>
                            <div
                                onClick={() =>
                                    handleDownload(
                                        '/pdfs/reports/Metsera_Report_240205.pdf',
                                    )
                                }
                                className="px-4 py-2 flex items-center gap-3 cursor-pointer">
                                <ArrowDownTrayIcon className="w-6 h-6 min-w-[24px] cursor-pointer" />
                                Metsera Reports: Novo Holdings Takes Catalent Private and…
                            </div>
                            <div
                                onClick={() =>
                                    handleDownload(
                                        '/downloads/tools_software/templates/powerpoint_tutorial/Metsera_PPT_5.mp4',
                                    )
                                }
                                className="px-4 py-2 flex items-center gap-3 cursor-pointer">
                                <ArrowDownTrayIcon className="w-6 h-6 min-w-[24px] cursor-pointer" />
                                PPT Template Video Tutorial
                            </div>
                            <div
                                onClick={() =>
                                    handleOpen(
                                        'https://www.nejm.org/doi/full/10.1056/NEJMoa2206038',
                                    )
                                }
                                className="px-4 py-2 flex items-center gap-3 cursor-pointer">
                                <ArrowTopRightOnSquareIcon className="w-6 h-6 min-w-[24px] cursor-pointer" />
                                Tirzepatide Once Weekly for the Treatment of
                                Obesity
                            </div>
                        </>
                    }
                />
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
                                if (slides.length) handleArrow(true)
                            }}
                        />
                        {slides.length && (
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

export default Dashboard
