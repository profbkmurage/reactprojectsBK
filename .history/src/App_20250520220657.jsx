import Accordian from './components/accordian'
import RandomColor from './components/random_color'
import StarRating from './components/starRating'
import ImageSlider from './components/imageSlider'
import LoadMoreData from './components/load-more-data'
import TreeView from './components/tree-view'
import menus from './components/tree-view/data'
import QRCodeGenerator from './components/qr-code-generator'
i
function App () {
  return (
    <>
      <QRCodeGenerator />
      <TreeView menus={menus} />
      <LoadMoreData />
      <StarRating noOfStars={10} />
      <RandomColor />
      <Accordian />
      <ImageSlider
        url={'https://picsum.photos/v2/list?'}
        page={'1'}
        limit={'5'}
      />
    </>
  )
}
export default App
