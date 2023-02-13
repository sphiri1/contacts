import React from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import './App.css';
import Scroll from '../components/Scroll';


class App extends React.Component {
    constructor(){
        super() //aways needed and to be declared first in constructor
        this.state =  {
          robots: [],
          searchField: ''
     }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
           return response.json();
        })
        .then(users => {
            this.setState({robots: users});
        })
        
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render(){
        const {robots, searchField} = this.state;
        const filterContacts = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return robots.length === 0 ?
             <h1>Loading...</h1>
        :
    (
        <div className='tc'>
            <h1 className='f1'>CONTACTS</h1>
            <SearchBox  searchChange={this.onSearchChange}/>
            <Scroll>
            <CardList robots={filterContacts}/> 
            </Scroll>
        </div>
    )}
}

export default App;