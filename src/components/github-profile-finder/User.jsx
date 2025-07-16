import React from 'react'

const User = ({ user }) => {

    const { avatar_url, followers, following, public_repos, name, login, created_at } = user;

    const createdDate = new Date(created_at)
    return (
        <div className='user text-center p-4 rounded-xl border border-black'>
            <div>
                <img className='avatar mx-auto h-20 rounded-full' src={avatar_url} alt="User" />
            </div>
            <div className='flex gap-5 justify-center mt-5'>
                <a href={`https://github.com/${login}`}>{name || login}</a>
                <p className='m-0 text-xl font-bold'>
                    user joned on{""}
                    {
                        `${createdDate.getDate()} ${createdDate.toLocaleString('en-us', {
                            month: "short",
                        })} ${createdDate.getFullYear()}`
                    }
                </p>
            </div>
            <div className='flex justify-center gap-5 text-xl font-bold'>
                <p>Public repos</p>
                <p>{public_repos}</p>
            </div>
            <div className='flex justify-center gap-5 text-xl font-bold'>
                <p>Followers</p>
                <p>{followers}</p>
            </div>
            <div className='flex justify-center gap-5 text-xl font-bold'>
                <p>Following</p>
                <p>{following}</p>
            </div>
        </div>
    )
}

export default User