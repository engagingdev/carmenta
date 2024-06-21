import { useEffect, useRef, useState } from 'react'

const FrameworkDescription = () => {
    const [view, setView] = useState(false)
    const ref = useRef(null)
    const ideationRef = useRef(null)
    const businessRef = useRef(null)
    const strategyRef = useRef(null)

    useEffect(() => {
        if (ideationRef.current) setView(true)
    }, [ideationRef.current])

    return (
        <div
            id="view"
            className={'bg-white w-full text-dark-green pt-6 px-12 pb-8'}>
            <div className="xl:flex">
                <div className="w-full">
                    <div className="text-dark-green text-2xl font-black mb-3 font-helvetica tracking-tighter">
                        Innovation Framework
                    </div>
                    <div className="xl:flex font-semibold relative">
                        <div
                            ref={ref}
                            className="border-2 border-dark-green font-semibold w-full">
                            <div ref={ideationRef} className="sm:flex p-2">
                                <div className="sm:w-60 mb-2">
                                    <div className="font-bold text-lg sm:text-xl">
                                        Ideation
                                    </div>
                                    <div className="text-orange text-sm sm:text-base">
                                        Our main ideas
                                    </div>
                                </div>
                                <div className="flex w-full">
                                    <div className="text-secondary text-sm sm:text-base w-36">
                                        <div>The</div>
                                        <div>General</div>
                                        <div>Situation</div>
                                    </div>
                                    <div className="text-secondary text-sm sm:text-base w-full">
                                        <div className="flex">
                                            <div className="w-1/2">Purpose</div>
                                            <div className="w-1/2">
                                                Capabilities
                                            </div>
                                        </div>
                                        <hr className="border-dark-green my-1 w-full" />
                                        <div className="flex">
                                            <div className="w-1/2">Vision</div>
                                            <div className="w-1/2">Quality</div>
                                        </div>
                                        <hr className="border-dark-green my-1" />
                                        <div className="flex">
                                            <div className="w-1/2">Goals</div>
                                            <div className="w-1/2">
                                                Identity
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="border-dark-green border-[1px]" />
                            <div ref={businessRef} className="sm:flex p-2">
                                <div className="sm:w-60 mb-2">
                                    <div className="font-bold text-lg sm:text-xl !leading-tight">
                                        Core Business Process
                                    </div>
                                    <div className="text-orange text-sm sm:text-base">
                                        How we intend to create value
                                    </div>
                                </div>
                                <div className="flex w-full">
                                    <div className="text-secondary text-sm sm:text-base w-36">
                                        <div>Identify</div>
                                        <div>Needs</div>
                                    </div>
                                    <div className="text-secondary text-sm sm:text-base w-full">
                                        <div className="flex">
                                            <div className="w-1/2">
                                                <div>Develop</div>
                                                <div>Solutions</div>
                                            </div>
                                            <div className="w-1/2">
                                                <div>Manage</div>
                                                <div>Change</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="border-dark-green border-[1px]" />
                            <div ref={strategyRef} className="sm:flex p-2">
                                <div className="sm:w-60 mb-2">
                                    <div className="font-bold text-lg sm:text-xl">
                                        Strategy
                                    </div>
                                    <div className="text-orange text-sm sm:text-base">
                                        What we choose to focus on
                                    </div>
                                </div>
                                <div className="text-secondary text-sm sm:text-base w-full">
                                    <div className="w-full ml-auto flex">
                                        <div className="w-1/3" />
                                        <div className="w-1/3">
                                            <div>Specific</div>
                                            <div>Situation</div>
                                        </div>
                                        <div className="w-1/3">
                                            <div>Main</div>
                                            <div>Choices</div>
                                        </div>
                                        <div className="w-1/3">
                                            <div>Action</div>
                                            <div>Plans</div>
                                        </div>
                                    </div>
                                    <hr className="border-dark-green my-1 w-full" />
                                    <div>Human</div>
                                    <hr className="border-dark-green my-1 w-full" />
                                    <div>Competitive</div>
                                    <hr className="border-dark-green my-1" />
                                    <div>Financial</div>
                                    <hr className="border-dark-green my-1" />
                                    <div>Communications</div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="bg-orange w-16 h-full clip-right-triangle hidden xl:block"
                            style={{ height: ref.current?.offsetHeight }}
                        />
                        <div className="bg-orange w-full h-12 clip-top-triangle block xl:hidden rotate-180" />
                    </div>
                </div>
                <div className="w-full font-bold max-w-lg mx-auto">
                    <div className="text-dark-green font-black text-2xl mb-3 sm:whitespace-nowrap font-helvetica tracking-tighter">
                        Project Management Mastery
                    </div>
                    <div className="border-2 border-dark-green relative">
                        <div className="bg-secondary absolute w-full h-[calc(100%-20px)] clip-top-triangle mt-5" />
                        {view && (
                            <div className="relative">
                                <div
                                    className="text-dark-green p-2 sm:text-lg"
                                    style={{
                                        height:
                                            ideationRef.current?.offsetHeight,
                                    }}>
                                    Portfolio
                                </div>
                                <hr className="border-dark-green border-[1px]" />
                                <div
                                    className="text-dark-green p-2 sm:text-lg"
                                    style={{
                                        height:
                                            businessRef.current?.offsetHeight,
                                    }}>
                                    Programs
                                </div>
                                <hr className="border-dark-green border-[1px]" />
                                <div
                                    className="text-dark-green p-2 sm:text-lg"
                                    style={{
                                        height:
                                            strategyRef.current?.offsetHeight,
                                    }}>
                                    Projects
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="h-12 sm:h-16 bg-orange clip-top-triangle mt-2 xl:w-full w-2/3 ml-auto" />
                </div>
            </div>
            <div className="sm:-mt-12 -mt-11">
                <div className="flex justify-between">
                    <div className="text-dark-green text-2xl font-black mb-3 font-helvetica tracking-tighter">
                        Resources
                    </div>
                </div>
                <div className="border-2 border-dark-green w-full h-12" />
            </div>
        </div>
    )
}

export default FrameworkDescription
