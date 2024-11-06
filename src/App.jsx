import Chats from "./Components/chats/chats"
import Details from "./Components/details/Details"
import List from "./Components/list/List"

const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chats/>
      <Details/>
    </div>
  )
}

export default App