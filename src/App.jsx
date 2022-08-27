
import Header from './components/Header';
import Puntacion from './components/Puntacion';
import Questions from './components/Questions';

function App() {
  return (
    <div className='container mx-auto mt-10'>
      <Header />

      <div className='mt-12 md:flex'>
        <Questions />
        <Puntacion />
      </div>
    </div>
  )
}

export default App
