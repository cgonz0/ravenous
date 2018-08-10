import React, { Component } from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';


class App extends Component {

constructor(props){
  super(props);
  this.state = {
    businesses:[]
  };
  this.searchYelp = this.searchYelp.bind(this);
}

// search functionality with paramaters to send to API & simulate search console.log
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({
        businesses: businesses
      })
    });
  };

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        {/* add searchYelp property in Searchbar */}
          <SearchBar searchYelp={this.searchYelp}/>
          {/* set buinesslist prop: add business property set to the business array */}
          <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
