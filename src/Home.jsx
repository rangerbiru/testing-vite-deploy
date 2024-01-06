import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h2>Halaman Home</h2>
            <Link to={'/testing-vite-deploy/tes'}>Ke Tes</Link>
        </div>
    )
}

export default Home