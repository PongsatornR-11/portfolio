import React, { useRef, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

import Loading from '../components/load/Loading'

const Layout = () => {
    const navbarRef = useRef(null)
    const [navbarHeight, setNavbarHeight] = useState(0)

    useEffect(() => {
        if (navbarRef.current) {
            setNavbarHeight(navbarRef.current.offsetHeight)
        }
    }, [])
    return (
        // <Loading>
        <div>
            <Navbar ref={navbarRef} />
            <main className='flex bg-primary' style={{ paddingTop: `${navbarHeight}px` }}>
                <Outlet />
            </main>
        </div>
        // </Loading>
    )
}

export default Layout