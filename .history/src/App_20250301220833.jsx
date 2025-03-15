import Accordian from './components/accordian'
import RandomColor from './components/random_color'
import StarRating from './components/starRating'
function App () {
  return <> 
  <StarRating noOfStars={6}/>  
    <RandomColor/>
    <Accordian />
    </>
}
export default App
