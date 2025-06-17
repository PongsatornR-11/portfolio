import React from 'react'
import Button from '../utils/Button'

const MainIcon = () => {
    return (
        <Button className={'border m-'}>

            <svg width="100" height="60" viewBox="0 0 140 100" xmlns="http://www.w3.org/2000/svg">
                {/* <!-- Horizontal Hexagon --> */}

                <polygon points="30,50 50,20 90,20 110,50 90,80 50,80"
                    stroke="var(--color-secondary)" stroke-width="4" fill="none" />

                {/* <polygon points=""
                    stroke="var(--color-secondary)" stroke-width="2" fill="none" /> */}
                {/* <!-- PR Letters --> */}
                <text x="70" y="53" text-anchor="middle" dominant-baseline="middle"
                    font-family="Helvetica, sans-serif" font-size="26" fill="var(--color-secondary)" font-weight="200">
                    PR
                </text>

            </svg>

        </Button>
    )
}

export default MainIcon