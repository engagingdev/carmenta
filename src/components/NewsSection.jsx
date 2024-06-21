// import {
//     ArrowDownTrayIcon,
//     ArrowTopRightOnSquareIcon,
// } from '@heroicons/react/24/solid'

// import Accordion from '@/components/Accordion'

const NewsSection = ({ content, title = "See What's New" }) => {
    return (
        // <Accordion
        //     title={title || 'News'}
        //     className="bg-blue font-bold"
        //     root
        //     color="blue"
        //     open={open}
        //     setOpen={() => setOpen(!open)}>
        <>
            <div className="px-3 grid grid-cols-4 sm:grid-cols-5">
                <div className="text-xl col-span-5">{title}</div>
                <hr className="my-2 col-span-4" />
            </div>
            <div className="grid grid-cols-5">
                <div className="sm:col-span-4 col-span-5 gap-4 text-xl font-thin">
                    {content}
                </div>
            </div>
        </>

        // </Accordion>
    )
}

export default NewsSection
