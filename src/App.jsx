
import './App.css'
import Header from './assets/components/Header'
import MovieList from './assets/components/MovieList'
import Footer from './assets/components/Footer'
function App() {

  return (
    <div className="app-container">
      <Header/>
    <main className="main-content">
      <MovieList/>

    </main>
    <footer>
      <Footer/>
    </footer>
  </div>
  )
}

export default App
