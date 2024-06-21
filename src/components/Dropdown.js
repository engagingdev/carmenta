import React from 'react'
import { Menu, Transition } from '@headlessui/react'

const Dropdown = ({
    align = 'right',
    width = 48,
    contentClasses = 'sm:py-2 py-4 bg-white',
    trigger,
    children,
}) => {
    let alignmentClasses

    switch (width) {
        case '64':
            width = 'sm:w-64'
            break
        case '56':
            width = 'sm:w-56'
            break
        case '52':
            width = 'sm:w-52'
            break
        case '48':
            width = 'sm:w-48'
            break
    }

    switch (align) {
        case 'left':
            alignmentClasses = 'origin-top-left left-0'
            break
        case 'top':
            alignmentClasses = 'origin-top'
            break
        case 'right':
        default:
            alignmentClasses = 'origin-top-right right-0'
            break
    }

    return (
        <Menu as="div" className="relative">
            {({ open }) => (
                <>
                    <Menu.Button as={React.Fragment}>{trigger}</Menu.Button>

                    <Transition
                        show={open}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95">
                        <div
                            className={`absolute z-50 mt-2 ${width} w-[calc(100vw-32px)] rounded-md shadow-lg overflow-auto max-h-[calc(100vh-64px)] ${alignmentClasses}`}>
                            <Menu.Items
                                className={`rounded-md focus:outline-none ring-1 ring-black ring-opacity-5 ${contentClasses}`}
                                static>
                                {children}
                            </Menu.Items>
                        </div>
                    </Transition>
                </>
            )}
        </Menu>
    )
}

export default Dropdown
