import Filter from './components/Filter';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
      </div>
    </>
  );
}

export default App;
