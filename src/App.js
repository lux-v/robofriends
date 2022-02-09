import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import './App.css';
import { robots } from "./robots";



class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        return(
            <div>
                <div className="headerSection">
                    <h1>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                </div>
                <div className="cardListSection">
                    <CardList robots = {filteredRobots} />
                </div>
            </div>
            
        );
    }
}

export default App;