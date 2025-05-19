/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function MenuItem ({ item }) {
    return (
        <li>
            <p>{item.label}</p>
            {/* check if there are children or not */}
            {
                item && item.children && item.children.length>? :null
            }
        </li>)
}
