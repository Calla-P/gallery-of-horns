import React from 'react';
import './HornedB.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import data from './data.json';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hornedData: data,
            likes: 0,
        };
    }
    //add likes by one when button is clicked

    handleLikes = () => {
        this.setState({
            likes: this.state.likes + 1
        });
    }


    render() {
        return (
            <>
           
            <Card className={'hornedcard'}>
                <Card.Body>
                    <Card.Header>{this.props.title}
                    </Card.Header> 
                    <div className= 'cards'>
                        <img
                        className='picture'
                        src={this.props.imgUrl}
                        title={this.props.title}
                        alt={this.props.description}
                        >

                        </img>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </div>

                    <div className='iLikeItWrap'>
                        <Button className='iLikeItButton' onClick={(this.handleLikes)}>I Like this!</Button>
                        <Card.Text id='iLikeItCounter'>❤️❤️❤️ {this.state.likes}</Card.Text>
                    </div>
                </Card.Body>
            </Card>
            </>
        );
    }
}

export default HornedBeast;