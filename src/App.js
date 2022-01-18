import './App.css';
import React from 'react';
import Images from './components/Images.js';
import Heading from './components/Heading.js';
import Alert from './components/Alert.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ""
    }
    this.updateFilter = this.updateFilter.bind(this)
  }
  updateFilter(filter) {
    this.setState({
      filter
    })
  }
  render() {
    return (
      <React.Fragment className="App">
        <Heading updateFilter={this.updateFilter} className="header"/>
        <Alert />
        <Images filter={this.state.filter}/>
      </React.Fragment>
    );
  }
}

export default App;
