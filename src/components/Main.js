import React from 'react';
import HornedBeast from './HornedBeast';
import '../App.css'
import data from './data.json';

class Main extends React.Component{

    render() {

        return(

    <>
    <main>
      {
        this.props.data.map((animal) =>
        (
          <HornedBeast
          id={animal._id}
          title={animal.title}
          image_url={animal.image_url}
          description={animal.description}
          horns={animal.horns}
          />
        )
        )
      }
    </main>
    </>
  
    )
  };
};

  export default Main;

  // <HornedBeast title={"UniWhal"} img_url={unicorn} description={"A unicorn and a narwhal nuzzling their horns"}/>

  // <HornedBeast title={"Rhino Family"} img_url={rhino} description={"Parent rhino with two babies"} />

  // <HornedBeast title={"Unicorn Head"} img_url={costume} description={"Someone wearing a very silly unicorn head mask"}/>