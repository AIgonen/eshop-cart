import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';


function App() {
  return (
    /*
    <div className="App">
      <header className="App-header">
        <p>
          Shopping Cart
        </p>
      </header>
      </div>
      */
     <>
      <NavBar />
      <main className='container'>
        <Counters />
      </main>
     </>
  );
}

export default App;
