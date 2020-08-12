import React, {useEffect, useState} from 'react'
import NavBtn from "../Burger";
import {style} from './style'
const Navigation = () => {

    const nav = [
        {
            title: 'Chapter 1',
            url: 'chapter-1',
            nested: [
                {
                    title: 'Topic 1',
                    url: 'topic-1',
                },
                {
                    title: 'Topic 1',
                    url: 'topic-2',
                },
                {
                    title: 'Topic 3',
                    url: 'topic-3',
                },
            ]
        },
        {
            title: 'Chapter 2',
            url: 'chapter-2',
            nested: [
                {
                    title: 'Topic 1',
                    url: 'topic-1',
                },
                {
                    title: 'Topic 1',
                    url: 'topic-2',
                },
                {
                    title: 'Topic 3',
                    url: 'topic-3',
                },
            ]
        },
        {
            title: 'Chapter 3',
            url: 'chapter-3',
            nested: [
                {
                    title: 'Topic 1',
                    url: 'topic-1',
                },
                {
                    title: 'Topic 1',
                    url: 'topic-2',
                },
                {
                    title: 'Topic 3',
                    url: 'topic-3',
                },
            ]
        },
        {
            title: 'Chapter 4',
            url: 'chapter-4',
            nested: [
                {
                    title: 'Topic 1',
                    url: 'topic-1',
                },
                {
                    title: 'Topic 1',
                    url: 'topic-2',
                },
                {
                    title: 'Topic 3',
                    url: 'topic-3',
                },
            ]
        }
    ]

    const [navState, setNavState] = useState(false)

    const navHandler = () => {
        if (!navState) {
            if(window.innerWidth <= 768) {
                document.body.style.overflowY = 'hidden'
            }
            return setNavState(true)
        } else {
            document.body.style.overflowY = 'auto'
            return setNavState(false)
        }
    }

    useEffect(() => {
        addEventListener('keydown', e => {
        if(e.key === 'Escape' || e.keyCode == 27) {
            setNavState(false)
        }
    })},[])

    return (
        <div className="navigation w-4/12 sm:w-2/12 md:w-4/12 lg:w-2/12 xl:mr-2 relative">
            <NavBtn click = {navHandler} navState = {navState}/>
            <nav className={`nav shadow-lg w-full sm:w-8/12 md:w-4/12 lg:w-2/12 xl:w-2/12 h-full fixed left-0 bg-blue-900 text-gray-100 ${!navState ? `hide` : `show`}`}>
                <ul className="nav-f list-reset overflow-y-auto">
                    {nav.map((navItem, index) => (
                        <li key = {index}>
                        <a href={navItem.url}
                           className="block p-4 text-grey-darker font-bold border-purple hover:bg-grey-lighter border-r-4">{navItem.title}</a>
                        {navItem.nested ?
                            <ul className='list-reset'>
                                {navItem.nested.map((nested, i) => (
                                    <li key={`${i}-${index}`}>
                                        <a
                                            href={nested.url}
                                            className='block p-2 text-gray-500 hover:bg-blue-800'
                                        >
                                            {nested.title}
                                        </a>
                                    </li>
                                ))}
                            </ul> : null
                        }
                    </li>))}
                </ul>
            </nav>
            <style jsx>{style}</style>
        </div>
    )
}

export default Navigation