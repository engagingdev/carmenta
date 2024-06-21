import { useEffect, useRef } from 'react'
import classNames from 'classnames'
import ReactSlider from 'react-slick'
import 'slick-carousel/slick/slick.css'

const Slider = ({
    color = 'orange',
    background,
    slides,
    slideIndex,
    setSlideIndex,
    setPlay,
    carousel = true,
}) => {
    const ref = useRef(null)
    const settings = {
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
    }

    useEffect(() => {
        if (carousel) ref.current?.slickGoTo(slideIndex)
    }, [slideIndex])

    return (
        <div className="relative 2xl:w-[360px] 2xl:h-[380px] xl:w-[320px] xl:h-[336px] sm:w-60 w-40 mx-auto">
            <div
                className={classNames(
                    'm-1',
                    background === 'mid'
                        ? 'bg-mid-green'
                        : background === 'none'
                        ? ''
                        : 'bg-dark-green',
                )}>
                <ReactSlider ref={ref} {...settings}>
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            onClick={setPlay}
                            className="focus:outline-none border-transparent focus:border-transparent focus:ring-0">
                            <img
                                src={slide.img}
                                className="w-full pt-1 2xl:h-[380px] xl:h-[336px] cursor-pointer"
                                alt="slider image"
                            />
                        </div>
                    ))}
                </ReactSlider>
            </div>
            {slides.length > 1 && (
                <div
                    className={classNames(
                        'flex justify-center w-full py-2 gap-2',
                        background === 'mid'
                            ? 'bg-mid-green'
                            : background === 'none'
                            ? ''
                            : 'bg-dark-green',
                    )}>
                    {[...Array(slides.length).keys()].map(key => (
                        <button
                            key={key}
                            onClick={() => setSlideIndex(key)}
                            className={classNames(
                                'w-2.5 h-2.5 min-w-[10px] rounded-full',
                                slideIndex === key
                                    ? background === 'none'
                                        ? 'bg-dark-grey'
                                        : 'bg-white'
                                    : background === 'none'
                                    ? 'border border-dark-grey'
                                    : 'border border-white',
                            )}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Slider
