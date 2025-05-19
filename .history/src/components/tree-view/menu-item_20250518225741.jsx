/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useState } from "react"
import MenuList from "./menu-list"
export default function MenuItem({ item }) {
    const [dispal]
    return (
        <li>
            <p>{item.label}</p>
            {/* check if there are children or not */}
            {
                item && item.children && item.children.length > 0 ?
                <MenuList list={item.children}/>
                : null
            }
        </li>)
}
