
import './App.css';
import Headers from './components/Headers';
import Footer from './components/Footer';
import Main from './components/Main';
import data from './components/data.json';

function App() {
  return (
  <>
  <Headers/>
  <Main
  data={data}/>
  <Footer/>
  </>

  );
}

export default App;
