import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { useRouter } from 'next/router'

import AppLayout from '@/components/Layouts/AppLayout'

import ReactPlayer from 'react-player'

const NewPage = () => {
    const router = useRouter()
    const [play, setPlay] = useState(false)
    const [hoveredText, setHoveredText] = useState(null)
    const [isSequenceRunning, setIsSequenceRunning] = useState(true);

    const playVideo = link => {
        setPlay(link)
    }


    useEffect(() => {
        if (isSequenceRunning) {
            const steps = [null, 'purpose', 'physical', 'emotional', 'obesity', 'value', null];
            let totalTime = 0;

            steps.forEach((step, index) => {
                const timeoutDuration = index === 0 ? 1000 : 500;
                totalTime += timeoutDuration;
                setTimeout(() => {
                    setHoveredText(step);
                }, totalTime);
            });

            setTimeout(() => {
                setIsSequenceRunning(false);
            }, totalTime);
        }
    }, [isSequenceRunning]);
    
    return (
        <AppLayout
        sidebar={false}
        childrenLayout="w-full text-white -pb-16">
            <Head>
                <title>Carmenta - New Page</title>
            </Head>
            <div className="col-span-5 pt-10 h-screen bg-cover" style={{backgroundImage:`url('/images/bg_new.jpg')`}}>
               <div className="px-4 max-w-7xl mx-auto ">
                  <div className="flex pt-[100px]">
                    <div className="relative w-[60px] lg:w-[150px]  space-y-6">
                    <img
                        src='/images/thumbnails/c-n-y.png'
                        onMouseEnter={() => !isSequenceRunning && setHoveredText('purpose')}
                        onMouseLeave={() => !isSequenceRunning && setHoveredText(null)}
                        onClick={() => playVideo('https://player.vimeo.com/video/898794291?h=8c6ca2f39e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479')}
                        className={`${hoveredText === 'purpose' ? '' : 'opacity-40'} w-full pt-1 cursor-pointer transition-opacity duration-300`}
                        alt="video image"
                    />

                    <img
                        src='/images/thumbnails/t-n-y.png'
                        onMouseEnter={() => !isSequenceRunning && setHoveredText('physical')}
                        onMouseLeave={() => !isSequenceRunning && setHoveredText(null)}
                        onClick={() => playVideo('https://player.vimeo.com/video/898794270?h=8f14ff42d5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479')}
                        className={`${hoveredText === 'physical' ? '' : 'opacity-40'} w-full pt-1 cursor-pointer transition-opacity duration-300`}
                        alt="video image"
                    />

                    <img
                        src='/images/thumbnails/j-y.png'
                        onMouseEnter={() => !isSequenceRunning && setHoveredText('emotional')}
                        onMouseLeave={() => !isSequenceRunning && setHoveredText(null)}
                        onClick={() => playVideo('https://player.vimeo.com/video/914779824?h=ae7da31cda&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479')}
                        className={`${hoveredText === 'emotional' ? '' : 'opacity-40'} w-full pt-1 cursor-pointer transition-opacity duration-300`}
                        alt="video image"
                    />

                    <img
                        src='/images/thumbnails/s-t-y.png'
                        onMouseEnter={() => !isSequenceRunning && setHoveredText('obesity')}
                        onMouseLeave={() => !isSequenceRunning && setHoveredText(null)}
                        onClick={() => playVideo('https://player.vimeo.com/video/898794291?h=8c6ca2f39e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479')}
                        className={`${hoveredText === 'obesity' ? '' : 'opacity-40'} w-full pt-1 cursor-pointer transition-opacity duration-300`}
                        alt="video image"
                    />

                    <img
                        src='/images/thumbnails/s-w-y.png'
                        onMouseEnter={() => !isSequenceRunning && setHoveredText('value')}
                        onMouseLeave={() => !isSequenceRunning && setHoveredText(null)}
                        onClick={() => playVideo('https://player.vimeo.com/video/898794291?h=8c6ca2f39e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479')}
                        className={`${hoveredText === 'value' ? '' : 'opacity-40'} w-full pt-1 cursor-pointer transition-opacity duration-300`}
                        alt="video image"
                    />
                    </div>
                    <div className="flex-1 px-10 pl-4 lg:pl-[80px]  flex relative pt-8 pt-[100px]">

                        <div className="absolute top-0">
                            {hoveredText === 'purpose' && <div className="relative ml-6 mb-8">
                                <div className="absolute font-georgia 2xl:text-8xl md:text-mxl sm:text-sxl text-5xl  md:-left-20 sm:left-[28px] -left-14 md:-top-9 sm:top-6 top-4 text-orange">“</div>
                                <h1 className="relative text-3xl sm:text-4xl md:text-5xl 2xl:text-6x">Leaders need to rely on the power of clear mission... to achieve outstanding results
                                <span className="font-georgia 2xl:text-8xl md:text-mxl sm:text-sxl text-5xl leading-[0px] text-right mt-16 md:ml-10 sm:ml-6 ml-3 absolute 2xl:-bottom-14 md:-bottom-12 -bottom-6 text-orange">&rdquo;</span>
                                </h1>
                            </div>}

                            {hoveredText === 'physical' && <div className="relative ml-6 mb-8">
                                <div className="absolute font-georgia 2xl:text-8xl md:text-mxl sm:text-sxl text-5xl  md:-left-20 sm:left-[28px] -left-14 md:-top-9 sm:top-6 top-4 text-orange">“</div>
                                <h1 className="relative text-3xl sm:text-4xl md:text-5xl 2xl:text-6x">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut wisi enim ad minim veniamon
                                <span className="font-georgia 2xl:text-8xl md:text-mxl sm:text-sxl text-5xl leading-[0px] text-right mt-16 md:ml-10 sm:ml-6 ml-3 absolute 2xl:-bottom-14 md:-bottom-12 -bottom-6 text-orange">&rdquo;</span>
                                </h1>
                            </div>}

                            {hoveredText === 'emotional' && <div className="relative ml-6 mb-8">
                                <div className="absolute font-georgia 2xl:text-8xl md:text-mxl sm:text-sxl text-5xl  md:-left-20 sm:left-[28px] -left-14 md:-top-9 sm:top-6 top-4 text-orange">“</div>
                                <h1 className="relative text-3xl sm:text-4xl md:text-5xl 2xl:text-6x">Leaders need to rely on the power of clear mission... to achieve outstanding results
                                <span className="font-georgia 2xl:text-8xl md:text-mxl sm:text-sxl text-5xl leading-[0px] text-right mt-16 md:ml-10 sm:ml-6 ml-3 absolute 2xl:-bottom-14 md:-bottom-12 -bottom-6 text-orange">&rdquo;</span>
                                </h1>
                            </div>}

                            {hoveredText === 'obesity' && <div className="relative ml-6 mb-8">
                                <div className="absolute font-georgia 2xl:text-8xl md:text-mxl sm:text-sxl text-5xl  md:-left-20 sm:left-[28px] -left-14 md:-top-9 sm:top-6 top-4 text-orange">“</div>
                                <h1 className="relative text-3xl sm:text-4xl md:text-5xl 2xl:text-6x">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut wisi enim ad minim veniamon
                                <span className="font-georgia 2xl:text-8xl md:text-mxl sm:text-sxl text-5xl leading-[0px] text-right mt-16 md:ml-10 sm:ml-6 ml-3 absolute 2xl:-bottom-14 md:-bottom-12 -bottom-6 text-orange">&rdquo;</span>
                                </h1>
                            </div>}

                            {hoveredText === 'value' && <div className="relative ml-6 mb-8">
                                <div className="absolute font-georgia 2xl:text-8xl md:text-mxl sm:text-sxl text-5xl  md:-left-20 sm:left-[28px] -left-14 md:-top-9 sm:top-6 top-4 text-orange">“</div>
                                <h1 className="relative text-3xl sm:text-4xl md:text-5xl 2xl:text-6x">Leaders need to rely on the power of clear mission... to achieve outstanding results
                                <span className="font-georgia 2xl:text-8xl md:text-mxl sm:text-sxl text-5xl leading-[0px] text-right mt-16 md:ml-10 sm:ml-6 ml-3 absolute 2xl:-bottom-14 md:-bottom-12 -bottom-6 text-orange">&rdquo;</span>
                                </h1>
                            </div>}
                        </div>
                        <div className="text-3xl lg:text-6xl lg:leading-[70px] col-span-4 font-bold transition-colors duration-300">
                            <div className=" pl-4">
                                Our
                                <span
                                onMouseEnter={() => !isSequenceRunning && setHoveredText('purpose')}
                                onMouseLeave={() => !isSequenceRunning && setHoveredText(null)}
                                className={`${hoveredText === 'purpose' ? 'text-orange' : 'text-white'} transition-colors duration-300 cursor-default`}> Purpose</span>:  <br />Reduce the
                                <span 
                                onMouseEnter={() => !isSequenceRunning && setHoveredText('physical')}
                                onMouseLeave={() => !isSequenceRunning && setHoveredText(null)}
                                className={`${hoveredText === 'physical' ? 'text-orange' : 'text-white'} transition-colors duration-300 cursor-default`}> physical,</span>
                                <span 
                                onMouseEnter={() => !isSequenceRunning && setHoveredText('emotional')}
                                onMouseLeave={() => !isSequenceRunning && setHoveredText(null)}
                                className={`${hoveredText === 'emotional' ? 'text-orange' : 'text-white'} transition-colors duration-300 cursor-default`}> emotional</span> & economic burdens of
                                <span 
                                onMouseEnter={() => !isSequenceRunning && setHoveredText('obesity')}
                                onMouseLeave={() => !isSequenceRunning && setHoveredText(null)}
                                className={`${hoveredText === 'obesity' ? 'text-orange' : 'text-white'} transition-colors duration-300 cursor-default`}> obesity</span> <br />
                                &mdash;thereby creating
                                <span 
                                onMouseEnter={() => !isSequenceRunning && setHoveredText('value')}
                                onMouseLeave={() => !isSequenceRunning && setHoveredText(null)}
                                className={`${hoveredText === 'value' ? 'text-orange' : 'text-white'} transition-colors duration-300 cursor-default`}> value for all stakeholders</span>
                            </div>
                        </div>
                    </div>
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
                            controls
                        />
                    </form>
                </dialog>
            )}
        </AppLayout>
    )
}

export default NewPage
