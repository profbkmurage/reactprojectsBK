import MenuItem from './menu-item'
// eslint-disable-next-line react/prop-types
export default function MenuList ({ list = [] }) {
  return (
    <ul men>
      {list && list.length
        ? list.map(listItem => (
            <MenuItem item={listItem} key={listItem.index} />
          ))
        : null}
    </ul>
  )
}
