import React, { Component } from 'react';
import TextInput from './TextInput';
import TextDisplay from './TextDisplay';
import Button from './Button';

class Home extends Component {
	constructor(props) {
    super(props);
    this.state = {value: '',
    dipslayValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSet = this.handleSet.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSet() {
    this.setState({displayValue: this.state.value});
  }

  handleClear() {
    this.setState({displayValue: ''});
  }

  render() {
  	return (
  		<div className="App">
		    <header className="App-header">
		      <h1 className="App-title">Judeo-Arabic Transliterator v 2.0</h1>
		    </header>
		    <p className="App-intro">
		      Enter your Hebrew text below, and select the language to see your transliteration
		    </p>
		    <TextInput handleChange={this.handleChange}/>
		    <Button buttonText={'Transliterate'} handleClick={this.handleSet}/>
		    <Button buttonText={'Clear'} handleClick={this.handleClear}/>
		    <TextDisplay textDisplay={this.state.displayValue}/>
		  </div>
  	)
  }
}

export default Home;