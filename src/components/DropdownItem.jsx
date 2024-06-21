import { useState, useEffect } from 'react'
import classNames from 'classnames'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import BioDropdown from './BioDropdown'
import TableDropdown from './TableDropdown'

const DropdownItem = ({
    date,
    title,
    label,
    brief,
    description,
    icons,
    vertical,
    onClick,
    isActive,
    items,
    color,
    link,
    download,
    pending,
    playVideo,
    type,
    key0,
    directoryOpen,
    sub,
    pos,
    addDirectoryOpen,
    subMenu,
}) => {
    const [open, setOpen] = useState(false)
    const [selectedItems, setSelectedItems] = useState([])
    const [openedItems, setOpenedItems] = useState([])

    const toggleOpenedItems = i => {
        if (openedItems.includes(i)) {
            const newItems = openedItems.filter(item => item !== i)
            setOpenedItems(newItems)
        } else {
            setOpenedItems([...openedItems, i])
        }
    }
    const handleClick = () => {
        if (link) window.open(link, '_blank')
        if (download) {
            const a = document.createElement('a')
            a.href = download
            a.download = download.split('/').pop()
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
        }
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

    const handleDownload = () => {
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
    useEffect(() => {
        if (sub) setOpenedItems(sub)
        else setOpenedItems([])
        if (directoryOpen) setOpen(directoryOpen)
        else setOpen(false)
    }, [directoryOpen])

    return (
        <div
            className={classNames(
                'cursor-pointer mt-1.5',
                isActive && 'border-t-2 border-x-2',
                isActive && download && 'border-b-2',
                isActive &&
                (color === 'green'
                    ? 'border-green'
                    : color === 'orange'
                        ? 'border-orange'
                        : 'border-yellow'),
            )}
            onClick={() => addDirectoryOpen && addDirectoryOpen(key0)}>
            <div className="text-gray-900 select-none">
                <div
                    onClick={() => {
                        if (onClick) onClick()
                        if (items) setOpen(!open)
                    }}
                    className={classNames(
                        'flex justify-between px-4 pt-4 pb-4 text-xl',
                        vertical && 'flex-col',
                        isActive ? 'text-white' : 'bg-white',
                        items && 'cursor-pointer',
                        open && pos === true && subMenu === 5 && 'hidden',
                    )}>
                    {date && <div className="font-thin text-sm">{date}</div>}
                    <div
                        onClick={handleClick}
                        className={classNames(
                            vertical && 'font-bold',
                            ['line', 'table'].includes(type) &&
                            open &&
                            'text-orange font-black',
                        )}>
                        {title}
                        {pending && <span className="text-orange">*</span>}
                        {label && (
                            <div className="font-thin text-light-grey">
                                {label}
                            </div>
                        )}
                    </div>
                    {description && (
                        <div className="font-thin">{description}</div>
                    )}
                    <div
                        onClick={handleClick}
                        className={classNames(
                            'flex justify-end items-center gap-1',
                            vertical && 'mt-6',
                            isActive ? 'text-white' : 'text-light-grey',
                        )}>
                        {icons.map((Icon, index) => (
                            <Icon
                                key={index}
                                className={classNames(
                                    'w-6 h-6 cursor-pointer',
                                    open && items && 'rotate-90',
                                )}
                            />
                        ))}
                    </div>
                </div>
                {open && items && (
                    <div className="relative">
                        {type === 'line' ? (
                            <div>
                                {items.map((item, index) => (
                                    <BioDropdown key={index} {...item} />
                                ))}
                            </div>
                        ) : type === 'table' ? (
                            <div className="py-4">
                                {brief && (
                                    <div className="font-thin px-4">
                                        {brief}
                                    </div>
                                )}
                                {items.map((item, index) => (
                                    <TableDropdown
                                        key={index}
                                        {...item}
                                        playVideo={playVideo}
                                    />
                                ))}
                            </div>
                        ) : (
                            <>
                                {items.map((item, index) => (
                                    <div key={key0 + '-' + index}>
                                        {item.items ? (
                                            <>
                                                <div
                                                    className="flex justify-between px-6 py-4"
                                                    onClick={() => {
                                                        toggleOpenedItems(
                                                            key0 + '_' + index,
                                                        )
                                                    }}
                                                    style={{
                                                        backgroundColor:
                                                            'white',
                                                    }}>
                                                    <div className="text-xl flex items-center gap-3 text-light-grey">
                                                        {item.title}
                                                    </div>
                                                    {item.icons.map(
                                                        (Icon, idx) => (
                                                            <Icon
                                                                key={idx}
                                                                className={classNames(
                                                                    'w-6 h-6 cursor-pointer',
                                                                    openedItems.includes(
                                                                        key0 +
                                                                        '_' +
                                                                        index,
                                                                    ) &&
                                                                    item &&
                                                                    'rotate-90',
                                                                )}
                                                            />
                                                        ),
                                                    )}
                                                </div>
                                                {openedItems.includes(
                                                    key0 + '_' + index,
                                                ) && (
                                                        <div className="relative">
                                                            {item.items.map(
                                                                (itemI, indexI) => (
                                                                    <div>
                                                                        {itemI.items ? (
                                                                            <>
                                                                                <div
                                                                                    className="flex justify-between px-8 py-4"
                                                                                    onClick={() => {
                                                                                        toggleOpenedItems(
                                                                                            key0 + '_' + index + '_' + indexI,
                                                                                        )
                                                                                    }}
                                                                                    style={{
                                                                                        backgroundColor:
                                                                                            'white',
                                                                                    }}>
                                                                                    <div className="text-xl flex items-center gap-3 text-light-grey">
                                                                                        {itemI.title}
                                                                                    </div>
                                                                                    {itemI.icons.map(
                                                                                        (Icon, idx) => (
                                                                                            <Icon
                                                                                                key={idx}
                                                                                                className={classNames(
                                                                                                    'w-6 h-6 cursor-pointer',
                                                                                                    openedItems.includes(
                                                                                                        key0 +
                                                                                                        '_' +
                                                                                                        index + '_' + indexI,
                                                                                                    ) &&
                                                                                                    itemI &&
                                                                                                    'rotate-90',
                                                                                                )}
                                                                                            />
                                                                                        ),
                                                                                    )}
                                                                                </div>
                                                                                {openedItems.includes(
                                                                                    key0 + '_' + index + '_' + indexI,
                                                                                ) && (
                                                                                        <div className="relative">
                                                                                            {itemI.items.map(
                                                                                                (itemI, indexI) => (
                                                                                                    <div
                                                                                                        key={indexI}
                                                                                                        className={classNames(
                                                                                                            'px-10 py-2 text-xl flex gap-3 text-light-grey bg-white',
                                                                                                            itemI.overflow ||
                                                                                                            '',
                                                                                                        )}>
                                                                                                        <input
                                                                                                            className={classNames(
                                                                                                                'focus:ring-transparent mt-[5px]',
                                                                                                                itemI.overflow &&
                                                                                                                'mt-[5px]',
                                                                                                            )}
                                                                                                            type="checkbox"
                                                                                                            name="title"
                                                                                                            onChange={e =>
                                                                                                                handleItems(
                                                                                                                    itemI,
                                                                                                                    e
                                                                                                                        .target
                                                                                                                        .checked,
                                                                                                                )
                                                                                                            }
                                                                                                        />
                                                                                                        {
                                                                                                            itemI.title
                                                                                                        }
                                                                                                    </div>
                                                                                                ),
                                                                                            )}
                                                                                            {itemI.items.length ? <div
                                                                                                onClick={
                                                                                                    handleDownload
                                                                                                }
                                                                                                className="text-light-grey absolute right-8 bottom-3">
                                                                                                <ArrowDownTrayIcon
                                                                                                    className={classNames(
                                                                                                        'w-6 h-6 cursor-pointer',
                                                                                                        selectedItems.filter(
                                                                                                            value =>
                                                                                                                itemI.items.includes(
                                                                                                                    value,
                                                                                                                ),
                                                                                                        ).length &&
                                                                                                        ' text-orange',
                                                                                                    )}
                                                                                                />
                                                                                            </div> : ""}
                                                                                        </div>
                                                                                    )}
                                                                            </>
                                                                        ) : (

                                                                            <div
                                                                                key={indexI}
                                                                                className={classNames(
                                                                                    'px-8 py-2 text-xl flex gap-3 text-light-grey bg-white',
                                                                                    itemI.overflow ||
                                                                                    '',
                                                                                )}>
                                                                                <input
                                                                                    className={classNames(
                                                                                        'focus:ring-transparent mt-[5px]',
                                                                                        itemI.overflow &&
                                                                                        'mt-[5px]',
                                                                                    )}
                                                                                    type="checkbox"
                                                                                    name="title"
                                                                                    onChange={e =>
                                                                                        handleItems(
                                                                                            itemI,
                                                                                            e
                                                                                                .target
                                                                                                .checked,
                                                                                        )
                                                                                    }
                                                                                />
                                                                                {
                                                                                    itemI.title
                                                                                }
                                                                                <div
                                                                                    onClick={
                                                                                        handleDownload
                                                                                    }
                                                                                    className="text-light-grey absolute right-6 bottom-3">
                                                                                    <ArrowDownTrayIcon
                                                                                        className={classNames(
                                                                                            'w-6 h-6 cursor-pointer',
                                                                                            selectedItems.filter(
                                                                                                value =>
                                                                                                    item.items.includes(
                                                                                                        value,
                                                                                                    ),
                                                                                            ).length &&
                                                                                            ' text-orange',
                                                                                        )}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                ),
                                                            )}

                                                        </div>
                                                    )}
                                            </>
                                        ) : (
                                            <>
                                                <div className="px-4 py-2 text-xl flex items-center gap-3 text-light-grey bg-white">
                                                    <input
                                                        className="focus:ring-transparent"
                                                        type="checkbox"
                                                        name="title"
                                                        onChange={e =>
                                                            handleItems(
                                                                item,
                                                                e.target
                                                                    .checked,
                                                            )
                                                        }
                                                    />
                                                    {item.title}
                                                </div>
                                                <div
                                                    onClick={handleDownload}
                                                    className="text-light-grey absolute right-4 bottom-3">
                                                    <ArrowDownTrayIcon
                                                        className={classNames(
                                                            'w-6 h-6 cursor-pointer',
                                                            selectedItems.length &&
                                                            ' text-orange',
                                                        )}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default DropdownItem
