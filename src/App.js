import './App.css'
import Detail from './pages/Detail/Detail'
import Home from './pages/Home/Home'
import { Link, Route } from 'wouter'
import SearchResults from './pages/SearchResults/SearchResults'

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to='/'>
          <img className='app-logo' src='/logo192.png' alt='Logo principal' />
        </Link>
        <Route component={Home} />
        <Route component={SearchResults} path='/search/:keyword' />
        <Route component={Detail} path='/gif/:id' />
      </section>
    </div>
  );
}

export default App;
