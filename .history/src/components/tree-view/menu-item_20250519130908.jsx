/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useState } from 'react'
import MenuList from './menu-list'
import { FaMinus, FaPlus } from 'react-icons/fa'
export default function MenuItem ({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

  function handleToggleChldren (getCurrentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel]
    })
  }

  return (
    <li>
      <div style={{display:}}>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChldren(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus size={25} color='white' />
            ) : (
              <FaPlus size={25} color='white' />
            )}
          </span>
        ) : null}
      </div>
      {/* check if there are children or not */}
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  )
}
