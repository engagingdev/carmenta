import { useEffect, useState } from 'react'
import DropdownItem from './DropdownItem'
import classNames from 'classnames'

const DropdownGroup = ({
    dates = [],
    titles,
    icons,
    contents,
    color,
    vertical = false,
    downloads = [],
}) => {
    const [view, setView] = useState(0)
    const [newView, setNewView] = useState([])

    useEffect(() => {
        setNewView([...newView, '1'])
    }, [newView])
    return (
        <>
            <DropdownItem
                date={dates[0]}
                title={titles[0]}
                icons={icons[0]}
                isActive={view === 1}
                onClick={() => setView(view === 1 ? 0 : 1)}
                color={color}
                vertical={vertical}
                download={downloads[0] ?? null}
            />

            {icons[1] && dates[1] && (
                <div className="sm:block hidden">
                    <DropdownItem
                        date={dates[1]}
                        title={titles[1]}
                        icons={icons[1]}
                        isActive={view === 2}
                        onClick={() => setView(view === 2 ? 0 : 2)}
                        color={color}
                        vertical={vertical}
                        download={downloads[1] ?? null}
                    />
                    {newView.map((view, idx) => (
                        <div className={classNames('px-2', idx && 'mt-8')}>
                            <DropdownItem
                                date={dates[0]}
                                title={titles[0]}
                                icons={icons[0]}
                                isActive={view === 1}
                                onClick={() => setView(view === 1 ? 0 : 1)}
                                color={color}
                                vertical={vertical}
                                download={downloads[0] ?? null}
                            />
                        </div>
                    ))}
                    <DropdownItem
                        date={dates[1]}
                        title={titles[1]}
                        icons={icons[1]}
                        isActive={view === 2}
                        onClick={() => setView(view === 2 ? 0 : 2)}
                        color={color}
                        vertical={vertical}
                        download={downloads[1] ?? null}
                    />
                </div>
            )}
            {view === 1 && contents[0]}

            {icons[1] && dates[1] && (
                <div className="sm:hidden block mt-1.5">
                    <DropdownItem
                        title={titles[1]}
                        icons={icons[1]}
                        isActive={view === 2}
                        onClick={() => setView(view === 2 ? 0 : 2)}
                        color={color}
                        vertical={vertical}
                        download={downloads[1] ?? null}
                    />
                </div>
            )}
            {view === 2 && contents[1]}
        </>
    )
}

export default DropdownGroup
