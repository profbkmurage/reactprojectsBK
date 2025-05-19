import MenuList from './menu-list'
import './style.css'
// eslint-disable-next-line react/prop-types
export default function TreeView ({ menus = [] }) {
  return (
    <div className = 'tree-view-con'>
      <MenuList list={menus} />
    </div>
  )
}
