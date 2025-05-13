import Accordian from './components/accordian'
import RandomColor from './components/random_color'
import StarRating from './components/starRating'
import ImageSlider from './components/imageSlider'
import 
function App () {
  return (
    <>
      <ImageSlider
        url={'https://picsum.photos/v2/list?'}
        page={'1'}
        limit={'5'}
      />
      <StarRating noOfStars={10} />
      <RandomColor />
      <Accordian />
    </>
  )
}
export default App
