import { Menu } from '@headlessui/react'
import { useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import {
    ChevronRightIcon,
    ChevronDownIcon,
    ArrowDownTrayIcon,
} from '@heroicons/react/24/outline'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const DropdownLink = ({ children, ...props }) => {
    return (
        <Menu.Item>
            {({ active }) => (
                <Link
                    {...props}
                    className={`w-full text-left block sm:px-3 sm:py-2 px-6 text-sm leading-5 text-gray-700 ${
                        active ? 'bg-gray-100' : ''
                    } focus:outline-none transition duration-150 ease-in-out`}>
                    {children}
                </Link>
            )}
        </Menu.Item>
    )
}

export const DropdownButton = ({ children, ...props }) => (
    <Menu.Item>
        {({ active }) => (
            <button
                className={`w-full text-left block sm:px-3 sm:py-1 px-6 py-2 text-sm leading-5 text-gray-700 ${
                    active ? 'bg-gray-100' : ''
                } focus:outline-none transition duration-150 ease-in-out`}
                {...props}>
                {children}
            </button>
        )}
    </Menu.Item>
)

export const DropdownItems = ({
    items,
    placeholder,
    title,
    font = 'sm:text-[14px] text-2xl leading-none font-medium',
    color = 'text-orange',
    ...props
}) => {
    const [open, setOpen] = useState(false)
    const [selectedItems, setSelectedItems] = useState([])

    const handleItems = (item, checked) => {
        if (checked) {
            setSelectedItems([...selectedItems, item])
        } else {
            const index = selectedItems.findIndex(i => i.title === item.title)
            if (index !== -1) {
                const nextItems = [
                    ...selectedItems.slice(0, index),
                    ...selectedItems.slice(index + 1),
                ]
                setSelectedItems(nextItems)
            }
        }
    }
    const handleDownload = e => {
        e.preventDefault()
        selectedItems.forEach(item => {
            if (item.download) {
                const a = document.createElement('a')
                a.href = item.download
                a.download = item.download.split('/').pop()
                document.body.appendChild(a)
                console.log(a.href)
                a.click()
                document.body.removeChild(a)
            }
        })
    }

    return (
        <Menu.Item>
            {({ active }) => (
                <div
                    className={`w-full text-left block text-sm leading-5 cursor-pointer text-gray-700 focus:outline-none transition duration-150 ease-in-out relative`}
                    {...props}>
                    <div
                        onClick={e => {
                            e.preventDefault()
                            setOpen(!open)
                        }}
                        className={`flex justify-between sm:px-3 sm:py-2 px-6 py-2 gap-4 hover:bg-gray-100`}>
                        <div className="flex flex-col">
                            <div
                                className={`${font} ${
                                    open
                                        ? color + ' font-bold'
                                        : 'text-gray-700'
                                }`}>
                                {title}
                            </div>
                            <div className="text-lg sm:text-[14px] leading-none italic mt-1">
                                {placeholder}
                            </div>
                        </div>
                        {open ? (
                            <ChevronDownIcon className="text-gray-500 sm:w-4 sm:h-4 h-8 sm:min-w-[16px] min-w-[32px] mt-1" />
                        ) : (
                            <ChevronRightIcon className="text-gray-500 sm:w-4 sm:h-4 h-8 sm:min-w-[16px] min-w-[32px] mt-1" />
                        )}
                    </div>

                    {open && (
                        <>
                            {items.map((item, index) =>
                                item.type !== 'dropdown' ? (
                                    item.type === 'item' ? (
                                        <div
                                            key={index}
                                            onClick={e => {
                                                e.stopPropagation()
                                            }}
                                            className="flex sm:px-3 sm:py-1 px-6 py-2 sm:text-[14px] text-2xl leading-none cursor-pointer hover:bg-gray-100 items-center sm:gap-1 gap-4 text-gray-700 capitalize pt-1 font-medium">
                                            <input
                                                type="checkbox" className='focus:outline-none focus:ring-transparent'
                                                name="item"
                                                onChange={e =>
                                                    handleItems(
                                                        item,
                                                        e.target.checked,
                                                    )
                                                }
                                                onClick={e => {
                                                    e.stopPropagation()
                                                }}
                                            />
                                            {item.title}
                                        </div>
                                    ) : (
                                        <Link
                                            key={index}
                                            href={item.link}
                                            target="_blank"
                                            className="flex justify-between items-center sm:px-3 sm:py-1 px-6 py-2 sm:text-[14px] text-2xl leading-none cursor-pointer hover:bg-gray-100 sm:gap-1 gap-4 text-gray-700 capitalize pt-1 font-medium">
                                            {item.title}
                                            <ArrowTopRightOnSquareIcon className="text-gray-500 sm:w-4 sm:h-4 h-8 sm:min-w-[16px] min-w-[32px] mt-1" />
                                        </Link>
                                    )
                                ) : (
                                    <div key={index}>
                                        {item.items.map((i, ind) => (
                                            <div
                                                key={index + ind}
                                                onClick={e => {
                                                    e.stopPropagation()
                                                }}
                                                className="flex sm:px-3 sm:py-1 px-6 py-2 sm:text-[14px] text-2xl leading-none cursor-pointer hover:bg-gray-100 items-center sm:gap-1 gap-4 text-gray-700 capitalize pt-1 font-medium">
                                                <input
                                                    type="checkbox" className='focus:outline-none focus:ring-transparent'
                                                    name="item"
                                                    onChange={e =>
                                                        handleItems(
                                                            i,
                                                            e.target.checked,
                                                        )
                                                    }
                                                    onClick={e => {
                                                        e.stopPropagation()
                                                    }}
                                                />
                                                {i.title}
                                            </div>
                                        ))}
                                    </div>
                                ),
                            )}
                            {!items.filter(item => item.type === 'link')
                                .length && (
                                <div
                                    onClick={handleDownload}
                                    className="text-light-grey absolute right-6 bottom-3 sm:right-3 sm:bottom-1">
                                    <ArrowDownTrayIcon className={classNames('w-8 h-8 sm:w-4 sm:h-4 cursor-pointer', selectedItems.length ? (' text-orange'): ('text-gray-500'))} />
                                </div>
                            )}
                        </>
                    )}
                </div>
            )}
        </Menu.Item>
    )
}

export const DropdownItems3 = ({
    items,
    placeholder,
    title,
    font = 'sm:text-[14px] text-2xl leading-none font-medium',
    color = 'text-orange',
    ...props
}) => {
    const [open, setOpen] = useState(false)
    const [selectedItems, setSelectedItems] = useState([])

    const [openMenus, setOpenMenus] = useState({})

    const toggleMenu = index => {
        setOpenMenus(prevState => ({
            ...prevState,
            [index]: !prevState[index], // Toggle the visibility of the menu
        }))
    }

    const [openSubMenu, setOpenSubMenu] = useState({})

    const toggleSubMenu = index => {
        setOpenSubMenu(prevState => ({
            ...prevState,
            [index]: !prevState[index], // Toggle the visibility of the menu
        }))
    }

    const handleItems = (item, checked) => {
        if (checked) {
            setSelectedItems([...selectedItems, item])
        } else {
            const index = selectedItems.findIndex(i => i.title === item.title)
            if (index !== -1) {
                const nextItems = [
                    ...selectedItems.slice(0, index),
                    ...selectedItems.slice(index + 1),
                ]
                setSelectedItems(nextItems)
            }
        }
    }
    const handleDownload = e => {
        e.preventDefault()
        selectedItems.forEach(item => {
            if (item.download) {
                const a = document.createElement('a')
                a.href = item.download
                a.download = item.download.split('/').pop()
                document.body.appendChild(a)
                a.click()
                document.body.removeChild(a)
            }
        })
    }

    return (
        <Menu.Item>
            {({ active }) => (
                <div
                    className={
                        open
                            ? `pb-4`
                            : `` +
                              ` w-full text-left block text-sm leading-5 cursor-pointer text-gray-700 focus:outline-none transition duration-150 ease-in-out relative`
                    }
                    {...props}>
                    <div
                        onClick={e => {
                            e.preventDefault()
                            setOpen(!open)
                        }}
                        className={`flex justify-between sm:px-3 sm:py-2 px-6 py-2 gap-4 hover:bg-gray-100`}>
                        <div className="flex flex-col">
                            <div
                                className={`${font} ${
                                    open
                                        ? color + ' font-bold'
                                        : 'text-gray-700'
                                }`}>
                                {title}
                            </div>
                            <div className="text-lg sm:text-[14px] leading-none italic mt-1">
                                {placeholder}
                            </div>
                        </div>
                        {open ? (
                            <ChevronDownIcon className="text-gray-500 sm:w-4 sm:h-4 h-8 sm:min-w-[16px] min-w-[32px] mt-1" />
                        ) : (
                            <ChevronRightIcon className="text-gray-500 sm:w-4 sm:h-4 h-8 sm:min-w-[16px] min-w-[32px] mt-1" />
                        )}
                    </div>

                    {open && (
                        <>
                            {items.map((item, i) => {
                                return (
                                    <div key={i}>
                                        <div
                                            onClick={e => {
                                                e.preventDefault()
                                                toggleMenu(i)
                                            }}
                                            className="flex sm:px-3 sm:py-1 px-6 py-2 sm:text-[14px] text-2xl leading-none cursor-pointer hover:bg-gray-100 items-center sm:gap-1 gap-4 text-gray-700 capitalize pt-1 font-medium">
                                            ✤ {item.title}
                                            {item.type == 'dropdown' ? (
                                                <ChevronDownIcon className="ml-auto text-gray-500 sm:w-4 sm:h-4 h-8 sm:min-w-[16px] min-w-[32px] mt-1" />
                                            ) : (
                                                ''
                                            )}
                                        </div>

                                        {item.type == 'dropdown' && openMenus[i] ? (
                                            <>
                                                <ul className="pl-6 pr-08">
                                                    {item.items.map(
                                                        (item, i) => (
                                                            <div key={i}>
                                                                <li
                                                                    className="flex cursor-pointer hover:bg-gray-100"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        toggleSubMenu(i)
                                                                    }}>
                                                                    {item.type == 'dropdown' && item.type !== 'item' ? (
                                                                        <>
                                                                            {' '}
                                                                            ➢{' '}
                                                                            {
                                                                                item.title
                                                                            }
                                                                            <ChevronDownIcon className="ml-auto text-gray-500 sm:w-4 sm:h-4 h-8 sm:min-w-[16px] min-w-[32px] mt-1 float-right" />
                                                                        </>
                                                                    ) : item.downloadable === true && item.type === 'item' ? (
                                                                        <div
                                                                            onClick={e => {e.stopPropagation()}}
                                                                            className="flex sm:px-0 sm:py-1 px-0 py-2 sm:text-[15px] text-2xl leading-none cursor-pointer hover:bg-gray-100 items-center sm:gap-1 gap-4 text-gray-700 capitalize pt-1 font-medium">
                                                                            <input
                                                                                type="checkbox" className='focus:outline-none focus:ring-transparent'
                                                                                name="item"
                                                                                onChange={e => handleItems(item, e.target.checked,)}
                                                                                onClick={e => {e.stopPropagation()}}
                                                                            />
                                                                            {
                                                                                item.title
                                                                            }
                                                                        </div>
                                                                    ) : (
                                                                        <>
                                                                            ➢{' '}
                                                                            {
                                                                                item.title
                                                                            }
                                                                        </>
                                                                    )}
                                                                </li>
                                                                {item.type ==
                                                                    'dropdown' &&
                                                                openSubMenu[
                                                                    i
                                                                ] ? (
                                                                    <>
                                                                        <ul className="pl-2">
                                                                            {item.items.map(
                                                                                (
                                                                                    item,
                                                                                    index,
                                                                                ) => (
                                                                                    <div key={index}>
                                                                                        {item.type !==
                                                                                            'dropdown' &&
                                                                                        item.type ===
                                                                                            'item' ? (
                                                                                            <div
                                                                                                
                                                                                                onClick={e => {
                                                                                                    e.stopPropagation()
                                                                                                }}
                                                                                                className="flex sm:px-3 sm:py-1 px-6 py-2 sm:text-[14px] text-2xl leading-none cursor-pointer hover:bg-gray-100 items-center sm:gap-1 gap-4 text-gray-700 capitalize pt-1 font-medium">
                                                                                                <input
                                                                                                    type="checkbox" className='focus:outline-none focus:ring-transparent'
                                                                                                    name="item"
                                                                                                    onChange={e =>
                                                                                                        handleItems(
                                                                                                            item,
                                                                                                            e
                                                                                                                .target
                                                                                                                .checked,
                                                                                                        )
                                                                                                    }
                                                                                                    onClick={e => {
                                                                                                        e.stopPropagation()
                                                                                                    }}
                                                                                                />
                                                                                                {
                                                                                                    item.title
                                                                                                }
                                                                                            </div>
                                                                                        ) : (
                                                                                            <>

                                                                                            </>
                                                                                        )}
                                                                                    </div>
                                                                                ),
                                                                            )}
                                                                        </ul>
                                                                    </>
                                                                ) : (
                                                                    ''
                                                                )}
                                                            </div>
                                                        ),
                                                    )}
                                                </ul>
                                            </>
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                )
                            })}

                            {!items.filter(item => item.type === 'item')
                                .length && (
                                <div
                                    onClick={handleDownload}
                                    className="text-light-grey absolute right-6 bottom-05 sm:right-3 sm:bottom-1">
                                    <ArrowDownTrayIcon className={classNames('w-8 h-8 sm:w-4 sm:h-4 cursor-pointer', selectedItems.length ? (' text-orange'): ('text-gray-500'))} />
                                </div>
                            )}
                        </>
                    )}
                </div>
            )}
        </Menu.Item>
    )
}

export default DropdownLink
