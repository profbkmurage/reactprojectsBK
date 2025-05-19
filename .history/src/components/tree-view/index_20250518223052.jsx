import MenuList from "./menu-list"
import PropTy
export default function TreeView({ menus = [] }) {
    return (
        <div className="tree-view-container">
            <MenuList list={menus}/>
        </div>
    )
}