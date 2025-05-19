import MenuList from './menu-list';
import PropTypes from 'prop-types';

export default function MenuItem({ item }) {
    return (<li>
        <p>{item.label}</p>
        {
            item && item.children && item.children.length > 0 ? <MenuList list={item.children} /> : null
        }
    </li>);
}

MenuItem.proptype = {
    item: PropTypes.string,
    label:proptype
}