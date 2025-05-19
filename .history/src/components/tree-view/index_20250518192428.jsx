import MenuList from './menu-list'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
export default function TreeView({ menus = [] }) {
    return <div className='treeview-container'>
    <MenuList list = {menus}/>
    </div>
}

TreeView.PropTypes = {
    menus: PropTypes.array
}