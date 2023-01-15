
import React from 'react';
import './App.css';
import Headers from './components/Headers';
import Footers from './components/Footers';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast';
import data from './components/data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animalData: data,
      isModalSeen:false,
      selectedBeast:'',
      selectedBeastImage:'',
      selectedDescription:''
    };
  };

  handleCloseModal = () => {
    this.setState({
      isModalSeen:false
    });
  };

  handleOpenModal= (title,image_url,description) => {
    // console.log(data.find(beast=> beast.title=== title));
    // let selectedBeastVarible=data.find(beast=> beast.title=== title);
    

    this.setState({
      isModalSeen: true,
      selectedBeast: title,
      selectedBeastImage:image_url,
      selectedDescription:description
    });
  };


 render(){
  return (
  <>
  <Headers/>
  <Main
  data={data}
  animalData={this.state.animalData}
  handleOpenModal={(this.handleOpenModal)}
  />
  <SelectedBeast
  show={this.state.isModalSeen}
  handleCloseModal={this.handleCloseModal}
  selectedBeast={this.state.selectedBeast}
  selectedBeastImage={this.state.selectedBeastImage}
  selectedDescription={this.state.selectedDescription}
  />
  
  <Footers/>
  </>
  );
}
}

export default App;
