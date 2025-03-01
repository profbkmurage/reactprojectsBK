import { useState } from "react"

export default function Accordian() {
    const [selected, setSelected] = useState(null);

    return (
        <div className="wrapper">
            <div className="accordian">
                {data && data.length > 0 ? (
                
                ):(<div>No data found</div>)}
            </div>
        </div>
    );
}
 