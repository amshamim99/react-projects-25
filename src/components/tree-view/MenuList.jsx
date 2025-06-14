import React from 'react'
import MenuItem from './MenuItem'

const MenuList = ({ list = [] }) => {
    return (
        <div>
            <ul className='ml-10 mb-3'>
                {
                    list && list.length ?
                        list.map((listItem) => <MenuItem item={listItem} />)
                        : null
                }
            </ul>
        </div>
    )
}

export default MenuList