const Video = ({
    color = 'orange',
    size,
    type,
    background,
    playVideo,
    img,
}) => {
    let dotStyle = 'bg-orange'
    if (color === 'yellow') dotStyle = 'bg-yellow'
    if (color === 'lilac') dotStyle = 'bg-lilac'

    const rootClassName =
        size === 'xs'
            ? 'max-w-[32px] max-h-[36px]'
            : size === 'sm'
            ? 'max-w-[80px] min-w-[80px] max-h-[84px]'
            : 'max-w-[360px]'
    const buttonClassName =
        size === 'xs'
            ? 'w-3 h-3 -mt-[1px] bg-[#00000033]'
            : size === 'sm'
            ? 'w-5 h-5 ml-0.5 -mt-1 bg-[#00000033]'
            : 'w-12 h-12 sm:w-16 sm:h-16 xl:w-[72px] xl:h-[72px] ml-2.5 -mt-3'

    return (
        <div
            className={`relative 2xl:w-[360px] 2xl:h-[380px] xl:w-[320px] xl:h-[336px] ${rootClassName} w-full mx-auto`}>
            {type === 'map' ? (
                <img
                    src="/images/map.png"
                    className="w-full h-full object-contain object-center"
                    alt="video image"
                />
            ) : type === 'icon' ? (
                <img
                    src="/images/bubble.png"
                    className="w-full h-full object-contain object-center"
                    alt="video image"
                />
            ) : (
                <img
                    src={img}
                    onClick={playVideo}
                    className="w-full pt-1 h-full cursor-pointer"
                    alt="video image"
                />
            )}

            {/* {!type && (
                <img
                    src={
                        size === 'sm' || background === 'mid'
                            ? `/images/quote-${color}-mid.png`
                            : `/images/quote-${color}.png`
                    }
                    className="absolute w-full top-0 h-full"
                />
            )} */}

            {!img && (
                <img
                    src={`/images/play.png`}
                    className={`${buttonClassName} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-105 transform transition shadow-2xl rounded-full`}
                    onClick={playVideo}
                />
            )}
        </div>
    )
}

export default Video
