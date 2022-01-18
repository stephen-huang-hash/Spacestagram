import React from 'react';
import SearchBar from './SearchBar.js'

class Heading extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand">Spacestagram</a>
            <SearchBar updateFilter={this.props.updateFilter}/>
        </div>
      </nav>
    )
  }
}

export default Heading;

