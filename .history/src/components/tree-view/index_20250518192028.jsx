import MenuList from './menu-list'
import PropTypes from 'prop-types'

export default function TreeView({ menus = [] }) {
    return <div className='treeview-container'>
    <MenuList list = {menus}/>
    </div>
}

TreeView.pr