import { useRouter } from 'next/router'
import Link from 'next/link'
import classNames from 'classnames'

import { useAuth } from '@/hooks/auth'
import useWindowDimensions from '@/hooks/useWindowDimension'

import { ArrowUpTrayIcon } from '@heroicons/react/24/solid'

const Sidebar = ({ open }) => {
    const router = useRouter()
    const { pathname, query } = router

    let className = 'text-orange',
        hoverClassName = 'hover:text-orange',
        afterClassName = 'after:text-orange'
    if (pathname.includes('/dashboard/framework')) {
        className = 'text-yellow'
        hoverClassName = 'hover:text-yellow'
        afterClassName = 'after:text-yellow'
    }
    if (pathname.includes('/dashboard/resources')) {
        className = 'text-lilac'
        hoverClassName = 'hover:text-lilac'
        afterClassName = 'after:text-lilac'
    }
    if (pathname.includes('/dashboard/news')) {
        className = 'text-blue'
        hoverClassName = 'hover:text-blue'
        afterClassName = 'after:text-blue'
    }

    const { logout } = useAuth()
    const { width } = useWindowDimensions()

    if (!open) return <></>

    return (
        <nav className="fixed inset-0 h-screen z-[9999] mt-16 w-80">
            {/* Primary Navigation Menu */}
            <div
                className={classNames(
                    'flex w-80 flex-col z-10 border-r border-secondary lg:border-none',
                    open && 'h-[calc(100vh-64px)]',
                )}>
                <div
                    className={classNames(
                        'flex min-h-0 flex-1 flex-col relative',
                        width < 1024 && open ? 'bg-dark-grey' : 'bg-black',
                    )}>
                    <div>
                        {open && (
                            <>
                                <ul className="dui-menu text-white">
                                    <li>
                                        <details
                                            open={pathname.includes(
                                                'dashboard/framework',
                                            )}>
                                            <summary
                                                onClick={() =>
                                                    router.push(
                                                        '/dashboard/framework',
                                                    )
                                                }
                                                className={`text-lg ${hoverClassName} font-medium ${afterClassName} after:w-4 after:h-4`}>
                                                Innovation Framework
                                            </summary>
                                            <ul>
                                                <li
                                                    className={
                                                        pathname ===
                                                            '/dashboard/framework' &&
                                                        query.tab === 0
                                                            ? `${className}`
                                                            : 'text-white'
                                                    }>
                                                    <Link
                                                        href="/dashboard/framework?tab=0"
                                                        className={`${hoverClassName}`}>
                                                        Innovation Framework
                                                    </Link>
                                                </li>
                                                <li
                                                    className={
                                                        pathname ===
                                                            '/dashboard/framework' &&
                                                        query.tab == 1
                                                            ? `${className}`
                                                            : 'text-white'
                                                    }>
                                                    <Link
                                                        href="/dashboard/framework?tab=1"
                                                        className={`${hoverClassName}`}
                                                        scroll={false}>
                                                        Ideation
                                                    </Link>
                                                </li>
                                                <li>
                                                    <details
                                                        open={
                                                            pathname.includes(
                                                                '/dashboard/framework/core-business-process',
                                                            ) ||
                                                            (pathname ===
                                                                '/dashboard/framework' &&
                                                                query.tab == 2)
                                                        }>
                                                        <summary
                                                            onClick={() =>
                                                                router.push(
                                                                    '/dashboard/framework?tab=2',
                                                                    undefined,
                                                                    {
                                                                        scroll: false,
                                                                    },
                                                                )
                                                            }
                                                            className={classNames(
                                                                'text-white -ml-4',
                                                                hoverClassName,
                                                                afterClassName,
                                                            )}>
                                                            Core Business
                                                            Process
                                                        </summary>
                                                        <ul className="text-white">
                                                            <li
                                                                className={
                                                                    pathname ===
                                                                    '/dashboard/framework/core-business-process/identify-needs'
                                                                        ? `${className}`
                                                                        : 'text-white'
                                                                }>
                                                                <Link
                                                                    href="/dashboard/framework/core-business-process/identify-needs"
                                                                    className={`${hoverClassName}`}>
                                                                    Identify
                                                                    Needs
                                                                </Link>
                                                            </li>
                                                            <li
                                                                className={
                                                                    pathname ===
                                                                    '/dashboard/framework/core-business-process/develop-solutions'
                                                                        ? `${className}`
                                                                        : 'text-white'
                                                                }>
                                                                <Link
                                                                    href="/dashboard/framework/core-business-process/develop-solutions"
                                                                    className={`${hoverClassName}`}>
                                                                    Develop
                                                                    Solutions
                                                                </Link>
                                                            </li>
                                                            <li
                                                                className={
                                                                    pathname ===
                                                                    '/dashboard/framework/core-business-process/manage-change'
                                                                        ? `${className}`
                                                                        : 'text-white'
                                                                }>
                                                                <Link
                                                                    href="/dashboard/framework/core-business-process/manage-change"
                                                                    className={`${hoverClassName}`}>
                                                                    Manage
                                                                    Change
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </details>
                                                </li>
                                                <li
                                                    className={
                                                        pathname ===
                                                            '/dashboard/framework' &&
                                                        query.tab == 3
                                                            ? `${className}`
                                                            : 'text-white'
                                                    }>
                                                    <Link
                                                        href="/dashboard/framework?tab=3"
                                                        className={`${hoverClassName}`}
                                                        scroll={false}>
                                                        Strategy
                                                    </Link>
                                                </li>
                                                {/* <li>
                                                    <details
                                                        open={
                                                            pathname ===
                                                                '/dashboard/framework' &&
                                                            query.tab > 2
                                                        }>
                                                        <summary
                                                            onClick={() =>
                                                                router.push(
                                                                    '/dashboard/framework?tab=3',
                                                                    undefined,
                                                                    {
                                                                        scroll: false,
                                                                    },
                                                                )
                                                            }
                                                            className={classNames(
                                                                'text-white -ml-4',
                                                                hoverClassName,
                                                                afterClassName,
                                                            )}>
                                                            Strategy
                                                        </summary>
                                                        <ul className="text-white">
                                                            <li
                                                                className={
                                                                    pathname ===
                                                                        '/dashboard/framework' &&
                                                                    query.tab ==
                                                                        4
                                                                        ? `${className}`
                                                                        : 'text-white'
                                                                }>
                                                                <Link
                                                                    href={
                                                                        '/dashboard/framework?tab=4'
                                                                    }
                                                                    scroll={
                                                                        false
                                                                    }
                                                                    className={`${hoverClassName}`}>
                                                                    Competitive
                                                                    Strategy
                                                                </Link>
                                                            </li>
                                                            <li
                                                                className={
                                                                    pathname ===
                                                                        '/dashboard/framework' &&
                                                                    query.tab ==
                                                                        5
                                                                        ? `${className}`
                                                                        : 'text-white'
                                                                }>
                                                                <Link
                                                                    href={
                                                                        '/dashboard/framework?tab=5'
                                                                    }
                                                                    scroll={
                                                                        false
                                                                    }
                                                                    className={`${hoverClassName}`}>
                                                                    Human
                                                                    Strategy
                                                                </Link>
                                                            </li>
                                                            <li
                                                                className={
                                                                    pathname ===
                                                                        '/dashboard/framework' &&
                                                                    query.tab ==
                                                                        6
                                                                        ? `${className}`
                                                                        : 'text-white'
                                                                }>
                                                                <Link
                                                                    href={
                                                                        '/dashboard/framework?tab=6'
                                                                    }
                                                                    scroll={
                                                                        false
                                                                    }
                                                                    className={`${hoverClassName}`}>
                                                                    Financial
                                                                    Strategy
                                                                </Link>
                                                            </li>
                                                            <li
                                                                className={
                                                                    pathname ===
                                                                        '/dashboard/framework' &&
                                                                    query.tab ==
                                                                        7
                                                                        ? `${className}`
                                                                        : 'text-white'
                                                                }>
                                                                <Link
                                                                    href={
                                                                        '/dashboard/framework?tab=7'
                                                                    }
                                                                    scroll={
                                                                        false
                                                                    }
                                                                    className={`${hoverClassName}`}>
                                                                    Communications
                                                                    Strategy
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </details>
                                                </li> */}
                                            </ul>
                                        </details>
                                    </li>
                                    <hr className="my-6 mx-2 border-[#99999999]" />
                                    <li>
                                        <details
                                            open={pathname.includes(
                                                '/dashboard/our-science',
                                            )}>
                                            <summary
                                                onClick={() =>
                                                    router.push(
                                                        '/dashboard/our-science',
                                                    )
                                                }
                                                className={`text-lg ${hoverClassName} font-medium ${afterClassName} after:w-4 after:h-4`}>
                                                Our Science
                                            </summary>
                                            <ul className="text-white">
                                                <li
                                                    className={
                                                        pathname ==
                                                            '/dashboard/our-science' &&
                                                        query.tab == 0
                                                            ? `${className}`
                                                            : 'text-white'
                                                    }>
                                                    <Link
                                                        href="/dashboard/our-science?tab=0"
                                                        className={`${hoverClassName}`}
                                                        scroll={false}>
                                                        Our Presentations
                                                    </Link>
                                                </li>
                                                <li
                                                    className={
                                                        pathname ==
                                                            '/dashboard/our-science' &&
                                                        query.tab == 1
                                                            ? `${className}`
                                                            : 'text-white'
                                                    }>
                                                    <Link
                                                        href="/dashboard/our-science?tab=1"
                                                        className={`${hoverClassName}`}
                                                        scroll={false}>
                                                        Our Publications
                                                    </Link>
                                                </li>
                                            </ul>
                                        </details>
                                    </li>
                                    <hr className="my-6 mx-2 border-[#99999999]" />
                                    <li>
                                        <details
                                            open={pathname.includes(
                                                '/dashboard/resources',
                                            )}>
                                            <summary
                                                onClick={() =>
                                                    router.push(
                                                        '/dashboard/resources',
                                                    )
                                                }
                                                className={`text-lg ${hoverClassName} font-medium ${afterClassName} after:w-4 after:h-4`}>
                                                Resources
                                            </summary>
                                            <ul className="text-secondary">
                                                <li
                                                    className={
                                                        pathname ==
                                                            '/dashboard/resources' &&
                                                        query.tab == 0
                                                            ? `${className}`
                                                            : 'text-white'
                                                    }>
                                                    <Link
                                                        href="/dashboard/resources?tab=0"
                                                        className={`${hoverClassName}`}
                                                        scroll={false}>
                                                        Directory
                                                    </Link>
                                                </li>
                                                <li
                                                    className={
                                                        pathname ==
                                                            '/dashboard/resources' &&
                                                        query.tab == 1
                                                            ? `${className}`
                                                            : 'text-white'
                                                    }>
                                                    <Link
                                                        href="/dashboard/resources?tab=1"
                                                        className={`${hoverClassName}`}
                                                        scroll={false}>
                                                        Culture & Organization
                                                    </Link>
                                                </li>
                                                <li
                                                    className={
                                                        pathname ==
                                                            '/dashboard/resources' &&
                                                        query.tab == 2
                                                            ? `${className}`
                                                            : 'text-white'
                                                    }>
                                                    <Link
                                                        href="/dashboard/resources?tab=2"
                                                        className={`${hoverClassName}`}
                                                        scroll={false}>
                                                        Tools & Software
                                                    </Link>
                                                </li>
                                                <li
                                                    className={
                                                        pathname ==
                                                            '/dashboard/resources' &&
                                                        query.tab == 3
                                                            ? `${className}`
                                                            : 'text-white'
                                                    }>
                                                    <Link
                                                        href="/dashboard/resources?tab=3"
                                                        className={`${hoverClassName}`}
                                                        scroll={false}>
                                                        Workshops
                                                    </Link>
                                                </li>
                                                <li
                                                    className={
                                                        pathname ==
                                                            '/dashboard/resources' &&
                                                        query.tab == 4
                                                            ? `${className}`
                                                            : 'text-white'
                                                    }>
                                                    <Link
                                                        href="/dashboard/resources?tab=4"
                                                        className={`${hoverClassName}`}
                                                        scroll={false}>
                                                        References
                                                    </Link>
                                                </li>
                                            </ul>
                                        </details>
                                    </li>
                                    <hr className="my-6 mx-2 border-[#99999999]" />
                                    <li>
                                        <details
                                            open={pathname.includes(
                                                '/dashboard/news',
                                            )}>
                                            <summary
                                                onClick={() =>
                                                    router.push(
                                                        '/dashboard/news',
                                                    )
                                                }
                                                className={`text-lg ${hoverClassName} font-medium ${afterClassName} after:w-4 after:h-4`}>
                                                News
                                            </summary>
                                            <ul className="text-white">
                                                <li
                                                    className={
                                                        pathname ==
                                                            '/dashboard/news' &&
                                                        query.tab == 0
                                                            ? `${className}`
                                                            : 'text-white'
                                                    }>
                                                    <Link
                                                        href="/dashboard/news?tab=0"
                                                        className={`${hoverClassName}`}
                                                        scroll={false}>
                                                        Internal News
                                                    </Link>
                                                </li>
                                                <li
                                                    className={
                                                        pathname ==
                                                            '/dashboard/news' &&
                                                        query.tab == 1
                                                            ? `${className}`
                                                            : 'text-white'
                                                    }>
                                                    <Link
                                                        href="/dashboard/news?tab=1"
                                                        className={`${hoverClassName}`}
                                                        scroll={false}>
                                                        Competitive Reports
                                                    </Link>
                                                </li>
                                                <li
                                                    className={
                                                        pathname ==
                                                            '/dashboard/news' &&
                                                        query.tab == 2
                                                            ? `${className}`
                                                            : 'text-white'
                                                    }>
                                                    <Link
                                                        href="/dashboard/news?tab=2"
                                                        className={`${hoverClassName}`}
                                                        scroll={false}>
                                                        Competitive Trial Overview
                                                    </Link>
                                                </li>
                                                <li
                                                    className={
                                                        pathname ==
                                                            '/dashboard/news' &&
                                                        query.tab == 3
                                                            ? `${className}`
                                                            : 'text-white'
                                                    }>
                                                    <Link
                                                        href="/dashboard/news?tab=3"
                                                        className={`${hoverClassName}`}
                                                        scroll={false}>
                                                        Press Release
                                                    </Link>
                                                </li>
                                                <li
                                                    className={
                                                        pathname ==
                                                            '/dashboard/news' &&
                                                        query.tab == 4
                                                            ? `${className}`
                                                            : 'text-white'
                                                    }>
                                                    <Link
                                                        href="/dashboard/news?tab=4"
                                                        className={`${hoverClassName}`}
                                                        scroll={false}>
                                                        Publications
                                                    </Link>
                                                </li>
                                            </ul>
                                        </details>
                                    </li>
                                </ul>
                                <button
                                    onClick={logout}
                                    className="text-secondary hover:text-white absolute bottom-4 left-4 flex w-full items-center text-sm font-bold gap-2 mb-2 ml-2">
                                    <ArrowUpTrayIcon className="w-6 h-6 rotate-[270deg]" />
                                    Sign Out
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar
