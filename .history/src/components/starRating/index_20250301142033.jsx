import { FaStar } from "react-icons/fa";

export default function StarRating({noOfStars = 5}) { //this is going to receive an argument of the number of stars
    return <div className="star-rating">
        {
            [...Array(noOfStars)].map((_, index) => {
                return <FaStar
            })
        }
    </div>
}