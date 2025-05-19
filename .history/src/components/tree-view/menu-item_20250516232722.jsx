export default function MenuItem({ item }) {
    return <li>
        <p>{item.label}</p> 
        {
            item && item.children && item.children.length > 0 ? <MenuList :null
        }
    </li>
}