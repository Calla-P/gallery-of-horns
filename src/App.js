
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import data from './components/data.json';

function App() {
  return (
  <>
  <Header/>
  <Main
  data={data}/>
  <Footer/>
  </>

  );
}

export default App;
