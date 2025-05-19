export default function MenuList({ list = [] }) {
    return (
        <div className="menu-list-container">
            {
                list && list.length ? list.map(listI) :null
            }
        </div>
    )
}