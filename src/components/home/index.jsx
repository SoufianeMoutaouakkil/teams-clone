import React from 'react'
import Header from '../common/header'
import Sidebar from '../common/sidebar'
import Calls from '../calls'
import "./home.css"

function Home() {
    return (
        <div className='home-container'>
            <Header />
            <div className='home-body'>
                <div className='home-sidebare'>
                    <Sidebar />
                </div>
                <>
                    <Calls />
                </>
            </div>
        </div>
    )
}

export default Home