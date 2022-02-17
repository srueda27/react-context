import React from "react";

import ColorContext from "../contexts/ColorContext";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  renderText(language) {
    return language === 'english' ? 'Submit' : 'Enviar'
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        {/* This is the another way of getting the context info.
            This is necessary when there are 2+ Context.Providers parents*/}
        <LanguageContext.Consumer>
          {({ language }) => this.renderText(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

//Another way of linking the context is this. After the class declaration
//Button.contextType = LanguageContext;

export default Button;