
import React from 'react';
import Form from 'react-bootstrap/Form';
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
    this.setState({
      isModalSeen: true,
      selectedBeast: title,
      selectedBeastImage:image_url,
      selectedDescription:description
    });
  };

  // sets the value I target
  updateFilterData = (e) => {
    e.preventDefault();
    let numOfHorns = e.target.value;
    console.log(numOfHorns);

    // updates what I am filtering and the number of horns in the data
    let updatedData;
    numOfHorns === 'All' ? updatedData = data : updatedData = data.filter(obj => obj.horns === parseInt(numOfHorns));


    this.setState({
      animalData: updatedData
    });
  };

  // function that creates the options based on the number of horns so if new data is added with different horn we have that edge case covered 

  dropDownFilter = () => {
    console.log('dropDownFilter');
    let occurrenceOfHorn = data.map(points => points.horns).filter((e,a,t) => t.indexOf(e) === a).sort((a,b) => a-b);
    return occurrenceOfHorn.map((horn, idx) => {
      console.log(typeof horn);

      return <option value={horn} key={idx}>{horn}</option>
    });
  };


 render(){
  return (
  <>
  <Headers/>

  <Form id='form'>
    <Form.Group>
      <Form.Label>Organize by number of Horns</Form.Label>
      <Form.Select onChange={this.updateFilterData}>
        <option>All</option>
        {this.dropDownFilter()}
      </Form.Select>
    </Form.Group>
  </Form>

  <Main
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
