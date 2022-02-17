import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  
  render() {
    const text = this.context === 'english' ? 'Name' : 'Nombre';

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}
//The way to access the info passed from the Context.Provider paren component
Field.contextType = LanguageContext;

export default Field;