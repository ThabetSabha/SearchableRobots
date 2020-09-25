import React, { Component } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import './App.css';
import { connect } from 'react-redux';
import { requestRobotsAction, setSearchField } from '../actions';


const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobotsReducer.robots,
        isPending: state.requestRobotsReducer.isPending,
        error: state.requestRobotsReducer.error
    };

}


const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => requestRobotsAction(dispatch)
    }
}

class App extends Component {
   
    componentDidMount() {
            this.props.onRequestRobots();
    }


    render() {
        //Appearntly we can't have const or define variables that aren't functions 
        //unless it's under render.
        
        const { onSearchChange, searchField,robots,isPending } = this.props;
        const filtered = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        if (isPending) {
            return (
                <div className="tc">
                    <h1 className="ma2 f1 ">RoboFriends</h1>
                    <Searchbox SearchChange={onSearchChange} />
                    <div>
                        <h1 className="ma2 f1 ">Loading..</h1>
                    </div>
                </div>
            )
        } else {

            return (
                <div className="tc main">
                    <h1 className="ma2 f1 ">RoboFriends</h1>
                    <Searchbox SearchChange={onSearchChange} />
                    <div style={{ overflowY: 'scroll', height: '500px', border: '2px solid grey' }}>
                        <CardList robots={filtered} />
                    </div>
                </div>
            )
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);