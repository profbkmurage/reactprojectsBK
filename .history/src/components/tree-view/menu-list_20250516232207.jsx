import MenuItem from './menu-item';
import proptypes from '/P'

export default function MenuList({ list = [] }) {
    return <div className = 'menu-list-container'>
        {
            list && list.length
                ?list.map((listItem) => <MenuItem item = {listItem} key/>) 
            : null
        }
    </div>
}