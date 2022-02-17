import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  
  render() {
    //Once the context is linked we can access it like this.context
    const text = this.context.language === 'english' ? 'Name' : 'Nombre';

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