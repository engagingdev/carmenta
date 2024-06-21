import classNames from 'classnames'
import Video from './Video'
import { useEffect, useState } from 'react'
import Slider from './Slider'

const Accordion = ({
    name,
    title,
    className,
    details,
    children,
    open: changeOpen,
    color,
    root,
    videos,
    videoTitles,
    videoDescriptions,
    thumbnails,
    playVideo,
    search,
    dark = false,
    videoContainer,
    sectionOpen,
    setDirectory,
    subMenu
}) => {
    const [slideIndex, setSlideIndex] = useState(0)
    const [open, setOpen] = useState(changeOpen)
    const borderClassName =
        color === 'orange'
            ? 'border-orange'
            : color === 'yellow'
                ? 'border-yellow'
                : color === 'light-grey'
                    ? 'border-light-grey'
                    : color === 'dark-green'
                        ? 'border-dark-green'
                        : color === 'white' ? 'border-white' : 'border-green'
    const titleClassName =
        color === 'orange'
            ? 'bg-orange'
            : color === 'yellow'
                ? 'bg-yellow'
                : color === 'light-grey'
                    ? 'bg-light-grey'
                    : color === 'dark-green'
                        ? 'bg-dark-green'
                        : color === 'white' ? 'bg-white' : 'bg-green'

    useEffect(() => {
        if (!search) setOpen(false)
        if (changeOpen !== undefined) setOpen(changeOpen)
    }, [changeOpen, search])

    useEffect(() => {
        if (!videos || videos?.length < 2) return

        const interval = setInterval(
            () => setSlideIndex((slideIndex + 1) % videos.length),
            4000,
        )
        return () => clearInterval(interval)
    }, [slideIndex, videos])

    return (
        <div className="relative" style={{ color: (subMenu == 5 || subMenu == 6) && "rgb(17 24 39)" }}>
            {videos && (
                <div className="block sm:hidden w-40 mx-auto">
                    <Slider
                        color={color}
                        background="none"
                        slides={thumbnails.map(img => ({ img }))}
                        slideIndex={slideIndex}
                        setSlideIndex={setSlideIndex}
                        setPlay={() => playVideo(videos[slideIndex])}
                    />
                </div>
            )}
            <div
                className={classNames(
                    'dui-collapse dui-collapse-arrow rounded-none',
                )}>
                <input
                    type="radio"
                    name={name || title}
                    checked={!!open}
                    readOnly
                />
                <div
                    className={classNames(
                        `dui-collapse-title font-bold sm:w-4/5 w-full flex items-center gap-4`,
                        details && open ? 'text-dark-green bg-white' : 'border',
                        root
                            ? `${titleClassName} text-xl`
                            : 'text-2xl border-t border-x',
                        borderClassName,
                        className,
                    )}
                    onClick={() => {
                        if (sectionOpen) {
                            sectionOpen()
                        }
                        setOpen(!open)
                        if (open && search === '') setDirectory && setDirectory([])
                    }}>
                    {title}
                </div>
                <div className={'dui-collapse-content px-0'}>{children}</div>
            </div>
            <div
                className={classNames(
                    'absolute right-0 top-0 w-1/5 pl-12 text-sm sm:block hidden',
                    videoContainer || '-mt-8',
                )}>
                {open &&
                    videos?.map((video, index) => (
                        <div key={index} className="mt-8">
                            <div className="w-fit">
                                <Video
                                    size="sm"
                                    img={thumbnails[index]}
                                    playVideo={() => playVideo(video)}
                                />
                            </div>
                            <div
                                className={classNames(
                                    'font-bold mt-2',
                                    dark && 'text-dark-grey',
                                )}>
                                {videoTitles[index]}
                            </div>
                            <div
                                className={classNames(
                                    'font-thin',
                                    dark && 'text-dark-grey',
                                )}>
                                {videoDescriptions[index]}
                            </div>
                        </div>
                    ))}
            </div>
        </div >
    )
}

export default Accordion
