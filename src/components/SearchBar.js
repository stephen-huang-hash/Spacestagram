import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
    this.changeInput = this.changeInput.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }
  componentDidMount() {
    this.enableEnter()
  }
  changeInput(event) {
    event.preventDefault()
    this.setState({
      input: event.target.value
    })
  }
  handleSearch(event) {
    event.preventDefault()
    this.props.updateFilter(this.state.input)
  }
  enableEnter() {
    let input = document.getElementById("searchbar");
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchbtn").click();
      }
    });
  }
  render() {
    return (
      <div className="input-group">
        <input onChange={(event) => {this.changeInput(event)}} type="search" className="form-control rounded" id="searchbar" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <button onClick={(event) => {this.handleSearch(event)}} type="button" className="btn search" id="searchbtn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-search" viewBox="0 0 16 16" role="img" alt="magnifying glass">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
          </svg>
        </button>
      </div>
    )
  }
}

export default SearchBar;
