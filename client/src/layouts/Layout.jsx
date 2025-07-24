import React, { useRef, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

import Loading from '../components/load/Loading'
import ContactFix from '../components/utils/ContactFix'
import MailtoFix from '../components/utils/MailtoFix'
import BackToTop from '../components/utils/BackToTop'
import ContactSmall from '../components/utils/ContactSmall'
import ThemeSwitcher from '../components/utils/ThemeSwitcher'

const Layout = () => {
    const navbarRef = useRef(null)
    const [navbarHeight, setNavbarHeight] = useState(0)

    useEffect(() => {
        if (navbarRef.current) {
            setNavbarHeight(navbarRef.current.offsetHeight)
        }
    }, [])
    return (
        <Loading>
            <Navbar ref={navbarRef} />
            <main className='flex bg-primary' style={{ paddingTop: `${navbarHeight}px` }}>
                <Outlet />
            </main>
            <ContactFix />
            <MailtoFix email={'pongsatorn.rk@gmail.com'} />
            <ContactSmall />
            <BackToTop />
            <ThemeSwitcher />
        </Loading>
    )
}

export default Layout