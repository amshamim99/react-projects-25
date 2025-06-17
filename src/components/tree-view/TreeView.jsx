import React from 'react'
import { menus } from './data';
import MenuList from './MenuList';

const TreeView = ({ menus = [] }) => {
    return (
        <div className='container mx-auto'>
            <div className='h-[500px] w-[350px] bg-blue-400'>
                <MenuList list={menus} />
            </div>
        </div>
    )
}

export default TreeView