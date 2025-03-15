import Accordian from './components/accordian'
import RandomColor from './components/random_color'
import StarRating from './components/starRating'
function App () {
  return <> 
  <StarRating noOfStars={3}/>  
    <RandomColor/>
    <Accordian />
    </>
}
export default App
