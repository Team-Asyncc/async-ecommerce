import './App.scss';
import Categories from './components/Categories/Categories';
// import Loading from './components/Loading';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="bg-red-300 p-3 rounded">ECOMMERCE WEBSITE</p>
      </header>
      <Categories />
    </div>
  );
}

export default App;
