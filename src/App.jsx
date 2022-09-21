
import Header from './components/Header';
import Questions from './components/Questions';

function App() {
  return (
    <div className='container mx-auto mt-10'>
      <Header />

      <div className='mt-12 md:flex'>
        <Questions />
      </div>
    </div>
  )
}

export default App
