import MenuList from './menu-list'
import 

export default function TreeView({ menus = [] }) {
    return <div className='treeview-container'>
    <MenuList list = {menus}/>
    </div>
}