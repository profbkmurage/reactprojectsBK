import Accordian from './components/accordian'
import RandomColor from './components/random_color'
import StarRating from './components/starRating'
import ImageSlider from './components/imageSlider'
function App () {
  return (
    <>
      <StarRating noOfStars={10} />
      <RandomColor />
      <Accordian />
      <ImageSlider
        url={'https://picsum.photos/200/300
'}
        page={'1'}
        limit={'10'}
      />
    </>
  )
}
export default App
