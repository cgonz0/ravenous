import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};


class SearchBar extends React.Component {
//add search bar constructor and set state and add three keys
  constructor(props){
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };
    //these methods use this, so must bind
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }


  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
        //update state of sorting option when clicked*
        onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
        //return <li> with new method in className**
        className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}
      </li>
      );
    });
  }

  //get sort option's class (whether on not it's should be styled as selected**
  getSortByClass(sortByOption) {
    return this.state.sortBy === sortByOption ? 'active' : '';
  }

  //set state of the sorting option*
  handleSortByChange(sortByOption) {
    this.setState({
      sortBy: sortByOption
    });
  }

  //method to handle changes in terms(businesses) / the state of input element should be updated to reflect the text typed into
  handleTermChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  //method to handle changes in location / the state of input element should be updated to reflect the text typed into
  handleLocationChange(event) {
    this.setState({
      location: event.target.value
    });
  }

  //functionality for simulate search when you click button
  handleSearch(event) {
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy
    );
    event.preventDefault();
  }


  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          {/* handle term or location change / add onChange attributes */}
          <input onChange={this.handleTermChange} placeholder="Search Businesses" />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          {/* add on click attribute to get handleSearch to work */}
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    )
  }
};

export default SearchBar;


