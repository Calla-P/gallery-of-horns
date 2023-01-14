import React from 'react';
import HornedBeast from './HornedBeast';
import '../App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Main extends React.Component{

    render() {

        return(

    <>
    <main>
      <Container>
        <Row xs={2} s={2} md={3}>
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
        </Row>
      </Container>
    </main>
    </>
  
    )
  };
};

  export default Main;
