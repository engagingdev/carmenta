import { ChevronRightIcon } from '@heroicons/react/24/solid'
import classNames from 'classnames'
import { useState } from 'react'

const BioDropdown = ({
    first_name,
    last_name,
    title,
    email,
    phone = '000.0000.0000',
    experience = '',
    personal = [],
    interests = [],
    bio = [],
    avatar,
}) => {
    const [open, setOpen] = useState(false)

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    return (
        <div className="text-gray-900 bg-white border-t font-thin">
            <div
                onClick={() => setOpen(!open)}
                className="flex w-full px-4 pt-4 pb-4 text-xl cursor-pointer">
                <div className="flex w-full md:w-1/2 xl:w-1/3 w-full">
                    {avatar && (
                        <img
                            src={avatar}
                            alt={first_name + ' ' + last_name}
                            className="w-12 h-12 mr-3"
                        />
                    )}
                    <div className="flex flex-col gap-0 justify-center capitalize">
                        <div
                            className={classNames(
                                open ? 'font-bold text-orange' : 'font-thin',
                            )}>
                            {capitalize(last_name ? last_name + ', ' : '')} {capitalize(first_name)}
                        </div>
                        {open && <div className="text-sm">{title}</div>}
                    </div>
                </div>
                <div className="w-full flex items-center xl:w-1/3 md:w-1/2 max-md:hidden">
                    {email}
                </div>
                <div className="w-1/3 flex items-center max-xl:hidden pl-12">{phone}</div>
                <div className="flex items-center" onClick={() => {}}>
                    <ChevronRightIcon
                        className={classNames(
                            'w-6 h-6 cursor-pointer',
                            open && 'rotate-90',
                        )}
                    />
                </div>
            </div>
            {open && (
                <div className="px-4 pb-2 md:grid grid-cols-3 gap-12 pl-[78px]">
                    <div className="col-span-2">
                        {bio.map((b, i) => (
                            <div key={i} className="mb-4 font-thin">
                                {b}
                            </div>
                        ))}
                    </div>
                    <div>
                        {!!experience && (
                            <>
                                <div className="font-black">
                                    Additional Relevant Experiences
                                </div>
                                <div className=" md:mb-8">
                                {Array.isArray(experience) && 
                                    experience.map((ex, i) => (
                                        <p className="font-thin md:mb-2">{ex}</p>
                                    ))
                                }
                                {!Array.isArray(experience) && 
                                    <p className="font-thin ">{experience}</p>
                                }
                                </div>
                            </>
                        )}

                        {!!personal.length && (
                            <>
                                <div className="font-black">
                                    Personal
                                </div>
                                <ul className="list-disc pl-6 font-thin md:mb-8">
                                    {personal.map((p, i) => (
                                        <li key={i}>{p}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {!!interests.length && (
                            <>
                                <div className="font-black">
                                    Interests
                                </div>
                                <ul className="list-disc pl-6 font-thin md:mb-8">
                                    {interests.map((p, i) => (
                                        <li key={i}>{p}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default BioDropdown
