import { FaStar } from "react-icons/fa";
import 
export default function StarRating({noOfStars = 5}) { //this is going to receive an argument of the number of stars
    return <div className="star-rating">
        {
            [...Array(noOfStars)].map((_, index) => {
                return <FaStar key={index} onClick={}onMouseMove={} onMouseLeave={} size={40}/>
            })
        }
    </div>
}