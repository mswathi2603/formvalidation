import React, { Component } from 'react';
import './App.css';
import SimpleForm from './forms/SimpleForm';

class App extends Component {
 render() {
 return (
 <div className="App demoForm">
 <h1>React Form Validations</h1><hr style={{ borderTop: '3px solid purple' }} />
 <SimpleForm />
 </div>
 );
 }
}

export default App;