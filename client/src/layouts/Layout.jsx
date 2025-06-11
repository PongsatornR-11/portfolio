import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

import Loading from '../components/load/Loading'

const Layout = () => {
    return (
        // <Loading>
        <div className='bg-primary'>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
        // </Loading>
    )
}

export default Layout