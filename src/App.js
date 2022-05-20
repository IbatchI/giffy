import './App.css'
import { Link, Route } from 'wouter'
import {GifsContextProvider} from './Context/GifsContext'
import Detail from './pages/Detail/Detail'
import Home from './pages/Home/Home'
import SearchResults from './pages/SearchResults/SearchResults'

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to='/'>
          <img className='app-logo' src='/logo192.png' alt='Logo principal' />
        </Link>
        <GifsContextProvider>
          <Route component={Detail} path='/gif/:id' />
          <Route component={Home} />
          <Route component={SearchResults} path='/search/:keyword' />
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;
