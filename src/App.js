import React from 'react';
import './App.css';
import Sheet from './components/sheet/Sheet';
import SheetContext from './contexts/SheetContext';

class App extends React.Component {
  state = {
    update: this.changeState,
    updateState: (state) => this.setState(state),
    createField: this.createField,
    createArray: this.createArray
  };

  createField(field, key, length, initialValue) {
    const sheet = this;
    if (!sheet[field])
      sheet[field] = {};

    if (!sheet[field][key]) {
      sheet[field][key] = {
        startValue: initialValue,
        value: initialValue,
        fill: this.createArray(Array(length), initialValue, -1)
      };
    }

    this.updateState(sheet);
  }

  createArray(array, initialValue, index) {
    for (let i = 0; i < array.length; i++) {
      if (i < initialValue) {
        array[i] = true;
      }
      else if (i === index) {
        array[i] = !array[i];
      }
      else {
        array[i] = index >= i ? true : false;
      }
    }
    return array;
  }

  changeState(field, key, index) {
    const sheet = this;
    let attribute = sheet[field][key];
    attribute.fill = this.createArray(attribute.fill, attribute.startValue, index);
    // for (let i = 0; i < attribute.fill.length; i++) {
    //   if (i < attribute.startValue)
    //     attribute.fill[i] = true;
    //   else if (i === index) {
    //     attribute.fill[i] = !attribute.fill[i];
    //   }
    //   else {
    //     attribute.fill[i] = index >= i ? true : false;
    //   }
    // }

    attribute.value = attribute.fill.reduce((total, i) => total + (i === true ? 1 : 0));
    this.updateState(sheet);
  }

  render() {
    return (
      <SheetContext.Provider value={this.state}>
        <Sheet />
      </SheetContext.Provider>
    );
  }
}

export default App;
