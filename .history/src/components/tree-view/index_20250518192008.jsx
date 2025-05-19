import MenuList from './menu-list'
import Prop

export default function TreeView({ menus = [] }) {
    return <div className='treeview-container'>
    <MenuList list = {menus}/>
    </div>
}