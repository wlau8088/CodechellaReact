import React, { Component } from 'react';
import Wrapper from './components/Wrapper';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      catFacts: [
        'Cats can jump up to six times their length.',
        'Cats have whiskers on the backs of their front legs, as well.',
        'Cats typically sleep for 12 to 16 hours a day.',
      ],
      catFactField: 'Cats',
      potatoFacts: [
        'Potatoes are 80% water.',
        'The potato originated in the region of southern Peru',
        'The world’s largest potato producing country is China.',
      ],
      potatoFactField: '',
    };

    // Binding functions to App so state can be accessed
    this.updateCatFactField = this.updateCatFactField.bind(this);
    this.addCatFact = this.addCatFact.bind(this);
    this.updatePotatoFactField = this.updatePotatoFactField.bind(this);
    this.addPotatoFact = this.addPotatoFact.bind(this);
  }

  componentDidMount() {}

  // Cat Fact Functions
  updateCatFactField(newFact) {
    const newState = JSON.parse(JSON.stringify(this.state));
    this.setState({ ...newState, catFactField: newFact });
  }


  addCatFact() {
    const newState = JSON.parse(JSON.stringify(this.state));
    const newCatFactArr = this.state.catFacts.slice();
    newCatFactArr.push(this.state.catFactField);
    this.setState({ ...newState, catFacts: newCatFactArr, catFactField: '' });
  }

  // Potato Fact Functions
  updatePotatoFactField(newFact) {
    const newState = JSON.parse(JSON.stringify(this.state));
    this.setState({ ...newState, potatoFactField: newFact });
  }

  addPotatoFact() {
    const newState = JSON.parse(JSON.stringify(this.state));
    const newPotatoFactArr = this.state.potatoFacts.slice();
    newPotatoFactArr.push(this.state.potatoFactField);
    this.setState({
      ...newState,
      potatoFacts: newPotatoFactArr,
      potatoFactField: '',
    });
  }

  render() {
    return (
      <div>
        <Wrapper
          catFacts={this.state.catFacts}
          catFactField={this.state.catFactField}
          updateCatFactField={this.updateCatFactField}
          addCatFact={this.addCatFact}
          potatoFacts={this.state.potatoFacts}
          potatoFactField={this.state.potatoFactField}
          updatePotatoFactField={this.updatePotatoFactField}
          addPotatoFact={this.addPotatoFact}
        />
      </div>
    );
  }
}

export default App;
