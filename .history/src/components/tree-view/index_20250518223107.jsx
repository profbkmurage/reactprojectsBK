import MenuList from "./menu-list"
import PropTypes from "prop-types"
export default function TreeView({ menus = [] }) {
    return (
        <div className="tree-view-container">
            <MenuList list={menus}/>
        </div>
    )
}

TreeView.