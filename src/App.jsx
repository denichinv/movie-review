
import './App.css'
import Header from './assets/components/Header'
import MovieList from './assets/components/MovieList'
function App() {

  return (
    <div>
      <Header/>
      <MovieList/>
    <main className="main-content">
      <h1>Movie Review App</h1>
      <p>This is the main content area for our movie review application.</p>
    </main>
  </div>
  )
}

export default App
