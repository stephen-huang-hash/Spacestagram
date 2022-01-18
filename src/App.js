import './App.css';
import React from 'react';
import Images from './components/Images.js';
import Heading from './components/Heading.js';
import Alert from './components/Alert.js';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';



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
      <AppProvider className="App" i18n={enTranslations}>
        <Heading updateFilter={this.updateFilter} className="header"/>
        <Alert />
        <Images filter={this.state.filter}/>
      </AppProvider>
    );
  }
}

export default App;
