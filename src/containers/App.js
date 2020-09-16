import React, { Component } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robotsarray: [],
            searchfield: '',
        }
    }


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robotsarray: users }))
    }


    render() {
        //Appearntly we can't have const or define variables that aren't functions 
        //unless it's under render.
        const {robotsarray,searchfield} = this.state;
        const filtered = robotsarray.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        if (robotsarray.length === 0) {
            return (
                <div className="tc">
                    <h1 className="ma2 f1 ">RoboFriends</h1>
                    <Searchbox SearchChange={this.onSearchChange} />
                    <div>
                        <h1 className="ma2 f1 ">Loading..</h1>
                    </div>
                </div>
            )
        } else {

            return (
                <div className="tc main">
                    <h1 className="ma2 f1 ">RoboFriends</h1>
                    <Searchbox SearchChange={this.onSearchChange} />
                    <div style={{ overflowY: 'scroll', height: '500px', border: '2px solid grey' }}>
                        <CardList robots={filtered} />
                    </div>
                </div>
            )
        }
    }
}


export default App;