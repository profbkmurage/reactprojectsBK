import Accordian from './components/accordian'
import RandomColor from './components/random_color'
import StarRating from './components/starRating'
import ImageSlider from './components/imageSlider'
import LoadMoreData from './components/load-more-data'
import TreeView from './components/tree-view'
import menusfr
function App () {
  return (
    <>
      <TreeView menus={menus}/>
      <LoadMoreData/>
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
