
import './App.css';
import Headers from './components/Headers';
import Footers from './components/Footers';
import Main from './components/Main';
import data from './components/data.json';

function App() {
  return (
  <>
  <Headers/>
  <Main
  data={data}/>
  <Footers/>
  </>

  );
}

export default App;
