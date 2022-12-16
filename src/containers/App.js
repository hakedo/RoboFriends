import React, { Component } from "react";
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
// import { robotsList } from './robots'
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searcField: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searcField: event.target.value });
    }

    render() {
        const { robots, searcField } = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searcField.toLowerCase());
        })
        return !robots.length ?
            <h1>Loading</h1> :
            (
                <div className="tc">
                    <h1 className="f1">ROBOFRIENDS</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                    <CardList robots={filterRobots} />
                    </Scroll>
                </div>
            );
    }
}

export default App;