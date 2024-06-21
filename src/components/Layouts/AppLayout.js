import { useEffect, useState } from 'react'
import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'
import Sidebar from '@/components/Layouts/Sidebar'
import useWindowDimensions from '@/hooks/useWindowDimension'
import classNames from 'classnames'

const AppLayout = ({
    children,
    background = 'bg-dark-green',
    layoutClassName,
    childrenLayout,
    sidebar = true
}) => {
    const { user } = useAuth({ middleware: 'auth' })
    const { width } = useWindowDimensions()
    const [open, setOpen] = useState(true)

    useEffect(() => {
        if (width < 1024) setOpen(false)
        else setOpen(true)
    }, [width])

    if (!user) return <></>

    return (
        <div
            className={classNames(
                layoutClassName || `w-full ${background} min-h-screen`,
            )}>
            <Navigation user={user} open={open} setOpen={setOpen} />
            <div className="relative py-16 w-full">
                {sidebar && <Sidebar user={user} open={open} /> }

                <div className={classNames('flex flex-1 flex-col', sidebar? 'lg:ml-80':'')}>
                    {/* Page Content */}
                    <main
                        className={classNames(
                            childrenLayout ||
                                'max-w-7xl mx-auto w-full text-white',
                        )}>
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}

export default AppLayout
