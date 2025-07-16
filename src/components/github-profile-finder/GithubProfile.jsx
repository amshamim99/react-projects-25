import React, { useEffect, useState } from 'react'
import User from './User'

const GithubProfile = () => {
    const [userName, setUserName] = useState("sangammukherjee")

    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchGithubUserData() {
        setLoading(true)
        const res = await fetch(`https://api.github.com/users/${userName}`)
        const data = await res.json()

        if (data) {
            setUserData(data)
            setLoading(false)
            setUserName("")
        }
    }

    function handleSubmit() {
        fetchGithubUserData()
    }

    useEffect(() => {
        fetchGithubUserData()
    }, [])

    if (loading) {
        return <h1>Loading data ! please wait</h1>
    }
    return (
        <div className='github-profile-container mx-auto w-[90%] max-w-[1000px] p-5 rounded-lg'>
            <div className="input-wrapper text-center flex gap-5 justify-center mb-5">
                <input className='border border-black p-3 text-lg outline-none rounded-lg' type="text" name='search by username' placeholder='Search Github Username...' value={userName} onChange={(event) => setUserName(event.target.value)} />
                <button className='py-2 px-8 bg-[#00f4ec] text-black rounded-lg cursor-pointer' onClick={handleSubmit}>Search</button>
            </div>
            {
                userData !== null ? <User user={userData} /> : null
            }
        </div>
    )
}

export default GithubProfile