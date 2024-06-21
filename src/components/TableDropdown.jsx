import { useState } from 'react'
import Link from 'next/link'

const BioDropdown = ({
    title,
    date,
    time = '',
    status = '',
    link = '',
    playVideo,
}) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="text-gray-900 bg-white font-thin">
            <div
                onClick={() => setOpen(!open)}
                className="grid grid-cols-[minmax(200px,1fr)_150px_170px_150px] gap-4 w-full px-4 pt-6 pb-2 text-xl cursor-pointer">
        
                <div className="font-medium">
                    {title}
                </div>
                <div className="">
                    {date}
                </div>
                <div className="">{time}</div>
                <div className="" onClick={() => {}}>
                    {status === 'active' && 
                        <Link href={link} target="_blank">
                            <div className="bg-mid-green hover:bg-green rounded-full py-1 text-white font-medium text-sm w-full text-center">
                                Register
                            </div>
                        </Link>
                    }
                    {status === 'complete' && 
                        <div onClick={() => playVideo(link)} className="bg-orange hover:bg-orange rounded-full py-1 text-white font-medium text-sm w-full text-center">
                            View Recording
                        </div>
                    }
                    {status === 'disabled' && 
                        <div className="bg-mid-green rounded-full py-1 text-white font-medium text-sm w-full text-center bg-opacity-10 cursor-not-allowed">
                            Register
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default BioDropdown
