import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Launches from './components/Launches';
import logo from "./spacex-vector-logo-1.png";

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div className="App">
        <img alt="spacex" style={{width: 300, display:'block', margin: 'auto'}} src={logo}/>
      </div>
      <Launches />
      </ApolloProvider>
    );
  }
}

export default App;
