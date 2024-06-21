import classNames from 'classnames'
import Video from '@/components/Video'
import Slider from '@/components/Slider'

const Quote = ({
    content,
    author,
    color = 'orange',
    background,
    children,
    rootClassName,
    containerClassName = '2xl:max-w-[52rem] md:max-w-[40rem] sm:max-w-[30rem] max-w-[calc(100vw-96px)] mx-auto',
    textClassName,
    sliderLeftClassName,
    quote = true,
    slides = [],
    slideIndex = 0,
    setSlideIndex,
    relative = true,
    video = false,
    videoUrl,
    setPlay,
    carousel = true,
}) => {
    const textColor =
        color === 'yellow'
            ? 'text-yellow'
            : color === 'lilac'
            ? 'text-lilac'
            : color === 'blue'
            ? 'text-blue'
            : 'text-orange'
    return (
        <div
            className={classNames(
                'flex w-full sm:pt-28 pt-12 mb-12',
                relative && 'relative',
            )}>
            <div
                className={classNames(
                    'text-white w-full mx-auto',
                    rootClassName || 'xl:pl-80 md:pl-28 px-14',
                )}>
                <div className={classNames('relative', containerClassName)}>
                    {quote && (
                        <div
                            className={classNames(
                                'absolute font-georgia 2xl:text-xxl md:text-mxl sm:text-sxl text-8xl 2xl:-left-[9.2rem] md:-left-32 sm:-left-[88px] -left-14 md:-top-9 sm:-top-6 -top-4',
                                textColor,
                            )}>
                            &ldquo;
                        </div>
                    )}
                    <h1>
                        <span
                            className={classNames(
                                'font-sans font-black !leading-[1.1]',
                                textClassName ||
                                    'text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl',
                            )}>
                            {content}
                        </span>
                        {quote && (
                            <span
                                className={classNames(
                                    `font-georgia 2xl:text-xxl md:text-mxl sm:text-sxl text-8xl leading-[0px] text-right mt-16 md:ml-10 sm:ml-6 ml-3 absolute 2xl:-bottom-14 md:-bottom-12 -bottom-6`,
                                    textColor,
                                )}>
                                &rdquo;
                            </span>
                        )}
                    </h1>
                </div>
                {author && (
                    <div
                        className={classNames(
                            'lg:text-4xl sm:text-3xl text-xl font-sans font-light text-secondary mt-12',
                            containerClassName,
                        )}>
                        {author}
                    </div>
                )}
                <div className={classNames('sm:pr-20 -ml-8')}>
                    <div
                        className={classNames(
                            containerClassName,
                            'mt-8 block xl:hidden px-10',
                        )}>
                        {video ? (
                            <Video
                                background={background}
                                color={color}
                                img={video}
                                playVideo={() => setPlay(videoUrl)}
                            />
                        ) : (
                            <Slider
                                color={color}
                                background={background}
                                slides={slides}
                                slideIndex={slideIndex}
                                setSlideIndex={setSlideIndex}
                                setPlay={setPlay}
                                carousel={carousel}
                            />
                        )}
                    </div>
                </div>

                <div className={classNames('max-w-none', containerClassName)}>
                    {children}
                </div>
            </div>
            <div
                className={classNames(
                    'absolute xl:block hidden',
                    sliderLeftClassName || '2xl:-ml-8 ml-6',
                    relative ? '-bottom-16' : 'top-[32rem]',
                )}>
                {video ? (
                    <Video
                        background={background}
                        color={color}
                        img={video}
                        playVideo={() => setPlay(videoUrl)}
                    />
                ) : (
                    <Slider
                        color={color}
                        background={background}
                        slides={slides}
                        slideIndex={slideIndex}
                        setSlideIndex={setSlideIndex}
                        setPlay={setPlay}
                        carousel={carousel}
                    />
                )}
            </div>
        </div>
    )
}

export default Quote
