import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import './App.css';



class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        if(this.state.robots.length === 0){
            return(
                <div>
                    <div className="headerSection">
                        <h1>Loading...</h1>
                    </div>
             </div>  
            );
        }else{
            return(
                <div>
                    <div className="headerSection">
                        <h1>Robofriends</h1>
                        <SearchBox searchChange={this.onSearchChange} />
                    </div>
                    <div className="cardListSection">
                    <Scroll>
                        <CardList robots = {filteredRobots} />
                    </Scroll>
                    </div>
                </div>
            );
        }
    }
}
export default App;