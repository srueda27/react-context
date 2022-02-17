import React from "react";
import Context from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div>
        Select a language:
        <i
          onClick={() => this.context.onLanguageChange('english')}
          className="flag us"
        />
        <i
          onClick={() => this.context.onLanguageChange('español')}
          className="flag co"
        />
      </div>
    );
  }
}

export default LanguageSelector;