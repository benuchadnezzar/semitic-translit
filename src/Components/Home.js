import React, { Component } from 'react';
import TextInput from './TextInput';
import TextDisplay from './TextDisplay';
import Dropdown from './Dropdown';

const langs = {
arabic: ['ا', 'ب', 'غ', 'ج', 'ذ', 'د', 'ه', 'ة', 'و', 'ز', 
'ح', 'ط', 'ظ', 'ي', 'خ', 'ك', 'ل', 'م', 'ن', 'س', 'ع', 'ف', 
'ص', 'ض', 'ق', 'ر', 'ش', 'س', 'ت', 'ث', 'ّ', 'أُ', 'إ', 'أ', 
'ئ', 'ٍ', 'ً', 'ِ', 'ُ', ' ', '\n'],
judeoArabic: ['א', 'ב', 'ג', 'ג֔', 'ד', 'דּ', 'ה', 'ה֕', 'ו', 'ז', 
'ח', 'ט', 'ט֔', 'י', 'כ', 'כּ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 
'צ֔', 'ק', 'ר', 'שׁ', 'ס', 'תּ', 'ת', '֝', 'ו', 'י', 'א', 'אְי', 'ינ', 
'אנ', 'י', 'ו', ' ', '\n']
};

class Home extends Component {
constructor(props) {
  super(props);
  this.state = {value: '',
  displayValue: '',
  inLang: '',
  outLang: ''
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSet = this.handleSet.bind(this);
  this.handleClear = this.handleClear.bind(this);
  this.handleInLang = this.handleInLang.bind(this);
  this.handleOutLang = this.handleOutLang.bind(this);
}

handleChange(e) {
  this.setState({value: e.target.value});
}

handleSet(inLang, outLang, letter, indices, display) {
  indices = [];
  display = [];
  inLang = this.state.inLang;
  outLang = this.state.outLang;
  for (var i = 0; i < this.state.value.length; i ++) {
    letter = this.state.value.charAt(i);
    indices.push(langs[inLang].indexOf(letter));
  }
  for (i = 0; i < indices.length; i ++) {
    display.push(langs[outLang][indices[i]]);
  }
  this.setState({displayValue: display.join('')});
}

handleClear() {
  this.setState({displayValue: ''});
}

handleInLang(e) {
  this.setState({inLang: e.target.value});
}

handleOutLang(e) {
  this.setState({outLang: e.target.value});
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
      <Dropdown placeholder={'From'} handleChange={this.handleInLang}/>
      <Dropdown placeholder={'To'} handleChange={this.handleOutLang}/>
	    <TextInput handleChange={this.handleChange}/>
      <button onClick={this.handleSet}>Transliterate</button>
      <button onClick={this.handleClear}>Clear</button>
	    <TextDisplay textDisplay={this.state.displayValue}/>
	  </div>
	)
}
}

export default Home;