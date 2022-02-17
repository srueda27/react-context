import React from "react";

//create a default value inside the context
//Use that specific name
const Context = React.createContext('english');

export class LanguageStore extends React.Component {
  state = { language: 'english' }

  onLanguageChange = language => {
    this.setState({ language })
  }

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;