import MenuList from './menu-list'
// eslint-disable-next-line react/prop-types
export default function TreeView ({ menus = [] }) {
  return (
    <div className='tree-view-container'>
      <MenuList list={menus} />
    </div>
  )
}

