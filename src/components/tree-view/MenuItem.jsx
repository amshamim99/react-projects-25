import React, { useState } from 'react'
import { Children } from 'react';
import MenuList from './MenuList';

const MenuItem = ({ item }) => {

  const [displayCurrentChildren, SetDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentlabel) {
    SetDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
    })
  }

  return (
    <li>
      <div className='flex gap-5 items-center cursor-pointer text-white mb-3'>
        <p>{item.label}</p>
        {
          item && item.Children && item.Children.length ? <span className='text-3xl font-bold' onClick={() => handleToggleChildren(item.label)}>
            {
              displayCurrentChildren[item.label] ? "-" : "+"
            }
          </span> : null
        }
      </div>
      {
        item && item.Children && item.Children.length > 0 && displayCurrentChildren[item.label] ?
          <MenuList list={item.Children} />
          : null
      }
    </li>
  )
}

export default MenuItem