import './styles/App.css';
import Card from './Card'
import Nav from './Nav'
import data from './data'

function App() {

  const cards = data.map(item => {
    return (
      <Card
        key = {item.id}
        {...item}
      />
    )
  })

  return (
    <div>
      <Nav />
      {cards}
    </div>
  )
}

export default App;
