import React from 'react';
import HornedBeast from './HornedBeast';
import unicorn from './img/unicorn.jpeg';
import rhino from './img/rhino.avif';
import costume from './img/costume.jpeg';
import '../App.css'
class Main extends React.Component{

    render() {

        return(

    <>
    <main>
        <HornedBeast title={"UniWhal"} imgUrl={unicorn} description={"A unicorn and a narwhal nuzzling their horns"}/>

        <HornedBeast title={"Rhino Family"} imgUrl={rhino} description={"Parent rhino with two babies"} />

        <HornedBeast title={"Unicorn Head"} imgUrl={costume} description={"Someone wearing a very silly unicorn head mask"}/>
    </main>
    </>
  
    );
  }
}

  export default Main;