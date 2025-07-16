import React, { useEffect, useState } from 'react'
import Suggesstions from './Suggesstions'
import data from '../data';

const SearchAutoComplete = () => {
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const [searchParam, setSearchParam] = useState('')
    const [showDropdown, setShowDropdown] = useState(false)
    const [filteredUsers, setFilteredUsers] = useState([])

    function handleChange(event) {
        const query = event.target.value.toLowerCase()
        setSearchParam(query);
        if (query.length > 1) {
            const filteredData = users && users.length ? users.filter((item) => item.toLowerCase().indexOf(query) > -1) : null;
            setFilteredUsers(filteredData);
            setShowDropdown(true)
        } else {
            setShowDropdown(false)
        }
    }

    function handleClick(event){
        setShowDropdown(false)
        setSearchParam(event.target.innerText)
        setFilteredUsers([])
    }
    async function fetchListOfUsers() {
        try {
            setLoading(true)
            const response = await fetch('https://dummyjson.com/users')
            const data = await response.json();

            if (data && data.users && data.users.length) {
                setUsers(data.users.map((userItem) => userItem.firstName));
                setLoading(false)
                setError(null)
            }
        }
        catch (error) {
            setLoading(false)
            console.log(error)
            setError(error);
        }
    }


    useEffect(() => {
        fetchListOfUsers()
    },[])

    console.log(users, filteredUsers)
    return (
        <div className='search-autocomplete-container py-20 text-center'>
            {
                loading ? <h1>Loading data ! please wait</h1> : <input className='outline-none border border-black rounded-lg p-5' value={searchParam}
                    name='search-users'
                    placeholder='Search Users here...'
                    onChange={handleChange}
                />
            }

            {
                showDropdown && <Suggesstions handleClick={handleClick} data={filteredUsers} />
            }
        </div>
    )
}

export default SearchAutoComplete