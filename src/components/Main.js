import React from 'react';
import HornedBeast from './HornedBeast';
// import data from './data.json';
import '../App.css'


class Main extends React.Component{

    render() {

        return(

    <>
    <main>
      {
        this.props.data.map((animal) =>
        (
          <HornedBeast
          key={animal._id}
          title={animal.title}
          image_url={animal.image_url}
          description={animal.description}
          horns={animal.horns}
          keyword={animal.keyword}


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
