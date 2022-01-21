import { Provider } from 'react-redux'
import store from './store'
import Navbar from './components/Navbar'
import EpisodeList from './components/Episode'
import ContainerSection from './components/ContainerSection'
//import Player from './components/player'
function App() {
  return (
    <>
    <Provider store={store}>
      <Navbar />
      <EpisodeList />
      <ContainerSection />
    </Provider>
    </>
  );
}

export default App;
