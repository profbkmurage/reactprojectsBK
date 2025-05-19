import MenuList from './menu-list'
import './style.css'
// eslint-disable-next-line react/prop-types
export default function TreeView ({ menus = [] }) {
  return (
    <div className = 'menu-list-container'>
      <MenuList list={menus} />
    </div>
  )
}
